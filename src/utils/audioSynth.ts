// Lightweight Web Audio Piano Synthesizer for instant in-browser audio preview
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Convert MIDI note number to frequency in Hz
export function midiToFreq(midi: number): number {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

// Note name to MIDI note number (C4 = 60)
export function noteToMidi(noteName: string): number {
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const regex = /^([A-G]#?)([0-8])$/;
  const match = noteName.match(regex);
  if (!match) return 60;
  const [, note, octaveStr] = match;
  const octave = parseInt(octaveStr, 10);
  const noteIndex = notes.indexOf(note);
  return (octave + 1) * 12 + noteIndex;
}

// Play a realistic synthesized acoustic piano tone with harmonic richness and exponential decay
export function playPianoNote(midiNote: number, velocity: number = 0.8, duration: number = 1.5): void {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const freq = midiToFreq(midiNote);

    // Master note gain
    const masterGain = ctx.createGain();
    const velFactor = Math.max(0.2, Math.min(1.0, velocity));
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.35 * velFactor, now + 0.008);
    masterGain.gain.exponentialRampToValueAtTime(0.15 * velFactor, now + 0.2);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    // Warm Lowpass Filter simulating piano hammer timbre
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(Math.min(freq * 6, 8000), now);
    filter.frequency.exponentialRampToValueAtTime(Math.min(freq * 2, 2500), now + duration * 0.7);

    // Fundamental + 2nd + 3rd harmonic oscillators for acoustic timbre
    const osc1 = ctx.createOscillator();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, now);

    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, now);
    const osc2Gain = ctx.createGain();
    osc2Gain.gain.setValueAtTime(0.4, now);

    const osc3 = ctx.createOscillator();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(freq * 3, now);
    const osc3Gain = ctx.createGain();
    osc3Gain.gain.setValueAtTime(0.15, now);

    // Routing
    osc1.connect(filter);
    osc2.connect(osc2Gain);
    osc2Gain.connect(filter);
    osc3.connect(osc3Gain);
    osc3Gain.connect(filter);

    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    // Start & Stop
    osc1.start(now);
    osc2.start(now);
    osc3.start(now);

    osc1.stop(now + duration + 0.05);
    osc2.stop(now + duration + 0.05);
    osc3.stop(now + duration + 0.05);
  } catch (err) {
    console.debug('Audio play note error (user gesture required):', err);
  }
}

// Play multiple notes as a chord
export function playChord(midiNotes: number[], velocity: number = 0.75, duration: number = 2.0): void {
  midiNotes.forEach((note, idx) => {
    // slight humanized strumming offset (10ms)
    setTimeout(() => {
      playPianoNote(note, velocity, duration);
    }, idx * 12);
  });
}
