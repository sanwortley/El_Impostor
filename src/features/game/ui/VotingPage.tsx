
import React, { useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { Button } from '../../../shared/ui/Button';
import { Card } from '../../../shared/ui/Card';
import { User, ShieldAlert, CheckCircle2, FastForward, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Player } from '../../../shared/types/game';

export const VotingPage: React.FC = () => {
    const { players, localPlayer, castVote, skipVoting, currentVotes } = useGameStore();
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [hasVoted, setHasVoted] = useState(false);

    if (localPlayer?.isEliminated) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-6"
            >
                <div className="w-24 h-24 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center">
                    <ShieldAlert size={48} />
                </div>
                <div>
                    <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-2">FUISTE ELIMINADO</h2>
                    <p className="text-white/40 font-medium">No podés votar, pero quedate a ver quién gana.</p>
                </div>
                <div className="flex flex-col items-center gap-2 mt-4">
                    <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                    <p className="text-xs text-primary font-bold uppercase tracking-[0.2em]">Esperando que termine la partida</p>
                </div>
            </motion.div>
        );
    }

    const handleVote = () => {
        if (selectedId) {
            castVote(selectedId);
            setHasVoted(true);
        }
    };

    const alivePlayers = players.filter(p => !p.isEliminated);
    const isMe = (p: Player) => p.id === localPlayer?.id || p.name === localPlayer?.name;
    const votablePlayers = alivePlayers.filter(p => !isMe(p));

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6 py-8"
        >
            <header className="text-center">
                <h1 className="text-4xl font-black text-primary italic uppercase tracking-tighter">
                    VOTACIÓN
                </h1>
                <p className="text-white/40 text-sm uppercase font-bold tracking-widest mt-1">
                    ¿Quién es el impostor?
                </p>
            </header>

            {!hasVoted ? (
                <>
                    <div className="grid grid-cols-1 gap-3">
                        {votablePlayers.map((player: Player) => (
                            <button
                                key={player.id}
                                onClick={() => setSelectedId(player.id)}
                                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${selectedId === player.id
                                    ? 'bg-primary border-primary text-black'
                                    : 'bg-white/5 border-white/10 text-white'
                                    }`}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedId === player.id ? 'bg-black/10' : 'bg-primary/20'
                                    }`}>
                                    <User size={20} className={selectedId === player.id ? 'text-black' : 'text-primary'} />
                                </div>
                                <span className="text-xl font-bold uppercase italic flex-1 text-left">{player.name}</span>
                                {selectedId === player.id && <CheckCircle2 size={24} />}
                            </button>
                        ))}
                    </div>

                    <Button
                        fullWidth
                        onClick={handleVote}
                        disabled={!selectedId}
                        className="h-20 text-xl mt-4"
                    >
                        CONFIRMAR VOTO
                    </Button>
                </>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center py-6 text-center gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center animate-bounce">
                            <CheckCircle2 size={40} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">¡VOTO ENVIADO!</h2>
                            <p className="text-white/40 mt-2 font-medium">Esperando a los demás...</p>
                        </div>
                    </div>

                    <Card className="w-full max-w-[320px] bg-white/5 border-white/10 p-6 rounded-3xl flex flex-col gap-5">
                        <div className="flex items-center justify-center gap-2">
                            <Clock size={16} className="text-primary animate-pulse" />
                            <span className="text-xs font-black text-primary uppercase tracking-widest">ESTADO DE VOTOS</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            {alivePlayers.map((p) => (
                                <div key={p.id} className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
                                    <div className={`w-2 h-2 rounded-full ${currentVotes?.[p.id] ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-white/20'}`} />
                                    <span className={`text-[10px] font-bold truncate ${currentVotes?.[p.id] ? 'text-white' : 'text-white/30'}`}>
                                        {p.name}
                                    </span>
                                    {currentVotes?.[p.id] && <CheckCircle2 size={10} className="text-green-500" />}
                                </div>
                            ))}
                        </div>

                        {localPlayer?.isHost && (
                            <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
                                <p className="text-[10px] text-white/30 uppercase font-black tracking-tighter">CONTROLES DE HOST</p>
                                <Button
                                    variant="secondary"
                                    className="h-12 text-xs gap-2 border-primary/20 hover:bg-primary/10"
                                    onClick={skipVoting}
                                >
                                    <FastForward size={14} />
                                    CERRAR Y CONTAR VOTOS
                                </Button>
                            </div>
                        )}
                    </Card>
                </div>
            )}
        </motion.div>
    );
};
