
import React from 'react';
import { motion } from 'framer-motion';

const profiles = [
  {
    id: 'families',
    title: 'Sou Pai/Mãe',
    subtitle: 'Conexão e Afeto',
    description: 'Transforme o ambiente da sua casa com a Metodologia Serpa-Híbrida.',
    icon: '▲', // Triângulo PECS
    color: '#FF0000', // Dó (Red)
    bgClass: 'hover:shadow-[0_0_80px_rgba(255,0,0,0.25)] hover:border-maestro-red/50',
    lucca: '🎸', // Lucca com Violão
    luccaLabel: 'Lucca Rockstar',
    href: 'families'
  },
  {
    id: 'teachers',
    title: 'Sou Professor',
    subtitle: 'Autoridade e Escala',
    description: 'Acesse ferramentas que multiplicam o engajamento e a sua receita.',
    icon: '★', // Estrela PECS
    color: '#0000FF', // Lá (Blue)
    bgClass: 'hover:shadow-[0_0_80px_rgba(0,0,255,0.25)] hover:border-maestro-blue/50',
    lucca: '🪄', // Lucca com Batuta/Mágico
    luccaLabel: 'Lucca Maestro',
    href: 'teachers'
  },
  {
    id: 'schools',
    title: 'Sou Gestor',
    subtitle: 'Tecnologia e Gestão',
    description: 'Implemente o ecossistema GCM Maestro e elimine a evasão escolar.',
    icon: '⬢', // Hexágono PECS
    color: '#8B00FF', // Si (Purple)
    bgClass: 'hover:shadow-[0_0_80px_rgba(139,0,255,0.25)] hover:border-maestro-purple/50',
    lucca: '🎓', // Lucca Acadêmico
    luccaLabel: 'Lucca Reitor',
    href: 'schools'
  }
];

const MaestroJourneyOnboarding: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <section className="relative py-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 to-black overflow-hidden border-y border-white/5">
      {/* Background Decor rítmico */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/5 rounded-full blur-[180px] pointer-events-none"></div>
      
      {/* Grade de fundo sutil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy-dark.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 space-y-6"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 bg-maestro-blue rounded-full animate-ping"></span>
            <span className="text-maestro-blue text-[11px] font-[900] uppercase tracking-[0.5em] block">Início da Sinfonia</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black text-white rockstar-title uppercase italic tracking-tighter drop-shadow-2xl">
            Escolha seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-maestro-red via-maestro-blue to-maestro-purple">Ponto de Partida</span>
          </h2>
          
          <p className="text-slate-400 text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            Seu perfil define as ferramentas e a metodologia <br className="hidden md:block" /> 
            que o <span className="text-white font-black underline decoration-maestro-blue/50 underline-offset-4">GMC Maestro</span> ativará para você.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {profiles.map((profile) => (
            <motion.div
              key={profile.id}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 40 },
                show: { opacity: 1, scale: 1, y: 0 }
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateZ: 1,
                transition: { type: "spring", stiffness: 300, damping: 15 } 
              }}
              whileTap={{ scale: 0.95 }}
              className={`group relative bg-white/[0.07] backdrop-blur-2xl border border-white/20 p-12 rounded-[4rem] transition-all duration-500 cursor-pointer shadow-2xl ${profile.bgClass}`}
              onClick={() => onNavigate(profile.href)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onNavigate(profile.href)}
            >
              {/* Profile Icon / PECS Geometry */}
              <div className="relative mb-12">
                <div 
                  className="w-32 h-32 mx-auto bg-slate-800/80 rounded-[2.5rem] flex items-center justify-center text-7xl shadow-[inset_0_4px_12px_rgba(0,0,0,0.5)] border border-white/10 group-hover:rotate-[12deg] transition-transform duration-700"
                  style={{ color: profile.color, textShadow: `0 0 20px ${profile.color}44` }}
                >
                  {profile.icon}
                </div>
                
                {/* NPC Lucca Variant with Floating Animation */}
                <div className="absolute -top-10 -right-4 w-20 h-20 bg-white dark:bg-slate-800 rounded-3xl flex flex-col items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.4)] border-2 border-slate-900 animate-lucca group-hover:scale-125 group-hover:-rotate-6 transition-all duration-500">
                  <span className="text-4xl mb-1">{profile.lucca}</span>
                  <span className="text-[8px] font-black uppercase text-slate-500 tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                    {profile.luccaLabel}
                  </span>
                </div>
              </div>

              <div className="space-y-6 mb-12">
                <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter transition-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {profile.title}
                </h3>
                <p 
                  className="font-[900] uppercase tracking-[0.4em] text-sm"
                  style={{ color: profile.color }}
                >
                  {profile.subtitle}
                </p>
                <p className="text-slate-400 font-medium text-lg leading-snug">
                  {profile.description}
                </p>
              </div>

              {/* Action Button (Soft Neumorphism Maestro Style) */}
              <div className="relative">
                <button 
                  className="w-full bg-slate-900/40 border border-white/10 py-6 rounded-3xl font-black text-lg uppercase italic tracking-[0.2em] text-white transition-all 
                  shadow-[6px_6px_12px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.02)]
                  group-hover:bg-white group-hover:text-slate-950 group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6)]"
                >
                  Entrar no Palco
                </button>
              </div>

              {/* Micro-Interaction Indicator */}
              <div className="absolute top-6 left-6 opacity-20 group-hover:opacity-100 transition-opacity">
                 <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-32 space-y-4">
          <p className="text-[11px] text-slate-600 font-black uppercase tracking-[0.8em] animate-pulse">
            Inspirado pela Geometria Sagrada da Música
          </p>
          <div className="flex justify-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-maestro-red"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-maestro-blue"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-maestro-purple"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaestroJourneyOnboarding;
