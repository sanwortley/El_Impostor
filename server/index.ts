
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// Serve frontend in production
const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

interface Player {
    id: string;
    name: string;
    socketId: string;
    isHost: boolean;
    role?: 'impostor' | 'normal';
    isEliminated?: boolean;
}

interface Room {
    code: string;
    players: Player[];
    settings: any;
    phase: string;
    word?: string;
    votes: Record<string, string>; // voterId -> targetId
    winner?: 'impostors' | 'normals' | null;
    lastVoteResults?: {
        votes: Array<{ voterName: string, targetName: string }>;
        eliminatedPlayerName?: string;
        isImpostor?: boolean;
        tie?: boolean;
    } | null;
}

const rooms = new Map<string, Room>();
// Grace period timers: socketId -> NodeJS.Timeout
const disconnectTimers = new Map<string, NodeJS.Timeout>();

io.on('connection', (socket) => {
    socket.on('create_room', (data) => {
        const code = Math.random().toString(36).substring(2, 7).toUpperCase();
        const room: Room = {
            code,
            players: [{ ...data.player, socketId: socket.id, isHost: true }],
            settings: data.settings,
            phase: 'lobby',
            votes: {},
            lastVoteResults: null
        };
        rooms.set(code, room);
        socket.join(code);
        socket.emit('room_created', room);
    });

    socket.on('join_room', ({ code, player }) => {
        const room = rooms.get(code);
        if (room) {
            // Find by ID or Name (for extra safety if ID fails)
            const existingIndex = room.players.findIndex(p => p.id === player.id || p.name === player.name);
            if (existingIndex !== -1) {
                const oldSocketId = room.players[existingIndex].socketId;
                // Cancel pending disconnect timer for this player (reconnection!)
                if (disconnectTimers.has(oldSocketId)) {
                    clearTimeout(disconnectTimers.get(oldSocketId)!);
                    disconnectTimers.delete(oldSocketId);
                }
                room.players[existingIndex].socketId = socket.id;
                // Update ID if it was matched by name
                if (room.players[existingIndex].name === player.name) {
                    room.players[existingIndex].id = player.id;
                }
            } else {
                const newPlayer = { ...player, socketId: socket.id, isHost: false };
                room.players.push(newPlayer);
            }
            socket.join(code);
            io.to(code).emit('room_updated', formatRoom(room));
        } else {
            socket.emit('error', 'Room not found');
        }
    });

    socket.on('start_game', ({ code, word, playersWithRoles, settings }) => {
        const room = rooms.get(code);
        if (room) {
            room.phase = 'reveal';
            room.players = room.players.map(p => {
                const roleData = playersWithRoles.find((pr: any) => pr.id === p.id || pr.name === p.name);
                return {
                    ...p,
                    role: roleData?.role || 'normal',
                    isEliminated: false
                };
            });
            room.word = word;
            room.settings = settings;
            room.votes = {};
            room.winner = null;
            room.lastVoteResults = null;
            io.to(code).emit('game_started', formatRoom(room));
        }
    });

    socket.on('leave_room', ({ code }) => {
        const room = rooms.get(code);
        if (!room) return;
        const leavingPlayer = room.players.find(p => p.socketId === socket.id);
        if (!leavingPlayer) return;

        if (leavingPlayer.isHost) {
            // Host leaving → close the room for everyone
            io.to(code).emit('room_closed');
            rooms.delete(code);
        } else {
            // Non-host leaving → just remove them
            room.players = room.players.filter(p => p.socketId !== socket.id);
            if (room.players.length === 0) {
                rooms.delete(code);
            } else {
                io.to(code).emit('room_updated', formatRoom(room));
            }
        }
        socket.leave(code);
    });

    socket.on('next_phase', ({ code, phase }) => {
        const room = rooms.get(code);
        if (room) {
            room.phase = phase;
            if (phase === 'voting') {
                room.votes = {};
            }
            io.to(code).emit('room_updated', formatRoom(room));
        }
    });

    socket.on('cast_vote', ({ code, targetId, voterId }) => {
        const room = rooms.get(code);
        if (room) {
            // Try everything to find the player: ID, Socket, or Name
            const voter = room.players.find(p => p.id === voterId) ||
                room.players.find(p => p.socketId === socket.id);

            if (voter && !voter.isEliminated) {
                // Save vote
                room.votes[voter.id] = targetId;

                const alivePlayers = room.players.filter(p => !p.isEliminated);
                const voteCount = Object.keys(room.votes).length;

                // Sync immediately so dots turn green
                io.to(code).emit('room_updated', formatRoom(room));

                // Auto-advance if everyone voted
                if (voteCount >= alivePlayers.length) {
                    calculateResults(room);
                }
            }
        }
    });

    socket.on('skip_voting', ({ code }) => {
        const room = rooms.get(code);
        if (room) {
            calculateResults(room);
        }
    });

    function formatRoom(room: Room) {
        return {
            ...room,
            currentVotes: room.votes
        };
    }

    function calculateResults(room: Room) {
        const voteTallies: Record<string, number> = {};
        const voteHistory: Array<{ voterName: string, targetName: string }> = [];

        Object.entries(room.votes).forEach(([voterId, targetId]) => {
            const voter = room.players.find(p => p.id === voterId);
            const target = room.players.find(p => p.id === targetId);

            if (voter && target) {
                voteHistory.push({ voterName: voter.name, targetName: target.name });
                voteTallies[targetId] = (voteTallies[targetId] || 0) + 1;
            }
        });

        let maxVotes = 0;
        let candidates: string[] = [];

        Object.entries(voteTallies).forEach(([id, count]) => {
            if (count > maxVotes) {
                maxVotes = count;
                candidates = [id];
            } else if (count === maxVotes) {
                candidates.push(id);
            }
        });

        const tie = candidates.length !== 1 || maxVotes === 0;
        let eliminatedId = tie ? null : candidates[0];

        room.lastVoteResults = {
            votes: voteHistory,
            tie
        };

        if (!tie && eliminatedId) {
            const eliminatedPlayer = room.players.find(p => p.id === eliminatedId);
            if (eliminatedPlayer) {
                eliminatedPlayer.isEliminated = true;
                room.lastVoteResults.eliminatedPlayerName = eliminatedPlayer.name;
                room.lastVoteResults.isImpostor = eliminatedPlayer.role === 'impostor';

                // Win conditions
                const impostorsAlive = room.players.filter(p => p.role === 'impostor' && !p.isEliminated);
                const normalsAlive = room.players.filter(p => p.role === 'normal' && !p.isEliminated);

                if (impostorsAlive.length === 0) {
                    room.winner = 'normals';
                    room.phase = 'summary';
                } else if (impostorsAlive.length >= normalsAlive.length) {
                    room.winner = 'impostors';
                    room.phase = 'summary';
                } else {
                    room.phase = 'playing';
                }
            }
        } else {
            room.phase = 'playing';
        }

        io.to(room.code).emit('room_updated', formatRoom(room));
    }

    socket.on('disconnect', () => {
        rooms.forEach((room, code) => {
            const player = room.players.find(p => p.socketId === socket.id);
            if (player) {
                // Always apply a grace period regardless of phase.
                // On iPhone, moving to background can cut the WebSocket and take
                // well over 30 seconds to restore. 120s gives enough room.
                if (disconnectTimers.has(socket.id)) {
                    clearTimeout(disconnectTimers.get(socket.id)!);
                }
                const timer = setTimeout(() => {
                    disconnectTimers.delete(socket.id);
                    const currentRoom = rooms.get(code);
                    if (!currentRoom) return;
                    // Only remove if still using the old socketId (hasn't reconnected)
                    const stillDisconnected = currentRoom.players.find(p => p.socketId === socket.id);
                    if (stillDisconnected) {
                        const idx = currentRoom.players.indexOf(stillDisconnected);
                        currentRoom.players.splice(idx, 1);
                        if (currentRoom.players.length === 0) {
                            rooms.delete(code);
                        } else if (stillDisconnected.isHost) {
                            currentRoom.players[0].isHost = true;
                        }
                        io.to(code).emit('room_updated', formatRoom(currentRoom));
                    }
                }, 300000); // 5 minute grace period — covers iPhone backgrounding
                disconnectTimers.set(socket.id, timer);
            }
        });
    });
});

// Catch-all: serve frontend for client-side routing
app.get('/{*path}', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
