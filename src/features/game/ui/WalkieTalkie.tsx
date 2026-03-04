import React, { useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { Mic, MicOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Premium Walkie-Talkie Button component.
 * Features: Press-to-Talk logic, soundwave animations, and Gold Glow.
 */
export const WalkieTalkie: React.FC = () => {
    const { setMuted, settings } = useGameStore();
    const [isPressing, setIsPressing] = useState(false);

    if (!settings.voiceChat) return null;

    const handleStartTalking = () => {
        setIsPressing(true);
        setMuted(false); // Unmute to talk
        if (navigator.vibrate) navigator.vibrate(20); // Tactical haptic feed
    };

    const handleStopTalking = () => {
        setIsPressing(false);
        setMuted(true); // Mute back
    };

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center gap-4">
            <AnimatePresence>
                {isPressing && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-primary/20 backdrop-blur-md px-6 py-2 rounded-full border border-primary/30"
                    >
                        <span className="text-primary font-black text-xs uppercase tracking-[0.2em] animate-pulse">
                            Transmitiendo...
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onPointerDown={handleStartTalking}
                onPointerUp={handleStopTalking}
                onPointerLeave={handleStopTalking}
                whileTap={{ scale: 0.9, y: 5 }}
                className={`
                    relative w-24 h-24 rounded-full flex items-center justify-center
                    transition-all duration-300
                    ${isPressing
                        ? 'bg-primary text-black shadow-[0_0_50px_rgba(255,215,0,0.5)]'
                        : 'bg-white/5 text-white/40 border-2 border-white/10 shadow-xl'
                    }
                `}
            >
                {/* Sonic Waves Animation */}
                {isPressing && (
                    <>
                        <motion.div
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="absolute inset-0 bg-primary/40 rounded-full"
                        />
                        <motion.div
                            initial={{ scale: 1, opacity: 0.3 }}
                            animate={{ scale: 2.5, opacity: 0 }}
                            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                            className="absolute inset-0 bg-primary/20 rounded-full"
                        />
                    </>
                )}

                <div className="relative z-10 flex flex-col items-center">
                    {isPressing ? <Mic size={32} strokeWidth={3} /> : <MicOff size={32} />}
                    <span className={`text-[8px] font-black uppercase tracking-tighter mt-1 
                        ${isPressing ? 'text-black/60' : 'text-white/20'}`}>
                        MANTENER
                    </span>
                </div>
            </motion.button>
        </div>
    );
};
