import type { Player } from '../../../shared/types/game';
import { getRandomIndices } from '../../../shared/utils/random';

export const assignRoles = (players: Player[], impostorCount: number): Player[] => {
    const impostorIndices = getRandomIndices(players.length, impostorCount);
    return players.map((p, i) => ({
        ...p,
        role: impostorIndices.includes(i) ? 'impostor' : 'normal'
    }));
};

/** Prank mode: one random victim gets the real word (unaware), everyone else is a prankster. */
export const assignVictim = (players: Player[]): Player[] => {
    const victimIndex = Math.floor(Math.random() * players.length);
    return players.map((p, i) => ({
        ...p,
        role: i === victimIndex ? 'victim' : 'prankster'
    }));
};
