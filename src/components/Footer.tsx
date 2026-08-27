import { ShieldCheck, Lock, Mail, Music, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#27272A] pt-12 pb-24 sm:pb-16 text-[#71717A] text-xs">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-[#27272A]">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <img
                src="https://eliabcamposteclas.com/wp-content/uploads/2026/08/app-icon.png"
                alt="VSK Studio Icon"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-contain border border-[#F59E0B]/30 bg-[#121214] p-1 shadow-md shrink-0"
              />
              <div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-extrabold text-base sm:text-lg tracking-tight text-white font-mono">VSK</span>
                  <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] to-[#F59E0B]">STUDIO</span>
                  <span className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-[#F59E0B]/10 text-[#FBBF24] border border-[#F59E0B]/30 rounded-full">
                    PRO
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-[#71717A] block">
                  O Mais Poderoso Visualizador MIDI & Análise Harmônica em Tempo Real
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A1A1AA] max-w-md leading-relaxed">
              O VSK foi desenvolvido para músicos, tecladistas, professores e produtores que buscam alta performance sonora e visual sem o peso e a lentidão de DAWs convencionais.
            </p>

            <div className="flex items-center gap-2 text-[#E4E4E7] text-[11px] sm:text-xs">
              <Mail className="w-4 h-4 text-[#FBBF24] shrink-0" />
              <span>Suporte Oficial: <strong>suporte@vskstudio.com</strong></span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2 sm:space-y-3">
            <div className="text-xs font-bold text-white uppercase font-mono tracking-wider">
              Navegação Rápida
            </div>
            <ul className="space-y-1.5 sm:space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#FBBF24] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-[#FBBF24] transition-colors">
                  Por Que o VSK?
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:text-[#FBBF24] transition-colors">
                  Recursos & Funcionalidades
                </a>
              </li>
              <li>
                <a href="#publico" className="hover:text-[#FBBF24] transition-colors">
                  Para Quem É
                </a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-[#FBBF24] transition-colors">
                  Garantir Acesso Vitalício
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FBBF24] transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Security Badges & Guarantees */}
          <div className="space-y-2 sm:space-y-3">
            <div className="text-xs font-bold text-white uppercase font-mono tracking-wider">
              Segurança & Garantia
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#E4E4E7]">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Garantia de 7 Dias ou Reembolso</span>
              </div>
              <div className="flex items-center gap-2 text-[#E4E4E7]">
                <Lock className="w-4 h-4 text-[#FBBF24] shrink-0" />
                <span>Checkout 100% Criptografado</span>
              </div>
              <div className="flex items-center gap-2 text-[#E4E4E7]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                <span>Entrega Imediata no E-mail</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-[11px] text-[#71717A] text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} VSK Studio PRO. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="hover:text-[#E4E4E7] cursor-pointer">Termos de Uso</span>
            <span>•</span>
            <span className="hover:text-[#E4E4E7] cursor-pointer">Política de Privacidade</span>
            <span>•</span>
            <span className="hover:text-[#E4E4E7] cursor-pointer">Aviso Legal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
