import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-green-50">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 border-2 border-dashed border-green-200 p-8 rounded-2xl bg-white">
        <div className="flex-shrink-0">
          <ShieldCheck className="w-24 h-24 text-green-600" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Risco Zero: Garantia de 30 Dias</h3>
          <p className="text-gray-600">
            Você tem 30 dias para testar os prompts. Se não sentir mais confiança nas suas negociações, basta enviar um e-mail e devolvemos 100% do seu investimento. Sem letras miúdas.
          </p>
        </div>
      </div>
    </section>
  );
};