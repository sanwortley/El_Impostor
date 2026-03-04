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

    // Requirements to start: 
    // Minimum 2 players to allow any kind of play, though 3+ is recommended.
    const hasEnoughPlayers = players.length >= 2;
    const canStart = (isHost || gameMode === 'local') && hasEnoughPlayers;
    const noCategoriesSelected = settings.selectedCategories.length === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6"
        >
            <header className="flex flex-col items-center text-center py-4 relative">
                <h1 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase italic">
                    El Impostor
                </h1>
                {roomCode && (
                    <div className="mt-2 flex items-center gap-2">
                        <div className="bg-white/5 border border-white/10 px-4 py-1 rounded-full">
                            <span className="text-white/40 text-xs font-bold uppercase tracking-widest mr-2">SALA:</span>
                            <span className="text-primary font-black text-lg tracking-widest">{roomCode}</span>
                        </div>
                        <button
                            onClick={() => {
                                const status = (window as any).voiceStatus;
                                if (!status || Object.keys(status).length === 0) {
                                    alert("Estado: Inicializando o sin otros jugadores...");
                                } else {
                                    alert("DIAGNÓSTICO DE VOZ:\n" + Object.entries(status).map(([name, data]: any) =>
                                        `${name}: ${data.Escuchando} (Señal: ${data.Señal})`
                                    ).join("\n"));
                                }
                            }}
                            className="p-2 bg-white/5 border border-white/10 rounded-full text-white/40 active:text-primary transition-colors"
                            title="Diagnóstico de Voz"
                        >
                            <Sparkles size={16} />
                        </button>
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

                        {gameMode === 'online' && (
                            <Stepper
                                label="Tiempo de debate"
                                value={settings.debateTime / 60}
                                min={0}
                                max={5}
                                onChange={(val) => setSettings({ debateTime: val * 60 })}
                                info={`${settings.debateTime === 0 ? 'Sin límite' : settings.debateTime / 60 + ' min'}`}
                            />
                        )}

                        {gameMode === 'online' && (
                            <Stepper
                                label="Tiempo de votación"
                                value={settings.votingTime}
                                min={10}
                                max={60}
                                step={10}
                                onChange={(val) => setSettings({ votingTime: val })}
                                info={`${settings.votingTime}s`}
                            />
                        )}

                        {gameMode === 'online' && (
                            <Toggle
                                label="Votación anónima"
                                description="Nadie sabe quién votó a quién"
                                enabled={settings.anonymousVoting}
                                onChange={(val) => setSettings({ anonymousVoting: val })}
                            />
                        )}

                        {gameMode === 'online' && (
                            <Toggle
                                label="Modo Distancia (Voz)"
                                description="Habilita chat de voz y silencia a los eliminados"
                                enabled={settings.voiceChat || false}
                                onChange={(val) => setSettings({ voiceChat: val })}
                            />
                        )}

                        {settings.impostorCount >= 2 && (
                            <Toggle
                                label="Ver compañeros"
                                description="Los impostores ven quiénes son sus aliados"
                                enabled={settings.impostorsKnowEachOther}
                                onChange={(val) => setSettings({ impostorsKnowEachOther: val })}
                            />
                        )}

                        <Toggle
                            label="Modo OLED"
                            description="Negro puro para ahorrar batería y más estilo"
                            enabled={settings.oledMode}
                            onChange={(val) => setSettings({ oledMode: val })}
                        />
                    </section>

                    {noCategoriesSelected && hasEnoughPlayers && (
                        <p className="text-[10px] text-white/30 text-center uppercase font-bold tracking-widest mt-2 animate-pulse">
                            Tip: Sin categorías seleccionadas se elegirá una al azar
                        </p>
                    )}

                    <Button
                        fullWidth
                        className="mt-2 h-20 text-2xl animate-pulse-gold shadow-primary/20"
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
