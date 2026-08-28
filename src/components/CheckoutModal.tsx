import { useState, FormEvent } from 'react';
import { X, Lock, CheckCircle2, QrCode, CreditCard, ShieldCheck, Zap, Sparkles, Copy, Check } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal = ({ isOpen, onClose }: CheckoutModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    installments: '1'
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCopyPix = () => {
    navigator.clipboard.writeText('00020126580014br.gov.bcb.pix0136vsk-pro-studio-keys-promocao-67@pagamento.com520400005303986540567.005802BR5915VSK STUDIO PRO6009SAO PAULO62070503***6304E8A9');
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  const handleFinish = (e: FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#121214] border border-[#27272A] rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-[0_0_80px_rgba(0,0,0,0.8)] my-auto max-h-[95vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar janela de checkout"
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-xl sm:rounded-2xl bg-[#18181B] border border-[#27272A] text-[#71717A] hover:text-white hover:border-[#3F3F46] transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 sm:py-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              Pedido Confirmado com Sucesso!
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-md mx-auto mb-4 sm:mb-6">
              Seu acesso vitalício ao <strong>VSK Studio PRO</strong> e aos 3 super bônus foi enviado para o seu e-mail.
            </p>
            <div className="bg-[#18181B] p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-[#27272A] text-left text-[11px] sm:text-xs font-mono text-[#A1A1AA] space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
              <div>• <strong className="text-white">Software:</strong> VSK Studio PRO v3.4</div>
              <div>• <strong className="text-white">Licença:</strong> Vitalícia (Acesso Imediato)</div>
              <div>• <strong className="text-white">Valor Pago:</strong> R$ 77,90</div>
              <div>• <strong className="text-white">Bônus Inclusos:</strong> SoundFonts Gold + OBS Guide + Dicionário de Voicings</div>
            </div>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm text-black bg-[#00F2FE] hover:bg-[#38BDF8] shadow-[0_10px_30px_rgba(0,242,254,0.25)] transition-all uppercase tracking-tight cursor-pointer min-h-[48px]"
            >
              Concluir & Acessar VSK
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5 pr-10">
              <img
                src="https://eliabcamposteclas.com/wp-content/uploads/2026/08/app-icon.png"
                alt="VSK Studio Icon"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl object-contain border border-[#F59E0B]/30 bg-[#18181B] p-1 shadow-md shrink-0"
              />
              <div>
                <h3 className="text-base sm:text-xl font-extrabold text-white leading-tight">
                  VSK Studio PRO
                </h3>
                <p className="text-[11px] sm:text-xs text-[#FBBF24] font-mono font-medium">
                  Acesso Vitalício • Desconto Especial
                </p>
              </div>
            </div>

            {/* Price Summary Bar */}
            <div className="bg-[#18181B] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#27272A] mb-4 sm:mb-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] sm:text-xs text-[#71717A] block">Total a pagar:</span>
                <div className="flex items-baseline gap-1 sm:gap-1.5">
                  <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706] font-mono">R$ 77,90</span>
                  <span className="text-[10px] sm:text-xs text-[#71717A] font-mono">à vista</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[9px] sm:text-[10px] text-[#71717A] line-through">De R$ 197,00</span>
                <span className="block text-[11px] sm:text-xs font-bold text-emerald-400 font-mono">
                  Economia de R$ 119,10
                </span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border flex items-center justify-center gap-1.5 sm:gap-2 font-bold text-xs transition-all cursor-pointer min-h-[44px] ${
                  paymentMethod === 'pix'
                    ? 'bg-[#F59E0B]/10 text-[#FBBF24] border-[#F59E0B]/50 shadow-[0_0_20px_rgba(245,158,11,0.15)]'
                    : 'bg-[#18181B] text-[#71717A] border-[#27272A] hover:border-[#3F3F46]'
                }`}
              >
                <QrCode className="w-4 h-4 shrink-0" />
                <span className="truncate">PIX (Instantâneo)</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border flex items-center justify-center gap-1.5 sm:gap-2 font-bold text-xs transition-all cursor-pointer min-h-[44px] ${
                  paymentMethod === 'card'
                    ? 'bg-[#F59E0B]/10 text-[#FBBF24] border-[#F59E0B]/50 shadow-[0_0_20px_rgba(245,158,11,0.15)]'
                    : 'bg-[#18181B] text-[#71717A] border-[#27272A] hover:border-[#3F3F46]'
                }`}
              >
                <CreditCard className="w-4 h-4 shrink-0" />
                <span className="truncate">Cartão (Até 8x)</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleFinish} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#E4E4E7] mb-1">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex: Carlos Eduardo Ribeiro"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#18181B] border border-[#27272A] rounded-xl sm:rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#F59E0B] transition-colors min-h-[44px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#E4E4E7] mb-1">
                  E-mail para Receber o Acesso ao VSK
                </label>
                <input
                  type="email"
                  required
                  placeholder="ex: seunome@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#18181B] border border-[#27272A] rounded-xl sm:rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#F59E0B] transition-colors min-h-[44px]"
                />
              </div>

              {paymentMethod === 'pix' ? (
                <div className="bg-[#18181B] p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-[#27272A] text-center space-y-2.5 sm:space-y-3">
                  <div className="text-xs text-[#A1A1AA] font-medium">
                    ⚡ Escaneie o QR Code abaixo ou copie a chave Pix:
                  </div>
                  
                  {/* Mock PIX Graphic */}
                  <div className="w-28 h-28 sm:w-36 sm:h-36 bg-white p-1.5 sm:p-2 rounded-xl sm:rounded-2xl mx-auto shadow-lg flex items-center justify-center">
                    <div className="w-full h-full border-2 sm:border-4 border-black flex flex-col items-center justify-center font-mono text-[8px] sm:text-[9px] text-black font-black p-1 text-center">
                      <QrCode className="w-12 h-12 sm:w-16 sm:h-16 text-black mb-0.5 sm:mb-1" />
                      <span>PIX VSK PRO R$ 77,90</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyPix}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#121214] hover:bg-[#27272A] text-[#FBBF24] text-[11px] sm:text-xs font-mono font-bold flex items-center justify-center gap-2 border border-[#27272A] cursor-pointer transition-colors min-h-[44px]"
                  >
                    {copiedPix ? <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> : <Copy className="w-3.5 h-3.5 shrink-0" />}
                    <span className="truncate">{copiedPix ? 'CÓDIGO PIX COPIADO!' : 'COPIAR CÓDIGO PIX (COPIA E COLA)'}</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-2.5 sm:space-y-3 pt-1">
                  <div>
                    <label className="block text-xs font-bold text-[#E4E4E7] mb-1">
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="0000 0000 0000 0000"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full bg-[#18181B] border border-[#27272A] rounded-xl sm:rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#F59E0B] font-mono transition-colors min-h-[44px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#E4E4E7] mb-1">
                        Validade (MM/AA)
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="12/28"
                        value={formData.cardExpiry}
                        onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                        className="w-full bg-[#18181B] border border-[#27272A] rounded-xl sm:rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#F59E0B] font-mono transition-colors min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#E4E4E7] mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        value={formData.cardCvv}
                        onChange={(e) => setFormData({ ...formData, cardCvv: e.target.value })}
                        className="w-full bg-[#18181B] border border-[#27272A] rounded-xl sm:rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#F59E0B] font-mono transition-colors min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#E4E4E7] mb-1">
                      Parcelas
                    </label>
                    <select
                      value={formData.installments}
                      onChange={(e) => setFormData({ ...formData, installments: e.target.value })}
                      className="w-full bg-[#18181B] border border-[#27272A] rounded-xl sm:rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs text-white focus:outline-none focus:border-[#F59E0B] transition-colors min-h-[44px]"
                    >
                      <option value="1">1x de R$ 77,90 (sem juros)</option>
                      <option value="2">2x de R$ 40,30</option>
                      <option value="4">4x de R$ 20,80</option>
                      <option value="8">8x de R$ 10,85</option>
                      <option value="12">12x de R$ 8,05</option>
                    </select>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm text-black bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#D97706] hover:from-[#FEF08A] hover:to-[#F59E0B] shadow-[0_10px_30px_rgba(245,158,11,0.35)] hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-tight cursor-pointer flex items-center justify-center gap-2 mt-3 sm:mt-4 min-h-[48px]"
              >
                <Lock className="w-4 h-4 shrink-0" />
                <span>FINALIZAR PAGAMENTO SEGURO</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-[#71717A] pt-1 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Ambiente Seguro • 7 Dias de Garantia Incondicional</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
