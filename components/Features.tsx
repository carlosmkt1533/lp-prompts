import React from 'react';
import { PromptCategory } from '../types';
import { MessageCircle, ShieldAlert, DollarSign, Repeat, UserPlus, Gift, Star } from 'lucide-react';

export const Features: React.FC = () => {
  const categories: (PromptCategory & { icon: React.ReactNode })[] = [
    {
      title: "Abordagem Fria",
      description: "Como iniciar conversas com quem nunca falou com você sem parecer SPAM.",
      count: 5,
      icon: <UserPlus className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Quebra de Objeções",
      description: "Respostas para 'tá caro', 'vou ver com meu sócio' e 'te chamo depois'.",
      count: 10,
      icon: <ShieldAlert className="w-6 h-6 text-red-500" />
    },
    {
      title: "Fechamento & Preço",
      description: "Apresente seu valor de forma irresistível e conduza ao pagamento.",
      count: 8,
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: "Follow-up Inteligente",
      description: "Recupere clientes sumidos sem ser o vendedor chato.",
      count: 7,
      icon: <Repeat className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Prompts de Engajamento",
      description: "Mantenha a conversa fluindo e aqueça o lead.",
      count: 7,
      icon: <MessageCircle className="w-6 h-6 text-purple-500" />
    }
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          O que você vai receber?
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Um PDF interativo com 37 prompts principais + 5 bônus exclusivos, totalizando 42 estratégias prontas para usar:
        </p>

        {/* Grid Principal */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
              <div className="bg-gray-50 p-3 rounded-lg flex-shrink-0">
                {cat.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 flex items-center justify-between">
                  {cat.title}
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
                    {cat.count} prompts
                  </span>
                </h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Bônus */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 md:p-8 relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <Gift className="w-32 h-32 text-yellow-600" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Gift className="w-6 h-6 text-yellow-600" />
              <span className="text-yellow-700">5 Bônus Exclusivos</span> 
              <span className="text-sm font-normal bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded text-xs uppercase tracking-wide">Grátis hoje</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5 fill-yellow-500" />
                <div>
                   <strong className="block text-gray-800 text-sm md:text-base">Venda B2B Corporativa</strong>
                   <span className="text-xs md:text-sm text-gray-600">Estratégia completa para fechar contratos de alto valor com empresas e múltiplos decisores.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5 fill-yellow-500" />
                <div>
                   <strong className="block text-gray-800 text-sm md:text-base">Automação Inteligente</strong>
                   <span className="text-xs md:text-sm text-gray-600">Sistema de funil 24/7 que qualifica, tira dúvidas e agenda reuniões no piloto automático.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5 fill-yellow-500" />
                <div>
                   <strong className="block text-gray-800 text-sm md:text-base">Venda Consultiva High-Ticket</strong>
                   <span className="text-xs md:text-sm text-gray-600">Roteiro para vender serviços de R$ 5k+ usando diagnósticos gratuitos como isca irresistível.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5 fill-yellow-500" />
                <div>
                   <strong className="block text-gray-800 text-sm md:text-base">Lançamento Relâmpago</strong>
                   <span className="text-xs md:text-sm text-gray-600">O script exato para gerar picos de caixa em 48h criando urgência real na sua lista.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5 fill-yellow-500" />
                <div>
                   <strong className="block text-gray-800 text-sm md:text-base">Recuperador de Vendas</strong>
                   <span className="text-xs md:text-sm text-gray-600">Método para reverter "tá caro" e "vou pensar" dos últimos 90 dias em novos clientes.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};