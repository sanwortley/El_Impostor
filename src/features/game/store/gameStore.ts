import { create } from 'zustand';
import { io, Socket } from 'socket.io-client';
import type { GameState, GameSettings, Player, GamePhase, Category, GameMode } from '../../../shared/types/game';
import { assignRoles, assignVictim } from '../domain/assignImpostors';
import { CATEGORIES } from '../../../shared/data/categories';

// In production, connect to same host. In dev, connect to localhost:3001
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || (import.meta.env.PROD ? window.location.origin : 'http://localhost:3001');


interface GameStore extends GameState {
    socket: Socket | null;
    localPlayer: Player | null;
    gameMode: GameMode | null;
    setMode: (mode: GameMode) => void;
    connect: (name: string) => void;
    createRoom: () => void;
    joinRoom: (code: string) => void;
    castVote: (targetId: string) => void;
    skipVoting: () => void;
    setSettings: (settings: Partial<GameSettings>) => void;
    toggleCategory: (category: Category) => void;
    addPlayer: (name: string) => void; // For local mode
    removePlayer: (id: string) => void; // For local mode
    startGame: () => void;
    nextReveal: () => void;
    finishGame: () => void;
    resetGame: () => void;
    leaveRoom: () => void;
    setPhase: (phase: GamePhase) => void;
    tickTimer: () => void;
    speakingPlayers: Record<string, boolean>;
    setSpeakingPlayers: (speaking: Record<string, boolean>) => void;
}

const DEFAULT_SETTINGS: GameSettings = {
    selectedCategories: [],
    chosenCategory: null,
    secretWord: '',
    playerCount: 0,
    impostorCount: 1,
    showHint: false,
    showCategory: true,
    debateTime: 60,
    votingTime: 30,
    anonymousVoting: false,
    impostorsKnowEachOther: true,
    oledMode: false,
};

