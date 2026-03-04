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
            if (hasVoice) {
                console.log(`Voice detected for ${playerId}`);
            }
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
            console.log(`Audio analyzer set up for ${playerId}`);
        } catch (e) {
            console.error("Error setting up audio analyzer:", e);
        }
    };

    // 1. Initialize/Cleanup Microphone
    useEffect(() => {
        if (settings.voiceChat && localPlayer) {
            const initMic = async () => {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
                    localStreamRef.current = stream;
                    setLocalStream(stream);

                    if (localPlayer.isMuted) {
                        stream.getAudioTracks().forEach(track => track.enabled = false);
                    }

                    // Setup analyzer for local player
                    setupAnalyzer(stream, localPlayer.id);
                } catch (err) {
                    console.error("No se pudo acceder al micrófono:", err);
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

    // 2. Handle Local Mute (Dead players can't speak)
    useEffect(() => {
        if (localStream && localPlayer) {
            localStream.getAudioTracks().forEach(track => {
                track.enabled = !localPlayer.isMuted;
            });
        }
    }, [localPlayer?.isMuted, localStream]);

    // 3. Audio Element Container
    useEffect(() => {
        let container = document.getElementById('voice-chat-audio-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'voice-chat-audio-container';
            container.style.display = 'none';
            document.body.appendChild(container);
        }
        return () => {
            // Cleanup on unmount if needed, but usually better to keep it if app stays alive
        };
    }, []);

    // 4. Signaling Listener (Stable)
    useEffect(() => {
        if (!socket || !settings.voiceChat || !localPlayer) return;

        const handleSignal = async ({ from, signal }: any) => {
            let peer = peers.current[from];

            // If we don't have a peer yet, we create one as receiver
            if (!peer) {
                console.log(`Signal received from unknown peer ${from}, creating receiver peer.`);
                peer = createPeer(from, false);
            }

            if (!peer) return;

            try {
                if (signal.type === 'offer') {
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
                        await peer.addIceCandidate(new RTCIceCandidate(signal.candidate));
                    }
                }
            } catch (e) {
                console.error(`Error handling signal from ${from}:`, e);
            }
        };

        socket.on('signal', handleSignal);
        return () => {
            socket.off('signal', handleSignal);
        };
    }, [socket, settings.voiceChat, localPlayer?.id]); // Only depends on socket and identity

    // 5. Mesh Management (Incremental)
    const createPeer = (targetId: string, initiator: boolean) => {
        if (peers.current[targetId]) return peers.current[targetId];

        console.log(`[WebRTC] Creating peer for ${targetId} (initiator: ${initiator})`);
        const peer = new RTCPeerConnection({
            iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
        });

        peers.current[targetId] = peer;

        // Add local tracks from the current local stream
        if (localStreamRef.current) {
            localStreamRef.current.getTracks().forEach(track => {
                peer.addTrack(track, localStreamRef.current!);
            });
        }

        peer.ontrack = (event) => {
            const remoteStream = event.streams[0];
            console.log(`[WebRTC] Received remote stream from ${targetId}`);

            // Cleanup old audio element for this player
            if (audioElements.current[targetId]) {
                audioElements.current[targetId].pause();
                audioElements.current[targetId].remove();
            }

            const audio = document.createElement('audio');
            audio.srcObject = remoteStream;
            audio.autoplay = true;
            audio.id = `audio-${targetId}`;
            audioElements.current[targetId] = audio;

            // Attach to DOM to ensure persistence in some browsers
            const container = document.getElementById('voice-chat-audio-container');
            if (container) container.appendChild(audio);

            audio.play().catch(e => console.warn(`[WebRTC] Audio play failed for ${targetId}:`, e));
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
                .catch(err => console.error(`[WebRTC] Offer error for ${targetId}:`, err));
        }

        return peer;
    };

    useEffect(() => {
        if (!settings.voiceChat || !localStream || !localPlayer) return;

        // Add peers for new players
        players.forEach(p => {
            if (p.id !== localPlayer.id && !peers.current[p.id]) {
                const shouldInitiate = localPlayer.id > p.id;
                createPeer(p.id, shouldInitiate);
            }
        });

        // Cleanup peers for disconnected players
        Object.keys(peers.current).forEach(id => {
            if (!players.find(p => p.id === id)) {
                console.log(`[WebRTC] Cleaning up player ${id}`);
                const peer = peers.current[id];
                if (peer) peer.close();
                delete peers.current[id];

                const audio = audioElements.current[id];
                if (audio) {
                    audio.pause();
                    audio.remove();
                    delete audioElements.current[id];
                }

                delete analyzerNodes.current[id];
            }
        });
    }, [players, settings.voiceChat, localStream, localPlayer?.id]);

    // Full Cleanup when disabled
    useEffect(() => {
        if (!settings.voiceChat) {
            Object.values(peers.current).forEach(p => p.close());
            Object.values(audioElements.current).forEach(a => {
                a.pause();
                a.remove();
            });
            peers.current = {};
            audioElements.current = {};
            analyzerNodes.current = {};
            setSpeakingPlayers({});

            const container = document.getElementById('voice-chat-audio-container');
            if (container) container.innerHTML = '';
        }
    }, [settings.voiceChat]);

    return { localStream, speakingPlayers };
};
