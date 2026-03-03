import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Users, Globe, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ModeSelectPage: React.FC = () => {
    const { setMode } = useGameStore();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 flex flex-col justify-center gap-12 py-12"
        >
            <header className="text-center space-y-2">
                <motion.h1
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-6xl md:text-7xl font-black text-primary italic uppercase tracking-tighter text-glow"
                >
                    EL IMPOSTOR
                </motion.h1>
                <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-black">
                    Seleccioná tu modo de infiltración
                </p>
            </header>

            <div className="flex flex-col gap-5">
                <button
                    onClick={() => setMode('local')}
                    className="group relative overflow-hidden rounded-[2rem] glass p-1 transition-all active:scale-95"
                >
                    <div className="flex items-center gap-5 p-6 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-black shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                            <Users size={28} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Presencial</h3>
                            <p className="text-white/40 text-xs font-medium">Un celular que pasa de mano en mano</p>
                        </div>
                        <ChevronRight className="text-white/10 group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
                    </div>
                </button>

                <button
                    onClick={() => setMode('online')}
                    className="group relative overflow-hidden rounded-[2rem] glass p-1 transition-all active:scale-95"
                >
                    <div className="flex items-center gap-5 p-6 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                            <Globe size={28} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Multijugador</h3>
                            <p className="text-white/40 text-xs font-medium">Cada agente con su propio dispositivo</p>
                        </div>
                        <ChevronRight className="text-white/10 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" size={20} />
                    </div>
                </button>
            </div>

            <footer className="text-center space-y-4 mt-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Servidores Operativos</span>
                </div>
            </footer>
        </motion.div>
    );
};
