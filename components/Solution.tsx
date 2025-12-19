import React from 'react';
import { BrainCircuit, Zap, Copy } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 px-4 border-t border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-green-600 font-bold tracking-wider uppercase text-sm">A Nova Era das Vendas</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
            Não é mágica. É Engenharia de Prompt.
          </h2>
          <p className="text-gray-600 text-lg">
            Você não precisa contratar um copywriter caro e nem passar horas estudando persuasão.
            Você só precisa dar o comando certo para a Inteligência Artificial trabalhar por você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <BrainCircuit className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl mb-2">IA Treinada</h3>
            <p className="text-gray-500 text-sm">
              Prompts estruturados com gatilhos mentais que os maiores vendedores do mundo usam.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center relative transform md:-translate-y-4 md:shadow-lg border-green-100">
             <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-bold">
               O SEGREDO
             </div>
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Copy className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl mb-2">Copie e Cole</h3>
            <p className="text-gray-500 text-sm">
              Basta copiar o prompt, jogar no ChatGPT (gratuito) e ter a resposta perfeita para o seu cliente em segundos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-purple-600 w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl mb-2">Venda Rápida</h3>
            <p className="text-gray-500 text-sm">
              Transforme curiosos em compradores eliminando o atrito da comunicação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};