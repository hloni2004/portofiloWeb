// Simple sound effects using Web Audio API
class SoundEffects {
  private audioContext: AudioContext | null = null;

  constructor() {
    // Initialize audio context on first user interaction
    this.initAudioContext();
  }

  private initAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (error) {
      console.warn('Web Audio API not supported');
    }
  }

  private createTone(frequency: number, duration: number, type: OscillatorType = 'sine') {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  // Hover sound effect
  playHover() {
    this.createTone(800, 0.1, 'sine');
  }

  // Click sound effect
  playClick() {
    this.createTone(1000, 0.15, 'square');
  }

  // Success sound effect
  playSuccess() {
    this.createTone(523.25, 0.2, 'sine'); // C5
    setTimeout(() => this.createTone(659.25, 0.2, 'sine'), 100); // E5
    setTimeout(() => this.createTone(783.99, 0.3, 'sine'), 200); // G5
  }

  // Error sound effect
  playError() {
    this.createTone(200, 0.3, 'sawtooth');
  }

  // Notification sound effect
  playNotification() {
    this.createTone(440, 0.2, 'sine'); // A4
    setTimeout(() => this.createTone(554.37, 0.2, 'sine'), 150); // C#5
  }

  // Enable audio context (call this on first user interaction)
  enable() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }
}

export const soundEffects = new SoundEffects();