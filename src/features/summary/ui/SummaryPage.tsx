import React from 'react';
import { useGameStore } from '../../game/store/gameStore';
import { Button } from '../../../shared/ui/Button';
import { Card } from '../../../shared/ui/Card';
import { RefreshCcw, ShieldAlert, User } from 'lucide-react';
import { motion } from 'framer-motion';

export const SummaryPage: React.FC = () => {
    const { players, settings, resetGame, gameMode, winner } = useGameStore();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-8 py-8"
        >
            <header className="text-center">
                {gameMode === 'online' && winner && (
                    <div className={`mb-4 py-2 px-6 rounded-full inline-block font-black italic uppercase tracking-widest text-sm ${winner === 'normals' ? 'bg-green-500 text-black' : 'bg-red-500 text-white'
                        }`}>
                        {winner === 'normals' ? '¡LOS CIVILES GANAN!' : '¡EL IMPOSTOR GANA!'}
                    </div>
                )}
                <h1 className="text-5xl font-black text-primary italic uppercase tracking-tighter">
                    RESULTADOS
                </h1>
            </header>

            <div className="grid grid-cols-1 gap-3">
                {players.map((player) => (
                    <Card
                        key={player.id}
                        className={`flex items-center justify-between transition-all ${player.role === 'impostor' ? 'ring-2 ring-red-500 bg-red-500/10' : ''
                            }`}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${player.role === 'impostor' ? 'bg-red-500 text-white' : 'bg-primary text-black'
                                }`}>
                                {player.role === 'impostor' ? <ShieldAlert size={24} /> : <User size={24} />}
                            </div>
                            <span className="text-xl font-bold">{player.name}</span>
                        </div>

                        {player.role === 'impostor' && (
                            <span className="bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-tighter">
                                Impostor
                            </span>
                        )}
                    </Card>
                ))}
            </div>

            <div className="mt-4 p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
                <p className="text-white/60 mb-1">La palabra era:</p>
                <h3 className="text-4xl font-black text-primary uppercase mb-2">{settings.secretWord}</h3>
                <p className="text-white/40 text-xs uppercase font-bold tracking-widest">Categoría: {settings.chosenCategory?.name}</p>
            </div>

            <Button fullWidth onClick={resetGame} className="h-20 text-xl mt-4">
                <RefreshCcw size={24} />
                NUEVA PARTIDA
            </Button>

            <div className="h-20" />
        </motion.div>
    );
};
