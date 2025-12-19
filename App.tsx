import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Features } from './components/Features';
import { Audience } from './components/Audience';
import { PriceCard } from './components/PriceCard';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { StickyCta } from './components/StickyCta';
import { Button } from './components/Button';

const App: React.FC = () => {
  const handlePurchase = () => {
    // Dispara o evento de Início de Checkout no Pixel
    if ((window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
    window.open("https://pay.kiwify.com.br/mO1DujM", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-green-200 selection:text-green-900">
      <Hero />
      <PainPoints />
      <Solution />
      <Features />
      <Audience />
      <PriceCard />
      <Guarantee />
      <FAQ />
      <Reviews />
      
      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-brand-dark text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Não deixe o próximo cliente escapar.
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Por apenas R$ 17,90, você resolve seu maior problema de vendas hoje.
          </p>
          <div className="w-full max-w-md">
            <Button 
              text="GARANTIR MEUS PROMPTS AGORA"
              onClick={handlePurchase}
              fullWidth={true}
              pulse={true}
            />
          </div>
        </div>
      </section>

      <Footer />
      <StickyCta />
    </div>
  );
};

export default App;