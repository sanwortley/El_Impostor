import React from 'react';
import { useGameStore } from '../features/game/store/gameStore';
import { SetupPage } from '../features/setup/ui/SetupPage';
import { RevealPage } from '../features/reveal/ui/RevealPage';
import { PlayingPage } from '../features/game/ui/PlayingPage';
import { SummaryPage } from '../features/summary/ui/SummaryPage';
import { AnimatePresence, motion } from 'framer-motion';

import { JoiningPage } from '../features/game/ui/JoiningPage';

import { ModeSelectPage } from '../features/game/ui/ModeSelectPage';
import { VotingPage } from '../features/game/ui/VotingPage';

const App: React.FC = () => {
    const { phase } = useGameStore();

    return (
        <div className="max-w-md mx-auto min-h-screen min-h-[100dvh] px-4 md:px-6 flex flex-col">
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
