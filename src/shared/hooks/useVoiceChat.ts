import { useEffect, useRef, useState } from 'react';
import { useGameStore } from '../../features/game/store/gameStore';

/**
 * Hook to manage High-Scale multi-party voice chat (up to 30 players).
 * Reinforced with Auto-Resync, Signal Queuing, and Perfect Negotiation Rollback.
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

    // Scaling & Conflict Management
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
        if (audioContextRef.current.state === 'suspended') audioContextRef.current.resume();

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
            if (JSON.stringify(prev) !== JSON.stringify(newSpeakingPlayers)) return newSpeakingPlayers;
            return prev;
        });

        animationFrameId.current = requestAnimationFrame(checkVoiceActivity);
    };

    useEffect(() => {
        animationFrameId.current = requestAnimationFrame(checkVoiceActivity);
        return () => { if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current); };
    }, []);

    const setupAnalyzer = (stream: MediaStream, playerId: string) => {
        try {
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            const context = audioContextRef.current;
            const source = context.createMediaStreamSource(stream);
            const analyzer = context.createAnalyser();
            analyzer.fftSize = 64;
            source.connect(analyzer);
            const dataArray = new Uint8Array(analyzer.frequencyBinCount) as any;
            analyzerNodes.current[String(playerId)] = { analyzer, dataArray };
        } catch (e) { console.error("[Voice] Analyzer error:", e); }
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
                    localStreamRef.current = stream;
                    setLocalStream(stream);
                    if (localPlayer.isMuted) stream.getAudioTracks().forEach(t => t.enabled = false);
                    setupAnalyzer(stream, String(localPlayer.id));
                } catch (err) { console.error("[Voice] Mic error:", err); }
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

    // 3. Staggered Connection Queue
    const processQueue = async () => {
        if (isProcessingQueue.current || connectionQueue.current.length === 0) return;
        isProcessingQueue.current = true;
        try {
            while (connectionQueue.current.length > 0) {
                const targetId = connectionQueue.current.shift();
                if (targetId && !peers.current[targetId]) {
                    createPeer(targetId);
                    await new Promise(r => setTimeout(r, 400)); // Slightly more delay for stability
                }
            }
        } finally {
            isProcessingQueue.current = false;
        }
    };

    const setAudioQuality = (sdp: string) => {
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

        console.log(`[Voice Scale] Mesh: Connect to ${id}`);
        const peer = new RTCPeerConnection({
            iceServers: [
                { urls: 'stun:stun1.l.google.com:19302' },
                { urls: 'stun:stun2.l.google.com:19302' },
                { urls: 'stun:stun.l.google.com:19302' }
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
                console.error(`[Voice Scale] Negotiation Error ${id}:`, err);
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
            console.log(`[Voice Scale] ICE State with ${id}: ${peer.iceConnectionState}`);
            if (peer.iceConnectionState === 'failed' || peer.iceConnectionState === 'disconnected') {
                console.log(`[Voice Scale] ICE Failed/Disconnected with ${id}. Closing for recreation.`);
                peer.close();
                delete peers.current[id];
            }
        };

        peer.ontrack = ({ streams: [remoteStream] }) => {
            console.log(`[Voice Scale] Track received from ${id}`);
            if (audioElements.current[id]) {
                audioElements.current[id].pause();
                audioElements.current[id].remove();
            }
            const audio = document.createElement('audio');
            audio.srcObject = remoteStream;
            audio.autoplay = true;
            (audio as any).playsInline = true;
            audioElements.current[id] = audio;
            document.getElementById('voice-chat-audio-container')?.appendChild(audio);

            audio.play().catch(() => {
                // Common on mobile: needs interaction. 
                // However, in a game, they are likely interacting already.
                console.warn("[Voice] Play blocked. Retrying on next click.");
            });
            setupAnalyzer(remoteStream, id);
        };

        return peer;
    };

    // 4. Global Signal Handler (Perfect Negotiation)
    useEffect(() => {
        if (!socket || !settings.voiceChat || !localPlayer) return;

        const handleSignal = async ({ from, signal }: any) => {
            const id = String(from);
            const peer = createPeer(id);

            try {
                if (signal.type === 'offer' || signal.type === 'answer') {
                    const isPolite = String(localPlayer.id).localeCompare(id) < 0;
                    const offerCollision = signal.type === 'offer' &&
                        (makingOffer.current[id] || peer.signalingState !== 'stable');

                    ignoreOffer.current[id] = offerCollision && !isPolite;
                    if (ignoreOffer.current[id]) return;

                    if (offerCollision && isPolite) {
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
            } catch (err) { console.error(`[Voice Scale] Signal error from ${id}:`, err); }
        };

        socket.on('signal', handleSignal);
        return () => { socket.off('signal', handleSignal); };
    }, [socket, settings.voiceChat, localPlayer?.id]);

    // 5. AUTO-RESYNC HEARTBEAT (Aggressive Recovery)
    useEffect(() => {
        if (!settings.voiceChat || !localPlayer) return;

        const interval = setInterval(() => {
            players.forEach(p => {
                const pid = String(p.id);
                if (pid === String(localPlayer.id)) return;

                const peer = peers.current[pid];
                if (peer) {
                    const hasRemoteAudio = peer.getReceivers().some(r => r.track?.kind === 'audio' && r.track.enabled);
                    const connectionIsBad = peer.iceConnectionState === 'failed' || peer.iceConnectionState === 'disconnected';

                    if (!hasRemoteAudio || connectionIsBad) {
                        console.log(`[Voice Scale] Signal detected for ${pid} is missing audio. Attempting Poke...`);
                        // Force a renegotiation by calling onnegotiationneeded logic manually
                        peer.onnegotiationneeded?.(new Event('negotiationneeded'));
                    }
                }
            });
        }, 8000); // 8 seconds breathing room

        return () => clearInterval(interval);
    }, [players, localStream, settings.voiceChat, localPlayer?.id]);

    // 6. Mesh Lifecycle Management
    useEffect(() => {
        if (!settings.voiceChat || !localPlayer) return;

        const myId = String(localPlayer.id);
        players.forEach(p => {
            const pid = String(p.id);
            if (pid !== myId && !peers.current[pid]) {
                if (!connectionQueue.current.includes(pid)) {
                    connectionQueue.current.push(pid);
                }
            }
        });
        processQueue();

        Object.keys(peers.current).forEach(id => {
            if (!players.some(p => String(p.id) === id)) {
                peers.current[id]?.close();
                delete peers.current[id];
                audioElements.current[id]?.remove();
                delete audioElements.current[id];
                delete analyzerNodes.current[id];
                delete makingOffer.current[id];
                delete ignoreOffer.current[id];
                delete candidateQueue.current[id];
            }
        });
    }, [players, settings.voiceChat, localPlayer?.id]);

    // Initialize UI container
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
