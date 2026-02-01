
import React from 'react';

const testimonials = [
  {
    name: 'Mariana Santos',
    role: 'Mãe do Léo (4 anos)',
    content: 'O "Manual do Ouvido" mudou nossa rotina. O Léo agora identifica os sons dos instrumentos nas músicas que ouvimos no carro. É pura diversão!',
    avatar: 'https://i.pravatar.cc/150?u=mariana',
    category: 'Família',
    color: 'border-maestro-red text-maestro-red'
  },
  {
    name: 'Prof. Ricardo Lima',
    role: 'Educador Musical',
    content: 'O Combo de Atividades me devolveu meus fins de semana. Tudo pronto, pedagógico e os alunos amam as dinâmicas rítmicas. Indispensável!',
    avatar: 'https://i.pravatar.cc/150?u=ricardo',
    category: 'Professor',
    color: 'border-maestro-blue text-maestro-blue'
  },
  {
    name: 'Dra. Cláudia Borges',
    role: 'Diretora da Escola Harmonia',
    content: 'A transição para o modelo Phygital com a Olie Music colocou nossa escola em outro patamar de inovação e gestão. Pais extremamente satisfeitos.',
    avatar: 'https://i.pravatar.cc/150?u=claudia',
    category: 'Escola',
    color: 'border-maestro-purple text-maestro-purple'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-maestro-canvas dark:bg-slate-950 grid-pattern overflow-hidden relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <div className="inline-block px-5 py-2 rounded-full border border-slate-200 dark:border-white/10 glass">
             <span className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">Vozes do Palco</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-[900] text-slate-900 dark:text-white italic uppercase tracking-tighter rockstar-title">
            Prova <span className="text-maestro-purple">Social</span> Ativada.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`group relative glass dark:bg-slate-900/40 p-10 rounded-[3rem] border-2 border-slate-100 dark:border-white/5 flex flex-col hover:border-indigo-500/50 transition-all duration-700 hover:-translate-y-4`}
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="relative">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-3xl border-2 border-white dark:border-slate-800 shadow-xl grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-xs shadow-lg`}>🤘</div>
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-[900] uppercase italic tracking-tight text-xl">{t.name}</h4>
                  <p className="text-maestro-blue text-[10px] font-black uppercase tracking-[0.3em]">{t.role}</p>
                </div>
              </div>
              
              <div className="relative flex-grow">
                 <span className="absolute -top-6 -left-4 text-8xl text-indigo-500/10 font-serif">“</span>
                 <p className="text-slate-600 dark:text-slate-400 font-medium text-lg leading-relaxed relative z-10 tracking-wide italic">
                   {t.content}
                 </p>
              </div>

              <div className="mt-12 flex justify-between items-center border-t border-slate-100 dark:border-white/5 pt-8">
                <span className={`px-4 py-1.5 rounded-full border-2 text-[9px] font-black uppercase tracking-[0.3em] ${t.color}`}>
                  {t.category}
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="w-2 h-2 bg-maestro-blue rounded-full"></div>
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
