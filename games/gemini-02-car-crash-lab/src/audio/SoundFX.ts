// Zero-external-dependency procedural Web Audio API sound synthesizer
// Produces realistic engine acceleration, tire squeals, metallic impact crunches, and debris clatter.

export class SoundFX {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;
  private engineOsc: OscillatorNode | null = null;
  private engineGain: GainNode | null = null;

  constructor() {
    // Lazy initialize on first user interaction
  }

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public startEngine() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    this.stopEngine();

    try {
      const now = this.ctx.currentTime;
      this.engineOsc = this.ctx.createOscillator();
      this.engineGain = this.ctx.createGain();

      this.engineOsc.type = 'sawtooth';
      this.engineOsc.frequency.setValueAtTime(45, now);

      // Low pass filter to make it sound like a deep engine growl
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(180, now);

      this.engineGain.gain.setValueAtTime(0.01, now);
      this.engineGain.gain.linearRampToValueAtTime(0.18, now + 0.3);

      this.engineOsc.connect(filter);
      filter.connect(this.engineGain);
      this.engineGain.connect(this.ctx.destination);

      this.engineOsc.start();
    } catch {
      // Audio might be blocked by browser policy until gesture
    }
  }

  public updateEnginePitch(speedRatio: number) {
    if (!this.enabled || !this.ctx || !this.engineOsc) return;
    try {
      const now = this.ctx.currentTime;
      // Pitch goes from 45Hz to 160Hz as speed increases
      const freq = 45 + speedRatio * 130;
      this.engineOsc.frequency.setTargetAtTime(freq, now, 0.05);
    } catch {
      // Ignore
    }
  }

  public stopEngine() {
    if (this.engineGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.engineGain.gain.linearRampToValueAtTime(0.001, now + 0.1);
        setTimeout(() => {
          if (this.engineOsc) {
            this.engineOsc.stop();
            this.engineOsc.disconnect();
            this.engineOsc = null;
          }
        }, 120);
      } catch {
        this.engineOsc = null;
      }
    }
  }

  public playCrashImpact(speedKmh: number, intensity: number = 1.0) {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    this.stopEngine();

    try {
      const now = this.ctx.currentTime;
      const energyFactor = Math.min(2.5, Math.max(0.4, (speedKmh / 60) * intensity));

      // 1. Sub-bass punch (low impact boom)
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(120, now);
      subOsc.frequency.exponentialRampToValueAtTime(25, now + 0.4);

      subGain.gain.setValueAtTime(0.6 * energyFactor, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

      subOsc.connect(subGain);
      subGain.connect(this.ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + 0.6);

      // 2. White noise burst for crunch/crumple
      const bufferSize = this.ctx.sampleRate * 0.5;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const bandpass = this.ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.setValueAtTime(600, now);
      bandpass.Q.setValueAtTime(1.2, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.5 * energyFactor, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      whiteNoise.connect(bandpass);
      bandpass.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 0.5);

      // 3. Metallic screech resonance
      const metalOsc = this.ctx.createOscillator();
      const metalGain = this.ctx.createGain();
      metalOsc.type = 'triangle';
      metalOsc.frequency.setValueAtTime(320, now);
      metalOsc.frequency.exponentialRampToValueAtTime(90, now + 0.35);

      metalGain.gain.setValueAtTime(0.25 * energyFactor, now);
      metalGain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

      metalOsc.connect(metalGain);
      metalGain.connect(this.ctx.destination);
      metalOsc.start(now);
      metalOsc.stop(now + 0.4);

      // 4. Shard debris clatter shortly after
      setTimeout(() => {
        this.playDebrisClatter();
      }, 120);
    } catch {
      // Audio error handling
    }
  }

  public playTireSkid() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.4;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.5;
      }

      const noiseSource = this.ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1100, now);
      filter.Q.setValueAtTime(3.5, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      noiseSource.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noiseSource.start(now);
      noiseSource.stop(now + 0.4);
    } catch {
      // Ignore
    }
  }

  private playDebrisClatter() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      for (let i = 0; i < 4; i++) {
        const pingOsc = this.ctx.createOscillator();
        const pingGain = this.ctx.createGain();
        pingOsc.type = 'sine';
        pingOsc.frequency.setValueAtTime(1400 + Math.random() * 1200, now + i * 0.06);

        pingGain.gain.setValueAtTime(0.08, now + i * 0.06);
        pingGain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.08);

        pingOsc.connect(pingGain);
        pingGain.connect(this.ctx.destination);
        pingOsc.start(now + i * 0.06);
        pingOsc.stop(now + i * 0.06 + 0.09);
      }
    } catch {
      // Ignore
    }
  }
}
