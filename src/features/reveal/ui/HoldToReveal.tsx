import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HoldToRevealProps {
    onHold: () => void;
    onRelease: () => void;
    isRevealing: boolean;
    playerName: string;
}

export const HoldToReveal: React.FC<HoldToRevealProps> = ({
    onHold,
    onRelease,
    isRevealing,
    playerName
}) => {
    return (
        <div className="flex flex-col items-center gap-8 py-12">
            <div className="text-center">
                <h3 className="text-xl md:text-2xl text-white/60 mb-1">Hola,</h3>
                <h2 className="text-4xl md:text-5xl font-black text-white">{playerName}</h2>
            </div>

            <div
                className={`w-full aspect-square max-w-[320px] rounded-[3rem] border-4 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-8 select-none touch-none active:scale-95 ${isRevealing
                    ? 'border-primary bg-primary/20 scale-105'
                    : 'border-white/20 bg-white/5'
                    }`}
                onPointerDown={(e) => {
                    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
                    onHold();
                }}
                onPointerUp={onRelease}
                onPointerCancel={onRelease}
                onContextMenu={(e) => e.preventDefault()}
            >
                <AnimatePresence mode="wait">
                    {!isRevealing ? (
                        <motion.div
                            key="prompt"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center"
                        >
                            <p className="text-xl font-bold uppercase tracking-widest text-white/40">
                                Mantené apretado para revelar
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="hint"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="text-center"
                        >
                            <p className="text-sm font-bold uppercase tracking-tighter text-primary/60 mb-2">
                                Tu rol es:
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
