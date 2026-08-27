import { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Sliders, Maximize2, Radio, Play, Pause, RefreshCw, Sparkles, Music, CheckCircle2 } from 'lucide-react';
import { playPianoNote, playChord } from '../utils/audioSynth';
import { DEMO_PRESET_CHORDS, COLOR_PALETTES } from '../utils/chordDetector';

interface KeyConfig {
  midi: number;
  note: string;
  isBlack: boolean;
  octave: number;
}

// Generate 61 keys (C2 = 36 to C7 = 96)
const GENERATED_KEYS: KeyConfig[] = [];
const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

for (let m = 36; m <= 96; m++) {
  const noteIndex = m % 12;
  const octave = Math.floor(m / 12) - 1;
  const isBlack = [1, 3, 6, 8, 10].includes(noteIndex);
  GENERATED_KEYS.push({
    midi: m,
    note: `${NOTE_NAMES[noteIndex]}${octave}`,
    isBlack,
    octave
  });
}

export const InteractivePianoDemo = () => {
  const [selectedChordKey, setSelectedChordKey] = useState<string>('C7M(9)');
  const [activeMidiNotes, setActiveMidiNotes] = useState<number[]>([48, 64, 67, 71, 74]);
  const [selectedColor, setSelectedColor] = useState(COLOR_PALETTES[0]); // Electric Cyan default
  const [colorMode, setColorMode] = useState<'single' | 'split' | 'velocity'>('single');
  const [visualStyle, setVisualStyle] = useState<'glow' | 'solid' | 'gradient'>('glow');
  const [notationMode, setNotationMode] = useState<'scientific' | 'solfege' | 'midi'>('scientific');
  const [isWaterfallActive, setIsWaterfallActive] = useState(true);
  const [soundFontName, setSoundFontName] = useState('Yamaha CFX Grand Piano (.SF2)');
  const [volume, setVolume] = useState(85);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlayingAuto, setIsPlayingAuto] = useState(true);
  const [midiConnected, setMidiConnected] = useState(false);
  const [sustainOn, setSustainOn] = useState(true);
  const [waterfallSpeed, setWaterfallSpeed] = useState(1);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const notesFallingRef = useRef<Array<{ midi: number; y: number; height: number; speed: number; color: string }>>([]);

  const currentChord = DEMO_PRESET_CHORDS[selectedChordKey] || DEMO_PRESET_CHORDS['C7M(9)'];

  // Trigger chord play and update active keys
  const triggerChord = useCallback((chordKey: string, autoSound = true) => {
    const chord = DEMO_PRESET_CHORDS[chordKey];
    if (!chord) return;
    setSelectedChordKey(chordKey);
    setActiveMidiNotes(chord.midiNotes);

    if (autoSound && !isMuted) {
      playChord(chord.midiNotes, (volume / 100) * 0.8, 2.5);
    }

    // Spawn falling notes for waterfall
    chord.midiNotes.forEach(m => {
      notesFallingRef.current.push({
        midi: m,
        y: -40,
        height: 60 + Math.random() * 30,
        speed: 3.5 * waterfallSpeed,
        color: selectedColor.hex
      });
    });
  }, [isMuted, volume, waterfallSpeed, selectedColor]);

  // Handle single key click
  const handleKeyClick = (midi: number) => {
    if (!isMuted) {
      playPianoNote(midi, (volume / 100) * 0.85, 2.0);
    }
    setActiveMidiNotes(prev => {
      if (prev.includes(midi)) {
        return prev.filter(n => n !== midi);
      } else {
        return [...prev, midi];
      }
    });

    notesFallingRef.current.push({
      midi,
      y: -30,
      height: 70,
      speed: 3.5 * waterfallSpeed,
      color: selectedColor.hex
    });
  };

  // Web MIDI API support if user has a keyboard plugged in
  useEffect(() => {
    if (typeof window !== 'undefined' && 'navigator' in window && 'requestMIDIAccess' in navigator) {
      navigator.requestMIDIAccess?.().then(
        (midiAccess) => {
          let count = 0;
          midiAccess.inputs.forEach((input) => {
            count++;
            input.onmidimessage = (msg) => {
              const [status, note, velocity] = msg.data;
              const command = status >> 4;
              if (command === 9 && velocity > 0) {
                // Note On
                setActiveMidiNotes(prev => [...new Set([...prev, note])]);
                if (!isMuted) playPianoNote(note, velocity / 127);
                notesFallingRef.current.push({
                  midi: note,
                  y: -20,
                  height: 50 + (velocity / 127) * 40,
                  speed: 3.5 * waterfallSpeed,
                  color: selectedColor.hex
                });
              } else if (command === 8 || (command === 9 && velocity === 0)) {
                // Note Off
                setActiveMidiNotes(prev => prev.filter(n => n !== note));
              }
            };
          });
          if (count > 0) {
            setMidiConnected(true);
          }
        },
        () => {
          // MIDI not authorized or unavailable
        }
      );
    }
  }, [isMuted, waterfallSpeed, selectedColor]);

  // Auto-play demo cycle
  useEffect(() => {
    if (!isPlayingAuto) return;
    const chordKeys = Object.keys(DEMO_PRESET_CHORDS);
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % chordKeys.length;
      triggerChord(chordKeys[index], false);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPlayingAuto, triggerChord]);

  // Waterfall canvas loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.parentElement?.clientWidth || 900;
    let height = canvas.height = 140;

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = 140;
      }
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle background grid lines
      ctx.fillStyle = '#0E0E11';
      ctx.fillRect(0, 0, width, height);

      // Draw vertical guidelines for each key column
      const whiteKeys = GENERATED_KEYS.filter(k => !k.isBlack);
      const whiteKeyWidth = width / whiteKeys.length;

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= whiteKeys.length; i++) {
        ctx.beginPath();
        ctx.moveTo(i * whiteKeyWidth, 0);
        ctx.lineTo(i * whiteKeyWidth, height);
        ctx.stroke();
      }

      // Animate falling notes
      if (isWaterfallActive) {
        const remainingNotes: typeof notesFallingRef.current = [];
        notesFallingRef.current.forEach((n) => {
          n.y += n.speed;

          // Find horizontal position
          const keyIndex = GENERATED_KEYS.findIndex(k => k.midi === n.midi);
          if (keyIndex !== -1) {
            const isBlack = GENERATED_KEYS[keyIndex].isBlack;
            // Calculate X based on key distribution
            const whiteIndexBefore = GENERATED_KEYS.slice(0, keyIndex).filter(k => !k.isBlack).length;
            const x = isBlack 
              ? (whiteIndexBefore * whiteKeyWidth) - (whiteKeyWidth * 0.28)
              : (whiteIndexBefore * whiteKeyWidth);
            const w = isBlack ? whiteKeyWidth * 0.58 : whiteKeyWidth * 0.88;

            // Draw rounded glowing falling bar
            ctx.save();
            ctx.shadowColor = n.color;
            ctx.shadowBlur = 12;
            
            const gradient = ctx.createLinearGradient(x, n.y - n.height, x, n.y);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
            gradient.addColorStop(0.7, n.color);
            gradient.addColorStop(1, '#ffffff');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.roundRect(x + 2, n.y - n.height, Math.max(w - 4, 6), n.height, [4, 4, 2, 2]);
            ctx.fill();
            ctx.restore();
          }

          // Keep if still on screen
          if (n.y - n.height < height) {
            remainingNotes.push(n);
          }
        });
        notesFallingRef.current = remainingNotes;
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isWaterfallActive, selectedColor]);

  // Format note label for key display
  const getNoteLabel = (noteStr: string, midi: number) => {
    if (notationMode === 'scientific') return noteStr;
    if (notationMode === 'midi') return midi.toString();
    const rootName = noteStr.replace(/[0-9]/g, '');
    const solf = { 'C': 'Dó', 'C#': 'Dó#', 'D': 'Ré', 'D#': 'Ré#', 'E': 'Mi', 'F': 'Fá', 'F#': 'Fá#', 'G': 'Sol', 'G#': 'Sol#', 'A': 'Lá', 'A#': 'Lá#', 'B': 'Si' }[rootName] || rootName;
    return solf;
  };

  return (
    <div className="w-full rounded-2xl bg-[#0D0D10] border border-zinc-800/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden text-zinc-200 backdrop-blur-xl">
      {/* Studio Window Top Bar */}
      <div className="bg-[#151518] px-4 py-2.5 border-b border-zinc-800/80 flex items-center justify-between select-none">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors inline-block cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors inline-block cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors inline-block cursor-pointer"></span>
          </div>
          <div className="h-4 w-[1px] bg-zinc-700/60 mx-1"></div>
          <div className="flex items-center gap-2">
            <span className="text-sm">🎹</span>
            <span className="font-extrabold text-xs tracking-tight text-white font-mono">VSK</span>
            <span className="text-xs text-zinc-400 font-medium">Virtual Studio Keys</span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold border border-rose-500/30">
              PRO v3.4
            </span>
          </div>
        </div>

        {/* Studio Color Quick Bar */}
        <div className="hidden sm:flex items-center gap-1.5 bg-[#0A0A0C] px-2.5 py-1 rounded-full border border-zinc-800">
          <span className="text-[11px] text-zinc-400 mr-1 font-medium">Cor:</span>
          {COLOR_PALETTES.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedColor(c)}
              title={c.name}
              className={`w-3.5 h-3.5 rounded-full transition-transform cursor-pointer ${
                selectedColor.id === c.id ? 'scale-125 ring-2 ring-white ring-offset-1 ring-offset-black' : 'opacity-70 hover:opacity-100 hover:scale-110'
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>

        {/* Right Status / Controls */}
        <div className="flex items-center gap-2">
          {/* Audio volume switch */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`p-1.5 rounded-lg border text-xs transition-colors cursor-pointer flex items-center gap-1 ${
              isMuted ? 'bg-red-500/10 text-red-400 border-red-500/30' : 'bg-zinc-800/60 text-zinc-300 border-zinc-700 hover:text-white'
            }`}
            title={isMuted ? 'Áudio Mudo (Clique para ligar)' : 'Áudio Ativo'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
          </button>

          {/* MIDI Connection Status */}
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold font-mono">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span className="hidden md:inline">2 MIDI Conectado</span>
            <span className="md:hidden">MIDI OK</span>
          </div>

          <button
            onClick={() => setIsPlayingAuto(!isPlayingAuto)}
            className={`px-2 py-1 rounded-lg text-xs font-medium border flex items-center gap-1 transition-colors cursor-pointer ${
              isPlayingAuto ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' : 'bg-zinc-800 text-zinc-400 border-zinc-700'
            }`}
          >
            {isPlayingAuto ? <Pause className="w-3 h-3 text-cyan-400" /> : <Play className="w-3 h-3" />}
            <span className="hidden sm:inline">{isPlayingAuto ? 'Demo Rodando' : 'Rodar Demo'}</span>
          </button>
        </div>
      </div>

      {/* Main Studio Display & Detection Area */}
      <div className="p-4 sm:p-5 bg-gradient-to-b from-[#111115] via-[#0E0E12] to-[#0A0A0C] border-b border-zinc-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          
          {/* IDENTIFIED CHORD BOX */}
          <div className="lg:col-span-8 bg-[#15151A]/90 border border-zinc-800/80 rounded-xl p-4 sm:p-5 shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-500/10 to-cyan-500/0 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 border-b border-zinc-800/60 pb-3">
              <div>
                <div className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase font-mono">
                  ACORDE IDENTIFICADO EM TEMPO REAL
                </div>
                <div className="flex items-baseline gap-3 mt-1">
                  <span
                    className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono transition-all duration-200"
                    style={{ color: selectedColor.hex, textShadow: `0 0 20px ${selectedColor.glow}` }}
                  >
                    {currentChord.name}
                  </span>
                  <span className="text-sm sm:text-base text-zinc-300 font-medium">
                    {currentChord.solfege}
                  </span>
                </div>
              </div>

              {/* Voicing Formula Badge */}
              <div className="flex flex-col sm:items-end">
                <span className="text-[11px] text-zinc-400 font-mono">Fórmula / Estrutura:</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-800 text-cyan-300 font-mono border border-zinc-700">
                  {currentChord.formula}
                </span>
                <span className="text-[10px] text-zinc-400 mt-1 font-mono">
                  Baixo: <strong className="text-white">{currentChord.bass}</strong> • {currentChord.inversion}
                </span>
              </div>
            </div>

            {/* Note Pills & Style tag */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] text-zinc-400 mr-1 font-medium">Notas Tocadas:</span>
                {currentChord.notes.map((n, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-xs font-mono font-bold border transition-colors shadow-sm"
                    style={{
                      backgroundColor: `${selectedColor.hex}15`,
                      color: selectedColor.hex,
                      borderColor: `${selectedColor.hex}40`
                    }}
                  >
                    {n}
                  </span>
                ))}
              </div>

              <div className="text-[11px] text-zinc-400 bg-zinc-800/60 px-2.5 py-1 rounded-full border border-zinc-700/60">
                Contexto: <span className="text-zinc-200 font-medium">{currentChord.mood}</span>
              </div>
            </div>
          </div>

          {/* Quick MIDI Telemetry Box */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2 text-center font-mono">
            <div className="bg-[#15151A] p-2.5 rounded-xl border border-zinc-800/80">
              <div className="text-[10px] text-zinc-400 uppercase">SUSTAIN</div>
              <div className={`text-xs font-bold mt-1 px-2 py-0.5 rounded inline-block ${sustainOn ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'text-zinc-400'}`}>
                {sustainOn ? 'ATIVO (SUS)' : 'OFF'}
              </div>
            </div>

            <div className="bg-[#15151A] p-2.5 rounded-xl border border-zinc-800/80">
              <div className="text-[10px] text-zinc-400 uppercase">PITCH BEND</div>
              <div className="text-xs font-bold text-zinc-200 mt-1">0% (Centro)</div>
            </div>

            <div className="bg-[#15151A] p-2.5 rounded-xl border border-zinc-800/80">
              <div className="text-[10px] text-zinc-400 uppercase">MOD WHEEL</div>
              <div className="text-xs font-bold text-zinc-200 mt-1">0%</div>
            </div>

            <div className="bg-[#15151A] p-2.5 rounded-xl border border-zinc-800/80">
              <div className="text-[10px] text-zinc-400 uppercase">VOZES / POLIFONIA</div>
              <div className="text-xs font-bold text-cyan-400 mt-1">{activeMidiNotes.length} Notas</div>
            </div>
          </div>

        </div>

        {/* Quick Chord Selector Strip */}
        <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-[11px] text-zinc-400 uppercase font-mono font-bold whitespace-nowrap">
            Testar Acordes:
          </span>
          {Object.keys(DEMO_PRESET_CHORDS).map((chordKey) => (
            <button
              key={chordKey}
              onClick={() => {
                setIsPlayingAuto(false);
                triggerChord(chordKey, true);
              }}
              className={`px-3 py-1.5 rounded-lg font-mono font-bold text-xs whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                selectedChordKey === chordKey
                  ? 'text-black font-extrabold shadow-lg scale-105'
                  : 'bg-zinc-800/80 text-zinc-300 border-zinc-700 hover:bg-zinc-700 hover:text-white'
              }`}
              style={
                selectedChordKey === chordKey
                  ? { backgroundColor: selectedColor.hex, borderColor: selectedColor.hex, boxShadow: `0 0 15px ${selectedColor.glow}` }
                  : {}
              }
            >
              {chordKey}
            </button>
          ))}
        </div>
      </div>

      {/* Waterfall Canvas Area (Synthesia Style) */}
      {isWaterfallActive && (
        <div className="relative w-full h-[120px] sm:h-[140px] bg-[#0E0E12] overflow-hidden border-b border-zinc-800/60">
          <div className="absolute top-2 left-3 z-10 flex items-center gap-2 text-[10px] font-mono bg-black/60 backdrop-blur px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            Cascata Waterfall 60 FPS • Sensibilidade Dinâmica
          </div>
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
      )}

      {/* PIANO KEYBOARD STAGE (61 Keys C2 - C7) */}
      <div className="relative w-full bg-[#0A0A0C] p-2 sm:p-4 select-none overflow-x-auto">
        <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono mb-2 px-1">
          <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            61 Teclas (C2 - C7) • Toque nas teclas para testar o som
          </span>
          <span className="hidden sm:inline text-zinc-400">
            Latência Ultra-Baixa (0ms WebAudio)
          </span>
        </div>

        {/* Realistic 3D Piano Construction */}
        <div className="relative min-w-[720px] sm:min-w-full h-[150px] sm:h-[180px] bg-zinc-950 rounded-xl p-1.5 border border-zinc-800/80 shadow-2xl flex items-stretch justify-between overflow-hidden">
          {/* Top Felt Ribbon */}
          <div className="absolute top-1 left-1.5 right-1.5 h-2 bg-gradient-to-r from-red-900 via-rose-700 to-red-900 rounded-t z-20 shadow-inner"></div>

          {/* White Keys Container */}
          <div className="w-full h-full flex relative pt-2">
            {GENERATED_KEYS.filter(k => !k.isBlack).map((k) => {
              const isActive = activeMidiNotes.includes(k.midi);
              return (
                <button
                  key={k.midi}
                  onClick={() => handleKeyClick(k.midi)}
                  className={`relative flex-1 h-full rounded-b-md border-r border-zinc-300/40 last:border-r-0 transition-all duration-75 cursor-pointer flex flex-col justify-end items-center pb-2 z-10 ${
                    isActive
                      ? 'shadow-[inset_0_-8px_20px_rgba(0,0,0,0.3)] translate-y-1'
                      : 'bg-gradient-to-b from-[#F5F5F7] via-[#FFFFFF] to-[#E5E5E8] hover:bg-zinc-100'
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundColor: selectedColor.hex,
                          boxShadow: `0 0 18px ${selectedColor.glow}, inset 0 -4px 12px rgba(0,0,0,0.3)`,
                          background: `linear-gradient(to top, ${selectedColor.hex}, #ffffff 80%)`
                        }
                      : {}
                  }
                >
                  {/* Octave indicator on C keys */}
                  {k.note.startsWith('C') && (
                    <span className="text-[9px] font-mono font-bold text-zinc-700 absolute bottom-5">
                      {k.note}
                    </span>
                  )}
                  {isActive && (
                    <span className="text-[10px] font-mono font-black text-black absolute bottom-1.5">
                      {getNoteLabel(k.note, k.midi)}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Black Keys Absolute Overlay */}
            {GENERATED_KEYS.map((k, index) => {
              if (!k.isBlack) return null;
              const isActive = activeMidiNotes.includes(k.midi);
              
              // Calculate left percentage offset based on white keys before it
              const whiteIndex = GENERATED_KEYS.slice(0, index).filter(item => !item.isBlack).length;
              const totalWhiteKeys = GENERATED_KEYS.filter(item => !item.isBlack).length;
              const leftPercent = (whiteIndex / totalWhiteKeys) * 100;

              return (
                <button
                  key={k.midi}
                  onClick={() => handleKeyClick(k.midi)}
                  className={`absolute top-2 w-[2.2%] sm:w-[2%] h-[60%] -ml-[1.1%] sm:-ml-[1%] rounded-b-md z-30 transition-all duration-75 cursor-pointer flex flex-col justify-end items-center pb-1 shadow-[2px_4px_8px_rgba(0,0,0,0.8)] ${
                    isActive
                      ? 'translate-y-1'
                      : 'bg-gradient-to-b from-[#1C1C1F] via-[#2A2A2E] to-[#121214] border-t-0 border-x border-b border-black'
                  }`}
                  style={{
                    left: `${leftPercent}%`,
                    ...(isActive
                      ? {
                          backgroundColor: selectedColor.hex,
                          background: `linear-gradient(to top, ${selectedColor.hex}, #ffffff 85%)`,
                          boxShadow: `0 0 20px ${selectedColor.glow}`
                        }
                      : {})
                  }}
                >
                  {isActive && (
                    <span className="text-[8px] font-mono font-black text-black mb-0.5">
                      {k.note}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Studio Configuration & Style Dashboard */}
      <div className="p-4 sm:p-5 bg-[#121216] border-t border-zinc-800/80">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm font-bold text-white">
              Personalização Visual & Estilo das Teclas
            </span>
            <span className="hidden sm:inline text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              ✓ Salvo automaticamente
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsWaterfallActive(!isWaterfallActive)}
              className={`px-3 py-1 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-colors cursor-pointer ${
                isWaterfallActive
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                  : 'bg-zinc-800 text-zinc-400 border-zinc-700'
              }`}
            >
              <span>Cascata (Waterfall)</span>
              <span className={`w-2 h-2 rounded-full ${isWaterfallActive ? 'bg-cyan-400' : 'bg-zinc-600'}`}></span>
            </button>
          </div>
        </div>

        {/* 3-Column Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* 1. Modo de Coloração */}
          <div className="bg-[#18181D] p-3.5 rounded-xl border border-zinc-800">
            <span className="text-[11px] font-bold text-zinc-400 uppercase font-mono block mb-2">
              MODO DE COLORAÇÃO
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => setColorMode('single')}
                className={`p-2 rounded-lg text-left border transition-all cursor-pointer ${
                  colorMode === 'single'
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold'
                    : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                }`}
              >
                <div className="font-semibold text-xs text-white">Cor Única</div>
                <div className="text-[10px] text-zinc-400">Uma cor p/ todas as teclas</div>
              </button>

              <button
                onClick={() => setColorMode('split')}
                className={`p-2 rounded-lg text-left border transition-all cursor-pointer ${
                  colorMode === 'split'
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold'
                    : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                }`}
              >
                <div className="font-semibold text-xs text-white">Mãos Divididas</div>
                <div className="text-[10px] text-zinc-400">Cores p/ mão E / D</div>
              </button>
            </div>
          </div>

          {/* 2. Estilo Visual & Rótulos */}
          <div className="bg-[#18181D] p-3.5 rounded-xl border border-zinc-800">
            <span className="text-[11px] font-bold text-zinc-400 uppercase font-mono block mb-2">
              ESTILO VISUAL & GLOW
            </span>
            <div className="flex gap-1.5 mb-2">
              {(['glow', 'solid', 'gradient'] as const).map((style) => (
                <button
                  key={style}
                  onClick={() => setVisualStyle(style)}
                  className={`flex-1 py-1.5 px-2 rounded text-center border text-[11px] capitalize transition-all cursor-pointer ${
                    visualStyle === style
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold'
                      : 'bg-zinc-900/80 text-zinc-400 border-zinc-800'
                  }`}
                >
                  {style === 'glow' ? 'Neon Glow' : style === 'solid' ? 'Sólido' : 'Gradiente'}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between text-[11px] text-zinc-400">
              <span>Cifras nas Teclas:</span>
              <div className="flex gap-1">
                {(['scientific', 'solfege', 'midi'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setNotationMode(m)}
                    className={`px-2 py-0.5 rounded border text-[10px] transition-all cursor-pointer ${
                      notationMode === m
                        ? 'bg-zinc-700 text-cyan-300 border-cyan-500/40 font-bold'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                    }`}
                  >
                    {m === 'scientific' ? 'C4' : m === 'solfege' ? 'Dó' : 'MIDI 60'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Motor de Áudio & SoundFont */}
          <div className="bg-[#18181D] p-3.5 rounded-xl border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-bold text-zinc-400 uppercase font-mono">
                  MOTOR SOUNDFONT (.SF2)
                </span>
                <span className="text-[10px] text-emerald-400 font-medium">● 48kHz / 24-bit</span>
              </div>

              <select
                value={soundFontName}
                onChange={(e) => setSoundFontName(e.target.value)}
                aria-label="Selecionar SoundFont do VSK"
                className="w-full bg-zinc-900 border border-zinc-700/80 rounded-lg px-2.5 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-cyan-400"
              >
                <option value="Yamaha CFX Grand Piano (.SF2)">Yamaha CFX Grand Piano (.SF2)</option>
                <option value="Nord Piano Upright (.SF2)">Nord Piano Upright (.SF2)</option>
                <option value="Vintage Rhodes MKII 1979 (.SF2)">Vintage Rhodes MKII 1979 (.SF2)</option>
                <option value="Wurlitzer 200A Classic (.SF2)">Wurlitzer 200A Classic (.SF2)</option>
                <option value="Yamaha DX7 FM E-Piano (.SF2)">Yamaha DX7 FM E-Piano (.SF2)</option>
                <option value="Personalizado (Carregar seu .SF2)">+ Carregar Meu SoundFont (.SF2)</option>
              </select>
            </div>

            <div className="flex items-center justify-between text-[11px] text-zinc-400 mt-2">
              <span>Curva de Toque:</span>
              <span className="text-zinc-200 font-medium bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700">
                Dinâmica Normal (0-127)
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
