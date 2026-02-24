import { GamePhase } from '../../../shared/types/game';

export type GameAction =
    | { type: 'START_GAME' }
    | { type: 'NEXT_PLAYER' }
    | { type: 'RESET' };

export const getNextPhase = (currentPhase: GamePhase, action: GameAction): GamePhase => {
    switch (action.type) {
        case 'START_GAME':
            return 'reveal';
        case 'NEXT_PLAYER':
            return currentPhase === 'reveal' ? 'reveal' : currentPhase;
        case 'RESET':
            return 'setup';
        default:
            return currentPhase;
    }
};
