import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: () => void;
}

export const Navbar = ({ onOpenCheckout }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Por Que o VSK?', href: '#comparativo' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Para Quem É', href: '#publico' },
    { label: 'Oferta', href: '#oferta' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#27272A] shadow-2xl shadow-black/80 py-2.5 sm:py-3'
          : 'bg-[#0A0A0A]/85 backdrop-blur-sm border-b border-[#27272A]/40 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform duration-300 border border-[#F59E0B]/40 bg-black">
              <img
                src="https://eliabcamposteclas.com/wp-content/uploads/2026/08/app-icon.png"
                alt="VSK Studio PRO Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-bold tracking-tight text-white">
                VSK <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706] font-extrabold">STUDIO</span>
              </span>
              <span className="text-[10px] text-[#A1A1AA] tracking-wider uppercase hidden sm:block font-mono">
                Virtual Studio Keys • PRO
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#FBBF24] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden lg:flex items-center gap-2 bg-[#18181B] border border-[#F59E0B]/30 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-[#FBBF24]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse"></span>
              <span>VERSÃO PRO • ALL-IN-ONE</span>
            </div>

            <button
              id="nav-cta-btn"
              onClick={onOpenCheckout}
              className="relative group overflow-hidden px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-black text-[11px] sm:text-xs uppercase tracking-tight text-black bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706] hover:from-[#FEF08A] hover:to-[#F59E0B] shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-300 active:scale-95 flex items-center gap-1.5 sm:gap-2 cursor-pointer"
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black shrink-0" />
              <span className="whitespace-nowrap">GARANTIR ACESSO</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-[#18181B] border border-[#27272A] text-[#A1A1AA] hover:text-[#FBBF24] transition-colors cursor-pointer"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-2 border-t border-[#27272A] flex flex-col gap-2 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl bg-[#121214] text-xs font-semibold text-[#E4E4E7] hover:text-[#FBBF24] hover:bg-[#18181B] transition-colors flex items-center justify-between border border-[#27272A]/60"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#71717A]" />
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

