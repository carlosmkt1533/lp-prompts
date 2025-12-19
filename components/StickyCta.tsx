import React, { useEffect, useState } from 'react';

export const StickyCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleBuy = () => {
    // Dispara o evento de Início de Checkout no Pixel
    if ((window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
    window.open("https://pay.kiwify.com.br/mO1DujM", "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 z-50 md:hidden animate-fade-in shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <button 
        onClick={handleBuy}
        className="w-full bg-green-600 text-white font-bold py-3 rounded-lg shadow-lg active:scale-95 transition-transform"
      >
        QUERO VENDER MAIS AGORA
      </button>
    </div>
  );
};