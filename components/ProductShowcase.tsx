
import React, { useState, useEffect, useRef, useCallback } from 'react';

type PublicType = 'families' | 'teachers' | 'schools' | 'news';

interface Product {
  id: string;
  public: PublicType;
  title: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  tooltip: string;
  isComingSoon?: boolean;
}

const ALL_MOCK_PRODUCTS: Product[] = [
  {
    id: 'f1',
    public: 'families',
    title: 'Aulas Experimentais',
    description: 'Deixe a música entrar na sua casa com sessões guiadas que despertam a curiosidade natural dos pequenos.',
    price: 'Grátis',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    badge: 'Início Imediato',
    tooltip: 'Experimente nossa metodologia lúdica sem custos.'
  },
  {
    id: 'f2',
    public: 'families',
    title: 'Manual do Ouvido',
    description: 'Guia prático para pais transformarem a escuta passiva em um superpoder de percepção musical.',
    price: 'R$ 47,00',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop',
    tooltip: 'Pagamento único • Acesso vitalício imediato.'
  },
  {
    id: 't1',
    public: 'teachers',
    title: 'Combo +230 Atividades',
    description: 'Um tesouro de PDF interativos, jogos rítmicos e dinâmicas de grupo que economizam horas de planejamento.',
    price: 'R$ 197,00',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
    badge: 'Mais Vendido',
    tooltip: 'Invista no seu tempo e engajamento dos alunos.'
  },
  {
    id: 't2',
    public: 'teachers',
    title: 'Apostila Master',
    description: 'O método definitivo para estruturar suas aulas do zero, do iniciante ao avançado, com foco em resultados.',
    price: 'R$ 297,00',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop',
    tooltip: 'Metodologia completa testada e aprovada.'
  },
  {
    id: 's1',
    public: 'schools',
    title: 'GCM Maestro (SaaS)',
    description: 'Software completo para gestão pedagógica, trilhas de aprendizagem e comunicação direta com as famílias.',
    price: 'Sob Consulta',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    badge: 'Enterprise',
    tooltip: 'Plano personalizado para sua instituição.'
  },
  {
    id: 'n1',
    public: 'news',
    title: 'Maestro TV Experience',
    description: 'A revolução coletiva. Transforme a TV da sua sala de aula em um console de games rítmicos imersivos.',
    price: 'Em Breve',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
    badge: 'Lançamento 2025',
    tooltip: 'A experiência coletiva definitiva está chegando.',
    isComingSoon: true
  }
];

const categoryIcons: Record<PublicType, string> = {
  families: '▲', // Triângulo
  teachers: '★', // Estrela
  schools: '⬢',  // Hexágono
  news: '✦'      // Brilho
};

const categoryColors: Record<PublicType, string> = {
  families: 'text-maestro-red',
  teachers: 'text-maestro-blue',
  schools: 'text-maestro-purple',
  news: 'text-pink-500'
};

const generateExtraProducts = (category: PublicType, page: number): Product[] => {
  if (category === 'news') return []; 

  return [1, 2, 3, 4].map((i) => ({
    id: `extra-${category}-${page}-${i}`,
    public: category,
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} Pack #${page}-${i}`,
    description: `Conteúdo extra premium nível ${i} para potencializar seus resultados musicais com a Olie.`,
    price: `R$ ${20 * i},00`,
    image: `https://images.unsplash.com/photo-${1511379938547 + i * 100}?w=400&h=300&fit=crop`,
    tooltip: 'Material adicional exclusivo da plataforma.'
  }));
};

