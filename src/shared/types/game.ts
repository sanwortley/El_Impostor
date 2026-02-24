export interface Category {
    id: string;
    name: string;
    description: string;
    items: string[]; // List of specific words for this category
    hint: string;
}

export interface Player {
    id: string;
    name: string;
    role: 'impostor' | 'normal';
    isHost?: boolean;
    socketId?: string;
    isReady?: boolean;
    isEliminated?: boolean;
    votes?: number;
}

export interface GameSettings {
    selectedCategories: Category[];
    chosenCategory: Category | null;
    secretWord: string;
    playerCount: number;
    impostorCount: number;
    showHint: boolean;
    showCategory: boolean;
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
    winner?: 'impostors' | 'normals' | null;
    currentVotes?: Record<string, string>; // voterId -> targetId
    lastVoteResults?: {
        votes: Array<{ voterName: string, targetName: string }>;
        eliminatedPlayerName?: string;
        isImpostor?: boolean;
        tie?: boolean;
    } | null;
}
