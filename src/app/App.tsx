import React, { useState } from 'react';
import { useGameStore } from '../features/game/store/gameStore';
import { SetupPage } from '../features/setup/ui/SetupPage';
import { RevealPage } from '../features/reveal/ui/RevealPage';
import { PlayingPage } from '../features/game/ui/PlayingPage';
import { SummaryPage } from '../features/summary/ui/SummaryPage';
import { AnimatePresence, motion } from 'framer-motion';
import { JoiningPage } from '../features/game/ui/JoiningPage';
import { ModeSelectPage } from '../features/game/ui/ModeSelectPage';
import { VotingPage } from '../features/game/ui/VotingPage';
import { ChevronLeft } from 'lucide-react';

const App: React.FC = () => {
    const { phase, gameMode, localPlayer, leaveRoom, setPhase } = useGameStore();
    const [showConfirm, setShowConfirm] = useState(false);

    const showBack = phase !== 'mode_select';

    const handleBack = () => {
        if (gameMode === 'online') {
            if (localPlayer?.isHost) {
                // Host closing → confirm, because it kicks everyone
                setShowConfirm(true);
            } else {
                leaveRoom();
            }
        } else {
            // Local mode: just go back to start
            setPhase('mode_select');
        }
    };

    const confirmClose = () => {
        setShowConfirm(false);
        leaveRoom();
    };

    return (
        <div className="max-w-md mx-auto min-h-screen min-h-[100dvh] px-4 md:px-6 flex flex-col relative">
            {/* Global back button */}
            {showBack && (
                <button
                    onClick={handleBack}
                    className="fixed top-4 left-4 z-40 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all"
                    aria-label="Volver"
                >
                    <ChevronLeft size={20} />
                </button>
            )}

            {/* Confirmation modal for host closing room */}
            <AnimatePresence>
                {showConfirm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
                        onClick={() => setShowConfirm(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-6 w-full max-w-sm flex flex-col gap-5"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="text-center">
                                <p className="text-3xl mb-3">🚪</p>
                                <h2 className="text-xl font-black text-white uppercase tracking-tight">¿Cerrar la sala?</h2>
                                <p className="text-white/40 text-sm mt-2">Sos el host. Si salís, <strong className="text-white/60">todos los jugadores</strong> serán expulsados de la sala.</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={confirmClose}
                                    className="w-full h-14 rounded-2xl bg-red-500 text-white font-black uppercase tracking-widest text-sm hover:bg-red-600 transition-colors"
                                >
                                    Sí, cerrar sala
                                </button>
                                <button
                                    onClick={() => setShowConfirm(false)}
                                    className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 text-white/60 font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {phase === 'mode_select' && (
                    <motion.div
                        key="mode_select"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="flex-1 flex flex-col"
                    >
                        <ModeSelectPage />
                    </motion.div>
                )}

                {phase === 'joining' && (
                    <motion.div
                        key="joining"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="flex-1"
                    >
                        <JoiningPage />
                    </motion.div>
                )}

                {phase === 'setup' && (
                    <motion.div
                        key="setup"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex-1"
                    >
                        <SetupPage />
                    </motion.div>
                )}

                {phase === 'reveal' && (
                    <motion.div
                        key="reveal"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="flex-1"
                    >
                        <RevealPage />
                    </motion.div>
                )}

                {phase === 'playing' && (
                    <motion.div
                        key="playing"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="flex-1 flex flex-col"
                    >
                        <PlayingPage />
                    </motion.div>
                )}

                {phase === 'voting' && (
                    <motion.div
                        key="voting"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex-1 flex flex-col"
                    >
                        <VotingPage />
                    </motion.div>
                )}

                {phase === 'summary' && (
                    <motion.div
                        key="summary"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex-1"
                    >
                        <SummaryPage />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default App;

