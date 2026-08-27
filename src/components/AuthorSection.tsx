import React from 'react';
import { Award, Music, BookOpen, Users, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface AuthorSectionProps {
  onOpenCheckout?: () => void;
}

export const AuthorSection: React.FC<AuthorSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0B0B0C] via-[#141417] to-[#0B0B0C] relative overflow-hidden border-t border-[#27272A]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#FDE047]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Pill Badge */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#FBBF24] text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            Quem Criou o VSK Studio PRO
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Conheça o Criador por Trás do Software
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl mx-auto mt-2">
            Desenvolvido por quem vive a prática do teclado diariamente nos palcos, igrejas e salas de aula.
          </p>
        </div>

        {/* Bio Card Grid */}
        <div className="rounded-3xl bg-gradient-to-br from-[#18181B] via-[#141416] to-[#121214] border-2 border-[#F59E0B]/30 p-6 sm:p-10 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Author Photo Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm sm:max-w-md">
                {/* Glow ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F59E0B] via-[#FDE047] to-[#F59E0B] rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden bg-black border-2 border-[#F59E0B]/60 shadow-2xl">
                  <img
                    src="https://eliabcamposteclas.com/wp-content/uploads/2026/05/app-tela-1.jpg"
                    alt="Eliab Campos dos Santos - Tecladista e Professor"
                    className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Photo Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-[#F59E0B]/40 flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm leading-none">Eliab Campos</p>
                      <p className="text-[#FBBF24] text-xs font-mono mt-1">+15 Anos de Experiência</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/20 border border-[#F59E0B]/40 flex items-center justify-center text-[#FBBF24]">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats below photo */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-sm sm:max-w-md mt-4 text-center">
                <div className="p-2.5 rounded-xl bg-[#1F1F23] border border-[#27272A]">
                  <div className="text-base sm:text-lg font-black text-[#FBBF24]">+15</div>
                  <div className="text-[10px] text-[#A1A1AA] font-medium leading-tight">Anos de Teclado</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#1F1F23] border border-[#27272A]">
                  <div className="text-base sm:text-lg font-black text-[#FBBF24]">+5.000</div>
                  <div className="text-[10px] text-[#A1A1AA] font-medium leading-tight">Alunos e Tecladistas</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#1F1F23] border border-[#27272A]">
                  <div className="text-base sm:text-lg font-black text-[#FBBF24]">100%</div>
                  <div className="text-[10px] text-[#A1A1AA] font-medium leading-tight">Prático e Direto</div>
                </div>
              </div>
            </div>

            {/* Biography Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#27272A] text-[#FDE047] text-xs font-mono font-semibold w-fit mb-3">
                <Music className="w-3.5 h-3.5 text-[#F59E0B]" />
                Tecladista Profissional & Educador Musical
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Eliab Campos dos Santos
              </h3>
              
              <p className="text-[#FBBF24] font-medium text-sm sm:text-base mt-1">
                Especialista em Harmonia, Teclado Prático e Tecnologia Musical
              </p>

              <div className="mt-4 space-y-3.5 text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                <p>
                  Com <strong className="text-white font-bold">mais de 15 anos de estrada como tecladista profissional e professor</strong>, Eliab Campos já ajudou milhares de músicos a destravarem sua percepção harmônica, agilidade nos dedos e segurança para tocar na igreja, em palcos e estúdios.
                </p>
                <p>
                  Ao longo de anos ensinando e tocando ao vivo, ele percebeu uma grande barreira: a maioria dos tecladistas precisava de ferramentas visuais claras para entender acordes, escalas e campos harmônicos em tempo real, mas os programas do mercado eram caros, pesados e cheios de complicações desnecessárias.
                </p>
                <p>
                  Foi com essa missão que nasceu o <strong className="text-[#FBBF24] font-bold">VSK Studio PRO</strong>: uma ferramenta desenvolvida de músico para músico — extremamente rápida, 100% prática, com resposta imediata e criada para transformar a sua forma de tocar e ensinar.
                </p>
              </div>

              {/* Highlights List */}
              <div className="mt-6 pt-5 border-t border-[#27272A] grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E4E4E7] font-medium">Metodologia comprovada por centenas de tecladistas</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E4E4E7] font-medium">Foco total em aplicação prática sem enrolação</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E4E4E7] font-medium">Suporte e compromisso com o seu aprendizado</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E4E4E7] font-medium">Desenvolvido com padrão de qualidade profissional</span>
                </div>
              </div>

              {/* CTA Button */}
              {onOpenCheckout && (
                <div className="mt-7">
                  <button
                    onClick={onOpenCheckout}
                    className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706] text-black font-black text-sm sm:text-base uppercase tracking-tight shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Quero Garantir o VSK Studio PRO com Eliab</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
