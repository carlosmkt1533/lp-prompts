import React from 'react';
import { Check, X } from 'lucide-react';

export const Audience: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* For Who */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="bg-green-100 p-1 rounded">✅</span> Para quem é isso:
          </h3>
          <ul className="space-y-4">
            {[
              "Prestadores de Serviço (Designers, Gestores, Consultores)",
              "Vendedores de Loja / Varejo",
              "Profissionais Liberais (Advogados, Nutricionistas, Personal)",
              "Quem trabalha com Agendamento via WhatsApp",
              "Quem vende infoprodutos no 1 a 1"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Not For Who */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="bg-red-100 p-1 rounded">❌</span> Para quem NÃO é:
          </h3>
          <ul className="space-y-4">
            {[
              "Quem procura fórmulas mágicas de dinheiro fácil",
              "Quem quer enganar clientes com promessas falsas",
              "Quem tem preguiça de copiar, colar e adaptar minimamente",
              "Quem acha que vender é 'dom' e não técnica"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};