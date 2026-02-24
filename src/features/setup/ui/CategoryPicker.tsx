import React from 'react';
import { useGameStore } from '../../game/store/gameStore';
import { CATEGORIES } from '../../../shared/data/categories';
import { Card } from '../../../shared/ui/Card';
import { Target } from 'lucide-react';

export const CategoryPicker: React.FC = () => {
    const { settings, toggleCategory } = useGameStore();

    const isSelected = (id: string) => settings.selectedCategories.some(c => c.id === id);

    return (
        <Card className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <Target size={20} className="text-primary" />
                    Categorías
                </h2>
                {settings.selectedCategories.length > 0 && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-lg font-bold">
                        {settings.selectedCategories.length} SELECT
                    </span>
                )}
            </div>

            <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => toggleCategory(cat)}
                        className={`p-3 rounded-xl border text-sm font-medium transition-all text-left ${isSelected(cat.id)
                            ? 'bg-primary border-primary text-black'
                            : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {settings.selectedCategories.length === 0 && (
                <p className="text-xs text-red-400">Elegí al menos una categoría</p>
            )}
        </Card>
    );
};
