
import React, { useEffect, useState } from 'react';
import { ProductDetail } from '../constants/products';

interface ProductDetailsProps {
  product: ProductDetail;
  onBack: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onBack }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getThemeConfig = () => {
    switch (product.category) {
      case 'familia': return {
        text: 'text-maestro-red',
        bg: 'bg-maestro-red/5',
        border: 'border-maestro-red/20',
        button: 'bg-maestro-red shadow-maestro-red/30 hover:bg-red-700',
        bullet: 'text-maestro-red'
      };
      case 'professor': return {
        text: 'text-maestro-blue',
        bg: 'bg-maestro-blue/5',
        border: 'border-maestro-blue/20',
        button: 'bg-maestro-blue shadow-maestro-blue/30 hover:bg-blue-700',
        bullet: 'text-maestro-blue'
      };
      case 'escola': return {
        text: 'text-maestro-purple',
        bg: 'bg-maestro-purple/5',
        border: 'border-maestro-purple/20',
        button: 'bg-maestro-purple shadow-maestro-purple/30 hover:bg-purple-700',
        bullet: 'text-maestro-purple'
      };
      default: return {
        text: 'text-slate-900',
        bg: 'bg-slate-50',
        border: 'border-slate-200',
        button: 'bg-slate-900',
        bullet: 'text-indigo-600'
      };
    }
  };

  const theme = getThemeConfig();

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-maestro-canvas dark:bg-slate-950 pt-24">
      {/* Sales Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-slate-500 font-[900] hover:text-slate-900 dark:hover:text-white transition-all uppercase text-[11px] tracking-[0.4em]"
          >
            ← Voltar para a Loja
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <header className="space-y-10">
              <div className={`inline-block px-6 py-2 rounded-full border ${theme.text} ${theme.border} ${theme.bg} text-[11px] font-[900] uppercase tracking-[0.4em]`}>
                {product.category}
              </div>
              
              <h1 className="flex flex-col gap-4">
                <span className="text-4xl font-black text-slate-400 uppercase italic tracking-tighter leading-none">
                  {product.title}
                </span>
                <span className="text-7xl md:text-[100px] font-[900] text-slate-900 dark:text-white rockstar-title uppercase italic tracking-tighter leading-[0.85]">
                  {product.headline}
                </span>
              </h1>
              
              <p className="text-2xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed tracking-wide max-w-xl">
                {product.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-10 pt-6">
                <a 
                  href={product.checkoutLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto block text-center px-14 py-8 rounded-[2.5rem] font-[900] text-3xl uppercase italic tracking-widest text-white transition-all transform active:scale-95 shadow-2xl ${theme.button} shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)] hover:-translate-y-2`}
                >
                  Garantir Agora • R$ {product.price}
                </a>
                <div className="flex flex-col text-center sm:text-left">
                  <span className="text-slate-400 line-through font-bold text-lg">de R$ {product.oldPrice}</span>
                  <span className={`${theme.text} font-[900] text-[10px] uppercase tracking-[0.3em]`}>Oferta de Lançamento</span>
                </div>
              </div>
            </header>

            <div className="relative group">
              <div className={`absolute -inset-10 ${theme.bg} rounded-full blur-[100px] opacity-60 group-hover:opacity-100 transition-opacity`}></div>
              <img 
                src={product.image} 
                className="relative w-full aspect-square object-cover rounded-[4rem] shadow-2xl border-[12px] border-white dark:border-slate-800 transform rotate-2 group-hover:rotate-0 transition-all duration-1000"
                alt={product.title}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rhythmic Benefits Section */}
      <section className="py-32 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-8xl font-[900] text-slate-900 dark:text-white uppercase italic rockstar-title tracking-tighter">
              Trilha de <span className={theme.text}>Evolução</span>
            </h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-sm">O que você vai conquistar nesta jornada</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {product.benefits.map((benefit, i) => (
              <article key={i} className="group glass dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 flex items-start gap-8 hover:border-indigo-500 transition-all hover:translate-x-2">
                <div className={`w-16 h-16 bg-white dark:bg-slate-700 rounded-3xl flex-shrink-0 flex items-center justify-center ${theme.text} text-5xl shadow-xl shadow-slate-200/50 dark:shadow-none font-serif italic select-none`}>
                  {i % 2 === 0 ? '♩' : '♪'}
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-[900] text-2xl mb-2 uppercase italic tracking-tight group-hover:text-indigo-600 transition-colors">
                    Passo {i + 1}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium text-xl leading-relaxed tracking-wide">
                    {benefit}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion (Rockstar Style) */}
      {product.faq && product.faq.length > 0 && (
        <section className="py-32 bg-maestro-canvas dark:bg-slate-950">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-[900] text-slate-900 dark:text-white text-center uppercase italic mb-20 tracking-tighter">
              Acesso à <span className="text-maestro-purple underline decoration-maestro-purple/30 underline-offset-8">Informação</span>
            </h2>
            <div className="space-y-6">
              {product.faq.map((item, i) => (
                <article 
                  key={i} 
                  className={`overflow-hidden transition-all duration-700 border-2 rounded-[3rem] ${
                    openFaqIndex === i ? 'border-maestro-purple bg-white dark:bg-slate-900' : 'border-slate-100 dark:border-white/5 bg-white/50 dark:bg-slate-800/30'
                  }`}
                >
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left p-10 flex items-center justify-between gap-8 outline-none"
                  >
                    <h3 className={`text-2xl font-[900] uppercase italic tracking-tight transition-colors ${
                      openFaqIndex === i ? 'text-maestro-purple' : 'text-slate-900 dark:text-white'
                    }`}>
                      {item.question}
                    </h3>
                    <div className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      openFaqIndex === i ? 'border-maestro-purple bg-maestro-purple text-white rotate-180' : 'border-slate-200 text-slate-400'
                    }`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`transition-all duration-700 ease-in-out ${openFaqIndex === i ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-10 pb-10">
                      <p className="text-slate-600 dark:text-slate-400 font-medium text-xl leading-relaxed border-t border-slate-100 dark:border-white/5 pt-8">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
