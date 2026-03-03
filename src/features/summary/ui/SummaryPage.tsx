import React from 'react';
import { useGameStore } from '../../game/store/gameStore';
import { Button } from '../../../shared/ui/Button';
import { RefreshCcw, ShieldAlert, User, Laugh, Home, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const SummaryPage: React.FC = () => {
    const { players, settings, startGame, gameMode, winner, setPhase, localPlayer } = useGameStore();

    // Freeze the secret word when the summary mounts to avoid flashing the NEW word 
    // when startGame is clicked (since the secret word updates immediately in the store)
    const displayedSecretWord = React.useMemo(() => settings.secretWord, []);
    const displayedCategoryName = React.useMemo(() => settings.chosenCategory?.name, []);

    const isOnline = gameMode === 'online';
    const canRestart = !isOnline || localPlayer?.isHost === true;

    // Prank round: triggered automatically when any player has role 'victim'
    const isPrankRound = players.some(p => p.role === 'victim');

    // Winner Color Logic
    const isNormalWin = winner === 'normals';
    const accentColor = isNormalWin ? 'text-green-400' : 'text-red-500';
    const bgColor = isNormalWin ? 'bg-green-500/10' : 'bg-red-500/10';
    const borderColor = isNormalWin ? 'border-green-500/20' : 'border-red-500/20';

    // Prank mode summary
    if (isPrankRound) {
        const victim = players.find(p => p.role === 'victim');
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-6 py-8"
            >
                <header className="text-center space-y-2">
                    <p className="text-5xl animate-bounce">🎉</p>
                    <h1 className="text-4xl sm:text-6xl font-black text-amber-400 italic uppercase tracking-tighter text-glow">
                        ¡BROMA REVELADA!
                    </h1>
                </header>

                <div className="glass rounded-[2.5rem] p-1 border-amber-500/30">
                    <div className="flex flex-col items-center gap-4 p-8 text-center bg-amber-500/5 rounded-[2.4rem]">
                        <Laugh size={60} className="text-amber-400" />
                        <div className="space-y-1">
                            <p className="text-white/40 uppercase font-black text-[10px] tracking-widest">EL OBJETIVO ERA</p>
                            <h2 className="text-5xl font-black text-white uppercase italic tracking-tighter">{victim?.name}</h2>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">
                            ¡Todos sabían la palabra menos <span className="text-amber-400 font-bold">{victim?.name}</span>! 😂
                        </p>
                    </div>
                </div>


                <div className="flex flex-col gap-3 mt-4">
                    {canRestart && (
                        <>
                            <Button fullWidth onClick={startGame} className="h-20 text-xl bg-amber-500 hover:bg-amber-400 text-black font-black italic tracking-tighter shadow-lg shadow-amber-500/20">
                                <RefreshCcw size={24} />
                                NUEVA MISIÓN
                            </Button>
                            <Button
                                fullWidth
                                variant="secondary"
                                onClick={() => useGameStore.getState().socket?.emit('next_phase', { code: useGameStore.getState().roomCode, phase: 'lobby' })}
                                className="h-14 text-xs font-black uppercase tracking-widest border-amber-500/20 text-amber-500/60"
                            >
                                <Users size={18} />
                                VOLVER AL LOBBY
                            </Button>
                        </>
                    )}
                    <Button fullWidth variant="secondary" onClick={() => setPhase('mode_select')} className="h-14 text-xs font-black uppercase tracking-widest opacity-20 hover:opacity-100 mt-4">
                        <Home size={18} />
                        SALIR AL INICIO
                    </Button>
                </div>

                <div className="h-20" />
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-8 py-8"
        >
            <header className="text-center space-y-4">
                {winner && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={`py-2 px-8 rounded-full inline-block font-black italic uppercase tracking-[0.2em] text-[10px] ${bgColor} ${accentColor} border ${borderColor} text-glow`}
                    >
                        {isNormalWin ? '¡MISIÓN CUMPLIDA - CIVILES GANAN!' : '¡INFILTRACIÓN EXITOSA - IMPOSTOR GANA!'}
                    </motion.div>
                )}
                <h1 className="text-4xl sm:text-6xl font-black text-white italic uppercase tracking-tighter italic">
                    {settings.isTotalChaos ? '¡MODO TOTAL CHAOS!' : 'RESULTADOS'}
                </h1>
            </header>

            <div className="grid grid-cols-1 gap-3">
                {players.map((player) => (
                    <motion.div
                        key={player.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`relative group flex items-center justify-between p-5 rounded-3xl glass transition-all ${player.role === 'impostor' ? 'border-red-500/30 bg-red-500/5' : ''
                            }`}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${player.role === 'impostor'
                                ? 'bg-red-500 text-white shadow-lg shadow-red-500/20'
                                : 'bg-primary/20 text-primary'
                                }`}>
                                {player.role === 'impostor' ? <ShieldAlert size={24} /> : <User size={24} />}
                            </div>
                            <div className="flex flex-col">
                                <span className={`text-xl font-black italic uppercase tracking-tight ${player.role === 'impostor' ? 'text-red-400' : 'text-white/90'}`}>{player.name}</span>
                                <span className="text-[9px] font-black uppercase tracking-widest text-white/20">
                                    {settings.isTotalChaos ? 'SUJETO BAJO CAOS' : (player.role === 'impostor' ? 'AGENTE INFILTRADO' : 'PERSONAL CIVIL')}
                                </span>
                            </div>
                        </div>

                        {settings.isTotalChaos && player.word && (
                            <div className="bg-primary/10 border border-primary/20 text-primary text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-tighter italic">
                                {player.word}
                            </div>
                        )}

                        {player.role === 'impostor' && !settings.isTotalChaos && (
                            <div className="bg-red-500 text-white text-[9px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest italic animate-pulse">
                                IMPOSTOR
                            </div>
                        )}
                        {player.isEliminated && player.role !== 'impostor' && (
                            <span className="text-white/20 text-[9px] font-black uppercase tracking-widest italic">ELIMINADO</span>
                        )}
                    </motion.div>
                ))}
            </div>

            {!settings.isTotalChaos && (
                <div className="p-8 rounded-[2rem] glass text-center relative overflow-hidden border-primary/20">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <Target size={120} className="text-primary" />
                    </div>
                    <p className="text-white/40 uppercase font-black text-[10px] tracking-widest mb-1">La palabra era:</p>
                    <h3 className="text-3xl sm:text-5xl font-black text-primary uppercase mb-3 text-glow italic tracking-tighter">{displayedSecretWord}</h3>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/20">
                        <span className="text-primary/60 text-[10px] uppercase font-black tracking-widest">Sector: {displayedCategoryName}</span>
                    </div>
                </div>
            )}

            {canRestart && (
                <div className="flex flex-col gap-3 mt-4">
                    <Button fullWidth onClick={startGame} className="h-20 text-xl font-black italic shadow-lg shadow-primary/10">
                        <RefreshCcw size={24} />
                        NUEVA MISIÓN
                    </Button>
                    <Button
                        fullWidth
                        variant="secondary"
                        onClick={() => useGameStore.getState().socket?.emit('next_phase', { code: useGameStore.getState().roomCode, phase: 'lobby' })}
                        className="h-14 text-xs font-black uppercase tracking-widest"
                    >
                        <Users size={18} />
                        VOLVER AL LOBBY
                    </Button>
                </div>
            )}

            {!canRestart && (
                <Button fullWidth variant="secondary" onClick={() => setPhase('mode_select')} className="h-14 text-xs font-black uppercase tracking-widest mt-4 opacity-40">
                    <Home size={18} />
                    SALIR AL INICIO
                </Button>
            )}

            <div className="h-20" />
        </motion.div>
    );
};
