
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

  const isPhygitalRevolution = product.slug === 'revolucao-phygital';

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Sales Hero */}
      <section className="relative py-20 overflow-hidden" aria-labelledby="product-main-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 transition-all uppercase text-xs tracking-widest"
            aria-label="Voltar para a página inicial da loja"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para a Loja
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <header>
              <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                {product.category}
              </div>
              
              <h1 id="product-main-heading" className="flex flex-col gap-2 mb-6">
                <span className="text-2xl md:text-3xl font-black text-indigo-600 uppercase italic tracking-tight">
                  {product.title}
                </span>
                <span className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter uppercase italic">
                  {product.headline}
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                {product.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-full sm:w-auto">
                  {isPhygitalRevolution && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.5)] z-20 border-2 border-white whitespace-nowrap animate-bounce">
                      ⚡ Treinamento Estratégico
                    </div>
                  )}
                  <a 
                    href={product.checkoutLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full sm:w-auto block text-center px-10 py-5 rounded-2xl font-black text-xl uppercase italic tracking-widest shadow-2xl transition-all ${
                      isPhygitalRevolution 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-200' 
                      : 'bg-slate-900 text-white hover:bg-indigo-600'
                    } hover:-translate-y-1`}
                  >
                    Garantir Agora • R$ {product.price}
                  </a>
                </div>
                <span className="text-slate-400 line-through font-bold">de R$ {product.oldPrice}</span>
              </div>
            </header>

            <div className="relative group">
              <div className="absolute -inset-4 bg-indigo-600/10 rounded-[4rem] blur-2xl group-hover:bg-indigo-600/20 transition-all"></div>
              <img 
                src={product.image} 
                alt={`Vitrine do produto: ${product.title}`} 
                className="relative w-full aspect-video md:aspect-square object-cover rounded-[3rem] shadow-2xl border-4 border-white transform hover:rotate-1 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50" aria-labelledby="benefits-title">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="benefits-title" className="text-3xl md:text-5xl font-black text-slate-900 text-center uppercase italic mb-16">
            O que você vai <span className="text-indigo-600">Receber</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.benefits.map((benefit, i) => (
              <article key={i} className="bg-white p-8 rounded-3xl border border-slate-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex-shrink-0 flex items-center justify-center text-indigo-600" aria-hidden="true">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-slate-700 font-bold text-lg leading-tight">{benefit}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Dynamic Section */}
      {product.faq && product.faq.length > 0 && (
        <section className="py-24 bg-white" aria-labelledby="faq-title">
          <div className="max-w-3xl mx-auto px-4">
            <h2 id="faq-title" className="text-3xl md:text-5xl font-black text-slate-900 text-center uppercase italic mb-16">
              Dúvidas <span className="text-indigo-600">Frequentes</span>
            </h2>
            <div className="space-y-4">
              {product.faq.map((item, i) => (
                <article 
                  key={i} 
                  className={`overflow-hidden transition-all duration-300 border-2 rounded-[2rem] ${
                    openFaqIndex === i ? 'border-indigo-600 bg-indigo-50/30' : 'border-slate-100 bg-slate-50'
                  }`}
                >
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left p-8 flex items-center justify-between gap-4 outline-none group"
                  >
                    <h3 className={`text-xl font-black uppercase italic tracking-tight leading-tight transition-colors ${
                      openFaqIndex === i ? 'text-indigo-600' : 'text-slate-900'
                    }`}>
                      {item.question}
                    </h3>
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      openFaqIndex === i ? 'border-indigo-600 bg-indigo-600 text-white rotate-180' : 'border-slate-200 text-slate-400'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div 
                    className={`transition-all duration-500 ease-in-out ${
                      openFaqIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-8">
                      <p className="text-slate-600 font-medium leading-relaxed border-t border-slate-200/50 pt-6">
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

      {/* Sticky Bottom Bar Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 glass border-t border-slate-200 z-50">
        <a 
          href={product.checkoutLink}
          className="w-full bg-indigo-600 text-white py-4 rounded-xl font-black uppercase text-center block shadow-lg"
          aria-label={`Comprar agora por R$ ${product.price}`}
        >
          COMPRAR POR R$ {product.price}
        </a>
      </div>
    </div>
  );
};

export default ProductDetails;
