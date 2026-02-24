export const calculateMaxImpostors = (playerCount: number): number => {
    return playerCount || 3;
};

export const isChaosMode = (impostorCount: number, playerCount: number): boolean => {
    return impostorCount === playerCount && playerCount > 0;
};
