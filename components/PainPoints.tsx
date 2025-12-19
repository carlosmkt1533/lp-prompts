import React from 'react';
import { XCircle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const pains = [
    "O cliente visualiza, fica azulzinho e nunca mais responde.",
    "Você gagueja (digitalmente) na hora de falar o preço.",
    "Sente que está sendo chato ou insistente ao fazer follow-up.",
    "Perde horas digitando respostas que não convertem em PIX.",
    "Usa mensagens prontas frias que afastam o cliente."
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Você sente que está deixando dinheiro na mesa?
          </h2>
          <p className="text-gray-600">
            Se você vende serviços ou produtos pelo WhatsApp, provavelmente já passou por isso:
          </p>
        </div>

        <div className="space-y-4">
          {pains.map((pain, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-100">
              <XCircle className="text-red-500 w-6 h-6 flex-shrink-0 mt-0.5" />
              <p className="text-gray-800 font-medium">{pain}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg font-semibold text-gray-800">
            A culpa não é sua, mas a responsabilidade de mudar isso é. <br/>
            <span className="text-green-600">Existe um jeito mais inteligente.</span>
          </p>
        </div>
      </div>
    </section>
  );
};