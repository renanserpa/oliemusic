
import React from 'react';

interface DigitalProduct {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  description: string;
  image: string;
  tag: string;
  platform: 'Kiwify' | 'Hotmart';
  link: string;
  hoverBenefit: string;
  step: string;
}

const teacherJourney: DigitalProduct[] = [
  {
    id: 'd1',
    title: 'Combo +230 Atividades',
    price: '47',
    oldPrice: '97',
    tag: 'Comece por aqui 🚀',
    description: 'O maior acervo de dinâmicas musicais em PDF do Brasil. Pronto para imprimir e usar amanhã mesmo.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop',
    platform: 'Kiwify',
    link: 'https://pay.kiwify.com.br/seu-link-aqui',
    hoverBenefit: 'Este material economiza 5 horas da sua semana.',
    step: '01. Semente'
  },
  {
    id: 'd2',
    title: 'Apostila Master GCM',
    price: '97',
    oldPrice: '147',
    tag: 'Evolução Prática',
    description: 'O guia definitivo para aplicar o Método Serpa-Híbrido com maestria. Do planejamento à execução.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop',
    platform: 'Kiwify',
    link: 'https://pay.kiwify.com.br/seu-link-aqui',
    hoverBenefit: 'Domine a lógica que retém 90% mais alunos.',
    step: '02. Estrutura'
  },
  {
    id: 'd3',
    title: 'Treinamento: Revolução Phygital',
    price: '197',
    oldPrice: '397',
    tag: 'Escala & Negócio',
    description: 'Aprenda a unir o físico e o digital para escalar sua escola de música ou carreira de professor particular.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop',
    platform: 'Hotmart',
    link: 'https://pay.kiwify.com.br/seu-link-aqui',
    hoverBenefit: 'Multiplique seu faturamento com ensino híbrido.',
    step: '03. Maestria'
  }
];

const DigitalStore: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="digital-store">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            Jornada de Sucesso
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.9]">
            Trilha de Evolução do <span className="text-indigo-600">Professor</span>
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Siga os passos validados para transformar sua carreira da semente à maestria phygital.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {teacherJourney.map((product, index) => (
              <div key={product.id} className="group flex flex-col items-center">
                {/* Step Indicator */}
                <div className="mb-6 bg-white border-2 border-slate-100 text-slate-400 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-sm group-hover:border-indigo-500 group-hover:text-indigo-600 transition-all">
                  {product.step}
                </div>

                {/* Main Card */}
                <div className="w-full bg-white rounded-[3.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_20px_60px_rgba(79,70,229,0.1)] transition-all duration-500 relative flex flex-col h-full">
                  {/* Image & Badge */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-100">
                      <span className="text-indigo-600 text-[10px] font-black uppercase tracking-widest">
                        {product.tag}
                      </span>
                    </div>

                    {/* Hover Benefit Overlay */}
                    <div className="absolute inset-0 bg-indigo-600/90 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                      <p className="text-white text-center font-black text-xl italic uppercase tracking-tight leading-tight">
                        {product.hoverBenefit}
                      </p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-slate-500 mb-8 font-medium leading-relaxed flex-grow">
                      {product.description}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex flex-col">
                        <span className="text-slate-400 text-xs font-bold line-through">R$ {product.oldPrice},00</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-indigo-600 font-black text-lg">R$</span>
                          <span className="text-4xl font-black text-slate-900 tracking-tighter">{product.price}</span>
                        </div>
                      </div>
                    </div>

                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-slate-900 text-white py-5 rounded-3xl font-black text-lg uppercase italic tracking-widest text-center block shadow-2xl hover:bg-indigo-600 transition-all hover:-translate-y-1 active:scale-95"
                    >
                      Garantir Acesso
                    </a>

                    {/* GCM Hook Banner */}
                    <div className="mt-8 pt-6 border-t border-slate-50">
                      <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3 border border-slate-100 group/hook hover:border-indigo-200 transition-colors">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-lg shadow-indigo-100">G</div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-tight">
                          Potencie este material com o <span className="text-indigo-600">GCM Maestro</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Arrow for Desktop (except last) */}
                {index < teacherJourney.length - 1 && (
                  <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-12 h-12 bg-white rounded-full border-2 border-slate-100 items-center justify-center text-slate-300 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.5em]">
            Cada passo da trilha é fundamental para sua autoridade phygital
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalStore;
