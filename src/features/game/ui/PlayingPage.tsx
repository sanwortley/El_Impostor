import React, { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';
import { Button } from '../../../shared/ui/Button';
import { Card } from '../../../shared/ui/Card';
import { Target, Flag, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import { haptics } from '../../../shared/utils/haptics';

export const PlayingPage: React.FC = () => {
    const { finishGame, gameMode, localPlayer, lastVoteResults, players, starterPlayerId, turnOrder, settings, timeRemaining, tickTimer } = useGameStore();

    useEffect(() => {
        const interval = setInterval(() => {
            tickTimer();
        }, 1000);
        return () => clearInterval(interval);
    }, [tickTimer]);


    useEffect(() => {
        if (timeRemaining && timeRemaining <= 10 && timeRemaining > 0) {
            haptics.tick();
        }
        if (timeRemaining === 0) {
            haptics.reveal(); // Final alarm sound
        }
    }, [timeRemaining]);




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
                    <p className="text-white/40 font-medium">Estás fuera de juego, pero podés seguir viendo.</p>
                </div>
                {gameMode === 'online' && (
                    <div className="flex flex-col items-center gap-2 mt-4">
                        <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                        <p className="text-xs text-primary font-bold uppercase tracking-[0.2em]">Modo Espectador</p>
                    </div>
                )}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 flex flex-col justify-center gap-6 py-8"
        >
            {gameMode === 'online' && lastVoteResults && (
                <Card className="bg-white/5 border-primary/20 overflow-hidden shadow-2xl">
                    <div className="bg-primary/10 border-b border-primary/20 px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-primary font-black uppercase text-[10px] tracking-[0.2em]">ÚLTIMA VOTACIÓN</span>
                        </div>
                        {lastVoteResults.tie ? (
                            <span className="bg-white/10 text-white/60 text-[9px] font-black uppercase px-2 py-1 rounded">Empate</span>
                        ) : (
                            <div className="flex items-center gap-1">
                                <span className="bg-red-500/20 text-red-400 text-[9px] font-black uppercase px-2 py-1 rounded">
                                    {lastVoteResults.eliminatedPlayerName} ELIMINADO
                                </span>
                                <span className={`text-[9px] font-black uppercase px-2 py-1 rounded ${lastVoteResults.isImpostor ? 'bg-primary text-black' : 'bg-white/20 text-white'}`}>
                                    {lastVoteResults.isImpostor ? 'ERA' : 'NO ERA'}
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="p-4 flex flex-col gap-3 max-h-[200px] overflow-y-auto custom-scrollbar">
                        {Array.from(new Set(lastVoteResults.votes.map(v => v.targetName))).map(targetName => {
                            const voters = lastVoteResults.votes.filter(v => v.targetName === targetName);
                            return (
                                <div key={targetName} className="flex flex-col gap-1 bg-white/[0.03] p-2 rounded-xl border border-white/5">
                                    <div className="flex items-center justify-between border-b border-white/5 pb-1 mb-1">
                                        <span className="text-primary font-black text-xs italic uppercase tracking-tighter">{targetName}</span>
                                        <span className="text-white/40 text-[10px] font-bold">{voters.length} {voters.length === 1 ? 'voto' : 'votos'}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-x-2 gap-y-1">
                                        {!settings.anonymousVoting ? (
                                            voters.map((v, i) => (
                                                <div key={i} className="flex items-center gap-1">
                                                    <div className="w-1 h-1 rounded-full bg-white/20" />
                                                    <span className="text-white/30 text-[9px] font-medium">{v.voterName}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <span className="text-white/10 text-[9px] italic">Votos ocultos</span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Card>
            )}

            <Card className="flex flex-col items-center justify-center p-8 gap-8 text-center min-h-[350px] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-20" />
                    <Target size={48} className="relative z-10" />
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-black text-primary italic uppercase tracking-tighter">
                        DEBATE
                    </h1>
                    {gameMode === 'online' && settings.debateTime > 0 && timeRemaining !== undefined && (
                        <motion.div
                            animate={timeRemaining <= 10 ? { scale: [1, 1.1, 1], color: ['#FFFFFF', '#facc15', '#FFFFFF'] } : {}}
                            transition={{ repeat: timeRemaining <= 10 ? Infinity : 0, duration: 1 }}
                            className={`text-2xl font-black mt-2 font-mono ${timeRemaining <= 10 ? 'text-primary' : 'text-white/40'}`}
                        >
                            {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
                        </motion.div>
                    )}
                    <p className="text-white/40 text-sm uppercase font-bold tracking-widest mt-1">
                        Traten de encontrar al impostor
                    </p>
                </div>

                {/* Who Starts Section - Enhanced Animation */}
                {starterPlayerId && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                        className="w-full bg-primary/5 border border-primary/10 rounded-3xl p-5 flex flex-col items-center gap-3 relative overflow-hidden"
                    >
                        <div className="flex flex-col items-center gap-1 relative z-10 w-full">
                            <span className="text-[10px] text-primary/60 font-black uppercase tracking-[0.3em]">ARRANCA</span>
                            <span className="text-3xl font-black text-white uppercase italic tracking-tighter">
                                {players.find(p => p.id === starterPlayerId)?.name || 'Aleatorio'}
                            </span>
                        </div>

                        {turnOrder && (
                            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 relative z-10">
                                <motion.div
                                    animate={{ rotate: turnOrder === 'clockwise' ? 360 : -360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="text-primary"
                                >
                                    <Target size={16} />
                                </motion.div>
                                <span className="text-[11px] font-extrabold text-white/70 uppercase tracking-widest text-center">
                                    SENTIDO {turnOrder === 'clockwise' ? 'HORARIO' : 'ANTI-HORARIO'}
                                </span>
                            </div>
                        )}

                        {/* Background subtle decoration */}
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-30" />
                    </motion.div>
                )}

                {/* Impostor Teammates visibility during debate */}
                {localPlayer?.role === 'impostor' && settings.impostorsKnowEachOther && settings.impostorCount > 1 && (
                    <div className="w-full flex flex-col items-center gap-2 px-4">
                        <span className="text-[9px] text-white/20 font-black uppercase tracking-widest">Tus Aliados</span>
                        <div className="flex flex-wrap justify-center gap-2">
                            {players
                                .filter(p => p.role === 'impostor' && p.id !== localPlayer.id)
                                .map(p => (
                                    <span key={p.id} className="bg-red-500/5 text-red-500/40 border border-red-500/10 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase italic">
                                        {p.name}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                )}

                <div className="flex flex-col w-full gap-3 mt-4">
                    {gameMode === 'online' && localPlayer?.isHost && (
                        <Button
                            fullWidth
                            onClick={() => useGameStore.getState().socket?.emit('next_phase', {
                                code: useGameStore.getState().roomCode,
                                phase: 'voting'
                            })}
                            className="h-16 text-lg font-black italic shadow-primary/20"
                        >
                            LLAMAR A VOTACIÓN
                        </Button>
                    )}

                    {gameMode === 'online' && !localPlayer?.isHost ? (
                        <div className="flex flex-col items-center gap-2 py-4">
                            <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                            <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
                                Esperando al host...
                            </p>
                        </div>
                    ) : (
                        <Button
                            fullWidth
                            variant="danger"
                            onClick={finishGame}
                            className="h-14 text-sm font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
                        >
                            <Flag size={16} />
                            TERMINAR PARTIDA
                        </Button>
                    )}
                </div>
            </Card>
        </motion.div>
    );
};
