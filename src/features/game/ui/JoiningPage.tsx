
import React, { useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { Button } from '../../../shared/ui/Button';
import { Card } from '../../../shared/ui/Card';
import { Link, Hash, User } from 'lucide-react';
import { motion } from 'framer-motion';

export const JoiningPage: React.FC = () => {
    const { connect, createRoom, joinRoom } = useGameStore();
    const [name, setName] = useState('');
    const [roomCode, setRoomCode] = useState('');
    const [isConnected, setIsConnected] = useState(false);

    const handleConnect = () => {
        if (name.trim()) {
            connect(name.trim());
            setIsConnected(true);
        }
    };

    if (!isConnected) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-8 py-12"
            >
                <header className="text-center">
                    <h1 className="text-5xl font-black text-primary italic uppercase tracking-tighter">
                        EL IMPOSTOR
                    </h1>
                </header>

                <Card className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-white/40 uppercase">Tu Nombre</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Escribí tu nombre..."
                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-primary transition-colors text-xl font-bold"
                            />
                        </div>
                    </div>
                    <Button onClick={handleConnect} fullWidth className="h-20 text-xl" disabled={!name.trim()}>
                        CONTINUAR
                    </Button>
                </Card>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-8 py-12"
        >
            <header className="text-center">
                <h1 className="text-4xl font-black text-primary italic uppercase tracking-tighter">
                    ¡Hola, {name}!
                </h1>
                <p className="text-white/40">Elegí una opción para empezar</p>
            </header>

            <div className="flex flex-col gap-4">
                <Button onClick={createRoom} fullWidth className="h-24 text-2xl" variant="primary">
                    <Link size={28} />
                    CREAR SALA
                </Button>

                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#121212] px-4 text-white/20 font-bold">O</span></div>
                </div>

                <Card className="flex flex-col gap-4 border-primary/20 bg-primary/5">
                    <div className="relative">
                        <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
                        <input
                            type="text"
                            value={roomCode}
                            onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                            placeholder="CÓDIGO DE SALA"
                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-primary transition-colors text-2xl font-black tracking-widest text-center"
                            maxLength={5}
                        />
                    </div>
                    <Button onClick={() => joinRoom(roomCode)} fullWidth className="h-16 text-lg" disabled={roomCode.length < 5}>
                        UNIRSE A SALA
                    </Button>
                </Card>
            </div>
        </motion.div>
    );
};