export const useGameStore = create<GameStore>((set, get) => ({
    socket: null,
    localPlayer: null,
    gameMode: null,
    roomCode: null,
    settings: DEFAULT_SETTINGS,
    players: [],
    currentRevealIndex: 0,
    phase: 'mode_select',
    winner: null,
    lastVoteResults: null,
    currentVotes: {},
    speakingPlayers: {},

    setSpeakingPlayers: (speaking) => set({ speakingPlayers: speaking }),

    setMode: (mode) => {
        if (mode === 'local') {
            const currentPlayers = get().players;
            set({
                gameMode: 'local',
                phase: 'setup',
                players: currentPlayers.length > 0 ? currentPlayers : [],
                settings: {
                    ...get().settings,
                    playerCount: currentPlayers.length
                }
            });
        } else {
            set({ gameMode: 'online', phase: 'joining' });
        }
    },

    connect: (name: string) => {
        // More robust connection options
        const socket = io(SOCKET_URL, {
            transports: ['websocket', 'polling'], // Prefer websocket, fallback to polling
            reconnection: true,
            reconnectionAttempts: Infinity,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
            timeout: 20000,
        });

        // Persistent player ID
        let playerId = localStorage.getItem('impostor_player_id');
        if (!playerId) {
            playerId = Math.random().toString(32).substring(2, 10);
            localStorage.setItem('impostor_player_id', playerId);
        }

        const player: Player = {
            id: playerId,
            name,
            role: 'normal'
        };

        socket.on('connect', () => {
            set((state) => ({
                localPlayer: state.localPlayer
                    ? { ...state.localPlayer, socketId: socket.id }
                    : { ...player, socketId: socket.id }
            }));

            // Auto-rejoin room on reconnect or initial connect
            const { roomCode, localPlayer } = get();
            if (roomCode && localPlayer) {
                socket.emit('join_room', {
                    code: roomCode,
                    player: { ...localPlayer, socketId: socket.id }
                });
            }
        });

        socket.on('disconnect', (reason) => {
            console.log('Socket disconnected:', reason);
            // If it was a manual disconnect, don't auto-reconnect
            if (reason === "io client disconnect") return;

            // For other reasons, the socket will try to reconnect automatically
        });

        socket.on('connect_error', (error) => {
            console.error('Connection error:', error);
        });

        socket.on('room_created', (room) => {
            set((state) => ({
                roomCode: room.code,
                players: room.players,
                settings: room.settings,
                phase: 'setup',
                localPlayer: { ...state.localPlayer!, isHost: true }
            }));
        });

        socket.on('room_updated', (room) => {
            const playerList = room.players || [];
            const updatedSettings = {
                ...room.settings,
                impostorCount: Math.min(room.settings.impostorCount || 1, playerList.length || 1)
            };

            set({
                roomCode: room.code,
                players: playerList,
                settings: updatedSettings,
                turnOrder: room.turnOrder,
                lastVoteResults: room.lastVoteResults,
                currentVotes: room.currentVotes || {},
                winner: room.winner,
                gameMode: 'online'
            });
            get().setPhase((room.phase === 'lobby' ? 'setup' : room.phase) as GamePhase);

            // Update local player state (role, elimination, etc)
            const updatedLocal = playerList.find((p: any) => p.id === get().localPlayer?.id) ||
                playerList.find((p: any) => p.name === get().localPlayer?.name);

            if (updatedLocal) {
                set({ localPlayer: updatedLocal });
            }
        });

        socket.on('game_started', (room) => {
            set({
                roomCode: room.code,
                players: room.players,
                settings: room.settings,
                starterPlayerId: room.starterPlayerId,
                turnOrder: room.turnOrder,
                lastVoteResults: null,
                currentVotes: {},
                gameMode: 'online'
            });
            get().setPhase('reveal');
        });

        socket.on('phase_updated', (phase) => {
            get().setPhase(phase as GamePhase);
        });

        // Host closed the room — reset everyone back to the start
        socket.on('room_closed', () => {
            socket.disconnect();
            set({
                socket: null,
                localPlayer: null,
                gameMode: null,
                roomCode: null,
                players: [],
                phase: 'mode_select',
                settings: DEFAULT_SETTINGS,
                winner: null,
                lastVoteResults: null,
                currentVotes: {}
            });
        });

        set({ socket, localPlayer: player });
    },

    createRoom: () => {
        const { socket, localPlayer, settings } = get();
        if (socket && localPlayer) {
            socket.emit('create_room', { player: localPlayer, settings });
        }
    },

    joinRoom: (code) => {
        const { socket, localPlayer } = get();
        if (socket && localPlayer) {
            socket.emit('join_room', { code: code.toUpperCase(), player: localPlayer });
        }
    },

    castVote: (targetId) => {
        const { socket, roomCode, localPlayer, gameMode } = get();
        if (gameMode === 'online' && socket && roomCode && localPlayer && !localPlayer.isEliminated) {
            socket.emit('cast_vote', { code: roomCode, targetId, voterId: localPlayer.id });
        }
    },

    skipVoting: () => {
        const { socket, roomCode, localPlayer, gameMode } = get();
        if (gameMode === 'online' && socket && roomCode && localPlayer?.isHost) {
            socket.emit('skip_voting', { code: roomCode });
        }
    },

    setSettings: (newSettings) => {
        const { socket, roomCode, settings, gameMode } = get();
        const updatedSettings = { ...settings, ...newSettings };
        set({ settings: updatedSettings });

        if (gameMode === 'online' && socket && roomCode) {
            socket.emit('update_settings', { code: roomCode, settings: updatedSettings });
        }
    },

    toggleCategory: (category) => {
        const { socket, roomCode, settings, gameMode } = get();
        const isSelected = settings.selectedCategories.some(c => c.id === category.id);
        const newSelected = isSelected
            ? settings.selectedCategories.filter(c => c.id !== category.id)
            : [...settings.selectedCategories, category];

        const updatedSettings = { ...settings, selectedCategories: newSelected };
        set({ settings: updatedSettings });

        if (gameMode === 'online' && socket && roomCode) {
            socket.emit('update_settings', { code: roomCode, settings: updatedSettings });
        }
    },

    addPlayer: (name) => set((state) => {
        if (state.players.length >= 30) return state;
        const newPlayers: Player[] = [...state.players, { id: Math.random().toString(), name, role: 'normal' }];
        return {
            players: newPlayers,
            settings: { ...state.settings, playerCount: newPlayers.length }
        };
    }),

    removePlayer: (id) => set((state) => {
        const newPlayers = state.players.filter(p => p.id !== id);
        return {
            players: newPlayers,
            settings: {
                ...state.settings,
                playerCount: newPlayers.length,
                impostorCount: Math.min(state.settings.impostorCount, newPlayers.length)
            }
        };
    }),

    startGame: () => {
        const { socket, roomCode, players, settings, gameMode } = get();

        const sourceCategories = settings.selectedCategories.length > 0
            ? settings.selectedCategories
            : CATEGORIES;

        const randomCategory = sourceCategories[Math.floor(Math.random() * sourceCategories.length)];
        const items = randomCategory.items;
        const randomWord = items[Math.floor(Math.random() * items.length)];

        // Modes: Normal, Prank (10%), or Total Chaos (10%)
        const randomValue = Math.random();
        const triggerPrank = randomValue < 0.10;
        const triggerTotalChaos = !triggerPrank && randomValue < 0.20;

        let playersWithRoles = triggerPrank
            ? assignVictim(players)
            : assignRoles(players, settings.impostorCount);

        // If Total Chaos, assign each player a random word from the category and make everyone 'normal'
        if (triggerTotalChaos) {
            // Shuffle items to give different words to each player
            const shuffledItems = [...items].sort(() => Math.random() - 0.5);
            playersWithRoles = playersWithRoles.map((p, index) => {
                // Cycle through shuffled items if there are more players than words
                const uniqueWord = shuffledItems[index % shuffledItems.length];
                return { ...p, word: uniqueWord, role: 'normal' };
            });
        }

        const updatedSettings = {
            ...settings,
            chosenCategory: randomCategory,
            secretWord: randomWord,
            playerCount: players.length,
            isTotalChaos: triggerTotalChaos
        };

        if (gameMode === 'online' && socket && roomCode) {
            socket.emit('start_game', {
                code: roomCode,
                word: randomWord,
                playersWithRoles,
                settings: updatedSettings
            });
        } else {
            set({
                players: playersWithRoles,
                currentRevealIndex: 0,
                settings: updatedSettings,
                starterPlayerId: playersWithRoles[Math.floor(Math.random() * playersWithRoles.length)].id,
                turnOrder: Math.random() > 0.5 ? 'clockwise' : 'counter-clockwise'
            });
            get().setPhase('reveal');
        }
    },

    nextReveal: () => {
        const { currentRevealIndex, players, socket, roomCode, gameMode } = get();

        if (gameMode === 'online') {
            const isHost = get().localPlayer?.isHost;
            if (isHost && socket && roomCode) {
                // In online, the host decides when to move to 'playing'
                socket.emit('next_phase', { code: roomCode, phase: 'playing' });
            }
        } else {
            const nextIndex = currentRevealIndex + 1;
            if (nextIndex >= players.length) {
                get().setPhase('playing');
            } else {
                set({ currentRevealIndex: nextIndex });
            }
        }
    },

    finishGame: () => {
        const { socket, roomCode, gameMode } = get();
        if (gameMode === 'online') {
            if (socket && roomCode) {
                socket.emit('next_phase', { code: roomCode, phase: 'summary' });
            }
        } else {
            get().setPhase('summary');
        }
    },

    leaveRoom: () => {
        const { socket, roomCode } = get();
        if (socket && roomCode) {
            socket.emit('leave_room', { code: roomCode });
        }
        socket?.disconnect();
        set({
            socket: null,
            localPlayer: null,
            gameMode: null,
            roomCode: null,
            players: [],
            phase: 'mode_select',
            settings: DEFAULT_SETTINGS,
            winner: null,
            lastVoteResults: null,
            currentVotes: {}
        });
    },

    resetGame: () => {
        const { socket, roomCode, gameMode } = get();
        if (gameMode === 'online') {
            if (socket && roomCode) {
                socket.emit('next_phase', { code: roomCode, phase: 'setup' });
            }
        } else {
            set({
                currentRevealIndex: 0,
                players: get().players.map(p => ({ ...p, role: 'normal' }))
            });
            get().setPhase('setup');
        }
    },

    setPhase: (phase) => {
        set((state) => {
            const updates: Partial<GameState> = { phase };

            // Auto-init timer only in online mode
            if (state.gameMode === 'online') {
                if (phase === 'playing' && state.settings.debateTime > 0) {
                    updates.timeRemaining = state.settings.debateTime;
                } else if (phase === 'voting' && state.settings.votingTime > 0) {
                    updates.timeRemaining = state.settings.votingTime;
                } else {
                    updates.timeRemaining = undefined;
                }
            } else {
                updates.timeRemaining = undefined;
            }

            return updates;
        });
    },

    tickTimer: () => {
        const { phase, timeRemaining } = get();
        if (!timeRemaining || timeRemaining <= 0) return;

        const newTime = timeRemaining - 1;
        set({ timeRemaining: newTime });

        // Auto-action when timer hits zero
        if (newTime === 0) {
            const { gameMode, socket, roomCode, localPlayer } = get();
            if (phase === 'playing') {
                if (gameMode === 'online') {
                    if (localPlayer?.isHost && socket && roomCode) {
                        socket.emit('next_phase', { code: roomCode, phase: 'voting' });
                    }
                } else if (gameMode === 'local') {
                    get().setPhase('summary');
                }
            } else if (phase === 'voting') {
                if (gameMode === 'online') {
                    if (localPlayer?.isHost && socket && roomCode) {
                        // Force calculation of results on server
                        socket.emit('skip_voting', { code: roomCode });
                    }
                } else if (gameMode === 'local') {
                    get().setPhase('summary');
                }
            }
        }
    },
}));
