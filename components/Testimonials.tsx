
import React from 'react';

const testimonials = [
  {
    name: 'Mariana Santos',
    role: 'Mãe do Léo (4 anos)',
    content: 'O "Manual do Ouvido" mudou nossa rotina. O Léo agora identifica os sons dos instrumentos nas músicas que ouvimos no carro. É pura diversão!',
    avatar: 'https://i.pravatar.cc/150?u=mariana',
    category: 'Família'
  },
  {
    name: 'Prof. Ricardo Lima',
    role: 'Educador Musical',
    content: 'O Combo de Atividades me devolveu meus fins de semana. Tudo pronto, pedagógico e os alunos amam as dinâmicas rítmicas. Indispensável!',
    avatar: 'https://i.pravatar.cc/150?u=ricardo',
    category: 'Professor'
  },
  {
    name: 'Dra. Cláudia Borges',
    role: 'Diretora da Escola Harmonia',
    content: 'A transição para o modelo Phygital com a Olie Music colocou nossa escola em outro patamar de inovação e gestão. Pais extremamente satisfeitos.',
    avatar: 'https://i.pravatar.cc/150?u=claudia',
    category: 'Escola'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-4">
            Vozes do <span className="text-indigo-400">Palco</span>
          </h2>
          <p className="text-slate-400 text-xl font-medium">Quem já vive a experiência Olie Music.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-slate-800/50 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] flex flex-col hover:border-indigo-500/50 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-indigo-400 shadow-lg" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-indigo-400 text-xs font-black uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-300 italic text-lg leading-relaxed flex-grow">
                "{t.content}"
              </p>
              <div className="mt-8 flex justify-between items-center">
                <span className="bg-slate-700/50 text-slate-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {t.category}
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
