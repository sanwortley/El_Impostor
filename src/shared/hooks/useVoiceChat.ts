import { useEffect, useRef, useState } from 'react';
import { useGameStore } from '../../features/game/store/gameStore';

/**
 * Hook to manage High-Scale multi-party voice chat (up to 30 players).
 * Uses Staggered Connections, SDP Bitrate Limiting, and Perfect Negotiation.
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

    // Scaling optimizations
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
        const threshold = 5; // Reduced for better sensitivity

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
            analyzer.fftSize = 64; // Slightly bigger for better detection
            source.connect(analyzer);
            const dataArray = new Uint8Array(analyzer.frequencyBinCount) as any;
            analyzerNodes.current[playerId] = { analyzer, dataArray };
        } catch (e) { console.error("[Voice] Analyzer Setup Error:", e); }
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
                            channelCount: 1 // Mono is more stable for voice mesh
                        },
                        video: false
                    });
                    localStreamRef.current = stream;
                    setLocalStream(stream);
                    if (localPlayer.isMuted) stream.getAudioTracks().forEach(t => t.enabled = false);
                    setupAnalyzer(stream, String(localPlayer.id));
                } catch (err) { console.error("[Voice] Mic access error:", err); }
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

    // 3. Staggered Mesh Connector
    const processQueue = async () => {
        if (isProcessingQueue.current || connectionQueue.current.length === 0) return;
        isProcessingQueue.current = true;

        while (connectionQueue.current.length > 0) {
            const targetId = connectionQueue.current.shift();
            if (targetId && !peers.current[targetId]) {
                createPeer(targetId);
                await new Promise(r => setTimeout(r, 300));
            }
        }
        isProcessingQueue.current = false;
    };

    // SDP Bitrate Optimization (Increased for better quality: 64kbps)
    const setAudioQuality = (sdp: string) => {
        const lines = sdp.split('\r\n');
        const updatedLines = lines.map(line => {
            if (line.startsWith('a=fmtp:') && (line.includes('111') || line.includes('opus'))) {
                // maxaveragebitrate=64000 (quality), stereo=1 (clarity), useinbandfec=1 (packet loss protection)
                return `${line};maxaveragebitrate=64000;stereo=1;useinbandfec=1`;
            }
            return line;
        });
        return updatedLines.join('\r\n');
    };

    const createPeer = (targetId: string) => {
        if (peers.current[targetId]) return peers.current[targetId];

        console.log(`[Voice Scale] Creating connection for player ${targetId}`);
        const peer = new RTCPeerConnection({
            iceServers: [
                { urls: 'stun:stun.l.google.com:19302' },
                { urls: 'stun:stun1.l.google.com:19302' }
            ]
        });

        peers.current[targetId] = peer;
        candidateQueue.current[targetId] = [];

        if (localStreamRef.current) {
            localStreamRef.current.getTracks().forEach(track => {
                peer.addTrack(track, localStreamRef.current!);
            });
        }

        peer.onnegotiationneeded = async () => {
            try {
                makingOffer.current[targetId] = true;
                await peer.setLocalDescription();

                // Quality optimization for the offer
                if (peer.localDescription) {
                    const optimizedOffer = {
                        type: peer.localDescription.type,
                        sdp: setAudioQuality(peer.localDescription.sdp)
                    };
                    socket?.emit('signal', { to: targetId, from: localPlayer?.id, signal: optimizedOffer });
                }
            } catch (err) {
                console.error(`[Voice Scale] Negotiation Error:`, err);
            } finally {
                makingOffer.current[targetId] = false;
            }
        };

        peer.onicecandidate = ({ candidate }) => {
            if (candidate && socket && localPlayer) {
                socket.emit('signal', { to: targetId, from: localPlayer.id, signal: { type: 'candidate', candidate } });
            }
        };

        peer.ontrack = ({ streams: [remoteStream] }) => {
            if (audioElements.current[targetId]) {
                audioElements.current[targetId].pause();
                audioElements.current[targetId].remove();
            }
            const audio = document.createElement('audio');
            audio.srcObject = remoteStream;
            audio.autoplay = true;
            audioElements.current[targetId] = audio;
            document.getElementById('voice-chat-audio-container')?.appendChild(audio);
            setupAnalyzer(remoteStream, String(targetId));
        };

        return peer;
    };

    // 4. Global Signal Handler
    useEffect(() => {
        if (!socket || !settings.voiceChat || !localPlayer) return;

        const handleSignal = async ({ from, signal }: any) => {
            const peer = createPeer(from);

            try {
                if (signal.type === 'offer' || signal.type === 'answer') {
                    const isPolite = localPlayer.id < from;
                    const offerCollision = signal.type === 'offer' &&
                        (makingOffer.current[from] || peer.signalingState !== 'stable');

                    ignoreOffer.current[from] = offerCollision && !isPolite;
                    if (ignoreOffer.current[from]) return;

                    if (signal.type === 'offer') {
                        // Wait for mic if arriving too early
                        let wait = 0;
                        while (!localStreamRef.current && wait < 15) {
                            await new Promise(r => setTimeout(r, 400));
                            wait++;
                        }
                        if (localStreamRef.current && peer.getSenders().length === 0) {
                            localStreamRef.current.getTracks().forEach(t => peer.addTrack(t, localStreamRef.current!));
                        }
                    }

                    await peer.setRemoteDescription(new RTCSessionDescription(signal));

                    if (signal.type === 'offer') {
                        await peer.setLocalDescription();
                        const optimizedAnswer = {
                            type: peer.localDescription!.type,
                            sdp: setAudioQuality(peer.localDescription!.sdp)
                        };
                        socket.emit('signal', { to: from, from: localPlayer.id, signal: optimizedAnswer });
                    }

                    if (candidateQueue.current[from]) {
                        for (const cand of candidateQueue.current[from]) {
                            await peer.addIceCandidate(new RTCIceCandidate(cand));
                        }
                        candidateQueue.current[from] = [];
                    }
                } else if (signal.type === 'candidate') {
                    if (peer.remoteDescription && peer.remoteDescription.type) {
                        try {
                            await peer.addIceCandidate(new RTCIceCandidate(signal.candidate));
                        } catch (e) { }
                    } else {
                        candidateQueue.current[from].push(signal.candidate);
                    }
                }
            } catch (err) { console.error(`[Voice Scale] Signaling error from ${from}:`, err); }
        };

        socket.on('signal', handleSignal);
        return () => { socket.off('signal', handleSignal); };
    }, [socket, settings.voiceChat, localPlayer?.id]);

    // 5. Lifecycle Manager
    useEffect(() => {
        if (!settings.voiceChat || !localStream || !localPlayer) return;

        // Populate queue instead of connecting immediately
        players.forEach(p => {
            if (p.id !== localPlayer.id && !peers.current[p.id]) {
                if (!connectionQueue.current.includes(p.id)) {
                    connectionQueue.current.push(p.id);
                }
            }
        });

        processQueue();

        // Cleanup
        Object.keys(peers.current).forEach(id => {
            if (!players.some(p => p.id === id)) {
                peers.current[id].close();
                delete peers.current[id];
                audioElements.current[id]?.remove();
                delete audioElements.current[id];
                delete analyzerNodes.current[id];
            }
        });
    }, [players, settings.voiceChat, localStream, localPlayer?.id]);

    // UI Bridge
    useEffect(() => {
        if (!document.getElementById('voice-chat-audio-container')) {
            const div = document.createElement('div');
            div.id = 'voice-chat-audio-container';
            div.style.display = 'none';
            document.body.appendChild(div);
        }
        return () => {
            if (!settings.voiceChat) {
                Object.values(peers.current).forEach(p => p.close());
                peers.current = {};
                document.getElementById('voice-chat-audio-container')?.remove();
            }
        };
    }, [settings.voiceChat]);

    return { localStream, speakingPlayers };
};
