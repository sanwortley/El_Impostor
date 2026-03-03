import React, { useState, useEffect } from 'react';
import { useGameStore } from '../../game/store/gameStore';
import { Button } from '../../../shared/ui/Button';
import { HoldToReveal } from './HoldToReveal';
import { ChevronRight, ShieldAlert, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { haptics } from '../../../shared/utils/haptics';

export const RevealPage: React.FC = () => {
    const { players, localPlayer, settings, nextReveal, gameMode, currentRevealIndex } = useGameStore();
    const [isRevealing, setIsRevealing] = useState(false);
    const [hasRevealed, setHasRevealed] = useState(false);
    const [buttonReady, setButtonReady] = useState(false);

    // Delay activating the button to prevent the pointerUp from hold-to-reveal
    // accidentally triggering the button that appears in the same position
    useEffect(() => {
        if (hasRevealed) {
            const t = setTimeout(() => setButtonReady(true), 800);
            return () => clearTimeout(t);
        } else {
            setButtonReady(false);
        }
    }, [hasRevealed]);

    const currentPlayer = gameMode === 'online'
        ? players.find(p => p.socketId === localPlayer?.socketId)
        : players[currentRevealIndex];

    // Reset reveal state when jumping to a new player or new round
    useEffect(() => {
        setIsRevealing(false);
        setHasRevealed(false);
        setButtonReady(false);
    }, [currentPlayer?.id, currentRevealIndex]);

    if (!currentPlayer) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                <p className="text-white/60 font-bold uppercase tracking-widest">
                    {gameMode === 'online' ? 'Cargando tu rol...' : 'Preparando el juego...'}
                </p>
            </div>
        );
    }

    const isImpostor = currentPlayer.role === 'impostor' || currentPlayer.role === 'victim';
    const isPrankster = currentPlayer.role === 'prankster';
    const isChaosMode = settings.impostorCount === players.length && currentPlayer.role !== 'victim';

    // For pranksters: find the victim's name to show in their card
    const victimPlayer = players.find(p => p.role === 'victim');

    const isLastPlayer = currentRevealIndex === players.length - 1;

    const handleNext = () => {
        if (gameMode === 'local') {
            setIsRevealing(false);
            setHasRevealed(false);
            nextReveal();
        } else {
            nextReveal();
        }
    };

    return (
        <div className="flex flex-col h-full">
            <header className="flex justify-between items-center py-4 border-b border-white/10">
                <span className="text-white/40 font-bold uppercase text-xs tracking-widest">
                    {gameMode === 'local'
                        ? `Jugador ${currentRevealIndex + 1} de ${players.length}`
                        : 'Partida Online'}
                </span>
                <span className="text-primary font-black uppercase text-sm italic">
                    {currentPlayer.name}
                </span>
            </header>

            <div className="flex-1 flex flex-col gap-6 py-6">
                <HoldToReveal
                    playerName={currentPlayer.name}
                    isRevealing={isRevealing}
                    onHold={() => {
                        setIsRevealing(true);
                        haptics.tick();
                    }}
                    onRelease={() => {
                        if (isRevealing) {
                            setIsRevealing(false);
                            setHasRevealed(true);
                            haptics.reveal();
                        }
                    }}
                />

                <AnimatePresence>
                    {hasRevealed && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col gap-3"
                        >

                            {gameMode === 'local' ? (
                                <Button
                                    fullWidth
                                    onClick={handleNext}
                                    className="h-16 text-lg"
                                >
                                    {isLastPlayer ? 'EMPEZAR PARTIDA' : 'SIGUIENTE JUGADOR'}
                                    <ChevronRight size={24} />
                                </Button>
                            ) : (
                                localPlayer?.isHost ? (
                                    <Button
                                        fullWidth
                                        onClick={handleNext}
                                        className={`h-16 text-lg animate-pulse-gold transition-opacity duration-300 ${buttonReady ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                                    >
                                        EMPEZAR DEBATE
                                        <ChevronRight size={24} />
                                    </Button>
                                ) : (
                                    <div className="flex items-center justify-center gap-3 text-primary font-bold uppercase tracking-widest text-sm bg-primary/5 px-6 py-4 rounded-2xl border border-primary/20">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                                        Esperando al host...
                                    </div>
                                )
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {isRevealing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-8 text-center pointer-events-none select-none"
                    >
                        <div className="flex flex-col items-center gap-6 max-w-sm">
                            {isPrankster ? (
                                <>
                                    <Eye size={80} className="text-primary self-center" />
                                    <div className="flex flex-col items-center">
                                        <p className="text-white/60 mb-1 uppercase font-bold text-sm tracking-widest text-center">
                                            TU PALABRA ES:
                                        </p>
                                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic text-center leading-tight">
                                            {currentPlayer.relation || 'CÓMPLICE'}
                                        </h2>
                                    </div>

                                    <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 w-full text-center">
                                        <p className="text-white/40 text-[10px] uppercase font-black tracking-widest mb-1">EL OBJETIVO ES:</p>
                                        <p className="text-xl font-black text-primary uppercase italic tracking-tighter">
                                            {victimPlayer?.name}
                                        </p>
                                    </div>
                                </>
                            ) : isImpostor ? (
                                <>
                                    < ShieldAlert size={80} className="text-red-500 animate-bounce" />
                                    <h2 className="text-6xl font-black text-white italic tracking-tighter">
                                        SOS IMPOSTOR
                                    </h2>

                                    <div className="flex flex-col gap-4 mt-8 w-full">
                                        {settings.showCategory && (
                                            <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10">
                                                <p className="text-white/40 uppercase font-bold text-xs">Categoría:</p>
                                                <p className="text-2xl font-black text-primary uppercase">{settings.chosenCategory?.name}</p>
                                            </div>
                                        )}

                                        {settings.showHint && (() => {
                                            const specificHint = settings.chosenCategory?.itemHints?.[settings.secretWord];
                                            const fallbackHint = settings.chosenCategory?.hint;
                                            const hintText = specificHint || fallbackHint;
                                            return hintText ? (
                                                <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-primary/20">
                                                    <p className="text-primary uppercase font-bold text-xs tracking-widest mb-2">Tu Pista:</p>
                                                    <p className="text-lg font-medium text-white italic">"{hintText}"</p>
                                                </div>
                                            ) : null;
                                        })()}

                                        {settings.impostorsKnowEachOther && settings.impostorCount > 1 && (
                                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mt-2">
                                                <p className="text-white/40 uppercase font-bold text-[10px] text-center mb-2 tracking-widest">Tus Aliados:</p>
                                                <div className="flex flex-wrap justify-center gap-2">
                                                    {players
                                                        .filter(p => p.role === 'impostor' && p.id !== currentPlayer.id)
                                                        .map(p => (
                                                            <span key={p.id} className="bg-red-500/10 text-red-500 border border-red-500/20 px-3 py-1 rounded-full text-xs font-black uppercase italic">
                                                                {p.name}
                                                            </span>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        )}

                                    </div>

                                    {isChaosMode && (
                                        <p className="text-primary font-bold text-xl uppercase mt-4">
                                            😈 Modo caos activado
                                        </p>
                                    )}
                                </>
                            ) : (
                                <>
                                    <Eye size={80} className="text-primary self-center" />
                                    <div className="flex flex-col items-center">
                                        <p className="text-white/60 mb-1 uppercase font-bold text-sm tracking-widest text-center">
                                            TU PALABRA ES:
                                        </p>
                                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic text-center leading-tight">
                                            {settings.isTotalChaos ? currentPlayer.word : settings.secretWord}
                                        </h2>
                                    </div>

                                    <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 w-full">
                                        <p className="text-white/40 text-xs uppercase font-bold text-center">Categoría:</p>
                                        <p className="text-xl font-bold text-primary text-center uppercase">{settings.chosenCategory?.name}</p>
                                    </div>
                                </>
                            )}

                        </div>

                        <p className="fixed bottom-12 text-white/20 uppercase text-xs font-bold tracking-[0.3em] animate-pulse">
                            Soltá para ocultar
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
