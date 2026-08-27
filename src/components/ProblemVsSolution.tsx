import { XCircle, CheckCircle2, AlertTriangle, Zap, Clock, ShieldAlert, Cpu, ArrowRight } from 'lucide-react';

interface ProblemVsSolutionProps {
  onOpenCheckout: () => void;
}

export const ProblemVsSolution = ({ onOpenCheckout }: ProblemVsSolutionProps) => {
  return (
    <section id="comparativo" className="py-12 sm:py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-red-500/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#F59E0B]/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#18181B] border border-[#F59E0B]/30 px-3 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-[#FBBF24] mb-3 sm:mb-4">
            <span>⚡ QUEBRA DE OBJEÇÃO & EFICIÊNCIA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Chega de Perder Tempo com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-500">
              Softwares Lentos
            </span>{' '}
            e Configurações Impossíveis.
          </h2>
          <p className="text-xs sm:text-lg text-[#A1A1AA] mt-3 sm:mt-4">
            Veja a diferença brutal entre a dor de cabeça do método tradicional e a simplicidade instantânea do VSK PRO.
          </p>
        </div>

        {/* Side-by-Side Bento Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          
          {/* 1. O MODO ANTIGO (FRUSTRANTE) */}
          <div className="bg-[#121214] border border-[#27272A] rounded-2xl sm:rounded-3xl p-4 sm:p-8 relative overflow-hidden flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-[#27272A] mb-4 sm:mb-6">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                    <XCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white">O Modo Antigo</h3>
                    <p className="text-[10px] sm:text-xs text-red-400 font-mono">Caótico, Pesado & Instável</p>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 text-[10px] sm:text-xs font-mono font-bold border border-red-500/20 whitespace-nowrap">
                  ~15 a 25 min
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#A1A1AA]">
                <li className="flex items-start gap-2.5 sm:gap-3 bg-[#18181B] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#27272A]">
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-xs sm:text-sm">Visualizadores Arcaicos e Feios</strong>
                    <span className="text-[11px] sm:text-xs text-[#71717A]">Configurações chatas de OBS, janelas pixeladas e gráficos ultrapassados dos anos 2000.</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 sm:gap-3 bg-[#18181B] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#27272A]">
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-xs sm:text-sm">DAWs Gigantescas (Reaper, Ableton, Kontakt)</strong>
                    <span className="text-[11px] sm:text-xs text-[#71717A]">Obriga você a carregar bibliotecas de 40GB a 100GB só para ouvir um simples som de piano.</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 sm:gap-3 bg-[#18181B] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#27272A]">
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-xs sm:text-sm">Detectores de Cifras Lentos e Imprecisos</strong>
                    <span className="text-[11px] sm:text-xs text-[#71717A]">Plugins que erram inversões, não reconhecem extensões (7M, 9, 11) e travam a CPU em momentos cruciais.</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 sm:gap-3 bg-[#18181B] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#27272A]">
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-xs sm:text-sm">Cabos Virtuais, Loopback e Latência</strong>
                    <span className="text-[11px] sm:text-xs text-[#71717A]">Horas brigando com drivers ASIO, Soundflower e VoiceMeeter para o áudio sair nas caixas e na live.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Bottom Frustration Tag */}
            <div className="mt-5 sm:mt-8 pt-3 sm:pt-4 border-t border-[#27272A] flex items-center justify-between text-[11px] sm:text-xs text-[#71717A]">
              <span className="flex items-center gap-1.5 text-red-400">
                <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> Alto consumo de RAM
              </span>
              <span className="font-mono text-[#71717A]">Desistência e cansaço</span>
            </div>
          </div>

          {/* 2. O MODO VSK (TUDO EM 1 LUGAR) */}
          <div className="bg-[#121214] border-2 border-[#F59E0B] rounded-2xl sm:rounded-3xl p-4 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-[0_0_50px_rgba(245,158,11,0.12)]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-[#27272A] mb-4 sm:mb-6">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F59E0B]/20 border border-[#F59E0B]/40 flex items-center justify-center text-[#FBBF24] shadow-[0_0_15px_rgba(245,158,11,0.3)] shrink-0">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-[#F59E0B]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-extrabold text-white flex items-center gap-1.5 sm:gap-2">
                      O Modo VSK PRO
                      <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#F59E0B]/10 text-[#FBBF24] text-[9px] sm:text-[10px] font-mono border border-[#F59E0B]/30 font-bold">
                        PRO
                      </span>
                    </h3>
                    <p className="text-[10px] sm:text-xs text-[#FBBF24] font-mono">Simples, Leve & Ultra-Moderno</p>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#F59E0B]/10 text-[#FBBF24] text-[10px] sm:text-xs font-mono font-bold border border-[#F59E0B]/30 shadow-sm whitespace-nowrap">
                  ⚡ 3 Segundos
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#E4E4E7]">
                <li className="flex items-start gap-2.5 sm:gap-3 bg-[#18181B] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#27272A]">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FBBF24] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-xs sm:text-sm">1 Clique: Abra no Navegador ou Desktop</strong>
                    <span className="text-[11px] sm:text-xs text-[#A1A1AA]">Sem instalação pesada, sem dependências complexas. Interface dark studio cinematográfica pronta para o uso.</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 sm:gap-3 bg-[#18181B] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#27272A]">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FBBF24] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-xs sm:text-sm">Conecte o Teclado MIDI e Toque Instantaneamente</strong>
                    <span className="text-[11px] sm:text-xs text-[#A1A1AA]">Reconhecimento plug & play automático USB/Bluetooth sem necessidade de drivers manuais ou roteamento.</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 sm:gap-3 bg-[#18181B] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#27272A]">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FBBF24] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-xs sm:text-sm">Timbres SoundFont (.SF2) Reais Embutidos</strong>
                    <span className="text-[11px] sm:text-xs text-[#A1A1AA]">Motor de áudio de alta fidelidade 48kHz integrado com controle de sensibilidade dinâmica, ganho e limiter anti-clip.</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 sm:gap-3 bg-[#18181B] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#27272A]">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FBBF24] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-xs sm:text-sm">Identificação Harmônica Inteligente & Waterfall 60FPS</strong>
                    <span className="text-[11px] sm:text-xs text-[#A1A1AA]">Cifras precisas em tempo real com leitura de baixo/inversões e cascata vertical Synthesia fluida.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Bottom Quick Action */}
            <div className="mt-5 sm:mt-8 pt-3 sm:pt-4 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="flex items-center gap-1.5 text-[#FBBF24] text-[11px] sm:text-xs font-mono text-center sm:text-left">
                <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> 95% mais leve que DAWs tradicionais
              </span>

              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto px-4 sm:px-5 py-3 sm:py-2.5 rounded-xl text-xs font-black text-black bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706] hover:from-[#FEF08A] hover:to-[#F59E0B] shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all uppercase tracking-tight flex items-center justify-center gap-1.5 cursor-pointer min-h-[44px]"
              >
                <span>Mudar para o VSK PRO</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
