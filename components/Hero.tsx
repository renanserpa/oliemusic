
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-maestro-canvas dark:bg-slate-950 transition-colors duration-300">
      {/* Geometria de Apoio Background */}
      <div className="absolute top-20 right-[-5%] w-96 h-96 border-[40px] border-maestro-red/5 rounded-full rotate-12 pointer-events-none"></div>
      <div className="absolute bottom-10 left-[-5%] w-64 h-64 border-[30px] border-maestro-blue/5 rotate-45 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 px-6 py-2 rounded-full shadow-xl">
             <span className="w-3 h-3 bg-maestro-red rounded-full animate-ping"></span>
             <span className="text-[10px] font-[900] uppercase tracking-[0.4em] text-slate-800 dark:text-white">Vitrine Rockstar 2026</span>
          </div>

          <h1 className="text-6xl md:text-[120px] font-[900] text-slate-900 dark:text-white rockstar-title uppercase italic tracking-tighter">
            O Futuro <br className="hidden md:block" />
            <span className="text-maestro-blue">Phygital</span> da Música.
          </h1>

          <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-400 font-medium max-w-3xl mx-auto leading-tight">
            Unindo o afeto de <span className="text-maestro-red font-black">Suzuki</span> ao ritmo de <span className="text-maestro-purple font-black">Dalcroze</span> com tecnologia Maestro.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <button className="w-full sm:w-auto px-12 py-6 bg-slate-900 text-white rounded-5xl font-black text-2xl uppercase italic tracking-widest shadow-2xl hover:bg-maestro-red transition-all duration-500 hover:-translate-y-2 active:scale-95">
              Começar Agora
            </button>
            <div className="flex items-center gap-4 text-slate-400 uppercase font-black tracking-widest text-xs">
              <span className="w-12 h-0.5 bg-slate-200"></span>
              Metodologia Serpa-Híbrida
              <span className="w-12 h-0.5 bg-slate-200"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
