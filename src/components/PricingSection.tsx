import { useState, useEffect } from 'react';
import { Check, ShieldCheck, Zap, Sparkles, ArrowRight, Lock, CreditCard, QrCode, FileText } from 'lucide-react';

interface PricingSectionProps {
  onOpenCheckout: () => void;
}

export const PricingSection = ({ onOpenCheckout }: PricingSectionProps) => {
  // Scarcity countdown timer
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 27, seconds: 43 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 2, minutes: 45, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const benefits = [
    'Acesso Completo ao VSK - Virtual Studio Keys PRO',
    'Motor de Áudio SoundFont (.SF2) Desbloqueado',
    'Todos os Temas e Estilos Visuais Inclusos (Glow, Neon, Split)',
    'Detector de Acordes Avançado sem limite de uso',
    'Cascata Waterfall 60FPS com personalização total',
    'Conexão Plug & Play Universal com qualquer Teclado USB-MIDI',
    'Pacote Bônus: Mega Pack SoundFonts de Pianos e Rhodes',
    'Pacote Bônus: Guia de Overlays OBS Studio e Streaming',
    'Pacote Bônus: Dicionário de Cifras e Voicings Modernos',
    'Todas as atualizações e melhorias futuras inclusas',
    'Acesso Vitalício Único (Sem mensalidades nem assinaturas!)'
  ];

  return (
    <section id="oferta" className="py-12 sm:py-28 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[900px] h-[350px] sm:h-[550px] bg-[#F59E0B]/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#18181B] border border-[#F59E0B]/30 px-3 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-[#FBBF24] mb-3 sm:mb-4 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FBBF24]" />
            <span>OFERTA DE LANÇAMENTO EXCLUSIVA</span>
          </div>

          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Invista Uma Única Vez no Seu Estúdio.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706]">
              Colha Resultados Para Sempre.
            </span>
          </h2>
          <p className="text-xs sm:text-lg text-[#A1A1AA] mt-3 sm:mt-4">
            Tenha em mãos a ferramenta definitiva que vai destravar sua visão harmônica e transformar a qualidade visual das suas músicas.
          </p>

          {/* Countdown Timer Scarcity */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 px-3 sm:px-4 py-2 rounded-xl sm:rounded-2xl bg-[#121214] border border-[#27272A] text-[#A1A1AA] font-mono text-[11px] sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span>Esta oferta especial encerra em:</span>
            <div className="flex items-center gap-1 font-bold text-white">
              <span className="bg-[#18181B] px-1.5 sm:px-2 py-0.5 rounded-lg border border-[#F59E0B]/30 text-[#FBBF24]">
                {String(timeLeft.hours).padStart(2, '0')}h
              </span>
              :
              <span className="bg-[#18181B] px-1.5 sm:px-2 py-0.5 rounded-lg border border-[#F59E0B]/30 text-[#FBBF24]">
                {String(timeLeft.minutes).padStart(2, '0')}m
              </span>
              :
              <span className="bg-[#18181B] px-1.5 sm:px-2 py-0.5 rounded-lg border border-[#F59E0B]/30 text-[#FBBF24]">
                {String(timeLeft.seconds).padStart(2, '0')}s
              </span>
            </div>
          </div>
        </div>

        {/* ALERTA COMPARATIVO: CONCORRENTES COBRAM +R$500 E ENTREGAM MENOS */}
        <div className="max-w-2xl mx-auto mb-8 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#1C1917] via-[#141210] to-[#18181B] border-2 border-[#EF4444]/40 shadow-[0_0_35px_rgba(239,68,68,0.15)] text-left">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#EF4444]/15 border border-[#EF4444]/40 flex items-center justify-center text-[#EF4444] shrink-0 text-xl font-black">
              ⚠️
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EF4444]/15 border border-[#EF4444]/30 text-[#F87171] text-[10px] font-mono font-bold uppercase tracking-wider mb-1.5">
                Custo-Benefício Imbatível
              </div>
              <h3 className="text-sm sm:text-lg font-black text-white leading-snug">
                O concorrente cobra <span className="text-[#EF4444] underline decoration-[#EF4444]/60">mais de R$ 500</span> e entrega <span className="text-[#FDE047] font-black">MUITO MENOS!</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#D4D4D8] mt-1.5 leading-relaxed">
                Enquanto outros cobram mensalidades caras de mais de <strong className="text-white">R$ 500,00</strong> e exigem computadores pesados com DAWs complexas, o <strong className="text-[#FBBF24]">VSK Studio PRO</strong> entrega tudo integrado, leve e com pagamento único.
              </p>
              
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2.5 border-t border-[#27272A]">
                <div className="p-2.5 rounded-xl bg-black/40 border border-[#EF4444]/20 flex items-center gap-2">
                  <span className="text-[#EF4444] font-bold text-sm">✕</span>
                  <div className="text-[11px] text-[#A1A1AA]">
                    <strong className="text-[#F87171]">Outros:</strong> +R$500, assinaturas e travamentos.
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/40 flex items-center gap-2">
                  <span className="text-[#FBBF24] font-bold text-sm">✓</span>
                  <div className="text-[11px] text-[#E4E4E7]">
                    <strong className="text-[#FDE047]">VSK Studio:</strong> Pagamento único e leve.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN BENTO PRICING CARD */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#121214] border-2 border-[#F59E0B] p-4 sm:p-10 shadow-[0_0_60px_rgba(245,158,11,0.2)] overflow-hidden">
            
            {/* Top Ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FDE047] to-[#F59E0B] text-black text-[9px] sm:text-[11px] font-black uppercase font-mono tracking-wider px-3 sm:px-6 py-1 sm:py-1.5 rounded-bl-xl sm:rounded-bl-2xl shadow-lg">
              60% DE DESCONTO
            </div>

            {/* Header / Plan Title */}
            <div className="mb-5 sm:mb-6 pt-1 sm:pt-2">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl">🎹</span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                  VSK Studio
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-[#F59E0B]/10 text-[#FBBF24] text-[10px] sm:text-xs font-black font-mono border border-[#F59E0B]/30">
                  PRO
                </span>
              </div>
              <p className="text-[11px] sm:text-sm text-[#71717A] mt-1">
                Licença Vitalícia com Acesso Imediato a Todas as Funções e Bônus
              </p>
            </div>

            {/* Price Anchor Box */}
            <div className="bg-[#18181B] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#27272A] mb-6 sm:mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <div>
                <div className="text-[11px] sm:text-sm text-[#71717A] font-mono">
                  De <span className="line-through text-red-400 font-bold">R$ 197,00</span> por apenas:
                </div>
                <div className="flex items-baseline justify-center sm:justify-start gap-1.5 sm:gap-2 mt-1">
                  <span className="text-xs sm:text-sm font-bold text-[#71717A]">R$</span>
                  <span className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706] font-mono tracking-tight">
                    77,90
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#71717A] font-medium font-mono">À VISTA</span>
                </div>
                <div className="text-[11px] sm:text-xs text-[#FBBF24] font-semibold mt-1">
                  ou em até <strong>8x de R$ 10,85</strong> no cartão
                </div>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-center w-full sm:w-auto">
                <div className="text-[9px] sm:text-[10px] font-mono uppercase text-emerald-400 font-bold">ECONOMIA DE</div>
                <div className="text-base sm:text-lg font-black text-emerald-400 font-mono">R$ 119,10</div>
              </div>
            </div>

            {/* Checklist of Included Items */}
            <div className="mb-6 sm:mb-8">
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#71717A] font-mono mb-3 sm:mb-4">
                O QUE VOCÊ VAI RECEBER NO PACOTE COMPLETO:
              </div>
              <ul className="space-y-2.5 sm:space-y-3">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#E4E4E7]">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#F59E0B]/10 text-[#FBBF24] border border-[#F59E0B]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <span className={idx >= 9 ? 'font-semibold text-white' : ''}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Big Purchase CTA Button */}
            <a
              id="pricing-cta-button"
              href="https://pay.cakto.com.br/56bxe73_1068948"
              className="w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-sm sm:text-lg text-black bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706] hover:from-[#FEF08A] hover:to-[#F59E0B] shadow-[0_10px_40px_rgba(245,158,11,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-200 uppercase tracking-tight flex items-center justify-center gap-2 sm:gap-3 cursor-pointer min-h-[50px] text-center"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-black text-black shrink-0" />
              <span>QUERO ACESSO AO VSK STUDIO PRO</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform shrink-0" />
            </a>

            {/* Security & Payment Icons */}
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#27272A] flex flex-col items-center gap-2 sm:gap-3 text-xs text-[#71717A]">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#A1A1AA] font-medium text-[11px] sm:text-xs text-center">
                <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Pagamento 100% Criptografado & Seguro (SSL 256 bits)</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[#71717A] font-mono text-[10px] sm:text-[11px]">
                <span className="flex items-center gap-1">
                  <QrCode className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FBBF24]" /> PIX Instantâneo
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CreditCard className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FBBF24]" /> Cartão de Crédito
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FBBF24]" /> Boleto Bancário
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
