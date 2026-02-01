
import React from 'react';

const AuthoritySection: React.FC = () => {
  const pillars = [
    { 
      name: "Suzuki", 
      icon: "▲", 
      color: "from-maestro-red to-orange-500", 
      bg: "bg-maestro-red/5",
      text: "O afeto como base da plasticidade neural e aquisição de linguagem musical.",
      lucca: "🧐 'Pai, o cérebro da criança é uma esponja afetiva!'"
    },
    { 
      name: "Gordon", 
      icon: "★", 
      color: "from-maestro-blue to-cyan-500", 
      bg: "bg-maestro-blue/5",
      text: "Desenvolvimento da Audiation: a capacidade de pensar música com clareza.",
      lucca: "🔬 'Ouvir não é o mesmo que audiar. Ciência pura!'"
    },
    { 
      name: "Dalcroze", 
      icon: "●", 
      color: "from-maestro-purple to-pink-500", 
      bg: "bg-maestro-purple/5",
      text: "O corpo é o instrumento. Conexão rítmica através do movimento somático.",
      lucca: "⚡ 'Ritmo é biomecânica. Se o corpo sente, a nota sai!'"
    },
    { 
      name: "PECS", 
      icon: "■", 
      color: "from-emerald-500 to-teal-500", 
      bg: "bg-emerald-500/5",
      text: "Acessibilidade cognitiva. Geometria rítmica para neurodiversidade.",
      lucca: "🧩 'Inclusão é a nossa nota mais importante, mestre!'"
    },
    { 
      name: "Gamificação", 
      icon: "◆", 
      color: "from-amber-500 to-orange-600", 
      bg: "bg-amber-500/5",
      text: "Dopamina saudável. Retenção através de trilhas de recompensa e desafios.",
      lucca: "🎮 'Level up! Transformamos treino em diversão épica!'"
    }
  ];

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-950 grid-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-block px-6 py-2 rounded-full border border-maestro-blue/20 bg-maestro-blue/5 text-maestro-blue text-[11px] font-[900] uppercase tracking-[0.5em]">
            Laboratório Olie Music
          </div>
          <h2 className="text-6xl md:text-[110px] font-[900] text-slate-900 dark:text-white rockstar-title uppercase italic tracking-tighter leading-[0.85]">
            O ROI <span className="text-maestro-red">Pedagógico</span> <br/> da Ciência.
          </h2>
          <p className="text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Unimos o rigor dos métodos clássicos à tecnologia de retenção do futuro. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {pillars.map((pillar) => (
            <div 
              key={pillar.name} 
              className={`group relative h-[450px] p-8 rounded-[3rem] border-2 border-white dark:border-slate-800 transition-all duration-700 overflow-hidden ${pillar.bg} hover:border-transparent cursor-pointer`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-b ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <div className="relative z-10 h-full flex flex-col items-center text-center">
                <div className="text-6xl mb-8 group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-500 drop-shadow-lg group-hover:text-white">
                  {pillar.icon}
                </div>
                
                <h3 className="text-2xl font-[900] uppercase italic tracking-tight mb-4 group-hover:text-white transition-colors">
                  {pillar.name}
                </h3>
                
                <p className="text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400 group-hover:text-white/90 transition-colors">
                  {pillar.text}
                </p>

                {/* Lucca Scientist Reveal */}
                <div className="mt-auto opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30">
                  <p className="text-[11px] font-[900] text-white italic tracking-wide uppercase leading-tight">
                    {pillar.lucca}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confidence Button Section */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col items-center gap-8">
            <button className="animate-pulse-60bpm relative group bg-maestro-blue text-white px-16 py-8 rounded-[3rem] font-[900] text-3xl uppercase italic tracking-[0.1em] shadow-[0_20px_50px_rgba(0,0,255,0.3)] hover:scale-105 transition-all active:scale-95">
              Botão de Confiança
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.4em] text-maestro-blue whitespace-nowrap opacity-60">
                60 BPM • Frequência de Foco
              </div>
            </button>
            <p className="max-w-xl text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em] leading-relaxed">
              *Metodologia validada por mais de 5.000 famílias e 120 escolas parceiras em todo o Brasil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
