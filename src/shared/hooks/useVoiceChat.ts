import { useEffect, useRef, useState } from 'react';
import { useGameStore } from '../../features/game/store/gameStore';

/**
 * Hook to manage High-Scale multi-party voice chat (up to 30 players).
 * Reinforced with Audio Graph processing for 2x Volume Boost and Auto-Recovery.
 */
export const useVoiceChat = () => {
    const { socket, players, localPlayer, settings } = useGameStore();
    const [localStream, setLocalStream] = useState<MediaStream | null>(null);
    const peers = useRef<Record<string, RTCPeerConnection>>({});
    const audioElements = useRef<Record<string, HTMLAudioElement>>({});
    const localStreamRef = useRef<MediaStream | null>(null);
    const [speakingPlayers, setSpeakingPlayers] = useState<Record<string, boolean>>({});
    const audioContextRef = useRef<AudioContext | null>(null);

    // Advanced Audio Graph tracking
    const audioNodes = useRef<Record<string, {
        analyzer: AnalyserNode,
        dataArray: Uint8Array,
        source: MediaStreamAudioSourceNode,
        gain: GainNode
    }>>({});

    const animationFrameId = useRef<number | null>(null);
    const makingOffer = useRef<Record<string, boolean>>({});
    const ignoreOffer = useRef<Record<string, boolean>>({});
    const candidateQueue = useRef<Record<string, RTCIceCandidateInit[]>>({});
    const connectionQueue = useRef<string[]>([]);
    const isProcessingQueue = useRef(false);

    // 1. Efficient Audio Level Detection & Volume Management
    const checkVoiceActivity = () => {
        if (!audioContextRef.current) {
            animationFrameId.current = requestAnimationFrame(checkVoiceActivity);
            return;
        }
        if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume().catch(() => { });
        }

        const newSpeakingPlayers: Record<string, boolean> = {};
        const threshold = 10; // Slightly higher threshold for better accuracy

        Object.entries(audioNodes.current).forEach(([playerId, { analyzer, dataArray }]) => {
            analyzer.getByteFrequencyData(dataArray);
            let volume = 0;
            for (let i = 0; i < dataArray.length; i++) {
                if (dataArray[i] > volume) volume = dataArray[i];
            }
            newSpeakingPlayers[playerId] = volume > threshold;
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

    const setupAudioGraph = (stream: MediaStream, playerId: string) => {
        try {
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            const context = audioContextRef.current;

            // Cleanup old nodes for this player if they exist
            if (audioNodes.current[playerId]) {
                audioNodes.current[playerId].source.disconnect();
                audioNodes.current[playerId].gain.disconnect();
            }

            const source = context.createMediaStreamSource(stream);
            const analyzer = context.createAnalyser();
            const gainNode = context.createGain();

            analyzer.fftSize = 64;
            // VOLUME BOOST: 250% by default to ensure loud voices
            gainNode.gain.value = 2.5;

            // Connect: Source -> Gain -> Analyzer -> Destination (Speakers)
            source.connect(gainNode);
            gainNode.connect(analyzer);
            gainNode.connect(context.destination);

            const dataArray = new Uint8Array(analyzer.frequencyBinCount);
            audioNodes.current[String(playerId)] = { analyzer, dataArray, source, gain: gainNode };
            console.log(`[Voice Debug] Audio Graph linked for ${playerId} at 2.5x volume`);
        } catch (e) {
            console.error("[Voice] Audio Graph error:", e);
        }
    };

    // 2. Microphone Management
    useEffect(() => {
        if (settings.voiceChat && localPlayer) {
            const initMic = async () => {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        audio: {
                            echoCancellation: true,
                            noiseSuppression: true,
                            autoGainControl: true,
                            channelCount: 1 // Mono for better stability
                        },
                        video: false
                    });
                    console.log("[Voice Debug] Mic ready");
                    localStreamRef.current = stream;
                    setLocalStream(stream);
                    if (localPlayer.isMuted) stream.getAudioTracks().forEach(t => t.enabled = false);

                    // Also setup local analyzer (but don't connect to destination to avoid echo)
                    if (!audioContextRef.current) audioContextRef.current = new AudioContext();
                    const source = audioContextRef.current.createMediaStreamSource(stream);
                    const analyzer = audioContextRef.current.createAnalyser();
                    analyzer.fftSize = 64;
                    source.connect(analyzer);
                    audioNodes.current[String(localPlayer.id)] = {
                        analyzer,
                        dataArray: new Uint8Array(analyzer.frequencyBinCount),
                        source,
                        gain: audioContextRef.current.createGain() // Dummy gain
                    };
                } catch (err) {
                    console.error("[Voice Debug] Mic failure:", err);
                    alert("ERROR DE MICROFONO: Verificá los permisos en el navegador.");
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
            Object.values(audioNodes.current).forEach(n => n.source.disconnect());
            audioNodes.current = {};
        };
    }, [settings.voiceChat, localPlayer?.id]);

    useEffect(() => {
        if (localStream && localPlayer) {
            localStream.getAudioTracks().forEach(t => t.enabled = !localPlayer.isMuted);
        }
    }, [localPlayer?.isMuted, localStream]);

    // 3. Connection Helpers
    const setAudioQuality = (sdp: string) => {
        return sdp.split('\r\n').map(line => {
            if (line.startsWith('a=fmtp:') && (line.includes('111') || line.includes('opus'))) {
                return `${line.split(';')[0]};maxaveragebitrate=48000;useinbandfec=1;stereo=0;sprop-stereo=0`;
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
                { urls: 'stun:stun.l.google.com:19302' },
                { urls: 'stun:stun.cloudflare.com:3478' }
            ]
        });

        peers.current[id] = peer;
        candidateQueue.current[id] = [];

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
                        sdp: setAudioQuality(peer.localDescription.sdp)
                    };
                    socket?.emit('signal', { to: id, from: String(localPlayer?.id), signal });
                }
            } catch (err) {
                console.error(`[Voice Scale] Negotiation failed for ${id}:`, err);
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
            if (['failed', 'disconnected'].includes(peer.iceConnectionState)) {
                console.log(`[Voice Scale] Link with ${id} unstable. Restarting.`);
                cleanupPeer(id);
            }
        };

        peer.ontrack = ({ streams: [remoteStream] }) => {
            console.log(`[Voice Scale] Stream from ${id} attached.`);
            // Silent audio tag to satisfy browser tracking
            if (audioElements.current[id]) audioElements.current[id].remove();
            const audio = document.createElement('audio');
            audio.srcObject = remoteStream;
            audio.muted = true; // We use AudioContext for playback instead!
            audio.play().catch(() => { });
            audioElements.current[id] = audio;
            document.getElementById('voice-chat-audio-container')?.appendChild(audio);

            // PRO QUALITY PLAYBACK via Web Audio API
            setupAudioGraph(remoteStream, id);
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
        if (audioNodes.current[id]) {
            audioNodes.current[id].source.disconnect();
            audioNodes.current[id].gain.disconnect();
            delete audioNodes.current[id];
        }
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
                            sdp: setAudioQuality(peer.localDescription!.sdp)
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
                console.error(`[Voice Scale] Signal error ${id}:`, err);
            }
        };

        socket.on('signal', handleSignal);
        return () => { socket.off('signal', handleSignal); };
    }, [socket, settings.voiceChat, localPlayer?.id]);

    // 5. DIAGNOSTIC & SELF-HEALING ENGINE
    useEffect(() => {
        if (!settings.voiceChat || !localPlayer) return;

        const interval = setInterval(() => {
            const statusSummary: Record<string, any> = {};

            players.forEach(p => {
                const pid = String(p.id);
                if (pid === String(localPlayer.id)) return;

                const peer = peers.current[pid];
                const isSpeaking = speakingPlayers[pid];

                if (peer) {
                    const receivers = peer.getReceivers();
                    const hasAudio = receivers.some(r => r.track?.kind === 'audio' && r.track.readyState === 'live');
                    const ice = peer.iceConnectionState;

                    statusSummary[p.name || pid] = {
                        "Conexión": ice === 'connected' ? "✅" : "⚠️ " + ice,
                        "Audio": hasAudio ? "✅" : "❌",
                        "Hablando": isSpeaking ? "🎤 SI" : "🔇 NO"
                    };

                    // GHOST RECOVERY: Connected but silent for too long
                    if (hasAudio && ice === 'connected' && !isSpeaking && Math.random() < 0.3) {
                        console.log(`[Voice Scale] Silent link with ${p.name}. Poking track...`);
                        peer.onnegotiationneeded?.(new Event('negotiationneeded'));
                    }

                    // STUCK RECOVERY
                    if (peer.signalingState !== 'stable' && !makingOffer.current[pid] && Math.random() < 0.1) {
                        cleanupPeer(pid);
                    }
                } else {
                    statusSummary[p.name || pid] = { "Conexión": "❌", "Audio": "❌", "Hablando": "🔇" };
                }
            });

            (window as any).voiceStatus = statusSummary;
        }, 4000);

        return () => clearInterval(interval);
    }, [players, localStream, settings.voiceChat, localPlayer?.id, speakingPlayers]);

    // 6. Mesh Lifecycle Sweep
    useEffect(() => {
        if (!settings.voiceChat || !localPlayer) return;

        const myId = String(localPlayer.id);
        players.forEach(p => {
            const pid = String(p.id);
            if (pid !== myId && !peers.current[pid] && !connectionQueue.current.includes(pid)) {
                connectionQueue.current.push(pid);
            }
        });

        Object.keys(peers.current).forEach(id => {
            if (!players.some(p => String(p.id) === id)) cleanupPeer(id);
        });

        const processQueue = async () => {
            if (isProcessingQueue.current || connectionQueue.current.length === 0) return;
            isProcessingQueue.current = true;
            try {
                while (connectionQueue.current.length > 0) {
                    const tid = connectionQueue.current.shift();
                    if (tid && !peers.current[tid]) {
                        createPeer(tid);
                        await new Promise(r => setTimeout(r, 600)); // More stagger for scale
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
