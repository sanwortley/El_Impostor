
import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Users, Globe, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ModeSelectPage: React.FC = () => {
    const { setMode } = useGameStore();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex flex-col justify-center gap-8 py-12"
        >
            <header className="text-center">
                <h1 className="text-5xl md:text-6xl font-black text-primary italic uppercase tracking-tighter mb-2">
                    EL IMPOSTOR
                </h1>
                <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Seleccioná el modo de juego</p>
            </header>

            <div className="flex flex-col gap-4">
                <button
                    onClick={() => setMode('local')}
                    className="group relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 p-8 text-left transition-all hover:bg-white/10 active:scale-95"
                >
                    <div className="flex items-center gap-6 relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-black">
                            <Users size={32} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-black text-white uppercase italic">Local</h3>
                            <p className="text-white/40 text-sm">Un solo celular para todos</p>
                        </div>
                        <ChevronRight className="text-white/20 group-hover:text-primary transition-colors" />
                    </div>
                </button>

                <button
                    onClick={() => setMode('online')}
                    className="group relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 p-8 text-left transition-all hover:bg-white/10 active:scale-95"
                >
                    <div className="flex items-center gap-6 relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                            <Globe size={32} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-black text-white uppercase italic">Online</h3>
                            <p className="text-white/40 text-sm">Cada uno desde su celular</p>
                        </div>
                        <ChevronRight className="text-white/20 group-hover:text-blue-500 transition-colors" />
                    </div>
                </button>
            </div>

            <p className="text-center text-white/20 text-[10px] uppercase font-bold tracking-[0.2em] mt-8">
                v2.0 Multiplayer Beta
            </p>
        </motion.div>
    );
};
