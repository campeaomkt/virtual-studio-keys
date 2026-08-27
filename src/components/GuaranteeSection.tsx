import { ShieldCheck, ArrowRight, RefreshCw, Sparkles } from 'lucide-react';

interface GuaranteeSectionProps {
  onOpenCheckout: () => void;
}

export const GuaranteeSection = ({ onOpenCheckout }: GuaranteeSectionProps) => {
  return (
    <section className="py-12 sm:py-20 bg-[#0A0A0A] relative overflow-hidden border-t border-[#27272A]">
      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="bg-[#121214] border border-[#27272A] rounded-2xl sm:rounded-3xl p-4 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Guarantee Seal Stamp Graphic */}
          <div className="shrink-0 flex flex-col items-center justify-center">
            <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-[#18181B] border-2 border-emerald-500/40 p-1.5 sm:p-2 shadow-[0_0_40px_rgba(16,185,129,0.15)] flex items-center justify-center">
              <div className="w-full h-full bg-[#121214] rounded-full flex flex-col items-center justify-center text-center p-2 border border-[#27272A]">
                <ShieldCheck className="w-6 h-6 sm:w-10 sm:h-10 text-emerald-400 mb-0.5 sm:mb-1" />
                <span className="text-lg sm:text-2xl font-black text-white font-mono leading-none">
                  7 DIAS
                </span>
                <span className="text-[8px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-widest mt-0.5">
                  GARANTIA TOTAL
                </span>
              </div>
            </div>
          </div>

          {/* Guarantee Copy */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#18181B] border border-[#27272A] px-3 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-emerald-400 mb-2.5 sm:mb-3">
              <span>🛡️ RISCO ZERO ABSOLUTO</span>
            </div>
            
            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 sm:mb-3 leading-snug">
              Garantia Blindada de Satisfação de 7 Dias
            </h3>

            <p className="text-xs sm:text-base text-[#A1A1AA] leading-relaxed mb-3 sm:mb-4">
              Teste o <strong>VSK Studio PRO</strong> por 7 dias completos. Conecte seu teclado MIDI, toque com os SoundFonts, grave suas músicas e teste em suas aulas ou lives.
            </p>

            <p className="text-xs sm:text-base text-[#E4E4E7] leading-relaxed mb-4 sm:mb-6 font-medium">
              "Se o VSK não transformar a forma como você estuda, toca e grava seu teclado, devolvemos 100% do seu dinheiro sem perguntas e sem letras miúdas."
            </p>

            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm text-black bg-[#00F2FE] hover:bg-[#38BDF8] shadow-[0_10px_30px_rgba(0,242,254,0.25)] hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-tight cursor-pointer min-h-[48px]"
            >
              <span>EXPERIMENTAR COM GARANTIA DE 7 DIAS</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
