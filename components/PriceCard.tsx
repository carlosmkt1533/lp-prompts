import React from 'react';
import { Button } from './Button';
import { ShieldCheck, CreditCard, Sparkles } from 'lucide-react';

export const PriceCard: React.FC = () => {
  const handlePurchase = () => {
    // Dispara o evento de Início de Checkout no Pixel
    if ((window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
    window.open("https://pay.kiwify.com.br/mO1DujM", "_blank");
  };

  return (
    <section id="offer" className="bg-brand-dark py-20 px-4 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-md mx-auto relative z-10">
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.25)] transform hover:scale-[1.02] transition-all duration-300 border-4 border-green-500/20">
          
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-5 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 animate-pulse"></div>
            <span className="text-white font-black tracking-widest text-base md:text-lg flex items-center justify-center gap-2 relative z-10 uppercase shadow-sm">
              <Sparkles className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              Oferta Especial de Fim de Ano
              <Sparkles className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            </span>
          </div>
          
          <div className="p-8 text-center">
            <h3 className="text-gray-500 font-medium text-lg mb-4">Acesso Vitalício + Atualizações 2025</h3>
            
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold mb-2 uppercase tracking-wide border border-red-200">
                Desconto de 77% aplicado
              </div>
              <div className="flex items-end gap-2 leading-none">
                <span className="text-gray-400 line-through text-xl mb-2 decoration-red-400 decoration-2">R$ 79,90</span>
                <div className="text-green-700 font-black text-6xl tracking-tighter drop-shadow-sm">
                  <span className="text-3xl align-top font-bold mr-1 text-green-600">R$</span>
                  17,90
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-8 px-4 leading-relaxed">
              Menos de <span className="font-bold text-gray-900 bg-green-100 px-1 rounded">R$ 0,50 por prompt</span>. Pague uma vez, use para sempre e comece 2025 vendendo muito mais.
            </p>

            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-600 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
                <Button 
                  text="COMPRAR AGORA" 
                  subtext="Acesso imediato no seu e-mail"
                  fullWidth={true}
                  variant="primary"
                  className="mb-4 relative"
                  onClick={handlePurchase}
                  pulse={true}
                />
            </div>

            <div className="flex justify-center items-center gap-4 text-xs text-gray-400 mt-4 border-t border-dashed border-gray-200 pt-4">
               <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-green-600"/> Compra Segura</span>
               <span className="flex items-center gap-1"><CreditCard className="w-3 h-3 text-green-600"/> PIX ou Cartão</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};