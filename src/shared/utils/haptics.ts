
/**
 * Haptics Utility
 * Provides haptic feedback via vibrate API and synthesized audio for iOS compatibility.
 */

class Haptics {
    private audioCtx: AudioContext | null = null;

    private initAudio() {
        if (!this.audioCtx) {
            this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
    }

    private playTick(frequency: number, duration: number, volume: number) {
        try {
            this.initAudio();
            if (!this.audioCtx) return;

            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);

            gain.gain.setValueAtTime(volume, this.audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + duration);

            osc.connect(gain);
            gain.connect(this.audioCtx.destination);

            osc.start();
            osc.stop(this.audioCtx.currentTime + duration);
        } catch (e) {
            console.warn('Audio haptics failed', e);
        }
    }

    /**
     * Subtle tick sound for 'hold' start
     */
    tick() {
        // Vibrate for Android/Web
        if ('vibrate' in navigator) {
            navigator.vibrate(15);
        }

        // Audio tick for iOS
        this.playTick(440, 0.05, 0.1);
    }

    /**
     * More noticeable sound for 'reveal'
     */
    reveal() {
        // Vibrate for Android/Web
        if ('vibrate' in navigator) {
            navigator.vibrate([30, 50, 30]);
        }

        // Audio reveal for iOS - a small 'bling'
        try {
            this.initAudio();
            const ctx = this.audioCtx;
            if (!ctx) return;

            const now = ctx.currentTime;
            const gain = ctx.createGain();
            gain.connect(ctx.destination);
            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.2, now + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

            [523.25, 659.25, 783.99].forEach((freq, i) => {
                const osc = ctx.createOscillator();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + (i * 0.05));
                osc.connect(gain);
                osc.start(now + (i * 0.05));
                osc.stop(now + 0.5);
            });
        } catch (e) {
            console.warn('Reveal audio failed', e);
        }
    }
}

export const haptics = new Haptics();
