import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqSectionProps {
  onOpenCheckout: () => void;
}

export const FaqSection = ({ onOpenCheckout }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      id: 'faq1',
      question: 'Preciso instalar DAWs como Reaper, FL Studio, Ableton ou Kontakt?',
      answer: 'Não! Essa é uma das maiores vantagens do VSK PRO. Ele possui seu próprio motor de som nativo de alta fidelidade e roda tudo sozinho de forma independente. Você não precisa carregar DAWs pesadas, nem instalar bibliotecas gigantescas de 50GB só para ouvir e visualizar o piano.'
    },
    {
      id: 'faq2',
      question: 'Funciona no meu teclado ou controladora?',
      answer: 'Sim! O VSK é universal e funciona com qualquer teclado musical, piano digital ou controladora MIDI que possua conexão USB-MIDI ou interface MIDI convencional (Yamaha, Roland, Nord, Korg, Casio, Arturia, Novation, Alesis, Behringer, etc.). Basta plugar no computador e o VSK reconhece automaticamente.'
    },
    {
      id: 'faq3',
      question: 'Tem atraso (latência) no som quando eu toco?',
      answer: 'Zero latência perceptível! O VSK utiliza uma arquitetura WebAudio e processamento de áudio direto de baixa latência em nível de hardware. Quando você pressiona a tecla, a resposta sonora e visual é instantânea.'
    },
    {
      id: 'faq4',
      question: 'Posso usar no OBS Studio para fazer lives ou gravar vídeos de aulas?',
      answer: 'Com certeza! O VSK foi desenhado com uma estética Dark Mode de Estúdio especialmente pensada para capturas de tela e overlays limpos no OBS Studio, Streamlabs, Zoom, Google Meet e Premiere/DaVinci. Seus vídeos e transmissões ficam com acabamento de canal profissional de alta produção.'
    },
    {
      id: 'faq5',
      question: 'Como funciona a detecção de acordes? Ele identifica acordes invertidos e complexos?',
      answer: 'Sim! Nosso algoritmo de inteligência harmônica analisa simultaneamente todas as notas pressionadas, identifica a fundamental, a terça, a quinta, a sétima e extensões como 9ª, 11ª, 13ª, acordes sus4, diminutos e alterados. Ele também detecta instantaneamente o baixo real e a inversão exata (por exemplo: C/E, D/F#, G/B, Bb7M(9)).'
    },
    {
      id: 'faq6',
      question: 'Posso carregar meus próprios timbres em formato SoundFont (.SF2)?',
      answer: 'Sim! Além dos timbres de pianos acústicos e elétricos de alta qualidade já inclusos no pacote PRO, você pode arrastar e carregar qualquer arquivo .SF2 diretamente para dentro do VSK para tocar com seus timbres preferidos.'
    },
    {
      id: 'faq7',
      question: 'O acesso é vitalício ou tem mensalidade recorrente?',
      answer: 'O acesso é 100% VITALÍCIO com pagamento único de R$ 67,00. Você paga uma única vez e tem acesso para sempre, incluindo todas as atualizações e melhorias futuras do software, sem nenhuma cobrança surpresa ou mensalidade.'
    },
    {
      id: 'faq8',
      question: 'Como e quando recebo o acesso após o pagamento?',
      answer: 'O envio é imediato e automático! Assim que o pagamento via PIX ou Cartão de Crédito for aprovado, você receberá instantaneamente os links de acesso ao VSK Studio PRO e ao pacote de bônus no seu e-mail cadastrado.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-28 bg-[#0A0A0A] relative border-t border-[#27272A]">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#18181B] border border-[#F59E0B]/30 px-3 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-[#FBBF24] mb-3 sm:mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#FBBF24] shrink-0" />
            <span>TIRE TODAS AS SUAS DÚVIDAS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Perguntas Frequentes sobre o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706]">
              VSK PRO
            </span>
          </h2>
          <p className="text-xs sm:text-lg text-[#A1A1AA] mt-3 sm:mt-4">
            Tudo o que você precisa saber antes de garantir sua licença vitalícia com desconto.
          </p>
        </div>

        {/* FAQ Accordion List (Bento-style items) */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#121214] border-[#F59E0B]/50 shadow-[0_0_30px_rgba(245,158,11,0.12)]'
                    : 'bg-[#121214] border-[#27272A] hover:border-[#3F3F46]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer min-h-[48px]"
                >
                  <span className="text-sm sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#F59E0B]/10 text-[#FBBF24] rotate-180 border border-[#F59E0B]/30'
                        : 'bg-[#18181B] text-[#71717A] border border-[#27272A]'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-base text-[#A1A1AA] leading-relaxed border-t border-[#27272A] pt-3 sm:pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout Bento */}
        <div className="mt-8 sm:mt-12 text-center p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#121214] border border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Ainda tem alguma dúvida específica?
            </h4>
            <p className="text-xs sm:text-sm text-[#71717A] mt-0.5">
              Nossa equipe de suporte a músicos está à disposição para te ajudar.
            </p>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-5 sm:px-6 py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706] hover:from-[#FEF08A] hover:to-[#F59E0B] shadow-[0_10px_30px_rgba(245,158,11,0.35)] hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-tight flex items-center justify-center gap-2 cursor-pointer shrink-0 min-h-[48px]"
          >
            <span>GARANTIR MINHA LICENÇA AGORA</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
};
