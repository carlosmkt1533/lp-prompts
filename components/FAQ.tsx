import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-4 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-800">{item.question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="text-gray-600 text-sm leading-relaxed pr-4">{item.answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "Preciso ter a versão paga do ChatGPT?",
      answer: "Não! Todos os prompts foram testados e validados na versão gratuita (GPT-3.5) e funcionam ainda melhor no GPT-4."
    },
    {
      question: "Funciona para qualquer nicho?",
      answer: "Sim. Os prompts possuem campos variáveis (como [Seu Produto], [Preço], [Benefício]) que você preenche. A estrutura de persuasão funciona para serviços, produtos físicos e digitais."
    },
    {
      question: "Como recebo o material?",
      answer: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com o link para baixar o PDF com todos os prompts."
    },
    {
      question: "Serve para Instagram (Direct)?",
      answer: "Com certeza. A lógica de conversa um-a-um é a mesma para WhatsApp e Direct do Instagram."
    },
    {
      question: "Tem garantia?",
      answer: "Sim, garantia incondicional de 30 dias. Se você achar que o material não ajudou, devolvemos 100% do seu dinheiro."
    }
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Perguntas Frequentes</h2>
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};