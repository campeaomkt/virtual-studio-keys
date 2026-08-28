import { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Star, Music, Check, Headphones, Laptop, Award, Play, Volume2, Maximize2, Clock } from 'lucide-react';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection = ({ onOpenCheckout }: HeroSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="hero" className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      {/* Dynamic Background Studio Lighting Elements */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] bg-gradient-to-tr from-[#F59E0B]/10 via-amber-600/5 to-yellow-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-10 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#F59E0B]/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -z-10"></div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* TWO-COLUMN HERO GRID (Desktop 50/50 - Left Info / Right 16:9 Video) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: All Sales Copy, Headlines & CTA */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Top Badge Bento Pill */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#18181B] border border-[#F59E0B]/30 px-3 sm:px-3.5 py-1.5 rounded-full text-[9px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-[#FBBF24] mb-4 sm:mb-5 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse"></span>
              <span>TUDO EM UM ÚNICO AMBIENTE - NÃO PRECISA DE INTERNET PARA RODAR</span>
            </div>

            {/* Master Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 sm:mb-5 font-sans">
              Enxergue, Toque e Ensine Música com o{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706] drop-shadow-[0_0_25px_rgba(245,158,11,0.35)]">
                Poderoso Visualizador
              </span>{' '}
              de Teclado MIDI.
            </h1>

            {/* Subheadline */}
            <p className="text-xs sm:text-base text-[#A1A1AA] leading-relaxed mb-6 sm:mb-7 font-normal max-w-2xl">
              Conecte seu teclado MIDI via USB ou Bluetooth e tenha instantaneamente: 
              <strong className="text-[#E4E4E7] font-semibold"> cascata de notas estilo Synthesia</strong>, 
              <strong className="text-[#E4E4E7] font-semibold"> leitura de cifras em tempo real</strong> e 
              <strong className="text-[#E4E4E7] font-semibold"> timbres reais de piano SoundFont (.SF2)</strong> sem depender de Kontakt, MainStage ou DAWs pesadas.
            </p>

            {/* Primary High-Impact CTA Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-primary-cta-btn"
                onClick={onOpenCheckout}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4.5 rounded-2xl font-black text-xs sm:text-base text-black bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706] hover:from-[#FEF08A] hover:to-[#F59E0B] shadow-[0_10px_35px_rgba(245,158,11,0.35)] hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-tight flex items-center justify-center gap-2 sm:gap-2.5 cursor-pointer min-h-[48px]"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-black fill-black shrink-0" />
                <span>QUERO ACESSO AO VSK STUDIO PRO</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

            {/* CTA Micro Subtext Checkmarks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-5 mt-4 text-[11px] sm:text-xs text-[#71717A] font-medium">
              <span className="flex items-center gap-1.5 text-[#A1A1AA]">
                <Check className="w-3.5 h-3.5 text-[#FBBF24] shrink-0" /> Acesso Imediato
              </span>
              <span className="flex items-center gap-1.5 text-[#A1A1AA]">
                <Check className="w-3.5 h-3.5 text-[#FBBF24] shrink-0" /> Sem Mensalidades (Vitalício)
              </span>
              <span className="flex items-center gap-1.5 text-[#A1A1AA]">
                <Check className="w-3.5 h-3.5 text-[#FBBF24] shrink-0" /> Garantia Incondicional 7 Dias
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: 16:9 Demonstration Video Container in Bento Style */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-3xl bg-[#121214] border border-[#27272A] p-2 sm:p-3 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden group hover:border-[#F59E0B]/40 transition-all duration-300">
              
              {/* Window Header Dots */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#27272A] mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80"></span>
                </div>
                <div className="text-[10px] font-mono font-bold tracking-wider text-[#71717A] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse"></span>
                  <span>VSK PRO • DEMO OFICIAL</span>
                </div>
                <div className="text-[9px] font-mono text-[#FBBF24] bg-[#F59E0B]/10 px-2 py-0.5 rounded-full border border-[#F59E0B]/30 font-bold">
                  16:9 HD
                </div>
              </div>

              {/* 16:9 Aspect Ratio Video Box */}
              <div className="relative w-full aspect-[16/9] rounded-2xl bg-[#0A0A0C] border border-[#27272A] overflow-hidden flex items-center justify-center">
                
                {isPlaying ? (
                  <div className="w-full h-full bg-black relative">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/UuNhlJmKjiw?autoplay=1&rel=0"
                      title="VSK Studio PRO - Demonstração"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <>
                    {/* Video Poster Background with Dark Studio Vibe */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#181822] via-[#0D0D12] to-[#0A0A0C] flex items-center justify-center">
                      
                      {/* Ambient Gold Glow */}
                      <div className="absolute inset-0 bg-radial from-[#F59E0B]/10 to-transparent"></div>
                      
                      {/* Graphic Preview Simulation of Piano & Chords */}
                      <div className="absolute inset-0 opacity-40 flex flex-col justify-end p-4 pointer-events-none select-none">
                        {/* Piano keys silhouette */}
                        <div className="flex justify-center gap-1 opacity-70">
                          <div className="w-5 h-12 bg-white rounded-b"></div>
                          <div className="w-4 h-8 bg-zinc-900 rounded-b -mx-2 z-10"></div>
                          <div className="w-5 h-12 bg-[#F59E0B] rounded-b shadow-[0_0_15px_#F59E0B]"></div>
                          <div className="w-4 h-8 bg-zinc-900 rounded-b -mx-2 z-10"></div>
                          <div className="w-5 h-12 bg-white rounded-b"></div>
                          <div className="w-5 h-12 bg-white rounded-b"></div>
                          <div className="w-4 h-8 bg-zinc-900 rounded-b -mx-2 z-10"></div>
                          <div className="w-5 h-12 bg-[#F59E0B] rounded-b shadow-[0_0_15px_#F59E0B]"></div>
                          <div className="w-5 h-12 bg-white rounded-b"></div>
                        </div>
                      </div>

                    </div>

                    {/* Central Play Button */}
                    <button
                      onClick={() => setIsPlaying(true)}
                      aria-label="Assistir demonstração em vídeo"
                      className="relative z-20 group/btn flex flex-col items-center gap-2.5 cursor-pointer"
                    >
                      <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706] text-black flex items-center justify-center shadow-[0_0_35px_rgba(245,158,11,0.6)] group-hover/btn:scale-110 group-hover/btn:from-[#FEF08A] group-hover/btn:to-[#F59E0B] transition-all duration-300">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black text-black ml-1" />
                      </div>
                      <div className="text-center">
                        <span className="block text-xs font-black uppercase tracking-wider text-white group-hover/btn:text-[#FBBF24] transition-colors">
                          VER VSK EM AÇÃO
                        </span>
                        <span className="text-[10px] text-[#A1A1AA] font-mono tracking-tight">
                          CLIQUE E ASSISTA A DEMONSTRAÇÃO
                        </span>
                      </div>
                    </button>
                  </>
                )}

              </div>

              {/* Destaque Instalável - Simples, rápido e imediato */}
              <div className="mt-3 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#18181B] via-[#1F1C15] to-[#18181B] border-2 border-[#F59E0B]/50 shadow-[0_0_25px_rgba(245,158,11,0.15)] text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FDE047] to-[#F59E0B] flex items-center justify-center text-black shrink-0 shadow-md">
                    <Zap className="w-5 h-5 fill-black text-black" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs sm:text-sm font-black text-white uppercase tracking-tight">
                        É SIMPLES • ARQUIVO INSTALÁVEL
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#FBBF24] text-[10px] font-mono font-bold border border-[#F59E0B]/40">
                        SEM COMPLICAÇÃO
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#E4E4E7] mt-0.5 font-medium leading-snug">
                      É um arquivo instalável: instalou <strong className="text-white">uma única vez</strong> e pronto, o aplicativo <strong className="text-[#FBBF24]">já funciona na hora!</strong>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BENTO HERO MINI-GRID STATS & PROOF */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          <div className="bg-[#121214] border border-[#27272A] p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:border-[#F59E0B]/30 transition-colors">
            <div className="text-[#FBBF24] mb-0.5 sm:mb-1 font-bold text-[11px] sm:text-xs uppercase tracking-tight font-mono">Waterfall 60FPS</div>
            <div className="text-[11px] sm:text-xs text-[#71717A] leading-tight">Cascata de notas fluida e precisa com aceleração GPU.</div>
          </div>
          <div className="bg-[#121214] border border-[#27272A] p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:border-[#F59E0B]/30 transition-colors">
            <div className="text-[#FBBF24] mb-0.5 sm:mb-1 font-bold text-[11px] sm:text-xs uppercase tracking-tight font-mono">Motor Acordes</div>
            <div className="text-[11px] sm:text-xs text-[#71717A] leading-tight">Detecção de tétrades, tensões e inversões em tempo real.</div>
          </div>
          <div className="bg-[#121214] border border-[#27272A] p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:border-[#F59E0B]/30 transition-colors">
            <div className="text-[#FBBF24] mb-0.5 sm:mb-1 font-bold text-[11px] sm:text-xs uppercase tracking-tight font-mono">Timbres .SF2</div>
            <div className="text-[11px] sm:text-xs text-[#71717A] leading-tight">Pianos acústicos e vintage integrados sem abrir DAWs.</div>
          </div>
          <div className="bg-[#121214] border border-[#27272A] p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:border-[#F59E0B]/30 transition-colors">
            <div className="text-[#FBBF24] mb-0.5 sm:mb-1 font-bold text-[11px] sm:text-xs uppercase tracking-tight font-mono">Sensibilidade</div>
            <div className="text-[11px] sm:text-xs text-[#71717A] leading-tight">Ajuste de curva dinâmica de peso e resposta de toque.</div>
          </div>
        </div>

        {/* DEMO PROGRAMA ABERTO SHOWCASE */}
        <div className="mt-8 sm:mt-12 relative">
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#121214] border-2 border-[#F59E0B]/40 p-1.5 sm:p-2.5 shadow-[0_0_50px_rgba(245,158,11,0.15)] overflow-hidden">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-[#27272A]">
              <img
                src="https://eliabcamposteclas.com/wp-content/uploads/2026/08/demo-vsk.png"
                alt="Demonstração do VSK Studio PRO Aberto"
                className="w-full h-auto object-contain rounded-xl sm:rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Informação de Compatibilidade de Sistema Operacional */}
          <div className="mt-3.5 sm:mt-4 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#18181B] via-[#151518] to-[#18181B] border border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-10 h-10 rounded-xl bg-[#1F1C15] border border-[#F59E0B]/30 flex items-center justify-center text-[#FBBF24] shrink-0">
                <Laptop className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight font-mono">
                    Compatibilidade do Sistema
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] sm:text-xs font-mono font-bold border border-emerald-500/30 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Funciona em Windows
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#F59E0B]/10 text-[#FBBF24] text-[10px] sm:text-xs font-mono font-bold border border-[#F59E0B]/30 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Em Breve iOS
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1 leading-snug">
                  Por enquanto o VSK funciona exclusivamente em <strong className="text-white">Windows</strong> (computadores e notebooks). Em breve funcionará em <strong className="text-[#FBBF24]">iOS</strong> também!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SOCIAL PROOF BAR & TRUSTED BRANDS */}
        <div className="mt-10 sm:mt-18 pt-8 sm:pt-10 border-t border-[#27272A]">
          <div className="text-center mb-5 sm:mb-6">
            <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-[#71717A] font-mono">
              Para usar por tecladistas em lives, aulas online, igrejas e estúdios de gravação
            </p>
          </div>

          {/* Bento Stat Badges (Cleaned - Latency & Compatibility) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto mb-6 sm:mb-8">
            <div className="bg-[#121214] p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#27272A] text-center hover:border-[#F59E0B]/30 transition-colors">
              <div className="text-xl sm:text-2xl font-black text-[#FBBF24] font-mono">0ms</div>
              <div className="text-[11px] sm:text-xs text-[#71717A] mt-0.5 sm:mt-1">Latência Ultra Baixa Nativa</div>
            </div>
            <div className="bg-[#121214] p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#27272A] text-center hover:border-[#F59E0B]/30 transition-colors">
              <div className="text-xl sm:text-2xl font-black text-[#E4E4E7] font-mono">100%</div>
              <div className="text-[11px] sm:text-xs text-[#71717A] mt-0.5 sm:mt-1">Compatível com Teclados MIDI</div>
            </div>
          </div>

          {/* Brand Names Compatibility Banner */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-8 lg:gap-10 opacity-60 text-[10px] sm:text-sm font-mono uppercase tracking-wider text-[#71717A]">
            <span>YAMAHA</span>
            <span>•</span>
            <span>ROLAND</span>
            <span>•</span>
            <span>NORD</span>
            <span>•</span>
            <span>KORG</span>
            <span>•</span>
            <span>CASIO</span>
            <span>•</span>
            <span>ARTURIA</span>
            <span>•</span>
            <span>NOVATION</span>
            <span>•</span>
            <span>ALESIS</span>
            <span>•</span>
            <span>BEHRINGER</span>
          </div>

        </div>

      </div>
    </section>
  );
};

