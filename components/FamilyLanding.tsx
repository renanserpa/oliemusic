
import React from 'react';
import LeadCapture from './LeadCapture';

const FamilyLanding: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-orange-50 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full border border-orange-200">
                <span className="text-orange-700 text-sm font-black uppercase tracking-widest">Para Pais e Mães</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter uppercase italic">
                A música como a <span className="text-orange-500 underline decoration-orange-200 underline-offset-8">primeira língua</span> do seu filho.
              </h1>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                Transformamos o aprendizado musical em uma jornada de conexão familiar e diversão pura. Através do lúdico, estimulamos o cérebro e o coração.
              </p>
              <div className="flex gap-4">
                <a href="#manual" className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-black text-lg uppercase italic tracking-widest shadow-xl shadow-orange-200 hover:bg-orange-600 transition-all">
                  Baixar Manual Grátis
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=800&fit=crop" 
                className="rounded-[4rem] shadow-2xl border-8 border-white transform rotate-2"
                alt="Família tocando música"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-xs border border-orange-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">🎸</div>
                  <h4 className="font-black text-slate-900 uppercase italic">Conheça o Lucca</h4>
                </div>
                <p className="text-sm text-slate-500 font-medium">Nosso guia lúdico que transforma cada nota em uma aventura épica para as crianças.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black text-center text-slate-900 uppercase italic tracking-tighter mb-16">
            Por que escolher a <span className="text-orange-500">Olie</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Vínculo Afetivo", desc: "Momentos preciosos entre pais e filhos mediado pela música.", icon: "❤️" },
              { title: "Foco e Atenção", desc: "Melhora comprovada na concentração através de jogos rítmicos.", icon: "🎯" },
              { title: "Escuta Ativa", desc: "O ouvido absoluto começa com o estímulo correto na infância.", icon: "🎧" }
            ].map((b, i) => (
              <div key={i} className="bg-orange-50/50 p-10 rounded-[3rem] border border-orange-100 hover:shadow-xl transition-all">
                <div className="text-5xl mb-6">{b.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase italic">{b.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="manual">
        <LeadCapture />
      </div>
    </div>
  );
};

export default FamilyLanding;
