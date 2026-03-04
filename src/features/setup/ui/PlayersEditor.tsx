import React, { useState } from 'react';
import { useGameStore } from '../../game/store/gameStore';
import { Card } from '../../../shared/ui/Card';
import { Button } from '../../../shared/ui/Button';
import { Users, Crown, Shield, UserPlus, Trash2, WifiOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PlayersEditor: React.FC = () => {
    const { players, localPlayer, gameMode, addPlayer, removePlayer, socket, roomCode } = useGameStore();
    const [newName, setNewName] = useState('');

    const isHost = localPlayer?.isHost;

    const handleAdd = () => {
        if (newName.trim()) {
            addPlayer(newName.trim());
            setNewName('');
        }
    };

    const handleKick = (playerId: string) => {
        if (gameMode === 'local') {
            removePlayer(playerId);
        } else if (isHost && socket && roomCode) {
            socket.emit('kick_player', { code: roomCode, playerId });
        }
    };

    return (
        <Card className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <Users size={20} className="text-primary" />
                    {gameMode === 'local' ? 'Jugadores' : 'Jugadores Conectados'} ({players.length}/30)
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
                        disabled={players.length >= 30}
                    />
                    <Button onClick={handleAdd} disabled={players.length >= 30 || !newName.trim()} fullWidth>
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
                            className={`flex items-center justify-between p-4 rounded-xl border transition-all ${!player.isOnline && gameMode === 'online' ? 'opacity-50 grayscale' : ''
                                } ${gameMode === 'online' && player.id === localPlayer?.id
                                    ? 'bg-primary/10 border-primary/20'
                                    : 'bg-white/5 border-white/5'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <span className={`font-bold ${gameMode === 'online' && player.id === localPlayer?.id ? 'text-primary' : 'text-white'}`}>
                                            {player.name}
                                        </span>
                                        {gameMode === 'online' && player.isHost && (
                                            <Crown size={14} className="text-yellow-500 fill-yellow-500" />
                                        )}
                                        {!player.isOnline && gameMode === 'online' && (
                                            <div className="flex items-center gap-1 text-[8px] bg-red-500/20 text-red-500 px-2 py-0.5 rounded-full font-black uppercase tracking-widest">
                                                <WifiOff size={8} />
                                                Offline
                                            </div>
                                        )}
                                    </div>
                                    {gameMode === 'online' && player.id === localPlayer?.id && (
                                        <span className="text-[9px] text-primary/60 font-black uppercase tracking-widest">Tú</span>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                {isHost && player.id !== localPlayer?.id && (
                                    <button
                                        onClick={() => handleKick(player.id)}
                                        className="text-white/10 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-500/10"
                                        title="Eliminar jugador"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                )}
                                {gameMode === 'online' && player.isHost && player.id === localPlayer?.id && (
                                    <Shield size={16} className="text-white/20" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {(gameMode === 'local' ? players.length < 3 : players.length < 3) && (
                <p className="text-[10px] text-red-400/60 font-black uppercase tracking-widest text-center mt-2">
                    Mínimo 3 agentes para iniciar misión
                </p>
            )}
        </Card>
    );
};
