import type { Player } from '../../../shared/types/game';
import { getRandomIndices } from '../../../shared/utils/random';

export const assignRoles = (players: Player[], impostorCount: number): Player[] => {
    const impostorIndices = getRandomIndices(players.length, impostorCount);
    return players.map((p, i) => ({
        ...p,
        role: impostorIndices.includes(i) ? 'impostor' : 'normal'
    }));
};

/** Prank mode: one random victim becomes the 'impostor' (unaware they're the target), 
 * everyone else is a prankster with a funny identity related to the victim. */
export const assignVictim = (players: Player[]): Player[] => {
    const victimIndex = Math.floor(Math.random() * players.length);
    const victim = players[victimIndex];

    const relations = ['LA MAMÁ', 'LA NOVIA', 'LA PRIMA'];

    // Shuffle relations to assign unique ones
    const shuffledRelations = [...relations].sort(() => Math.random() - 0.5);

    return players.map((p, i) => {
        if (i === victimIndex) {
            return { ...p, role: 'victim' };
        }

        // Assign a funny relation to pranksters
        const relation = shuffledRelations[i % shuffledRelations.length];
        return {
            ...p,
            role: 'prankster',
            relation: `${relation} DE ${victim.name.toUpperCase()}`
        };
    });
};
