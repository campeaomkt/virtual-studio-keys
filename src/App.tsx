import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemVsSolution } from './components/ProblemVsSolution';
import { FeaturesGrid } from './components/FeaturesGrid';
import { TargetAudience } from './components/TargetAudience';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { AuthorSection } from './components/AuthorSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyCtaBar } from './components/StickyCtaBar';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Scrolls smoothly to the #oferta section
  const handleScrollToOffer = () => {
    const ofertaElement = document.getElementById('oferta');
    if (ofertaElement) {
      ofertaElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenCheckoutModal = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Top Navigation */}
      <Navbar onOpenCheckout={handleScrollToOffer} />

      {/* Main Landing Page Content */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenCheckout={handleScrollToOffer} />

        {/* 2. Problem vs VSK Solution (Objection Breaker) */}
        <ProblemVsSolution onOpenCheckout={handleScrollToOffer} />

        {/* 3. Grid of Features & Core Capabilities */}
        <FeaturesGrid onOpenCheckout={handleScrollToOffer} />

        {/* 4. Target Audience Profiles (Professores, Igrejas, Estudantes, Produtores) */}
        <TargetAudience onOpenCheckout={handleScrollToOffer} />

        {/* 5. Exclusive Bonuses Pack (R$ 211,00 in free value) */}
        <BonusesSection />

        {/* 6. Pricing & Irresistible Offer (R$ 197 -> R$ 67) */}
        <PricingSection onOpenCheckout={handleOpenCheckoutModal} />

        {/* 7. Author Biography Section (Eliab Campos) */}
        <AuthorSection onOpenCheckout={handleScrollToOffer} />

        {/* 8. 7-Day Unconditional Guarantee */}
        <GuaranteeSection onOpenCheckout={handleScrollToOffer} />

        {/* 8. Frequently Asked Questions (FAQ) */}
        <FaqSection onOpenCheckout={handleScrollToOffer} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Sticky Bar */}
      <StickyCtaBar onOpenCheckout={handleScrollToOffer} />

      {/* High-Conversion Checkout Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </div>
  );
}
