import { useEffect, useRef, useState } from 'react';
import { useGameStore } from '../../features/game/store/gameStore';

/**
 * Hook to manage multi-party voice chat using WebRTC mesh.
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

    // Resume audio context on interaction for browsers
    useEffect(() => {
        const resume = () => {
            if (audioContextRef.current?.state === 'suspended') {
                audioContextRef.current.resume();
            }
        };
        window.addEventListener('click', resume);
        window.addEventListener('touchstart', resume);
        return () => {
            window.removeEventListener('click', resume);
            window.removeEventListener('touchstart', resume);
        };
    }, []);

    // Audio level detection logic
    const checkVoiceActivity = () => {
        if (!audioContextRef.current) {
            animationFrameId.current = requestAnimationFrame(checkVoiceActivity);
            return;
        }

        if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume();
        }

        const newSpeakingPlayers: Record<string, boolean> = {};
        const threshold = 5; // Absolute minimum threshold

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
            if (JSON.stringify(prev) !== JSON.stringify(newSpeakingPlayers)) {
                return newSpeakingPlayers;
            }
            return prev;
        });

        animationFrameId.current = requestAnimationFrame(checkVoiceActivity);
    };

    useEffect(() => {
        animationFrameId.current = requestAnimationFrame(checkVoiceActivity);
        return () => {
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    const setupAnalyzer = (stream: MediaStream, playerId: string) => {
        try {
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }

            const context = audioContextRef.current;
            const source = context.createMediaStreamSource(stream);
            const analyzer = context.createAnalyser();
            analyzer.fftSize = 256;
            source.connect(analyzer);
            const dataArray = new Uint8Array(analyzer.frequencyBinCount) as any;
            analyzerNodes.current[playerId] = { analyzer, dataArray };
        } catch (e) {
            console.error("[Voice] Error setupAnalyzer:", e);
        }
    };

    // 1. Initialize Microphone
    useEffect(() => {
        if (settings.voiceChat && localPlayer) {
            const initMic = async () => {
                try {
                    console.log("[Voice] Initializing microphone...");
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
                    localStreamRef.current = stream;
                    setLocalStream(stream);

                    if (localPlayer.isMuted) {
                        stream.getAudioTracks().forEach(track => track.enabled = false);
                    }

                    setupAnalyzer(stream, localPlayer.id);
                } catch (err) {
                    console.error("[Voice] Microphone access error:", err);
                }
            };
            initMic();
        }

        return () => {
            if (localStreamRef.current) {
                localStreamRef.current.getTracks().forEach(track => track.stop());
                localStreamRef.current = null;
            }
            setLocalStream(null);
            delete analyzerNodes.current[localPlayer?.id || ''];
        };
    }, [settings.voiceChat, localPlayer?.id]);

    // 2. Handle Local Mute
    useEffect(() => {
        if (localStream && localPlayer) {
            localStream.getAudioTracks().forEach(track => {
                track.enabled = !localPlayer.isMuted;
            });
        }
    }, [localPlayer?.isMuted, localStream]);

    // 3. Persistent Audio Container
    useEffect(() => {
        let container = document.getElementById('voice-chat-audio-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'voice-chat-audio-container';
            container.style.display = 'none';
            document.body.appendChild(container);
        }
    }, []);

    // 4. Mesh Connection Logic
    const createPeer = (targetId: string, initiator: boolean) => {
        if (peers.current[targetId]) return peers.current[targetId];

        console.log(`[Voice] Creating peer for ${targetId} (initiator: ${initiator})`);
        const peer = new RTCPeerConnection({
            iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
        });

        peers.current[targetId] = peer;

        // Add local tracks if ready
        if (localStreamRef.current) {
            localStreamRef.current.getTracks().forEach(track => {
                peer.addTrack(track, localStreamRef.current!);
            });
        }

        peer.ontrack = (event) => {
            const remoteStream = event.streams[0];
            console.log(`[Voice] Received track from ${targetId}`);

            if (audioElements.current[targetId]) {
                audioElements.current[targetId].pause();
                audioElements.current[targetId].remove();
            }

            const audio = document.createElement('audio');
            audio.srcObject = remoteStream;
            audio.autoplay = true;
            audio.id = `audio-${targetId}`;
            audioElements.current[targetId] = audio;

            const container = document.getElementById('voice-chat-audio-container');
            if (container) container.appendChild(audio);

            audio.play().catch(e => console.warn(`[Voice] Audio play error for ${targetId}:`, e));
            setupAnalyzer(remoteStream, targetId);
        };

        peer.onicecandidate = (event) => {
            if (event.candidate && socket && localPlayer) {
                socket.emit('signal', {
                    to: targetId,
                    from: localPlayer.id,
                    signal: { type: 'candidate', candidate: event.candidate }
                });
            }
        };

        if (initiator) {
            peer.createOffer()
                .then(offer => peer.setLocalDescription(offer))
                .then(() => {
                    socket?.emit('signal', {
                        to: targetId,
                        from: localPlayer?.id,
                        signal: peer.localDescription
                    });
                })
                .catch(err => console.error(`[Voice] Offer error for ${targetId}:`, err));
        }

        return peer;
    };

    // 5. Signaling Listener
    useEffect(() => {
        if (!socket || !settings.voiceChat || !localPlayer) return;

        const handleSignal = async ({ from, signal }: any) => {
            let peer = peers.current[from];
            if (!peer) {
                peer = createPeer(from, false);
            }
            if (!peer) return;

            try {
                if (signal.type === 'offer') {
                    // CRITICAL FIX: If we take an offer but don't have our mic ready yet, 
                    // we might answer without tracks. Let's wait up to 5 seconds.
                    let waitAttempts = 0;
                    while (!localStreamRef.current && waitAttempts < 10) {
                        console.log(`[Voice] Waiting for mic before answering offer from ${from}...`);
                        await new Promise(r => setTimeout(r, 500));
                        waitAttempts++;
                    }

                    // Re-add tracks if they just became available
                    if (localStreamRef.current && peer.getSenders().length === 0) {
                        localStreamRef.current.getTracks().forEach(track => {
                            peer.addTrack(track, localStreamRef.current!);
                        });
                    }

                    await peer.setRemoteDescription(new RTCSessionDescription(signal));
                    const answer = await peer.createAnswer();
                    await peer.setLocalDescription(answer);
                    socket.emit('signal', {
                        to: from,
                        from: localPlayer.id,
                        signal: answer
                    });
                } else if (signal.type === 'answer') {
                    if (peer.signalingState === 'have-local-offer') {
                        await peer.setRemoteDescription(new RTCSessionDescription(signal));
                    }
                } else if (signal.type === 'candidate') {
                    if (signal.candidate) {
                        try {
                            await peer.addIceCandidate(new RTCIceCandidate(signal.candidate));
                        } catch (e) { /* Ignore closed connections */ }
                    }
                }
            } catch (e) {
                console.error(`[Voice] Signaling error from ${from}:`, e);
            }
        };

        socket.on('signal', handleSignal);
        return () => { socket.off('signal', handleSignal); };
    }, [socket, settings.voiceChat, localPlayer?.id]);

    // 6. Incremental Peer Management
    useEffect(() => {
        if (!settings.voiceChat || !localStream || !localPlayer) return;

        players.forEach(p => {
            if (p.id !== localPlayer.id && !peers.current[p.id]) {
                const shouldInitiate = localPlayer.id > p.id;
                createPeer(p.id, shouldInitiate);
            }
        });

        // Cleanup
        Object.keys(peers.current).forEach(id => {
            if (!players.some(p => p.id === id)) {
                console.log(`[Voice] Cleaning up peer ${id}`);
                peers.current[id]?.close();
                delete peers.current[id];
                const audio = audioElements.current[id];
                if (audio) { audio.pause(); audio.remove(); delete audioElements.current[id]; }
                delete analyzerNodes.current[id];
            }
        });
    }, [players, settings.voiceChat, localStream, localPlayer?.id]);

    // 7. Late Track Update
    useEffect(() => {
        if (!localStream) return;
        Object.keys(peers.current).forEach(targetId => {
            const peer = peers.current[targetId];
            if (peer && peer.getSenders().length === 0) {
                console.log(`[Voice] Adding late tracks to peer ${targetId}`);
                localStream.getTracks().forEach(track => peer.addTrack(track, localStream));
                peer.createOffer()
                    .then(offer => peer.setLocalDescription(offer))
                    .then(() => {
                        socket?.emit('signal', {
                            to: targetId,
                            from: localPlayer?.id,
                            signal: peer.localDescription
                        });
                    }).catch(() => { });
            }
        });
    }, [localStream, socket, localPlayer?.id]);

    // 8. Global Cleanup
    useEffect(() => {
        return () => {
            if (!settings.voiceChat) {
                Object.values(peers.current).forEach(p => p.close());
                Object.values(audioElements.current).forEach(a => { a.pause(); a.remove(); });
                peers.current = {};
                audioElements.current = {};
                analyzerNodes.current = {};
                setSpeakingPlayers({});
            }
        };
    }, [settings.voiceChat]);

    return { localStream, speakingPlayers };
};
