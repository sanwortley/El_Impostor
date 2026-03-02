
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
    },
    pingInterval: 10000,
    pingTimeout: 5000,
    connectTimeout: 20000,
    transports: ['websocket', 'polling']
});

interface Player {
    id: string;
    name: string;
    socketId: string;
    isHost: boolean;
    role?: 'impostor' | 'normal' | 'victim' | 'prankster';
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
const disconnectTimers = new Map<string, NodeJS.Timeout>(); // playerId -> Timeout

function formatRoom(room: Room) {
    return {
        ...room,
        currentVotes: room.votes
    };
}

io.on('connection', (socket) => {
    // Helper to find a room by a player's socketId
    const findRoomBySocketId = (socketId: string) => {
        for (const [code, room] of rooms.entries()) {
            const player = room.players.find(p => p.socketId === socketId);
            if (player) return { code, room, player };
        }
        return null;
    };

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
            // Cancel any pending disconnect timer for this player ID
            if (disconnectTimers.has(player.id)) {
                clearTimeout(disconnectTimers.get(player.id)!);
                disconnectTimers.delete(player.id);
            }

            const existingIndex = room.players.findIndex(p => p.id === player.id);
            if (existingIndex !== -1) {
                // Reconnecting existing player
                room.players[existingIndex].socketId = socket.id;
                room.players[existingIndex].name = player.name;
            } else {
                // New player joining
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

            // Critical: Check if this is a Prank Round (Modo Joda)
            const isPrankRound = playersWithRoles.some((p: any) => p.role === 'victim');

            room.players = room.players.map(p => {
                const roleData = playersWithRoles.find((pr: any) => pr.id === p.id || pr.name === p.name);

                let finalRole = roleData?.role || (isPrankRound ? 'prankster' : 'normal');

                // Extra safety: If it's a prank round, there can't be "impostors", only "pranksters" and ONE "victim"
                if (isPrankRound && finalRole === 'impostor') {
                    finalRole = 'prankster';
                }

                return {
                    ...p,
                    role: finalRole as any,
                    relation: roleData?.relation,
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
            io.to(code).emit('room_closed');
            rooms.delete(code);
        } else {
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

    socket.on('update_settings', ({ code, settings }) => {
        const room = rooms.get(code);
        if (room) {
            room.settings = settings;
            io.to(code).emit('room_updated', formatRoom(room));
        }
    });

    socket.on('cast_vote', ({ code, targetId, voterId }) => {
        const room = rooms.get(code);
        if (room) {
            const voter = room.players.find(p => p.id === voterId);
            if (voter && !voter.isEliminated) {
                room.votes[voter.id] = targetId;
                const alivePlayers = room.players.filter(p => !p.isEliminated);
                io.to(code).emit('room_updated', formatRoom(room));
                if (Object.keys(room.votes).length >= alivePlayers.length) {
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
        room.lastVoteResults = { votes: voteHistory, tie };

        if (!tie) {
            const eliminatedId = candidates[0];
            const eliminatedPlayer = room.players.find(p => p.id === eliminatedId);
            if (eliminatedPlayer) {
                eliminatedPlayer.isEliminated = true;
                room.lastVoteResults.eliminatedPlayerName = eliminatedPlayer.name;
                room.lastVoteResults.isImpostor = eliminatedPlayer.role === 'impostor';

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
        const result = findRoomBySocketId(socket.id);
        if (result) {
            const { room, player, code } = result;
            if (disconnectTimers.has(player.id)) {
                clearTimeout(disconnectTimers.get(player.id)!);
            }

            const timer = setTimeout(() => {
                disconnectTimers.delete(player.id);
                const currentRoom = rooms.get(code);
                if (currentRoom && player.socketId === socket.id) {
                    const idx = currentRoom.players.findIndex(p => p.id === player.id);
                    if (idx !== -1) {
                        const removedPlayer = currentRoom.players.splice(idx, 1)[0];
                        if (currentRoom.players.length === 0) {
                            rooms.delete(code);
                        } else if (removedPlayer.isHost) {
                            currentRoom.players[0].isHost = true;
                        }
                        io.to(code).emit('room_updated', formatRoom(currentRoom));
                    }
                }
            }, 120000); // 2 minute grace period
            disconnectTimers.set(player.id, timer);
        }
    });
});

app.get('/{*path}', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
