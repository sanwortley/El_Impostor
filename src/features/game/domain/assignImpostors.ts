import type { Player } from '../../../shared/types/game';
import { getRandomIndices } from '../../../shared/utils/random';

export const assignRoles = (players: Player[], impostorCount: number): Player[] => {
    const impostorIndices = getRandomIndices(players.length, impostorCount);
    return players.map((p, i) => ({
        ...p,
        role: impostorIndices.includes(i) ? 'impostor' : 'normal'
    }));
};
