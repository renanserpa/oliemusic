
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

interface Phase {
  id: string;
  title: string;
  subtitle: string;
  pillar: string;
  benefits: string[];
  xp: number;
  color: string;
  pecsIcon: string;
  description: string;
}

const phases: Phase[] = [
  {
    id: '01',
    title: 'Semente',
    subtitle: 'O Despertar Rítmico',
    pillar: 'Metodologia Suzuki (Dó)',
    benefits: ['Conexão Afetiva', 'Pulso Interno', 'Neuroplasticidade'],
    xp: 500,
    color: '#FF0000', // Dó (Vermelho)
    pecsIcon: '▲', // Triângulo PECS
    description: 'A fase fundamental. Onde o afeto e a escuta ativa criam o solo fértil para o desenvolvimento musical.'
  },
  {
    id: '02',
    title: 'Brotinho',
    subtitle: 'Audiation Ativa',
    pillar: 'Metodologia Gordon (Fá)',
    benefits: ['Pensamento Musical', 'Afinação Relativa', 'Escuta Analítica'],
    xp: 1500,
    color: '#00FF00', // Fá (Verde)
    pecsIcon: '■', // Quadrado PECS
    description: 'O momento da compreensão rítmica e melódica. A criança começa a "pensar" música antes de tocar.'
  },
  {
    id: '03',
    title: 'Rockstar',
    subtitle: 'Elite Performance',
    pillar: 'Metodologia Maestro (Si)',
    benefits: ['Presença de Palco', 'Composição GCM', 'Maestria Artística'],
    xp: 5000,
    color: '#8B00FF', // Si (Roxo)
    pecsIcon: '⬢', // Hexágono PECS
    description: 'O topo da montanha. Onde a técnica e a tecnologia GCM se unem para criar um artista completo e autônomo.'
  }
];

