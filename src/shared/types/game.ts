export interface Category {
    id: string;
    name: string;
    description: string;
    items: string[];
    hint: string;
    itemHints?: Record<string, string>;
}

export interface Player {
    id: string;
    name: string;
    role: 'impostor' | 'normal' | 'victim' | 'prankster';
    isHost?: boolean;
    socketId?: string;
    isReady?: boolean;
    isEliminated?: boolean;
    votes?: number;
    relation?: string;
}

export interface GameSettings {
    selectedCategories: Category[];
    chosenCategory: Category | null;
    secretWord: string;
    playerCount: number;
    impostorCount: number;
    showHint: boolean;
    showCategory: boolean;
    debateTime: number; // in seconds, 0 for infinite
    anonymousVoting: boolean;
    impostorsKnowEachOther: boolean;
    oledMode: boolean;
}

export type GameMode = 'local' | 'online';
export type GamePhase = 'mode_select' | 'lobby' | 'joining' | 'setup' | 'reveal' | 'playing' | 'voting' | 'summary';

export interface GameState {
    gameMode: GameMode | null;
    roomCode: string | null;
    settings: GameSettings;
    players: Player[];
    currentRevealIndex: number;
    phase: GamePhase;
    timeRemaining?: number;
    winner?: 'impostors' | 'normals' | null;
    starterPlayerId?: string;
    turnOrder?: 'clockwise' | 'counter-clockwise';
    currentVotes?: Record<string, string>; // voterId -> targetId
    lastVoteResults?: {
        votes: Array<{ voterName: string, targetName: string }>;
        eliminatedPlayerName?: string;
        isImpostor?: boolean;
        tie?: boolean;
    } | null;
}
