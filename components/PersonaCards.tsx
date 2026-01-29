
import React from 'react';
import { PersonaCardProps } from '../types';

const Card: React.FC<PersonaCardProps> = ({ title, description, ctaText, href, icon, color }) => {
  return (
    <div className={`group bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-start h-full border-t-8 ${color}`}>
      <div className="mb-6 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
        {description}
      </p>
      <div className="mt-auto w-full">
        <a 
          href={href}
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold group-hover:gap-4 transition-all"
        >
          {ctaText}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const PersonaCards: React.FC = () => {
  const personas: PersonaCardProps[] = [
    {
      title: "Para Famílias",
      description: "Aulas lúdicas e materiais prontos para tornar o ambiente musical em casa uma diversão sem estresse.",
      ctaText: "Música em Casa",
      href: "#/families",
      color: "border-t-orange-400",
      delay: 0,
      icon: (
        <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Para Professores",
      description: "Apostilas Master e kits de atividades em PDF para rentabilizar suas aulas e engajar seus alunos.",
      ctaText: "Recursos Didáticos",
      href: "#/teachers",
      color: "border-t-emerald-400",
      delay: 100,
      icon: (
        <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Para Escolas",
      description: "Apresentamos o GCM Maestro: o software que centraliza a gestão pedagógica e o aprendizado musical.",
      ctaText: "Gestão Maestro",
      href: "#/schools",
      color: "border-t-indigo-600",
      delay: 200,
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <Card key={index} {...persona} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonaCards;