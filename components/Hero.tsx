
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-indigo-50 dark:bg-indigo-950/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-pink-50 dark:bg-pink-950/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-full border border-indigo-100 dark:border-indigo-800 mb-4 animate-bounce">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
            <span className="text-indigo-700 dark:text-indigo-300 text-sm font-semibold uppercase tracking-wider">Educação Musical Phygital</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter uppercase italic">
            <span className="sr-only">Olie Music: </span>
            O Futuro da Música é <br className="hidden md:block" />
            <span className="text-indigo-600 dark:text-indigo-400">Leve, Natural e Divertido.</span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-3xl mx-auto">
            A <strong>Olie Music</strong> une o afeto de métodos clássicos como <span className="text-slate-900 dark:text-slate-200 font-bold italic underline decoration-indigo-300 underline-offset-4">Suzuki e Dalcroze</span> à potência do <strong>GCM Maestro</strong> para criar uma jornada de aprendizado inesquecível.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <button className="group relative w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-[2rem] font-black text-xl uppercase italic tracking-widest shadow-2xl shadow-indigo-200 dark:shadow-indigo-900/50 hover:scale-110 hover:-rotate-1 hover:bg-indigo-700 hover:shadow-[0_20px_50px_rgba(79,70,229,0.5)] transition-all duration-300 active:scale-95">
              <span className="flex items-center justify-center gap-3">
                <span className="text-2xl">❤️</span> Música e Diversão em Família
              </span>
              <div className="absolute inset-0 rounded-[2rem] bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </button>
            
            <button className="group relative w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border-2 border-slate-200 dark:border-slate-700 rounded-[2rem] font-black text-xl uppercase italic tracking-widest hover:scale-110 hover:rotate-1 hover:border-indigo-600 dark:hover:border-indigo-400 hover:shadow-2xl transition-all duration-300 active:scale-95 shadow-xl hover:shadow-indigo-100 dark:hover:shadow-indigo-950/30">
              <span className="flex items-center justify-center gap-3">
                <span className="text-2xl">🎮</span> Materiais e PDFs para Professores
              </span>
            </button>
          </div>
          
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 animate-pulse">
            Escolha seu perfil acima para começar sua jornada
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
