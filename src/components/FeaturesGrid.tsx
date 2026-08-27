import { Sparkles, Sliders, Waves, Activity, Palette, BookOpen, Usb, Check, ArrowRight } from 'lucide-react';

interface FeaturesGridProps {
  onOpenCheckout: () => void;
}

export const FeaturesGrid = ({ onOpenCheckout }: FeaturesGridProps) => {
  const features = [
    {
      id: 'waterfall',
      category: 'VISUALIZAÇÃO DE ALTA PRECISÃO',
      title: 'Cascata de Notas Waterfall (Estilo Synthesia)',
      icon: Waves,
      iconColor: 'text-cyan-400',
      borderColor: 'group-hover:border-cyan-500/50',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(0,242,254,0.2)]',
      badge: '60 FPS Fluido',
      description: 'Veja cada nota descendo em tempo real em uma esteira vertical luminosa idêntica aos vídeos mais famosos do YouTube.',
      highlights: [
        'Velocidade e altura de queda 100% ajustáveis',
        'Renderização GPU acelerada sem quedas de quadros',
        'Cores dinâmicas sincronizadas com o impacto das teclas'
      ]
    },
    {
      id: 'chords',
      category: 'MOTOR DE HARMONIA INTELIGENTE',
      title: 'Detecção Instantânea de Acordes & Cifras',
      icon: Activity,
      iconColor: 'text-rose-400',
      borderColor: 'group-hover:border-rose-500/50',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]',
      badge: 'Algoritmo Avançado',
      description: 'Identifica com precisão cirúrgica qualquer acorde que você tocar, desde acordes simples até harmonias complexas de Jazz e Worship.',
      highlights: [
        'Reconhece tríades, tétrades, 7M, 9, 11, 13, sus4, dim, alt',
        'Identificação exata de baixos invertidos (ex: D/F#, C/E)',
        'Exibição visual da fórmula intervalar (1 - 3 - 5 - 7M)'
      ]
    },
    {
      id: 'soundfonts',
      category: 'ÁUDIO DE ESTÚDIO NATIVO',
      title: 'Motor de Áudio com Suporte SoundFonts (.SF2)',
      icon: Sparkles,
      iconColor: 'text-emerald-400',
      borderColor: 'group-hover:border-emerald-500/50',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
      badge: 'Zero Dependência de DAWs',
      description: 'Toque diretamente pelo software com timbres de piano acústico, Rhodes e sintetizadores sem precisar abrir Kontakt ou MainStage.',
      highlights: [
        'Carregue qualquer arquivo .SF2 diretamente no app',
        'Inclui biblioteca de Pianos Acústicos e Elétricos',
        'Limiter anti-clip e controle de ganho master de estúdio'
      ]
    },
    {
      id: 'velocity',
      category: 'RESPOSTA DE TOQUE REALISTA',
      title: 'Curva de Sensibilidade e Resposta Dinâmica',
      icon: Sliders,
      iconColor: 'text-amber-400',
      borderColor: 'group-hover:border-amber-500/50',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]',
      badge: 'Personalizável',
      description: 'Adapte o software perfeitamente ao peso mecânico das teclas da sua controladora ou piano digital.',
      highlights: [
        '4 curvas selecionáveis: Leve, Normal, Pesado e Fixo',
        'Variação de brilho e volume conforme a força do toque',
        'Ideal para quem toca em teclados sem peso ou teclas pesadas'
      ]
    },
    {
      id: 'colors',
      category: 'ESTILO VISUAL CINEMATOGRÁFICO',
      title: 'Sistema de Cores & Personalização de Estúdio',
      icon: Palette,
      iconColor: 'text-purple-400',
      borderColor: 'group-hover:border-purple-500/50',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
      badge: 'Modos Exclusivos',
      description: 'Deixe o visual do seu piano com a estética exata da sua marca ou da identidade visual da sua live stream.',
      highlights: [
        'Modo Split: Mão Esquerda (Vermelho) e Mão Direita (Azul)',
        'Efeitos de Neon Glow, Gradiente Vibrante ou Sólido',
        'Paletas predefinidas: Electric Cyan, Neon Purple, Sunset Amber'
      ]
    },
    {
      id: 'notation',
      category: 'DIDÁTICA MUSICAL',
      title: 'Notação & Cifras Flexíveis (C-D-E ou Dó-Ré-Mi)',
      icon: BookOpen,
      iconColor: 'text-blue-400',
      borderColor: 'group-hover:border-blue-500/50',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]',
      badge: 'Perfeito p/ Aulas',
      description: 'Alterne com 1 clique entre notação de cifras internacional e solfejo brasileiro para ensinar seus alunos sem confusão.',
      highlights: [
        'Cifras Científicas (C, D, E, F, G, A, B)',
        'Solfejo Tradicional (Dó, Ré, Mi, Fá, Sol, Lá, Si)',
        'Modo MIDI Number para produtores e programadores'
      ]
    },
    {
      id: 'compatibility',
      category: 'CONECTIVIDADE UNIVERSAL',
      title: 'Compatibilidade Plug & Play Universal',
      icon: Usb,
      iconColor: 'text-teal-400',
      borderColor: 'group-hover:border-teal-500/50',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]',
      badge: 'Universal MIDI',
      description: 'Conectou o cabo USB ou Bluetooth MIDI? O VSK reconhece na hora, sem precisar de configurações chatas no sistema.',
      highlights: [
        'Compatível com Yamaha, Roland, Nord, Korg, Casio, Arturia, etc.',
        'Funciona em teclados de 25, 49, 61, 76 e 88 teclas',
        'Suporte completo a Pedal de Sustain, Pitch Bend e Mod Wheel'
      ]
    }
  ];

  return (
    <section id="recursos" className="py-12 sm:py-28 bg-[#0A0A0A] relative">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#F59E0B]/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#D97706]/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#18181B] border border-[#F59E0B]/30 px-3 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-[#FBBF24] mb-3 sm:mb-4">
            <span>⚡ TUDO O QUE VOCÊ PRECISA EM UM SÓ LUGAR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engenharia de Estúdio Desenvolvida para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706]">
              Tecladistas Exigentes
            </span>
          </h2>
          <p className="text-xs sm:text-lg text-[#A1A1AA] mt-3 sm:mt-4">
            Cada detalhe do VSK PRO foi desenhado para eliminar atritos, encantar seus alunos e elevar a estética das suas apresentações ao vivo.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-5">
          {features.map((feat, index) => {
            const IconComp = feat.icon;
            // First 2 features take 6 columns on lg (hero bento row), remaining take 4 cols each
            const colSpanClass = index < 2 ? 'lg:col-span-6' : 'lg:col-span-4';

            return (
              <div
                key={feat.id}
                className={`group bg-[#121214] border border-[#27272A] rounded-2xl sm:rounded-3xl p-4 sm:p-7 transition-all duration-300 hover:border-[#F59E0B]/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] flex flex-col justify-between ${colSpanClass}`}
              >
                <div>
                  {/* Top Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider sm:tracking-widest text-[#71717A] uppercase truncate">
                      {feat.category}
                    </span>
                    <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-bold bg-[#18181B] text-[#FBBF24] border border-[#F59E0B]/30 shrink-0">
                      {feat.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform group-hover:border-[#F59E0B]/40">
                    <IconComp className={`w-4 h-4 sm:w-5 sm:h-5 ${feat.iconColor}`} />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2 leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4 sm:mb-5">
                    {feat.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-3 sm:pt-4 border-t border-[#27272A] space-y-1.5 sm:space-y-2">
                  {feat.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-[#E4E4E7]">
                      <Check className="w-3.5 h-3.5 text-[#FBBF24] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bento Banner CTA */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#121214] border border-[#F59E0B]/40 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
          <div className="flex items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#18181B] border border-[#F59E0B]/30 flex items-center justify-center shrink-0 hidden sm:flex text-[#FBBF24]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Pronto para transformar sua experiência ao teclado?
              </h4>
              <p className="text-xs sm:text-sm text-[#A1A1AA]">
                Acesso vitalício ao VSK Studio PRO com todas as atualizações inclusas.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-5 sm:px-7 py-3.5 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm text-black bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706] hover:from-[#FEF08A] hover:to-[#F59E0B] shadow-[0_10px_30px_rgba(245,158,11,0.35)] hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-tight flex items-center justify-center gap-2 cursor-pointer shrink-0 min-h-[48px]"
          >
            <span>QUERO MEU ACESSO AGORA</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
};
