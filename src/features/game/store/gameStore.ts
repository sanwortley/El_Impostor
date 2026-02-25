import { create } from 'zustand';
import { io, Socket } from 'socket.io-client';
import type { GameState, GameSettings, Player, GamePhase, Category } from '../../../shared/types/game';
import { assignRoles } from '../domain/assignImpostors';

// In production, connect to same host. In dev, connect to localhost:3001
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || (import.meta.env.PROD ? window.location.origin : 'http://localhost:3001');

type GameMode = 'local' | 'online';

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
    setPhase: (phase: GamePhase) => void;
}

const DEFAULT_SETTINGS: GameSettings = {
    selectedCategories: [],
    chosenCategory: null,
    secretWord: '',
    playerCount: 0,
    impostorCount: 1,
    showHint: false,
    showCategory: true,
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

    setMode: (mode) => {
        if (mode === 'local') {
            set({
                gameMode: 'local',
                phase: 'setup',
                players: [],
                settings: { ...DEFAULT_SETTINGS, playerCount: 0 }
            });
        } else {
            set({ gameMode: 'online', phase: 'joining' });
        }
    },

    connect: (name: string) => {
        const socket = io(SOCKET_URL);

        // Persistent player ID
        let playerId = localStorage.getItem('impostor_player_id');
        if (!playerId) {
            playerId = Math.random().toString(36).substring(7);
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

            // Auto-rejoin room on reconnect (handles mobile background/foreground)
            const { roomCode, localPlayer } = get();
            if (roomCode && localPlayer) {
                socket.emit('join_room', { code: roomCode, player: { ...localPlayer, socketId: socket.id } });
            }
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
            set({
                roomCode: room.code,
                players: room.players,
                settings: room.settings,
                phase: (room.phase === 'lobby' ? 'setup' : room.phase) as GamePhase,
                winner: room.winner,
                lastVoteResults: room.lastVoteResults,
                currentVotes: room.currentVotes || {}
            });

            // Update local player state (role, elimination, etc)
            const playerList = room.players || [];
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
                phase: 'reveal',
                currentRevealIndex: 0,
                winner: null,
                lastVoteResults: null,
                currentVotes: {}
            });
        });

        socket.on('phase_updated', (phase) => {
            set({ phase: phase as GamePhase });
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

        const randomCategory = settings.selectedCategories[Math.floor(Math.random() * settings.selectedCategories.length)];
        const items = randomCategory.items;
        const randomWord = items[Math.floor(Math.random() * items.length)];
        const playersWithRoles = assignRoles(players, settings.impostorCount);

        const updatedSettings = {
            ...settings,
            chosenCategory: randomCategory,
            secretWord: randomWord,
            playerCount: players.length
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
                phase: 'reveal',
                settings: updatedSettings
            });
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
                set({ phase: 'playing' });
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
            set({ phase: 'summary' });
        }
    },

    resetGame: () => {
        const { socket, roomCode, gameMode } = get();
        if (gameMode === 'online') {
            if (socket && roomCode) {
                socket.emit('next_phase', { code: roomCode, phase: 'setup' });
            }
        } else {
            set({
                phase: 'setup',
                currentRevealIndex: 0,
                players: get().players.map(p => ({ ...p, role: 'normal' }))
            });
        }
    },

    setPhase: (phase) => set({ phase }),
}));
