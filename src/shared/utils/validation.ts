export const validatePlayerName = (name: string): boolean => {
    return name.trim().length >= 1 && name.trim().length <= 20;
};

export const canStartGame = (playerCount: number, hasCategory: boolean): boolean => {
    return playerCount >= 3 && hasCategory;
};
