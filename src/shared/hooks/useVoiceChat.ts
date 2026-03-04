import { useEffect, useRef, useState } from 'react';
import { useGameStore } from '../../features/game/store/gameStore';

/**
 * Hook to manage High-Scale multi-party voice chat (up to 30 players).
 * Features an Aggressive Self-Healing Mesh that recreates dead connections automatically.
 */
export const useVoiceChat = () => {
    const { socket, players, localPlayer, settings } = useGameStore();
    const [localStream, setLocalStream] = useState<MediaStream | null>(null);
    const peers = useRef<Record<string, RTCPeerConnection>>({});
    const audioElements = useRef<Record<string, HTMLAudioElement>>({});
    const localStreamRef = useRef<MediaStream | null>(null);
    const [speakingPlayers, setSpeakingPlayers] = useState<Record<string, boolean>>({});
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyzerNodes = useRef<Record<string, { analyzer: AnalyserNode, dataArray: any }>>({});
    const animationFrameId = useRef<number | null>(null);

    console.log("[Voice Debug] Hook Initialized");

    const makingOffer = useRef<Record<string, boolean>>({});
    const ignoreOffer = useRef<Record<string, boolean>>({});
    const candidateQueue = useRef<Record<string, RTCIceCandidateInit[]>>({});
    const connectionQueue = useRef<string[]>([]);
    const isProcessingQueue = useRef(false);

    // 1. Efficient Audio Level Detection
    const checkVoiceActivity = () => {
        if (!audioContextRef.current) {
            animationFrameId.current = requestAnimationFrame(checkVoiceActivity);
            return;
        }
        if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume().catch(() => { });
        }

        const newSpeakingPlayers: Record<string, boolean> = {};
        const threshold = 5;

        Object.entries(analyzerNodes.current).forEach(([playerId, { analyzer, dataArray }]) => {
            analyzer.getByteFrequencyData(dataArray);
            let hasVoice = false;
            for (let i = 0; i < dataArray.length; i++) {
                if (dataArray[i] > threshold) {
                    hasVoice = true;
                    break;
                }
            }
            newSpeakingPlayers[playerId] = hasVoice;
        });

        setSpeakingPlayers(prev => {
            const hasChanged = JSON.stringify(prev) !== JSON.stringify(newSpeakingPlayers);
            return hasChanged ? newSpeakingPlayers : prev;
        });

        animationFrameId.current = requestAnimationFrame(checkVoiceActivity);
    };

    useEffect(() => {
        animationFrameId.current = requestAnimationFrame(checkVoiceActivity);
        const resumeAudio = () => audioContextRef.current?.resume();
        window.addEventListener('click', resumeAudio);
        window.addEventListener('touchstart', resumeAudio);
        return () => {
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
            window.removeEventListener('click', resumeAudio);
            window.removeEventListener('touchstart', resumeAudio);
        };
    }, []);

    const setupAnalyzer = (stream: MediaStream, playerId: string) => {
        try {
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            const source = audioContextRef.current.createMediaStreamSource(stream);
            const analyzer = audioContextRef.current.createAnalyser();
            analyzer.fftSize = 64;
            source.connect(analyzer);
            const dataArray = new Uint8Array(analyzer.frequencyBinCount);
            analyzerNodes.current[String(playerId)] = { analyzer, dataArray };
        } catch (e) {
            console.error("[Voice] Analyzer error:", e);
        }
    };

    // 2. Microphone Management
    useEffect(() => {
        if (settings.voiceChat && localPlayer) {
            const initMic = async () => {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
                        video: false
                    });
                    console.log("[Voice Debug] Microphone stream acquired successfully");
                    localStreamRef.current = stream;
                    setLocalStream(stream);
                    if (localPlayer.isMuted) stream.getAudioTracks().forEach(t => t.enabled = false);
                    setupAnalyzer(stream, String(localPlayer.id));
                } catch (err) {
                    console.error("[Voice Debug] CRITICAL: Microphone failure:", err);
                    alert("ERROR DE MICROFONO: No se pudo acceder al audio. Asegurate de dar permisos en el navegador.");
                }
            };
            initMic();
        }
        return () => {
            if (localStreamRef.current) {
                localStreamRef.current.getTracks().forEach(t => t.stop());
                localStreamRef.current = null;
            }
            setLocalStream(null);
            delete analyzerNodes.current[localPlayer?.id ? String(localPlayer.id) : ''];
        };
    }, [settings.voiceChat, localPlayer?.id]);

    useEffect(() => {
        if (localStream && localPlayer) {
            localStream.getAudioTracks().forEach(t => t.enabled = !localPlayer.isMuted);
        }
    }, [localPlayer?.isMuted, localStream]);

    // 3. Perfect Negotiation SDP Helper
    const setAudioConstraints = (sdp: string) => {
        return sdp.split('\r\n').map(line => {
            if (line.startsWith('a=fmtp:') && (line.includes('111') || line.includes('opus'))) {
                return `${line.split(';')[0]};maxaveragebitrate=48000;useinbandfec=1`;
            }
            return line;
        }).join('\r\n');
    };

    const createPeer = (targetId: string) => {
        const id = String(targetId);
        if (peers.current[id]) return peers.current[id];

        console.log(`[Voice Scale] Mesh: Initializing peer for ${id}`);
        const peer = new RTCPeerConnection({
            iceServers: [
                { urls: 'stun:stun1.l.google.com:19302' },
                { urls: 'stun:stun2.l.google.com:19302' },
                { urls: 'stun:stun.l.google.com:19302' }
            ]
        });

        peers.current[id] = peer;
        candidateQueue.current[id] = [];

        // Add local tracks if available
        if (localStreamRef.current) {
            localStreamRef.current.getAudioTracks().forEach(track => {
                peer.addTrack(track, localStreamRef.current!);
            });
        }

        peer.onnegotiationneeded = async () => {
            try {
                makingOffer.current[id] = true;
                await peer.setLocalDescription();
                if (peer.localDescription) {
                    const signal = {
                        type: peer.localDescription.type,
                        sdp: setAudioConstraints(peer.localDescription.sdp)
                    };
                    socket?.emit('signal', { to: id, from: String(localPlayer?.id), signal });
                }
            } catch (err) {
                console.error(`[Voice Scale] Offer error for ${id}:`, err);
            } finally {
                makingOffer.current[id] = false;
            }
        };

        peer.onicecandidate = ({ candidate }) => {
            if (candidate && socket && localPlayer) {
                socket.emit('signal', { to: id, from: String(localPlayer.id), signal: { type: 'candidate', candidate } });
            }
        };

        peer.oniceconnectionstatechange = () => {
            if (['failed', 'disconnected', 'closed'].includes(peer.iceConnectionState)) {
                console.log(`[Voice Scale] Connection with ${id} lost. Cleaning up.`);
                cleanupPeer(id);
            }
        };

        peer.ontrack = ({ streams: [remoteStream] }) => {
            console.log(`[Voice Scale] Audio track received from ${id}`);
            if (audioElements.current[id]) {
                audioElements.current[id].remove();
            }
            const audio = document.createElement('audio');
            audio.srcObject = remoteStream;
            audio.autoplay = true;
            (audio as any).playsInline = true;
            audioElements.current[id] = audio;
            document.getElementById('voice-chat-audio-container')?.appendChild(audio);

            audio.play().catch(() => console.warn(`[Voice] Play blocked for ${id}`));
            setupAnalyzer(remoteStream, id);
        };

        return peer;
    };

    const cleanupPeer = (id: string) => {
        if (peers.current[id]) {
            peers.current[id].close();
            delete peers.current[id];
        }
        if (audioElements.current[id]) {
            audioElements.current[id].remove();
            delete audioElements.current[id];
        }
        delete analyzerNodes.current[id];
        delete candidateQueue.current[id];
        delete makingOffer.current[id];
        delete ignoreOffer.current[id];
    };

    // 4. Signal Handler
    useEffect(() => {
        if (!socket || !settings.voiceChat || !localPlayer) return;

        const handleSignal = async ({ from, signal }: any) => {
            const id = String(from);
            const peer = createPeer(id);

            try {
                if (signal.type === 'offer' || signal.type === 'answer') {
                    const isPolite = String(localPlayer.id).localeCompare(id) < 0;
                    const collision = signal.type === 'offer' && (makingOffer.current[id] || peer.signalingState !== 'stable');

                    ignoreOffer.current[id] = collision && !isPolite;
                    if (ignoreOffer.current[id]) return;

                    if (collision && isPolite) {
                        await peer.setLocalDescription({ type: 'rollback' });
                    }

                    if (signal.type === 'answer' && peer.signalingState !== 'have-local-offer') return;

                    await peer.setRemoteDescription(new RTCSessionDescription(signal));

                    if (signal.type === 'offer') {
                        await peer.setLocalDescription();
                        const answer = {
                            type: peer.localDescription!.type,
                            sdp: setAudioConstraints(peer.localDescription!.sdp)
                        };
                        socket.emit('signal', { to: id, from: String(localPlayer.id), signal: answer });
                    }

                    if (candidateQueue.current[id]?.length > 0) {
                        for (const cand of candidateQueue.current[id]) {
                            try { await peer.addIceCandidate(new RTCIceCandidate(cand)); } catch (e) { }
                        }
                        candidateQueue.current[id] = [];
                    }
                } else if (signal.type === 'candidate') {
                    if (peer.remoteDescription && peer.remoteDescription.type) {
                        try { await peer.addIceCandidate(new RTCIceCandidate(signal.candidate)); } catch (e) { }
                    } else {
                        candidateQueue.current[id].push(signal.candidate);
                    }
                }
            } catch (err) {
                console.error(`[Voice Scale] Signaling error from ${id}:`, err);
            }
        };

        socket.on('signal', handleSignal);
        return () => { socket.off('signal', handleSignal); };
    }, [socket, settings.voiceChat, localPlayer?.id]);

    // 5. AGGRESSIVE SELF-HEALING HEARTBEAT
    useEffect(() => {
        console.log("[Voice Debug] Starting Heartbeat Effect. Voice Chat Enabled:", settings.voiceChat);

        const interval = setInterval(() => {
            if (!settings.voiceChat) {
                console.log("[Voice Debug] Heartbeat skip: settings.voiceChat is FALSE");
                return;
            }
            if (!localPlayer) {
                console.log("[Voice Debug] Heartbeat skip: localPlayer is NULL");
                return;
            }

            const statusSummary: Record<string, any> = {};

            players.forEach(p => {
                const pid = String(p.id);
                if (pid === String(localPlayer.id)) return;

                const peer = peers.current[pid];
                if (peer) {
                    const hasAudio = peer.getReceivers().some(r => r.track?.kind === 'audio' && r.track.readyState === 'live');
                    const iceState = peer.iceConnectionState;
                    const sigState = peer.signalingState;

                    statusSummary[p.name || pid] = {
                        "Escuchando": hasAudio ? "✅ SI" : "❌ NO",
                        "Señal": iceState,
                        "Signaling": sigState
                    };

                    if (!hasAudio && iceState === 'connected') {
                        peer.onnegotiationneeded?.(new Event('negotiationneeded'));
                    }

                    if (sigState !== 'stable' && !makingOffer.current[pid]) {
                        cleanupPeer(pid);
                    }
                } else {
                    statusSummary[p.name || pid] = { "Escuchando": "❌ SIN CONEXION", "Señal": "none", "Signaling": "none" };
                }
            });

            console.log("--- [ESTADO DE LA RED DE VOZ] ---");
            console.table(statusSummary);
            // Expose for mobile debugging
            (window as any).voiceStatus = statusSummary;
        }, 5000);

        return () => clearInterval(interval);
    }, [players, localStream, settings.voiceChat, localPlayer?.id]);

    // 6. Mesh Lifecycle Sweep
    useEffect(() => {
        if (!settings.voiceChat || !localPlayer) return;

        const myId = String(localPlayer.id);

        // Ensure every player in the room has a peer object or is in the queue
        players.forEach(p => {
            const pid = String(p.id);
            if (pid !== myId && !peers.current[pid]) {
                if (!connectionQueue.current.includes(pid)) {
                    connectionQueue.current.push(pid);
                }
            }
        });

        // Cleanup people who left
        Object.keys(peers.current).forEach(id => {
            if (!players.some(p => String(p.id) === id)) {
                cleanupPeer(id);
            }
        });

        const processQueue = async () => {
            if (isProcessingQueue.current || connectionQueue.current.length === 0) return;
            isProcessingQueue.current = true;
            try {
                while (connectionQueue.current.length > 0) {
                    const targetId = connectionQueue.current.shift();
                    if (targetId && !peers.current[targetId]) {
                        createPeer(targetId);
                        await new Promise(r => setTimeout(r, 400));
                    }
                }
            } finally {
                isProcessingQueue.current = false;
            }
        };

        processQueue();
    }, [players, settings.voiceChat, localPlayer?.id, localStream]);

    // UI Bridge
    useEffect(() => {
        if (!document.getElementById('voice-chat-audio-container')) {
            const container = document.createElement('div');
            container.id = 'voice-chat-audio-container';
            container.style.display = 'none';
            document.body.appendChild(container);
        }
    }, []);

    return { localStream, speakingPlayers };
};
