import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Fingerprint } from 'lucide-react';

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
        <div className="flex flex-col items-center gap-10 py-8">
            <div className="text-center space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Identidad Confirmada</p>
                <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter text-glow">{playerName}</h2>
            </div>

            <div
                className={`relative w-full aspect-square max-w-[300px] rounded-[3rem] border transition-all duration-500 flex flex-col items-center justify-center p-8 select-none touch-none active:scale-95 overflow-hidden ${isRevealing
                    ? 'border-primary/50 bg-primary/5 scale-105'
                    : 'border-white/10 bg-white/5'
                    }`}
                onPointerDown={(e) => {
                    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
                    onHold();
                }}
                onPointerUp={onRelease}
                onPointerCancel={onRelease}
                onContextMenu={(e) => e.preventDefault()}
            >
                {/* Visual Scanner effect */}
                <AnimatePresence>
                    {isRevealing && (
                        <motion.div
                            initial={{ top: '-10%' }}
                            animate={{ top: '110%' }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-1 bg-primary shadow-[0_0_15px_rgba(250,204,21,0.8)] z-20 pointer-events-none"
                        />
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {!isRevealing ? (
                        <motion.div
                            key="prompt"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            className="flex flex-col items-center gap-4 text-center"
                        >
                            <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-white/5 mb-2">
                                <Fingerprint size={40} className="text-white/20" />
                            </div>
                            <p className="text-sm font-black uppercase tracking-[0.2em] text-white/40 max-w-[150px]">
                                Mantené para desencriptar rol
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="hint"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center gap-2 text-center"
                        >
                            <Lock size={48} className="text-primary animate-pulse mb-2" />
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">
                                Acceso Autorizado
                            </p>
                            <p className="text-xs font-bold text-white/40 italic">Revelando datos...</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Subtle background radar circles */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                    <div className="w-3/4 h-3/4 border border-white rounded-full animate-ping" />
                </div>
            </div>
        </div>
    );
};
