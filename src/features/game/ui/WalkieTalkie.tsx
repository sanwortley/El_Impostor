import React, { useState, useEffect, useRef } from 'react';
import { useGameStore } from '../store/gameStore';
import { Mic, MicOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Super-Robust Walkie-Talkie Button.
 * Uses Global Pointer Listeners to prevent "sticky" microphones on mobile.
 */
export const WalkieTalkie: React.FC = () => {
    const { setMuted, settings } = useGameStore();
    const [isPressing, setIsPressing] = useState(false);
    const isPressingRef = useRef(false);

    if (!settings.voiceChat) return null;

    const startTalking = () => {
        if (isPressingRef.current) return;

        // Resume AudioContext on first touch for mobile security
        const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
            const tempCtx = new AudioCtx();
            if (tempCtx.state === 'suspended') tempCtx.resume();
        }

        isPressingRef.current = true;
        setIsPressing(true);
        setMuted(false);
        if (navigator.vibrate) navigator.vibrate(40);
        console.log("[Walkie] Transmitting...");
    };

    const stopTalking = () => {
        if (!isPressingRef.current) return;

        isPressingRef.current = false;
        setIsPressing(false);
        setMuted(true);
        if (navigator.vibrate) navigator.vibrate(10);
        console.log("[Walkie] Transmission Ended.");
    };

    // GLOBAL SAFETY: If the finger leaves the screen ANYWHERE, we must mute.
    // This fixes the "sticky mic" issue on mobile.
    useEffect(() => {
        const handleGlobalUp = () => {
            if (isPressingRef.current) {
                stopTalking();
            }
        };

        window.addEventListener('pointerup', handleGlobalUp);
        window.addEventListener('pointercancel', handleGlobalUp);
        window.addEventListener('blur', handleGlobalUp); // Mute if user switches apps

        return () => {
            window.removeEventListener('pointerup', handleGlobalUp);
            window.removeEventListener('pointercancel', handleGlobalUp);
            window.removeEventListener('blur', handleGlobalUp);
        };
    }, []);

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center gap-4">
            <AnimatePresence>
                {isPressing && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="bg-primary/20 backdrop-blur-md px-6 py-2 rounded-full border border-primary/30"
                    >
                        <span className="text-primary font-black text-xs uppercase tracking-[0.2em] animate-pulse">
                            Transmitiendo...
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onPointerDown={(e) => {
                    e.preventDefault();
                    startTalking();
                }}
                // We use global listeners for "Up", but local is for immediate feedback
                onPointerUp={stopTalking}
                onContextMenu={(e) => e.preventDefault()}
                whileTap={{ scale: 0.9, y: 5 }}
                style={{
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none',
                    touchAction: 'none'
                }}
                className={`
                    relative w-24 h-24 rounded-full flex items-center justify-center
                    transition-all duration-300 select-none
                    ${isPressing
                        ? 'bg-primary text-black shadow-[0_0_60px_rgba(255,215,0,0.6)]'
                        : 'bg-white/5 text-white/40 border-2 border-white/10 shadow-xl'
                    }
                `}
            >
                {/* Sonic Waves */}
                {isPressing && (
                    <>
                        <motion.div
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 2.2, opacity: 0 }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="absolute inset-0 bg-primary/40 rounded-full"
                        />
                        <motion.div
                            initial={{ scale: 1, opacity: 0.3 }}
                            animate={{ scale: 2.8, opacity: 0 }}
                            transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
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
