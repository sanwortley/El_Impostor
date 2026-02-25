
import React, { useState } from 'react';
import { useGameStore } from '../../game/store/gameStore';
import { Card } from '../../../shared/ui/Card';
import { Button } from '../../../shared/ui/Button';
import { Users, Crown, Shield, UserPlus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PlayersEditor: React.FC = () => {
    const { players, localPlayer, gameMode, addPlayer, removePlayer } = useGameStore();
    const [newName, setNewName] = useState('');

    const handleAdd = () => {
        if (newName.trim()) {
            addPlayer(newName.trim());
            setNewName('');
        }
    };

    return (
        <Card className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <Users size={20} className="text-primary" />
                    {gameMode === 'local' ? 'Jugadores' : 'Jugadores Conectados'} ({players.length}/12)
                </h2>
            </div>

            {gameMode === 'local' && (
                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                        placeholder="Nombre del jugador..."
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-primary transition-all text-white font-bold text-base"
                        disabled={players.length >= 12}
                    />
                    <Button onClick={handleAdd} disabled={players.length >= 12 || !newName.trim()} fullWidth>
                        <UserPlus size={22} />
                        Agregar Jugador
                    </Button>
                </div>
            )}

            <div className="grid grid-cols-1 gap-2 mt-2">
                <AnimatePresence mode="popLayout">
                    {players.map((player) => (
                        <motion.div
                            key={player.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className={`flex items-center justify-between p-4 rounded-xl border transition-all ${gameMode === 'online' && player.socketId === localPlayer?.socketId
                                ? 'bg-primary/10 border-primary/20'
                                : 'bg-white/5 border-white/5'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <span className={`font-bold ${gameMode === 'online' && player.socketId === localPlayer?.socketId ? 'text-primary' : 'text-white'}`}>
                                    {player.name}
                                </span>
                                {gameMode === 'online' && player.isHost && (
                                    <Crown size={14} className="text-yellow-500 fill-yellow-500" />
                                )}
                                {gameMode === 'online' && player.socketId === localPlayer?.socketId && (
                                    <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold uppercase">Tú</span>
                                )}
                            </div>

                            <div className="flex items-center gap-2">
                                {gameMode === 'online' && player.isHost && (
                                    <Shield size={16} className="text-white/20" />
                                )}
                                {gameMode === 'local' && (
                                    <button
                                        onClick={() => removePlayer(player.id)}
                                        className="text-white/20 hover:text-red-500 transition-colors p-1"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {players.length < 3 && (
                <p className="text-xs text-red-400 mt-2">Mínimo 3 jugadores para empezar</p>
            )}
        </Card>
    );
};
