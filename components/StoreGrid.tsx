
import React from 'react';

interface Product {
  id: string;
  name: string;
  tag: string;
  price: string;
  oldPrice?: string;
  description: string;
  image: string;
  checkoutLink: string;
  color: string;
}

const products: Product[] = [
  {
    id: 'p1',
    name: 'Combo +230 Atividades',
    tag: 'PARA PROFESSORES',
    price: '47,00',
    oldPrice: '97,00',
    description: 'PDFs interativos, jogos rítmicos e dinâmicas de grupo prontas para aplicar.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop',
    checkoutLink: 'https://kiwify.com.br',
    color: 'text-emerald-500 bg-emerald-50'
  },
  {
    id: 'p2',
    name: 'Apostila Master GCM',
    tag: 'METODOLOGIA MASTER',
    price: '97,00',
    oldPrice: '197,00',
    description: 'O guia definitivo do Método Serpa-Híbrido. Da teoria à prática em sala de aula.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop',
    checkoutLink: 'https://kiwify.com.br',
    color: 'text-indigo-600 bg-indigo-50'
  },
  {
    id: 'p3',
    name: 'A Revolução Phygital',
    tag: 'TREINAMENTO ESTRATÉGICO',
    price: '197,00',
    oldPrice: '397,00',
    description: 'Como unir o físico e o digital para escalar seus ganhos como educador musical.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
    checkoutLink: 'https://hotmart.com.br',
    color: 'text-pink-600 bg-pink-50'
  }
];

const StoreGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="store">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 italic uppercase tracking-tighter mb-4">
              Vitrine <span className="text-indigo-600">Digital</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Escolha seu arsenal e transforme suas aulas em experiências inesquecíveis.
            </p>
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-bold text-sm uppercase tracking-widest">
            <span className="w-12 h-[2px] bg-slate-200"></span>
            Materiais Prontos
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group flex flex-col bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Card Header/Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${product.color}`}>
                  {product.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">
                  {product.name}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                  {product.description}
                </p>

                <div className="pt-8 border-t border-slate-50 mt-auto">
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-slate-400 text-sm font-bold line-through">R$ {product.oldPrice}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-indigo-600 font-black text-lg">R$</span>
                      <span className="text-4xl font-black text-slate-900 tracking-tighter">{product.price}</span>
                    </div>
                  </div>

                  <a 
                    href={product.checkoutLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg uppercase italic tracking-widest text-center block hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 hover:shadow-indigo-100 hover:-translate-y-1"
                  >
                    Garantir Agora
                  </a>
                  <div className="flex items-center justify-center gap-2 mt-4 opacity-50">
                    <svg className="w-3 h-3 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Checkout 100% Seguro</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreGrid;
