import React from 'react';
import { Star, BadgeCheck } from 'lucide-react';

interface Review {
  name: string;
  role: string;
  image: string;
  text: string;
  date: string;
}

export const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Renato Vieira",
      role: "Vendedor de Consórcio",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Eu perdi a conta de quantas vendas deixei escapar por não saber contornar o 'vou pensar'. O prompt de quebra de objeção pagou o investimento em 10 minutos. Muito bom!",
      date: "Há 2 dias"
    },
    {
      name: "Camila Dias",
      role: "Social Media",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "Simples, direto e funciona. Não tem enrolação. Peguei o prompt de 'Abordagem Fria', mandei para 10 lojas e agendei 3 reuniões. Para quem é tímida como eu, isso é ouro.",
      date: "Há 4 dias"
    },
    {
      name: "Felipe Martins",
      role: "Dono de Barbearia",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Uso no balcão da barbearia pra responder agendamento. O atendimento ficou muito mais profissional e rápido. O bônus de recuperação de clientes inativos é sensacional.",
      date: "Há 1 semana"
    },
    {
      name: "Juliana Costa",
      role: "Mentora de Carreira",
      image: "https://randomuser.me/api/portraits/women/26.jpg",
      text: "Gente, o prompt High-Ticket é assustador de tão bom. Adaptei pro meu nicho e fechei uma mentoria de 3k no mesmo dia. O cliente nem questionou o preço.",
      date: "Há 1 semana"
    }
  ];

  return (
    <section className="bg-white py-16 px-4 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
             <div className="flex -space-x-3 overflow-hidden p-2">
               <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/1.jpg" alt="user"/>
               <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user"/>
               <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/3.jpg" alt="user"/>
               <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/4.jpg" alt="user"/>
               <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 ring-2 ring-white">+100</div>
             </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Quem aplica, tem resultado
          </h2>
          <p className="text-gray-600">
            Veja o que profissionais reais estão falando sobre os prompts:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:bg-white hover:border-green-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                  <div>
                    <h4 className="font-bold text-gray-900 leading-tight">{review.name}</h4>
                    <span className="text-xs text-gray-500 font-medium">{review.role}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded text-[10px] font-bold text-green-700 uppercase tracking-wide">
                  <BadgeCheck className="w-3 h-3" />
                  Verificado
                </div>
              </div>
              
              <div className="flex text-yellow-400 mb-3 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed italic">
                "{review.text}"
              </p>

              <div className="mt-4 pt-4 border-t border-gray-200/60 text-xs text-gray-400 flex justify-between items-center">
                 <span>Postado no Grupo VIP</span>
                 <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 bg-gray-100 inline-block px-4 py-2 rounded-full">
                Nota média <strong className="text-gray-900">4.9/5</strong> baseada em avaliações de alunos.
            </p>
        </div>
      </div>
    </section>
  );
};