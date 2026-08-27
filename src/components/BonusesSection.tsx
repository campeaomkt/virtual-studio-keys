import { Gift, Sparkles, Download, Layers, Monitor, BookMarked, Check } from 'lucide-react';

export const BonusesSection = () => {
  const bonuses = [
    {
      id: 'bonus1',
      tag: 'BÔNUS EXCLUSIVO 01',
      title: 'Mega Pack SoundFonts (.SF2) Studio Gold',
      value: 'R$ 97,00',
      freeTag: '100% GRÁTIS',
      icon: Layers,
      color: 'from-amber-500/10 to-yellow-500/5',
      borderColor: 'border-[#27272A]',
      description: 'Uma seleção com os melhores timbres de Pianos de Cauda (Grand Piano), Pianos Elétricos Vintage (Rhodes MKII, Wurli 200A), DX7 FM Pianos e Pads Envolventes pré-configurados prontos para tocar no VSK.',
      items: [
        'Yamaha CFX Grand Piano SoundFont',
        'Nord Piano Upright Vintage Studio',
        'Rhodes MKII 1979 com Chorus Vintage',
        'Wurlitzer 200A Soulful Keyboard'
      ]
    },
    {
      id: 'bonus2',
      tag: 'BÔNUS EXCLUSIVO 02',
      title: 'Guia Mestre de Overlays no OBS Studio & Lives',
      value: 'R$ 67,00',
      freeTag: '100% GRÁTIS',
      icon: Monitor,
      color: 'from-[#00F2FE]/10 to-blue-500/5',
      borderColor: 'border-[#27272A]',
      description: 'Passo a passo definitivo para você capturar o VSK no OBS Studio, Zoom, Google Meet e Streamlabs com fundo escuro cinematográfico e transparência impecável.',
      items: [
        'Configuração de captura de janela sem lag',
        'Templates de posicionamento na tela (inferior e superior)',
        'Roteamento de áudio sem cabos virtuais problemáticos'
      ]
    },
    {
      id: 'bonus3',
      tag: 'BÔNUS EXCLUSIVO 03',
      title: 'Dicionário de Cifras e Voicings Modernos (PDF Interativo)',
      value: 'R$ 47,00',
      freeTag: '100% GRÁTIS',
      icon: BookMarked,
      color: 'from-purple-500/10 to-pink-500/5',
      borderColor: 'border-[#27272A]',
      description: 'Guia de bolso com as progressões harmônicas mais tocadas na música contemporânea (Worship, Pop, R&B e Bossa Nova) com a digitação para você testar no VSK.',
      items: [
        'Cadências 2-5-1 com tensões (9, 11, 13)',
        'Acordes abertos com nona e quartas no estilo Worship',
        'Harmonizações de empréstimo modal para rearmonização'
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-[#27272A]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#18181B] border border-[#27272A] px-3 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-amber-400 mb-3 sm:mb-4 shadow-sm">
            <Gift className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>PACOTE DE BÔNUS INCLUSOS NA SUA COMPRA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Leve Mais de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              R$ 211,00 em Bônus
            </span>{' '}
            Sem Pagar Nada a Mais
          </h2>
          <p className="text-xs sm:text-lg text-[#A1A1AA] mt-3 sm:mt-4">
            Garantindo seu acesso hoje ao VSK Studio PRO, você recebe esses 3 bônus exclusivos instantaneamente no seu e-mail.
          </p>
        </div>

        {/* 3 Bento Bonus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {bonuses.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                className="bg-[#121214] border border-[#27272A] rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-amber-400/40 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]"
              >
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${b.color} rounded-full blur-3xl pointer-events-none`}></div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider sm:tracking-widest text-amber-400 uppercase">
                      {b.tag}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] sm:text-xs text-[#71717A] line-through font-mono">
                        {b.value}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] sm:text-[10px] font-mono font-bold border border-emerald-500/30">
                        {b.freeTag}
                      </span>
                    </div>
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#18181B] border border-[#27272A] flex items-center justify-center mb-3 sm:mb-4 text-white">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-base sm:text-xl font-bold text-white mb-1.5 sm:mb-2">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4 sm:mb-6">
                    {b.description}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-[#27272A] space-y-1.5 sm:space-y-2">
                  {b.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] sm:text-xs text-[#E4E4E7]">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
