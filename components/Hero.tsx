import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Video & Overlays */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Vídeo abstrato de dados/linhas verdes representando fluxo de IA */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-green-lines-905-large.mp4" type="video/mp4" />
        </video>

        {/* Overlays para legibilidade (60-75% opacidade) */}
        <div className="absolute inset-0 bg-brand-dark/75 z-10"></div> {/* Camada base escura 75% */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark z-10 opacity-80"></div> {/* Gradiente vertical */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.8)_100%)] z-10"></div> {/* Vinheta radial */}
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-30 pt-20 pb-16 text-center">
        
        {/* Badge Tech */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md text-green-400 px-4 py-1.5 rounded-full text-sm font-medium mb-8 animate-fade-in shadow-lg shadow-green-900/20 hover:bg-white/10 transition-colors cursor-default select-none">
          <Zap className="w-4 h-4 text-green-400 fill-green-400/20" />
          <span className="tracking-wide text-gray-200">Método testado e validado</span>
        </div>

        {/* Headline Premium */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1] text-white drop-shadow-2xl">
          Pare de Perder Vendas por <br className="hidden md:block" />
          <span className="relative inline-block mt-2 px-4">
            {/* Glow effect behind text */}
            <span className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full transform scale-110"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]">
              Não Saber O Que Responder
            </span>
          </span>
        </h1>

        {/* Subheadline com Glassmorphism */}
        <div className="relative max-w-3xl mx-auto mb-10 p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl">
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            Tenha a resposta perfeita para <strong className="text-white font-semibold">cada objeção</strong>. Acesse <span className="text-green-400 font-bold">42 prompts estratégicos</span> (37 principais + 5 bônus) prontos para copiar, colar e fechar <strong className="text-white font-semibold">3x mais vendas</strong> no WhatsApp e Instagram.
          </p>
        </div>

        {/* Benefits Icons - Tech Style */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm font-medium text-gray-300 mb-12">
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-lg bg-gradient-to-r from-white/5 to-transparent border-l-2 border-green-500/50 backdrop-blur-sm">
            <CheckCircle2 className="text-green-500 w-5 h-5 shadow-[0_0_8px_rgba(34,197,94,0.6)]" /> 
            <span>Sem parecer robótico</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-lg bg-gradient-to-r from-white/5 to-transparent border-l-2 border-green-500/50 backdrop-blur-sm">
            <CheckCircle2 className="text-green-500 w-5 h-5 shadow-[0_0_8px_rgba(34,197,94,0.6)]" /> 
            <span>Para qualquer nicho</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-lg bg-gradient-to-r from-white/5 to-transparent border-l-2 border-green-500/50 backdrop-blur-sm">
            <CheckCircle2 className="text-green-500 w-5 h-5 shadow-[0_0_8px_rgba(34,197,94,0.6)]" /> 
            <span>Aplicação imediata</span>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-md mx-auto transform hover:scale-105 transition-transform duration-300 relative z-40">
          <Button 
            text="QUERO ACESSO AOS PROMPTS" 
            subtext="Compra segura e acesso imediato"
            fullWidth={true}
            onClick={scrollToOffer}
            pulse={true}
            className="shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] border-green-400/30"
          />
        </div>
      </div>
    </section>
  );
};