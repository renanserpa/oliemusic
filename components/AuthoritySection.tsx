
import React from 'react';

const AuthoritySection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Foto Principal com Violão e Badge de Experiência */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-6 bg-indigo-500/10 rounded-[5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4rem] border-[12px] border-white dark:border-slate-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)]">
              <img 
                src="https://images.unsplash.com/photo-1510915363646-e62f7bb21ee5?w=800&h=1000&fit=crop" 
                alt="Mestre Renan Serpa com violão"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Experience Badge - Flutuante e Marcante */}
            <div className="absolute -top-8 -right-8 bg-indigo-600 text-white p-10 rounded-full shadow-[0_20px_50px_rgba(79,70,229,0.3)] animate-float z-20 border-4 border-white dark:border-slate-900">
              <div className="text-center">
                <span className="block text-5xl font-black tracking-tighter">17</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none block mt-1">Anos de<br/>Maestria</span>
              </div>
            </div>
          </div>

          {/* Conteúdo da Bio e Selos Metodológicos */}
          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-block bg-indigo-50 dark:bg-indigo-900/30 px-4 py-1.5 rounded-full">
                <span className="text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-[0.2em]">Nossa História</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter uppercase italic">
                17 anos transformando o <span className="text-indigo-600">ensino de música.</span>
              </h2>
              <div className="space-y-4">
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  A Olie Music nasceu da inquietação do Prof. Renan Serpa ao ver o ensino tradicional afastar talentos. Foram quase duas décadas refinando o que hoje é o ecossistema mais completo de educação musical phygital.
                </p>
                <p className="text-lg text-slate-500 dark:text-slate-500 leading-relaxed italic">
                  "Nossa missão é resgatar a ludicidade sem perder a técnica. Se a música é uma língua, ela deve ser aprendida como tal: primeiro o som, depois a regra."
                </p>
              </div>
            </div>

            {/* Selos da Metodologia - Pilares Gordon, Suzuki, Dalcroze */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: "Suzuki", label: "Afeto e Repetição", icon: "🎻", color: "border-pink-200 bg-pink-50/50 text-pink-700" },
                { name: "Dalcroze", label: "Ritmo e Corpo", icon: "🤸", color: "border-orange-200 bg-orange-50/50 text-orange-700" },
                { name: "Gordon", label: "Pensamento Musical", icon: "🎧", color: "border-indigo-200 bg-indigo-50/50 text-indigo-700" }
              ].map((pillar) => (
                <div key={pillar.name} className={`flex flex-col items-center text-center p-6 rounded-[2.5rem] border-2 transition-all hover:scale-105 ${pillar.color} dark:bg-slate-900 dark:border-white/5`}>
                  <div className="text-4xl mb-3">{pillar.icon}</div>
                  <h4 className="font-black uppercase tracking-widest text-sm mb-1">{pillar.name}</h4>
                  <p className="text-[10px] font-bold uppercase opacity-70 tracking-tighter">{pillar.label}</p>
                </div>
              ))}
            </div>

            {/* Trust Signals */}
            <div className="flex items-center gap-6 pt-8 border-t border-slate-100 dark:border-white/5">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900" src={`https://i.pravatar.cc/100?u=auth${i}`} alt="Estudante" />
                ))}
              </div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                Mais de <span className="text-indigo-600">5.000 vidas</span> sintonizadas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
