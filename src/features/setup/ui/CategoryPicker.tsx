import React from 'react';
import { useGameStore } from '../../game/store/gameStore';
import { CATEGORIES } from '../../../shared/data/categories';
import { Card } from '../../../shared/ui/Card';
import { Target, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CategoryPicker: React.FC = () => {
    const { settings, toggleCategory, setSettings } = useGameStore();

    const isSelected = (id: string) => settings.selectedCategories.some(c => c.id === id);
    const allSelected = settings.selectedCategories.length === CATEGORIES.length;
    const noneSelected = settings.selectedCategories.length === 0;

    return (
        <Card className="flex flex-col gap-5 border-white/5 bg-black/40 backdrop-blur-xl relative overflow-hidden group">
            {/* Background Decorative Element */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />

            <div className="flex flex-col gap-4 relative z-10">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <div className="flex flex-col">
                        <h2 className="text-xl font-black italic uppercase tracking-tighter text-white leading-none">
                            Categorías
                        </h2>
                        <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-black mt-1.5">
                            {settings.selectedCategories.length} <span className="opacity-30 mx-0.5">/</span> {CATEGORIES.length} ACTIVAS
                        </p>
                    </div>

                    <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
                        <button
                            onClick={() => setSettings({ selectedCategories: CATEGORIES })}
                            className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${allSelected
                                ? 'bg-primary text-black'
                                : 'text-white/40 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            Todas
                        </button>
                        <button
                            onClick={() => setSettings({ selectedCategories: [] })}
                            className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${noneSelected
                                ? 'bg-red-500/20 text-red-400'
                                : 'text-white/40 hover:text-red-400 hover:bg-white/5'
                                }`}
                        >
                            Ninguna
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 max-h-64 overflow-y-auto pr-2 custom-scrollbar py-1">
                    {CATEGORIES.map((cat, index) => {
                        const selected = isSelected(cat.id);
                        return (
                            <motion.button
                                key={cat.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.03 }}
                                onClick={() => toggleCategory(cat)}
                                className={`group/btn relative p-3.5 rounded-2xl border transition-all duration-300 text-left overflow-hidden ${selected
                                    ? 'bg-primary border-primary shadow-lg shadow-primary/10'
                                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                                    }`}
                            >
                                {/* Active Glow */}
                                {selected && (
                                    <motion.div
                                        layoutId="category-glow"
                                        className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"
                                    />
                                )}

                                <div className="flex flex-col relative z-10">
                                    <span className={`text-sm font-bold tracking-tight transition-colors ${selected ? 'text-black' : 'text-white/80 group-hover/btn:text-white'
                                        }`}>
                                        {cat.name}
                                    </span>

                                </div>

                                {selected && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute top-2 right-2 text-black/40"
                                    >
                                        <Check size={14} strokeWidth={4} />
                                    </motion.div>
                                )}
                            </motion.button>
                        );
                    })}
                </div>

                <AnimatePresence>
                    {noneSelected && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center gap-2 text-[11px] font-bold text-red-400 bg-red-400/10 p-2.5 rounded-xl border border-red-400/20"
                        >
                            <Target size={14} />
                            Selecciona al menos una categoría para comenzar
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Card>
    );
};

