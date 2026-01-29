
import React from 'react';
import StoreGrid from './StoreGrid';

const TeacherLanding: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-emerald-950 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full border border-emerald-500/30 mb-8">
              <span className="text-xs font-black uppercase tracking-[0.2em]">Exclusivo para Educadores</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase italic mb-8">
              Transforme suas aulas em um <span className="text-emerald-400">RPG Musical</span>.
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 font-medium leading-relaxed mb-12 opacity-80">
              "O corpo é o metrônomo". Aplique dinâmicas que engajam 100% dos seus alunos e multiplique seu faturamento com materiais de elite.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#store" className="bg-emerald-500 text-slate-950 px-10 py-5 rounded-2xl font-black text-xl uppercase italic tracking-widest hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]">
                Acessar Kit de Elite
              </a>
              <div className="flex items-center gap-4 text-emerald-300">
                <span className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center text-xl">⚡</span>
                <span className="font-bold uppercase tracking-widest text-sm">Mais de 5.000 professores impactados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm">
              <h2 className="text-3xl font-black text-slate-900 uppercase italic mb-6">Pedagogia em Escala</h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8">
                Chega de improviso. Nosso método une a rítmica Dalcroze com gamificação moderna para que cada aula seja um evento memorável.
              </p>
              <ul className="space-y-4">
                {['Menos tempo planejando', 'Mais tempo faturando', 'Alunos que não querem ir embora'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-emerald-600 font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-600 p-12 rounded-[4rem] text-white flex flex-col justify-center shadow-2xl shadow-emerald-200">
              <blockquote className="text-2xl font-black italic leading-tight mb-8">
                "A Olie me deu as ferramentas que a faculdade não deu: a prática real da sala de aula phygital."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                <div>
                  <div className="font-black uppercase tracking-widest text-sm">Prof. Marcus Vinícius</div>
                  <div className="text-xs text-emerald-200 uppercase font-bold">Educador Musical</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="store">
        <StoreGrid />
      </div>
    </div>
  );
};

export default TeacherLanding;