const RoadmapNode: React.FC<{ phase: Phase; index: number }> = ({ phase, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-center w-full mb-48 md:mb-0 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
      {/* Content Card with Popover Logic */}
      <div className={`w-full md:w-[42%] flex flex-col ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ y: -5 }}
          onClick={() => setIsOpen(!isOpen)}
          className="glass dark:bg-slate-900/90 p-10 rounded-[4rem] border border-white/40 dark:border-white/10 shadow-2xl relative cursor-pointer group"
        >
          {/* XP Badge */}
          <div className="absolute -top-4 -right-4 bg-amber-400 text-slate-950 px-5 py-2 rounded-2xl font-black text-xs shadow-xl rotate-6 group-hover:rotate-0 transition-transform">
            +{phase.xp} XP
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <span className="text-[11px] font-black uppercase tracking-[0.4em]" style={{ color: phase.color }}>
              {phase.pillar}
            </span>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
              {phase.title}
            </h3>
          </div>

          <p className="text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest text-xs mb-8">
            {phase.subtitle}
          </p>
          
          <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
            {phase.benefits.map((b, i) => (
              <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                {b}
              </span>
            ))}
          </div>

          {/* Interactive Popover via AnimatePresence */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute inset-0 bg-slate-900 dark:bg-white p-10 rounded-[4rem] z-50 flex flex-col justify-center items-center text-center shadow-3xl"
              >
                <button 
                  className="absolute top-6 right-6 text-white dark:text-slate-950 text-xl font-black"
                  onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                >
                  ✕
                </button>
                <div className="text-6xl mb-6 opacity-20" style={{ color: isEven ? '#fff' : phase.color }}>
                  {phase.pecsIcon}
                </div>
                <p className="text-white dark:text-slate-950 text-xl font-medium italic leading-relaxed">
                  "{phase.description}"
                </p>
                <div className="mt-8 text-[10px] font-black uppercase tracking-[0.5em] text-indigo-400">
                  Clique para fechar
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Central Interactive Node */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
        <motion.div 
          whileHover={{ scale: 1.25, rotate: 180 }}
          className="w-24 h-24 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-[0_0_40px_rgba(0,0,0,0.1)] border-[6px] border-white dark:border-slate-800 z-20 transition-all cursor-pointer"
          style={{ backgroundColor: phase.color, color: '#fff', boxShadow: `0 0 50px ${phase.color}44` }}
        >
          <span className="drop-shadow-lg">{phase.pecsIcon}</span>
        </motion.div>
        
        {/* Mobile-only connector */}
        <div className="md:hidden w-1.5 h-48 bg-gradient-to-b from-slate-200 to-transparent dark:from-white/10 dark:to-transparent"></div>
      </div>
    </div>
  );
};

const MaestroRoadmap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
  const luccaY = useTransform(scrollYProgress, [0, 1], ["0%", "92%"]);
  const luccaRotate = useTransform(scrollYProgress, [0, 0.5, 1], [15, -15, 15]);

  return (
    <section ref={containerRef} className="py-48 bg-maestro-canvas dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative">
        
        <div className="text-center mb-40 space-y-8">
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 bg-maestro-purple rounded-full animate-ping"></span>
            <span className="text-maestro-purple text-[11px] font-[900] uppercase tracking-[0.5em]">Trilha da Evolução</span>
          </div>
          <h2 className="text-6xl md:text-[130px] font-[900] text-slate-900 dark:text-white rockstar-title uppercase italic tracking-tighter leading-none drop-shadow-sm">
            Jornada <span className="text-transparent bg-clip-text bg-gradient-to-r from-maestro-red via-maestro-blue to-maestro-purple">Maestro</span>.
          </h2>
          <p className="text-2xl md:text-3xl text-slate-500 font-medium max-w-3xl mx-auto leading-tight italic">
            "Da primeira escuta à performance épica. <br className="hidden md:block" /> O caminho phygital para a maestria."
          </p>
        </div>

        <div className="relative min-h-[1600px] py-20">
          {/* Sinuous SVG Path (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-4 h-full z-0">
             <svg width="100%" height="100%" viewBox="0 0 10 1000" preserveAspectRatio="none" className="overflow-visible opacity-20 dark:opacity-40">
               <motion.path
                d="M 5 0 Q 60 166 5 333 Q -50 500 5 666 Q 60 833 5 1000"
                fill="transparent"
                strokeWidth="0.2"
                stroke="#cbd5e1"
                strokeDasharray="0.5 0.5"
                className="dark:stroke-white/20"
               />
               <motion.path
                d="M 5 0 Q 60 166 5 333 Q -50 500 5 666 Q 60 833 5 1000"
                fill="transparent"
                strokeWidth="0.3"
                stroke="url(#maestro-roadmap-gradient)"
                style={{ pathLength }}
               />
               <defs>
                 <linearGradient id="maestro-roadmap-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                   <stop offset="0%" stopColor="#FF0000" />
                   <stop offset="50%" stopColor="#00FF00" />
                   <stop offset="100%" stopColor="#8B00FF" />
                 </linearGradient>
               </defs>
             </svg>

             {/* Animated Lucca NPC - Dynamic Tracking */}
             <motion.div 
               style={{ top: luccaY, rotate: luccaRotate }}
               className="absolute left-1/2 -translate-x-1/2 w-28 h-28 z-30"
             >
                <div className="relative group">
                  <div className="absolute -inset-8 bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
                  <div className="w-28 h-28 bg-white dark:bg-slate-800 rounded-[3rem] border-4 border-slate-900 shadow-3xl flex items-center justify-center text-5xl group-hover:scale-110 transition-transform cursor-help">
                    🤘
                  </div>
                  <div className="absolute -left-48 top-4 glass px-6 py-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap border border-white/40 shadow-2xl">
                    <p className="text-[11px] font-black uppercase text-indigo-600">Guia Lucca</p>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300 italic">"Siga o compasso, Mestre!"</p>
                  </div>
                </div>
             </motion.div>
          </div>

          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-100 dark:bg-white/5 z-0"></div>

          {/* Phase Nodes with Precise Spacing */}
          <div className="relative z-10 space-y-48 md:space-y-[450px]">
            {phases.map((phase, index) => (
              <RoadmapNode key={phase.id} phase={phase} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="mt-64 text-center">
           <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-block glass dark:bg-slate-900/60 p-16 md:p-24 rounded-[5rem] border-2 border-dashed border-indigo-500/30 shadow-3xl"
           >
              <div className="text-6xl mb-8">🏆</div>
              <h4 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-6">
                A Maestria te Espera.
              </h4>
              <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-xl mx-auto leading-relaxed">
                Cada nódulo conquistado libera novas trilhas no software <span className="text-slate-900 dark:text-white font-black underline decoration-maestro-blue underline-offset-4">GCM Maestro</span>.
              </p>
              <button className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-16 py-8 rounded-[2.5rem] font-black text-2xl uppercase italic tracking-widest shadow-2xl hover:bg-maestro-purple hover:text-white transition-all transform active:scale-95">
                Ativar Minha Jornada
              </button>
           </motion.div>
        </div>
      </div>

      {/* Rhythmic Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-maestro-red/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-maestro-purple/5 rounded-full blur-[140px] pointer-events-none"></div>
    </section>
  );
};

export default MaestroRoadmap;
