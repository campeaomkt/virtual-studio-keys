import { useState } from 'react';
import { Sparkles, Music, Play, Volume2, CheckCircle2, Sliders, ArrowRight } from 'lucide-react';
import { DEMO_PRESET_CHORDS, COLOR_PALETTES } from '../utils/chordDetector';
import { playChord } from '../utils/audioSynth';

interface ChordExplorerProps {
  onOpenCheckout: () => void;
}

export const InteractiveChordExplorer = ({ onOpenCheckout }: ChordExplorerProps) => {
  const [activeChordKey, setActiveChordKey] = useState('C7M(9)');
  const chordInfo = DEMO_PRESET_CHORDS[activeChordKey];

  const handlePlayChord = (key: string) => {
    setActiveChordKey(key);
    const chord = DEMO_PRESET_CHORDS[key];
    if (chord) {
      playChord(chord.midiNotes, 0.85, 2.8);
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#18181B] border border-[#F59E0B]/30 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest text-[#FBBF24] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
            <span>EXPERIMENTE A INTELIGÊNCIA HARMÔNICA DO VSK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Clique e Ouça Voicings Avançados de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706]">
              Worship, Neo-Soul & Jazz
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] mt-4">
            O VSK desvenda cada nota e inversão instantaneamente na tela enquanto você toca.
          </p>
        </div>

        {/* Interactive Explorer Bento Box */}
        <div className="bg-[#121214] border border-[#27272A] rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Chord Selector Buttons */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono font-bold text-[#71717A] uppercase mb-2">
                Selecione uma Harmonia para Testar o Motor:
              </div>

              {Object.entries(DEMO_PRESET_CHORDS).map(([key, chord]) => {
                const isSelected = activeChordKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => handlePlayChord(key)}
                    className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#18181B] border-[#F59E0B] shadow-[0_0_20px_rgba(245,158,11,0.2)] translate-x-1'
                        : 'bg-[#18181B]/60 border-[#27272A] text-[#A1A1AA] hover:bg-[#18181B] hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-black font-mono text-white">
                          {chord.name}
                        </span>
                        <span className="text-xs text-[#71717A]">
                          {chord.mood.split('/')[0]}
                        </span>
                      </div>
                      <div className="text-xs text-[#71717A] mt-0.5">
                        {chord.solfege}
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-gradient-to-r from-[#FDE047] to-[#F59E0B] text-black shadow-md' : 'bg-[#27272A] text-[#71717A]'
                    }`}>
                      <Volume2 className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Real-time Analysis Card */}
            <div className="lg:col-span-7 bg-[#18181B] border border-[#27272A] rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center justify-between border-b border-[#27272A] pb-4 mb-6">
                <div className="text-xs font-mono uppercase text-[#71717A]">
                  DIAGNÓSTICO HARMÔNICO EM TEMPO REAL
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#FBBF24] text-xs font-mono font-bold border border-[#F59E0B]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse"></span>
                  Algoritmo VSK Ativo
                </div>
              </div>

              {/* Big Chord Name */}
              <div className="mb-6">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706] font-mono">
                  {chordInfo.name}
                </div>
                <div className="text-base sm:text-lg text-[#E4E4E7] font-medium mt-1">
                  {chordInfo.solfege}
                </div>
              </div>

              {/* Technical breakdown grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-[#121214] p-3.5 rounded-2xl border border-[#27272A]">
                  <div className="text-[10px] text-[#71717A] font-mono uppercase">Fórmula Intervalar</div>
                  <div className="text-xs sm:text-sm font-bold text-[#FBBF24] font-mono mt-0.5">
                    {chordInfo.formula}
                  </div>
                </div>

                <div className="bg-[#121214] p-3.5 rounded-2xl border border-[#27272A]">
                  <div className="text-[10px] text-[#71717A] font-mono uppercase">Baixo / Inversão</div>
                  <div className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5">
                    {chordInfo.bass} ({chordInfo.inversion})
                  </div>
                </div>

                <div className="bg-[#121214] p-3.5 rounded-2xl border border-[#27272A] col-span-2 sm:col-span-1">
                  <div className="text-[10px] text-[#71717A] font-mono uppercase">Estilo Musical</div>
                  <div className="text-xs sm:text-sm font-bold text-[#E4E4E7] font-mono mt-0.5">
                    {chordInfo.mood}
                  </div>
                </div>
              </div>

              {/* Notes pill display */}
              <div className="bg-[#121214] p-4 rounded-2xl border border-[#27272A]">
                <div className="text-xs text-[#71717A] font-mono mb-2">Notas Ativas no Teclado:</div>
                <div className="flex flex-wrap gap-2">
                  {chordInfo.notes.map((n, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-xl bg-[#F59E0B]/10 text-[#FBBF24] border border-[#F59E0B]/30 text-sm font-mono font-bold"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[#27272A]">
                <span className="text-xs text-[#71717A]">
                  Toque livremente no seu teclado MIDI para analisar qualquer acorde.
                </span>
                <button
                  onClick={onOpenCheckout}
                  className="px-5 py-2.5 rounded-xl text-xs font-black text-black bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706] hover:from-[#FEF08A] hover:to-[#F59E0B] shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all uppercase tracking-tight flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Garantir VSK PRO</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
