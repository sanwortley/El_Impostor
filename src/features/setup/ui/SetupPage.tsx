import { useGameStore } from '../../game/store/gameStore';
import { Button } from '../../../shared/ui/Button';
import { Stepper } from '../../../shared/ui/Stepper';
import { Toggle } from '../../../shared/ui/Toggle';
import { PlayersEditor } from './PlayersEditor';
import { CategoryPicker } from './CategoryPicker';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const SetupPage: React.FC = () => {
    const { settings, setSettings, startGame, players, roomCode, localPlayer, gameMode } = useGameStore();

    const isHost = localPlayer?.isHost;
    const isChaosMode = settings.impostorCount === players.length && players.length > 0;
    const canStart = (isHost || gameMode === 'local') && players.length >= 3 && settings.selectedCategories.length > 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6"
        >
            <header className="flex flex-col items-center text-center py-4">
                <h1 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase italic">
                    El Impostor
                </h1>
                {roomCode && (
                    <div className="mt-2 bg-white/5 border border-white/10 px-4 py-1 rounded-full">
                        <span className="text-white/40 text-xs font-bold uppercase tracking-widest mr-2">SALA:</span>
                        <span className="text-primary font-black text-lg tracking-widest">{roomCode}</span>
                    </div>
                )}
            </header>

            <PlayersEditor />

            {isHost || gameMode === 'local' ? (
                <>
                    <CategoryPicker />

                    <section className="flex flex-col gap-3">
                        <Stepper
                            label="Cantidad de Impostores"
                            value={settings.impostorCount}
                            min={1}
                            max={players.length || 3}
                            onChange={(val) => setSettings({ impostorCount: val })}
                            info={isChaosMode ? "😈 Modo caos activado" : undefined}
                        />

                        <Toggle
                            label="Modo pista"
                            description="Muestra una pista útil para el impostor"
                            enabled={settings.showHint}
                            onChange={(val) => setSettings({ showHint: val })}
                        />

                        <Toggle
                            label="Revelar categoría"
                            description="Muestra detalles completos de la categoría"
                            enabled={settings.showCategory}
                            onChange={(val) => setSettings({ showCategory: val })}
                        />
                    </section>

                    <Button
                        fullWidth
                        className="mt-4 h-20 text-2xl animate-pulse-gold"
                        disabled={!canStart}
                        onClick={startGame}
                    >
                        <Sparkles size={28} />
                        EMPEZAR PARTIDA
                    </Button>
                </>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center py-12 text-center gap-4">
                    <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                    <p className="text-white/60 font-bold uppercase tracking-widest">
                        Esperando que el host <br /> configure la partida...
                    </p>
                </div>
            )}

            <div className="h-20" /> {/* Spacer for scrolling */}
        </motion.div>
    );
};
