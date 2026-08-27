import { useState, useEffect } from 'react';
import { Zap, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface StickyCtaBarProps {
  onOpenCheckout: () => void;
}

export const StickyCtaBar = ({ onOpenCheckout }: StickyCtaBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsVisible(rect.bottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-[#27272A] px-3 py-2.5 sm:p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] transition-all animate-in slide-in-from-bottom-5 duration-300">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
        
        {/* Left Info */}
        <div className="flex items-center gap-2.5 sm:gap-3 text-center sm:text-left w-full sm:w-auto justify-between sm:justify-start">
          <div className="w-9 h-9 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center justify-center shrink-0 hidden sm:flex text-base">
            🎹
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-extrabold text-xs sm:text-sm text-white font-mono">VSK Studio PRO</span>
              <span className="px-1.5 sm:px-2 py-0.2 rounded-full bg-[#00F2FE]/10 text-[#00F2FE] text-[9px] sm:text-[10px] font-bold border border-[#00F2FE]/30">
                LIFETIME
              </span>
              <span className="text-xs text-[#71717A] hidden md:inline">
                • Visualizador MIDI + SF2 SoundFonts
              </span>
            </div>
            <div className="text-[10px] sm:text-xs text-[#71717A] mt-0.5">
              De <span className="line-through text-red-400">R$ 197</span> por <strong className="text-[#00F2FE] font-mono text-xs sm:text-sm">R$ 77,90</strong> <span className="hidden xs:inline">(8x R$ 10,85)</span>
            </div>
          </div>

          <button
            onClick={onOpenCheckout}
            className="sm:hidden px-4 py-2.5 rounded-xl font-black text-xs text-black bg-[#00F2FE] hover:bg-[#38BDF8] shadow-[0_5px_20px_rgba(0,242,254,0.3)] active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-tight shrink-0 min-h-[40px]"
          >
            <Zap className="w-3.5 h-3.5 fill-black text-black shrink-0" />
            <span>GARANTIR</span>
          </button>
        </div>

        {/* Right CTA for Desktop / Tablet */}
        <div className="hidden sm:flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-2xl font-black text-xs sm:text-sm text-black bg-[#00F2FE] hover:bg-[#38BDF8] shadow-[0_5px_20px_rgba(0,242,254,0.3)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tight min-h-[44px]"
          >
            <Zap className="w-4 h-4 fill-black text-black" />
            <span>QUERO ACESSO AO VSK PRO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
