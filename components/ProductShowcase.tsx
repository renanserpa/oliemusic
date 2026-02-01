
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  families: '▲', 
  teachers: '★', 
  schools: '⬢',  
  news: '✦'      
};

const categoryColors: Record<PublicType, string> = {
  families: 'text-maestro-red',
  teachers: 'text-maestro-blue',
  schools: 'text-maestro-purple',
  news: 'text-pink-500'
};

const generateExtraProducts = (category: PublicType, page: number): Product[] => {
  if (category === 'news') return []; 

  return [1, 2].map((i) => ({
    id: `extra-${category}-${page}-${i}`,
    public: category,
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} Pack #${page}-${i}`,
    description: `Conteúdo extra premium nível ${i} para potencializar seus resultados musicais com a Olie.`,
    price: `R$ ${20 * i + (page * 10)},00`,
    image: `https://images.unsplash.com/photo-${1511379938547 + (page * 100) + i * 10}?w=400&h=300&fit=crop`,
    tooltip: 'Material adicional exclusivo da plataforma.'
  }));
};

const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PublicType>('families');
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  const sentinelRef = useRef<HTMLDivElement>(null);

  const fetchPage = useCallback(async (category: PublicType, pageNum: number) => {
    setIsLoading(true);
    // Simular latência de rede
    await new Promise(resolve => setTimeout(resolve, 1000));

    const baseProducts = ALL_MOCK_PRODUCTS.filter(p => p.public === category);
    let newItems: Product[] = [];

    if (pageNum === 1) {
      newItems = baseProducts;
    } else {
      newItems = generateExtraProducts(category, pageNum);
    }

    // Limitar a 5 páginas para demonstração
    if (pageNum >= 5 || (category === 'news' && pageNum >= 1)) {
      setHasMore(false);
    }

    setDisplayedProducts(prev => {
      // Evitar duplicatas em re-renders rápidos
      const existingIds = new Set(prev.map(p => p.id));
      const filteredNew = newItems.filter(p => !existingIds.has(p.id));
      return [...prev, ...filteredNew];
    });
    setIsLoading(false);
  }, []);

  // Resetar ao trocar de tab
  useEffect(() => {
    setDisplayedProducts([]);
    setPage(1);
    setHasMore(true);
    fetchPage(activeTab, 1);
  }, [activeTab, fetchPage]);

  // Observer para Infinite Scroll
  useEffect(() => {
    const currentSentinel = sentinelRef.current;
    if (!currentSentinel || isLoading || !hasMore) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage(prev => {
          const nextPage = prev + 1;
          fetchPage(activeTab, nextPage);
          return nextPage;
        });
      }
    }, { threshold: 0.1, rootMargin: '200px' });

    observer.observe(currentSentinel);
    return () => observer.disconnect();
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
    return price;
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase italic tracking-tighter"
          >
            Explore Nosso <span className="text-indigo-600 dark:text-indigo-400">Ecossistema</span>
          </motion.h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Materiais didáticos e tecnologias pensadas para cada etapa da jornada musical. Role para descobrir mais.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 p-2 bg-slate-100 dark:bg-slate-900 rounded-[2rem] max-w-fit mx-auto shadow-inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab.id
                  ? `${tab.color} text-white shadow-xl scale-105`
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (idx % 2) * 0.1 }}
                className={`group bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col ${
                  product.isComingSoon ? 'opacity-90' : ''
                }`}
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                      product.isComingSoon ? 'grayscale brightness-75 blur-[2px]' : ''
                    }`}
                  />
                  
                  {product.isComingSoon && (
                    <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3 rounded-2xl transform -rotate-3 shadow-2xl">
                         <span className="text-white font-black uppercase italic tracking-[0.3em] text-xl">EM BREVE</span>
                      </div>
                    </div>
                  )}

                  {product.badge && (
                    <div className={`absolute top-6 right-6 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${
                      product.isComingSoon ? 'bg-pink-500 text-white' : 'bg-white/90 dark:bg-slate-800/90 text-indigo-600 dark:text-indigo-400'
                    }`}>
                      {product.badge}
                    </div>
                  )}
                </div>
                
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter flex items-center gap-3">
                      <span className={`text-2xl font-black ${categoryColors[product.public]}`} aria-hidden="true">
                        {categoryIcons[product.public]}
                      </span>
                      {product.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow text-lg font-medium leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-50 dark:border-white/5">
                    <div className="relative flex flex-col group/tooltip cursor-help">
                      <span className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em] mb-1">
                        {product.isComingSoon ? 'Status' : 'Investimento'}
                      </span>
                      <span className={`text-3xl font-black ${product.isComingSoon ? 'text-pink-500 italic' : 'text-slate-900 dark:text-white'}`}>
                        {product.price}
                      </span>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-0 mb-4 w-64 p-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-3xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible group-hover/tooltip:-translate-y-2 transition-all duration-300 z-30 shadow-2xl pointer-events-none">
                        <div className="flex items-center gap-2 mb-2 text-indigo-400 dark:text-indigo-600">
                          <span className="text-lg">✨</span>
                          <span className="uppercase tracking-widest font-black">{getPriceTooltipText(product.price)}</span>
                        </div>
                        <p className="opacity-80 leading-relaxed">{product.tooltip}</p>
                        <div className="absolute top-full left-8 w-4 h-4 bg-slate-900 dark:bg-white rotate-45 -translate-y-2"></div>
                      </div>
                    </div>
                    
                    <button className={`px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] italic transition-all duration-300 active:scale-95 ${
                      product.isComingSoon 
                      ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-xl shadow-pink-200 dark:shadow-none' 
                      : 'bg-indigo-600 text-white hover:bg-slate-900 shadow-lg shadow-indigo-100 dark:shadow-none'
                    }`}>
                      {product.isComingSoon ? 'Lista VIP' : 'Ativar'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Sentinel & Loading UI */}
        <div ref={sentinelRef} className="py-20 flex flex-col justify-center items-center min-h-[150px]">
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-5"
            >
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-4 border-indigo-600/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-600 animate-pulse">
                Sintonizando novos produtos...
              </span>
            </motion.div>
          )}
          {!hasMore && displayedProducts.length > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-12 h-1 bg-slate-200 dark:bg-slate-800 rounded-full mb-2"></div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                Fim do Ecossistema Olie • Sinfonia Completa
              </p>
            </motion.div>
          )}
        </div>

        {/* Final CTA Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="mt-12 p-12 md:p-20 bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-[4rem] text-center text-white relative overflow-hidden shadow-3xl"
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-maestro-red/10 rounded-full blur-[80px]"></div>
          
          <h3 className="text-4xl md:text-6xl font-black mb-6 italic uppercase tracking-tighter">
            Consultoria <span className="text-maestro-blue">Maestro</span>
          </h3>
          <p className="text-indigo-100 mb-10 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            Nossa equipe pedagógica pode desenhar um plano sob medida para sua escola ou família. Vamos conversar?
          </p>
          <button className="bg-white text-indigo-900 px-12 py-6 rounded-3xl font-black text-xl uppercase italic tracking-widest hover:bg-indigo-50 active:scale-95 transition-all shadow-2xl">
            Falar com um Especialista
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
