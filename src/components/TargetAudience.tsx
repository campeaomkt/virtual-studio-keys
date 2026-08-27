import { GraduationCap, Church, Sparkles, Disc, Video, Users, CheckCircle2, ArrowRight } from 'lucide-react';

interface TargetAudienceProps {
  onOpenCheckout: () => void;
}

export const TargetAudience = ({ onOpenCheckout }: TargetAudienceProps) => {
  const audiences = [
    {
      id: 'teachers',
      title: 'Professores de Teclado & Criadores de Conteúdo',
      subtitle: 'Aulas didáticas e vídeos que prendem a atenção do aluno',
      icon: Video,
      color: 'from-[#00F2FE]/10 to-blue-500/5',
      borderColor: 'border-[#27272A]',
      badgeColor: 'bg-[#18181B] text-[#00F2FE] border-[#27272A]',
      painPoint: 'Cansado de perder minutos desenhando acordes no quadro ou gravando vídeos onde o aluno não enxerga a digitação exata das suas mãos?',
      solution: 'Grave cursos e ministre aulas online no Zoom/Meet ou YouTube mostrando as teclas acesas com as cifras e a cascata de notas. Seus alunos entendem na primeira explicação.',
      tags: ['Cursos Online', 'Aulas no Zoom', 'YouTube & Reels', 'Didática Visual']
    },
    {
      id: 'church',
      title: 'Tecladistas de Igreja & Músicos de Live',
      subtitle: 'Tire músicas de ouvido e transmita com padrão profissional',
      icon: Church,
      color: 'from-purple-500/10 to-pink-500/5',
      borderColor: 'border-[#27272A]',
      badgeColor: 'bg-[#18181B] text-purple-400 border-[#27272A]',
      painPoint: 'Precisa tirar arranjos rápidos de louvores ou quer colocar um visualizador moderno no telão ou na transmissão da igreja?',
      solution: 'Use o VSK como tela secundária para conferir harmonia ao vivo e capturar a janela no OBS com fundo dark perfeito para overlays limpos e estéticos.',
      tags: ['Transmissão OBS', 'Telão da Igreja', 'Tirar Músicas de Ouvido', 'Worship Chords']
    },
    {
      id: 'students',
      title: 'Estudantes de Harmonia & Teclado',
      subtitle: 'Aprenda inversões, tétrades e escalas 3x mais rápido',
      icon: GraduationCap,
      color: 'from-emerald-500/10 to-teal-500/5',
      borderColor: 'border-[#27272A]',
      badgeColor: 'bg-[#18181B] text-emerald-400 border-[#27272A]',
      painPoint: 'Tem dificuldade em decorar as inversões de acordes ou entender quais notas formam uma tétrade com extensões (ex: 7M, 9, 11, 13)?',
      solution: 'Toque qualquer acorde e o VSK analisa instantaneamente a estrutura, o baixo e a fórmula. É como ter um professor de harmonia ao seu lado 24 horas por dia.',
      tags: ['Inversões de Acordes', 'Campo Harmônico', 'Tétrades & Extensões', 'Autoestudo Eficaz']
    },
    {
      id: 'producers',
      title: 'Produtores Musicais & Beatmakers',
      subtitle: 'Crie progressões harmônicas sem travar sua criatividade',
      icon: Disc,
      color: 'from-amber-500/10 to-orange-500/5',
      borderColor: 'border-[#27272A]',
      badgeColor: 'bg-[#18181B] text-amber-400 border-[#27272A]',
      painPoint: 'Perdendo tempo esperando carregar bibliotecas pesadas de 50GB no Kontakt só para testar um simples acorde ou melodia?',
      solution: 'Abra o VSK em 2 segundos, toque no teclado com os SoundFonts acústicos/elétricos integrados, grave a ideia em MIDI e arraste para sua DAW quando quiser.',
      tags: ['Rascunho Rápido de Ideias', 'Zero Espera de Carregamento', 'Gravação MIDI Instantânea', 'Exportação Direta']
    }
  ];

  return (
    <section id="publico" className="py-12 sm:py-28 bg-[#0A0A0A] relative border-t border-[#27272A]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#18181B] border border-[#F59E0B]/30 px-3 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-[#FBBF24] mb-3 sm:mb-4">
            <span>🎯 A QUEM SE DESTINA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Projetado Sob Medida Para o Seu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706]">
              Fluxo de Trabalho Musical
            </span>
          </h2>
          <p className="text-xs sm:text-lg text-[#A1A1AA] mt-3 sm:mt-4">
            Não importa se você dá aulas, toca nos finais de semana ou estuda todos os dias: o VSK se adapta à sua rotina.
          </p>
        </div>

        {/* 4 Bento Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <div
                key={aud.id}
                className="bg-[#121214] border border-[#27272A] rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#F59E0B]/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${aud.color} rounded-full blur-3xl pointer-events-none`}></div>

                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#18181B] border border-[#27272A] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold border ${aud.badgeColor}`}>
                      {aud.tags[0]}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">
                    {aud.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FBBF24] font-medium mb-4 sm:mb-6">
                    {aud.subtitle}
                  </p>

                  {/* Pain vs Solution Breakdown */}
                  <div className="space-y-2.5 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="bg-[#18181B] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#27272A]">
                      <div className="text-[10px] sm:text-[11px] font-mono font-bold text-red-400 uppercase mb-1">
                        O Desafio Anterior:
                      </div>
                      <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                        {aud.painPoint}
                      </p>
                    </div>

                    <div className="bg-[#18181B] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#F59E0B]/30">
                      <div className="text-[10px] sm:text-[11px] font-mono font-bold text-[#FBBF24] uppercase mb-1">
                        Como o VSK Resolve:
                      </div>
                      <p className="text-xs sm:text-sm text-[#E4E4E7] leading-relaxed">
                        {aud.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags bottom */}
                <div className="pt-3 sm:pt-4 border-t border-[#27272A] flex flex-wrap gap-1.5 sm:gap-2">
                  {aud.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg sm:rounded-xl bg-[#18181B] text-[#71717A] text-[11px] sm:text-xs font-medium border border-[#27272A]"
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action anchor */}
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-black text-xs sm:text-base text-black bg-[#00F2FE] hover:bg-[#38BDF8] shadow-[0_10px_40px_rgba(0,242,254,0.3)] hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-tight cursor-pointer min-h-[48px]"
          >
            <span>QUERO ACELERAR MEUS RESULTADOS COM O VSK PRO</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
};