const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PublicType>('families');
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const fetchPage = useCallback(async (category: PublicType, pageNum: number) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    const baseProducts = ALL_MOCK_PRODUCTS.filter(p => p.public === category);
    let newItems: Product[] = [];

    if (pageNum === 1) {
      newItems = baseProducts;
    } else {
      newItems = generateExtraProducts(category, pageNum);
    }

    if (pageNum >= 4 || category === 'news') {
      setHasMore(false);
    }

    setDisplayedProducts(prev => [...prev, ...newItems]);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setDisplayedProducts([]);
    setPage(1);
    setHasMore(true);
    fetchPage(activeTab, 1);
  }, [activeTab, fetchPage]);

  useEffect(() => {
    if (isLoading || !hasMore) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prev => {
          const nextPage = prev + 1;
          fetchPage(activeTab, nextPage);
          return nextPage;
        });
      }
    }, { threshold: 0.1 });

    if (sentinelRef.current) {
      observerRef.current.observe(sentinelRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [isLoading, hasMore, activeTab, fetchPage]);

  const tabs = [
    { id: 'families' as PublicType, label: 'Famílias', color: 'bg-orange-500' },
    { id: 'teachers' as PublicType, label: 'Professores', color: 'bg-emerald-500' },
    { id: 'schools' as PublicType, label: 'Escolas', color: 'bg-indigo-600' },
    { id: 'news' as PublicType, label: 'Novidades', color: 'bg-pink-500' },
  ];

  const getPriceTooltipText = (price: string) => {
    if (price.toLowerCase().includes('grátis')) return 'Acesso Gratuito';
    if (price.includes('R$')) return `Preço Base: ${price}`;
    return price; // Caso de "Sob Consulta" ou "Em Breve"
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Explore Nosso <span className="text-indigo-600 dark:text-indigo-400">Ecossistema</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Materiais didáticos e tecnologias pensadas para cada etapa da jornada musical.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl max-w-fit mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 active:scale-95 active:translate-y-0.5 ${
                activeTab === tab.id
                  ? `${tab.color} text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/40 scale-105`
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {displayedProducts.map((product) => (
            <div 
              key={product.id}
              className={`group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 ${
                product.isComingSoon ? 'opacity-90' : ''
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    product.isComingSoon ? 'grayscale brightness-75 blur-[2px] group-hover:blur-0 group-hover:grayscale-0 transition-all' : ''
                  }`}
                />
                
                {product.isComingSoon && (
                  <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-100 transition-opacity">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3 rounded-2xl transform -rotate-3">
                       <span className="text-white font-black uppercase italic tracking-[0.3em] text-xl drop-shadow-lg">EM BREVE</span>
                    </div>
                  </div>
                )}

                {product.badge && (
                  <div className={`absolute top-4 right-4 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${
                    product.isComingSoon ? 'bg-pink-500 text-white' : 'bg-white/90 dark:bg-slate-800/90 text-indigo-600 dark:text-indigo-400'
                  }`}>
                    {product.badge}
                  </div>
                )}
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                  <span className={`text-xl font-black ${categoryColors[product.public]}`} aria-hidden="true">
                    {categoryIcons[product.public]}
                  </span>
                  {product.title}
                  {product.isComingSoon && <span className="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded-md uppercase font-black">Beta</span>}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  {/* Price Area with Advanced Tooltip */}
                  <div className="relative flex flex-col group/tooltip cursor-help">
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider flex items-center gap-1">
                      {product.isComingSoon ? 'Status' : 'Investimento'}
                      <svg className="w-3 h-3 text-slate-300 transition-colors group-hover/tooltip:text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className={`text-2xl font-black transition-transform duration-300 group-hover/tooltip:scale-105 origin-left ${product.isComingSoon ? 'text-pink-500 italic' : 'text-slate-900 dark:text-white'}`}>
                      {product.price}
                    </span>
                    
                    {/* Tooltip Content - Animated with scale & fade */}
                    <div className="absolute bottom-full left-0 mb-3 w-56 p-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-bold leading-tight rounded-2xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible group-hover/tooltip:-translate-y-2 transition-all duration-300 z-30 shadow-2xl pointer-events-none transform translate-y-2">
                      <div className="flex items-center gap-2 mb-1 text-indigo-400 dark:text-indigo-600">
                        <span className="text-sm">⭐</span>
                        <span className="uppercase tracking-widest">{getPriceTooltipText(product.price)}</span>
                      </div>
                      <p className="opacity-90">{product.tooltip}</p>
                      <div className="mt-2 pt-2 border-t border-white/10 dark:border-slate-100 text-[9px] uppercase tracking-widest opacity-60">
                         {product.isComingSoon ? 'Fique de olho' : 'Garanta seu acesso'}
                      </div>
                      {/* Tooltip Arrow */}
                      <div className="absolute top-full left-6 w-3 h-3 bg-slate-900 dark:bg-white rotate-45 -translate-y-1.5"></div>
                    </div>
                  </div>
                  
                  <button className={`px-6 py-3 rounded-2xl font-black uppercase text-xs tracking-[0.2em] italic transition-all duration-200 active:scale-[0.96] active:translate-y-0.5 active:shadow-inner ${
                    product.isComingSoon 
                    ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200 dark:shadow-none' 
                    : 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white shadow-sm'
                  }`}>
                    {product.isComingSoon ? 'Entrar na Lista' : 'Saber Mais'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={sentinelRef} className="py-12 flex justify-center items-center h-20">
          {isLoading && (
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs font-black uppercase tracking-widest text-indigo-600/50">Carregando mais conteúdo...</span>
            </div>
          )}
          {!hasMore && displayedProducts.length > 0 && (
            <p className="text-xs font-black uppercase tracking-widest text-slate-400">Você chegou ao fim do ecossistema.</p>
          )}
        </div>

        <div className="mt-20 p-10 bg-indigo-600 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200 dark:shadow-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <h3 className="text-3xl font-bold mb-4 italic uppercase tracking-tighter">Precisa de algo sob medida?</h3>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto text-lg font-medium">
            Nossa equipe pedagógica pode ajudar a personalizar o ecossistema Olie para sua necessidade específica.
          </p>
          <button className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-black text-lg uppercase italic tracking-widest hover:bg-indigo-50 active:scale-95 active:translate-y-0.5 active:shadow-inner transition-all shadow-xl">
            Falar com um Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
