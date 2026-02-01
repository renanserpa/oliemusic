
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
  category: 'kids' | 'teachers' | 'schools';
}

const products: Product[] = [
  {
    id: 'p1',
    name: 'Combo Sementinha',
    tag: 'COMBO KIDS',
    price: '47,00',
    oldPrice: '97,00',
    description: 'Metodologia Serpa-Híbrida: O afeto de Suzuki com o ritmo de Dalcroze em +230 PDFs.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop',
    checkoutLink: 'https://pay.kiwify.com.br/seu-link-aqui',
    category: 'kids'
  },
  {
    id: 'p2',
    name: 'Maestro Academy',
    tag: 'PROFESSORES',
    price: '97,00',
    oldPrice: '197,00',
    description: 'Domine a lógica phygital que retém 90% mais alunos e escala sua autoridade musical.',
    image: 'https://images.unsplash.com/photo-1510915363646-e62f7bb21ee5?w=600&h=400&fit=crop',
    checkoutLink: 'https://pay.kiwify.com.br/seu-link-aqui',
    category: 'teachers'
  },
  {
    id: 'p3',
    name: 'GCM Maestro B2B',
    tag: 'PARA ESCOLAS',
    price: '197,00',
    oldPrice: '397,00',
    description: 'A sala de aula aumentada. Tecnologia de rastreio rítmico para instituições de elite.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop',
    checkoutLink: 'https://pay.kiwify.com.br/seu-link-aqui',
    category: 'schools'
  }
];

const CategoryConfig = {
  kids: { color: 'bg-maestro-red', shadow: 'shadow-maestro-red/20', icon: '▲', label: 'Tônica' },
  teachers: { color: 'bg-maestro-blue', shadow: 'shadow-maestro-blue/20', icon: '⚡', label: 'Dominante' },
  schools: { color: 'bg-maestro-purple', shadow: 'shadow-maestro-purple/20', icon: '●', label: 'Sétima' }
};

const StoreGrid: React.FC = () => {
  return (
    <section className="py-24 bg-maestro-canvas dark:bg-slate-950" id="store">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-8xl font-[900] text-slate-900 dark:text-white rockstar-title uppercase italic tracking-tighter">
            Digital <span className="text-maestro-red">Stage</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Transformando o "Físico" em "Digital" com a clareza da Geometria Maestro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => {
            const config = CategoryConfig[product.category];
            return (
              <article 
                key={product.id}
                className="group relative bg-white dark:bg-slate-900 rounded-5xl p-8 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 border border-slate-100 dark:border-white/5 flex flex-col"
              >
                {/* Lucca Stamp: Validador de Confiança */}
                <div className="absolute -top-6 -right-4 w-24 h-24 z-20 animate-lucca pointer-events-none">
                  <div className="w-full h-full bg-amber-400 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-xl">
                    <span className="text-3xl">🤘</span>
                  </div>
                </div>

                <div className="relative h-60 mb-8 rounded-4xl overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute top-6 left-6 ${config.color} text-white px-5 py-2 rounded-2xl font-black text-[10px] tracking-widest flex items-center gap-2 shadow-lg`}>
                    <span className="text-lg">{config.icon}</span> {product.tag}
                  </div>
                </div>

                <div className="flex-grow space-y-4">
                  <h3 className="text-3xl font-[900] text-slate-900 dark:text-white uppercase italic tracking-tight leading-none">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-50 dark:border-white/5 flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-slate-400 text-xs font-bold line-through">R$ {product.oldPrice}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-slate-900 dark:text-white font-black text-4xl tracking-tighter">R$ {product.price}</span>
                    </div>
                  </div>
                  <a 
                    href={product.checkoutLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${config.color} text-white px-8 py-4 rounded-2xl font-black uppercase italic tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl ${config.shadow}`}
                  >
                    Ativar
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StoreGrid;
