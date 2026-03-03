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

    // 3. Signaling Logic
    useEffect(() => {
        if (!socket || !settings.voiceChat || !localStream) return;

        const createPeer = (targetId: string, initiator: boolean) => {
            const peer = new RTCPeerConnection({
                iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
            });

            peers.current[targetId] = peer;

            // Add local tracks
            localStream.getTracks().forEach(track => peer.addTrack(track, localStream));

            // Handle remote tracks
            peer.ontrack = (event) => {
                const remoteStream = event.streams[0];

                // Remove old audio if exists
                if (audioElements.current[targetId]) {
                    audioElements.current[targetId].pause();
                    audioElements.current[targetId].srcObject = null;
                }

                const audio = document.createElement('audio');
                audio.srcObject = remoteStream;
                audio.autoplay = true;
                audioElements.current[targetId] = audio;

                audio.play().catch(e => console.log("Audio autoplay error:", e));

                // Setup analyzer for remote player
                setupAnalyzer(remoteStream, targetId);
            };

            // Ice Candidates
            peer.onicecandidate = (event) => {
                if (event.candidate) {
                    socket.emit('signal', {
                        to: targetId,
                        from: localPlayer?.id,
                        signal: { type: 'candidate', candidate: event.candidate }
                    });
                }
            };

            if (initiator) {
                peer.createOffer().then(offer => {
                    peer.setLocalDescription(offer);
                    socket.emit('signal', {
                        to: targetId,
                        from: localPlayer?.id,
                        signal: offer
                    });
                });
            }

            return peer;
        };

        const handleSignal = async ({ from, signal }: any) => {
            let peer = peers.current[from];

            if (!peer) {
                peer = createPeer(from, false);
            }

            if (signal.type === 'offer') {
                await peer.setRemoteDescription(new RTCSessionDescription(signal));
                const answer = await peer.createAnswer();
                await peer.setLocalDescription(answer);
                socket.emit('signal', {
                    to: from,
                    from: localPlayer?.id,
                    signal: answer
                });
            } else if (signal.type === 'answer') {
                await peer.setRemoteDescription(new RTCSessionDescription(signal));
            } else if (signal.type === 'candidate') {
                try {
                    await peer.addIceCandidate(new RTCIceCandidate(signal.candidate));
                } catch (e) {
                    console.error("Error adding ICE candidate", e);
                }
            }
        };

        socket.on('signal', handleSignal);

        // Notify everyone we are ready to connect
        // In WebRTC mesh, usually new joiners initiate offers to everyone else
        players.forEach(p => {
            if (p.id !== localPlayer?.id && !peers.current[p.id]) {
                createPeer(p.id, true);
            }
        });

        return () => {
            socket.off('signal', handleSignal);
            Object.values(peers.current).forEach(p => p.close());
            Object.values(audioElements.current).forEach(a => {
                a.pause();
                a.srcObject = null;
            });
            peers.current = {};
            audioElements.current = {};
            analyzerNodes.current = {};
        };
    }, [socket, settings.voiceChat, localStream, players.length]);

    return { localStream, speakingPlayers };
};
