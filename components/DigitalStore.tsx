
import React from 'react';
import { motion } from 'framer-motion';

interface DigitalProduct {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  description: string;
  image: string;
  rarity: 'Iniciante' | 'Intermediário' | 'Masterclass';
  color: string;
  tag: string;
  link: string;
  icon: string;
}

const products: DigitalProduct[] = [
  {
    id: 'power-1',
    title: 'Combo Sementinha',
    price: '47',
    oldPrice: '97',
    rarity: 'Iniciante',
    color: 'border-maestro-red text-maestro-red shadow-maestro-red/20',
    tag: 'DÓ - BASE',
    description: 'O despertar rítmico. +230 atividades para criar a fundação de ferro do seu pequeno músico.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=800&fit=crop',
    link: 'checkout/combo-sementinha',
    icon: '▲'
  },
  {
    id: 'power-2',
    title: 'Maestro Academy',
    price: '97',
    oldPrice: '197',
    rarity: 'Intermediário',
    color: 'border-maestro-blue text-maestro-blue shadow-maestro-blue/20',
    tag: 'LÁ - AUTORIDADE',
    description: 'O salto profissional. Domine a gestão phygital e escale sua autoridade no palco do ensino.',
    image: 'https://images.unsplash.com/photo-1510915363646-e62f7bb21ee5?w=600&h=800&fit=crop',
    link: 'checkout/maestro-academy',
    icon: '★'
  },
  {
    id: 'power-3',
    title: 'GCM Elite B2B',
    price: '197',
    oldPrice: '397',
    rarity: 'Masterclass',
    color: 'border-maestro-purple text-maestro-purple shadow-maestro-purple/20',
    tag: 'SI - MAESTRIA',
    description: 'O ecossistema definitivo. Implemente o software GCM na sua escola e elimine a evasão.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=800&fit=crop',
    link: 'checkout/gcm-elite',
    icon: '⬢'
  }
];

const DigitalStore: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-950 grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-block px-6 py-2 rounded-full border border-maestro-blue/20 bg-maestro-blue/5 text-maestro-blue text-[11px] font-[900] uppercase tracking-[0.5em]">
            Maestro Power Cards
          </div>
          <h2 className="text-6xl md:text-9xl font-[900] text-slate-900 dark:text-white rockstar-title uppercase italic tracking-tighter leading-none">
            A Loja <span className="text-maestro-blue">Legendária</span>.
          </h2>
          <p className="text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Colecione os Power-ups necessários para levar sua jornada musical ao nível Masterclass.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ rotateY: 5, rotateX: -5, scale: 1.05, y: -15 }}
              className="relative group cursor-pointer"
              onClick={() => onNavigate(product.link)}
            >
              {/* Card Container (TCG Style) */}
              <div className={`bg-white dark:bg-slate-900 rounded-[3rem] p-6 border-[8px] border-white dark:border-slate-800 shadow-2xl transition-all duration-500 flex flex-col h-full relative overflow-hidden ring-4 ring-slate-100 dark:ring-white/5`}>
                
                {/* Rarity & PECS Header */}
                <div className="flex justify-between items-center mb-6 px-2">
                  <div className={`text-4xl font-black drop-shadow-md`} style={{ color: product.color.split(' ')[1] }}>
                    {product.icon}
                  </div>
                  <div className={`px-4 py-1.5 rounded-full border-2 font-[900] text-[9px] uppercase tracking-widest ${product.color}`}>
                    {product.rarity}
                  </div>
                </div>

                {/* Card Artwork */}
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 border border-slate-100 dark:border-white/5">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="text-white text-[10px] font-black uppercase tracking-[0.4em] drop-shadow-lg">
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-grow space-y-4 px-2">
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                    {product.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>

                {/* Pricing & Power-Up Action */}
                <div className="mt-10 pt-8 border-t border-slate-50 dark:border-white/5 space-y-6 px-2">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-xs font-bold line-through">R$ {product.oldPrice},00</span>
                      <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
                        R$ {product.price}
                      </span>
                    </div>
                    <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 font-black italic text-xl">
                      +1
                    </div>
                  </div>

                  <button className="w-full bg-slate-950 text-white dark:bg-white dark:text-slate-950 py-5 rounded-2xl font-black text-lg uppercase italic tracking-widest shadow-xl group-hover:bg-maestro-blue group-hover:text-white transition-all">
                    Ativar Power-Up
                  </button>
                </div>

                {/* Lucca Hologram Seal */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rotate-12 group-hover:rotate-0 transition-transform">
                  <div className="w-full h-full bg-amber-400 rounded-full border-4 border-white dark:border-slate-800 shadow-xl flex items-center justify-center text-3xl">
                    🤘
                  </div>
                </div>
              </div>

              {/* Holographic Reflection (Overlay) */}
              <div className="absolute inset-0 rounded-[3rem] pointer-events-none opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-white/20 via-transparent to-white/40 mix-blend-overlay transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalStore;
