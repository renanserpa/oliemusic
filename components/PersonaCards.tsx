
import React from 'react';
import { PersonaCardProps } from '../types';
import { motion } from 'framer-motion';

const Card: React.FC<PersonaCardProps> = ({ title, description, ctaText, href, icon, color, delay }) => {
  // Mapping color classes to Maestro Pro System with enhanced interactive states
  const colorMap: Record<string, { border: string; ring: string; shadow: string; glow: string }> = {
    'border-t-orange-400': { 
      border: 'border-t-maestro-red', 
      ring: 'group-hover:ring-maestro-red/50',
      shadow: 'shadow-maestro-red/5', 
      glow: 'group-hover:shadow-[0_0_40px_rgba(255,0,0,0.25)]' 
    },
    'border-t-emerald-400': { 
      border: 'border-t-maestro-blue', 
      ring: 'group-hover:ring-maestro-blue/50',
      shadow: 'shadow-maestro-blue/5', 
      glow: 'group-hover:shadow-[0_0_40px_rgba(0,0,255,0.25)]' 
    },
    'border-t-indigo-600': { 
      border: 'border-t-maestro-purple', 
      ring: 'group-hover:ring-maestro-purple/50',
      shadow: 'shadow-maestro-purple/5', 
      glow: 'group-hover:shadow-[0_0_40px_rgba(139,0,255,0.25)]' 
    }
  };

  const activeStyle = colorMap[color] || { border: color, ring: '', shadow: '', glow: '' };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay / 1000, duration: 0.5 }}
      className={`group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-slate-200/50 dark:border-white/5 shadow-2xl transition-all duration-500 flex flex-col items-start h-full border-t-[12px] ${activeStyle.border} ${activeStyle.shadow} ${activeStyle.glow} hover:-translate-y-4 hover:ring-2 ${activeStyle.ring}`}
    >
      {/* Visual Decoration for Hover */}
      <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-white/5 to-transparent dark:from-white/[0.02]"></div>

      <div className="mb-8 w-20 h-20 bg-white dark:bg-slate-800 rounded-3xl shadow-[inner_0_2px_4px_rgba(0,0,0,0.05)] flex items-center justify-center group-hover:rotate-[10deg] group-hover:scale-110 transition-all duration-500 border border-slate-100 dark:border-white/5 relative z-10">
        <span className="text-5xl select-none" aria-hidden="true">{icon}</span>
      </div>
      
      <h3 className="text-4xl font-[900] text-slate-900 dark:text-white mb-4 rockstar-title uppercase italic tracking-tighter leading-none relative z-10">
        {title}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium tracking-wide text-lg relative z-10">
        {description}
      </p>
      
      <div className="mt-auto w-full relative z-10">
        <a 
          href={href}
          className="inline-flex items-center gap-4 text-slate-950 dark:text-white font-[900] uppercase text-xs tracking-[0.4em] group-hover:gap-6 transition-all"
        >
          {ctaText}
          <div className="w-10 h-10 rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

const PersonaCards: React.FC = () => {
  const personas: PersonaCardProps[] = [
    {
      title: "Famílias",
      description: "A música como primeira língua. Conexão profunda entre pais e filhos através do método Serpa-Híbrido.",
      ctaText: "Música em Casa",
      href: "#/families",
      color: "border-t-orange-400",
      delay: 0,
      icon: "▲" // Triângulo PECS: Tônica/Estabilidade
    },
    {
      title: "Academy",
      description: "Materiais premium para professores. Transforme sua aula em um espetáculo phygital viciante.",
      ctaText: "Portal Maestro",
      href: "#/teachers",
      color: "border-t-emerald-400",
      delay: 150,
      icon: "★" // Estrela PECS: Brilho/Performance
    },
    {
      title: "Escolas",
      description: "O ecossistema GCM Maestro para instituições. Gestão rítmica e pedagógica em escala industrial.",
      ctaText: "Whitepaper B2B",
      href: "#/schools",
      color: "border-t-indigo-600",
      delay: 300,
      icon: "⬢" // Hexágono PECS: Unidade/Comunidade (Updated to match ProductShowcase/DigitalStore)
    }
  ];

  return (
    <section className="py-24 bg-maestro-canvas dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {personas.map((persona, index) => (
            <Card key={index} {...persona} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonaCards;
