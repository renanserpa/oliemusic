
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const AboutPage: React.FC = () => {
  const { theme } = useTheme();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const team = [
    {
      name: "Renan Serpa",
      role: "Founder & CEO",
      bio: "Músico e educador com 17 anos de estrada. Criador da Metodologia Serpa-Híbrida e visionário por trás do GCM Maestro.",
      image: "https://images.unsplash.com/photo-1510915363646-e62f7bb21ee5?w=400&h=400&fit=crop",
      icon: "🎸"
    },
    {
      name: "Lucca",
      role: "Chief Play Officer",
      bio: "Nosso guia lúdico. Responsável por garantir que cada nota musical seja transformada em uma aventura épica para as crianças.",
      image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=400&h=400&fit=crop",
      icon: "🎮"
    },
    {
      name: "Dra. Ana Lúcia",
      role: "Diretora Pedagógica",
      bio: "Especialista em métodos ativos (Dalcroze/Gordon). Garante o rigor científico por trás de cada jogo e atividade.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      icon: "📖"
    }
  ];

  const faqs = [
    {
      question: "O que é o Ecossistema Olie Music?",
      answer: "É uma plataforma integrada que une pedagogia musical lúdica (Suzuki, Dalcroze, Gordon) a tecnologias avançadas (GCM Maestro). Atendemos famílias, professores e escolas em uma jornada phygital contínua."
    },
    {
      question: "Como funciona a Metodologia Serpa-Híbrida?",
      answer: "Ela foca no 'Corpo como Metrônomo' e na 'Escuta Ativa'. Unimos o afeto das relações presenciais com o poder de engajamento da gamificação digital, garantindo retenção e aprendizado real."
    },
    {
      question: "O software GCM Maestro é um jogo?",
      answer: "É uma ferramenta de aprendizagem gamificada. Ele rastreia o progresso rítmico e melódico do aluno, transformando o estudo diário em uma quest épica com recompensas e trilhas de evolução."
    },
    {
      question: "Posso usar a Olie Music apenas em casa?",
      answer: "Sim! Temos produtos específicos para famílias, como o Combo Sementinha, que permite aos pais guiarem os filhos nos primeiros passos musicais com facilidade e afeto."
    },
    {
      question: "Olie Music oferece suporte para escolas B2B?",
      answer: "Com certeza. O GCM Maestro B2B é nossa solução enterprise para instituições que buscam inovação pedagógica, controle de evasão e um diferencial competitivo no mercado educacional."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-slate-100 dark:border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.4em] px-6 py-2 rounded-full mb-8 shadow-xl shadow-indigo-200 dark:shadow-none">
            Backstage da Olie
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter uppercase italic mb-8">
            Nossa <span className="text-indigo-600 dark:text-indigo-400 underline decoration-indigo-200 dark:decoration-indigo-900 underline-offset-8">Sinfonia</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
            Não somos apenas uma escola ou um software. Somos um ecossistema vivo que acredita que a música é o primeiro passo para a inteligência emocional.
          </p>
        </div>
      </section>

      {/* History Section (Authority Style) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-indigo-500/10 rounded-[5rem] blur-3xl opacity-100"></div>
              <div className="relative aspect-square overflow-hidden rounded-[4rem] border-[12px] border-white dark:border-slate-800 shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1000&h=1000&fit=crop" 
                  alt="Estúdio Olie Music"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-pink-500 text-white p-8 rounded-full shadow-2xl border-4 border-white dark:border-slate-800 rotate-12 z-20">
                <span className="block text-4xl font-black tracking-tighter">Est. 2008</span>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                Uma Jornada de <br/> <span className="text-indigo-600">17 Anos</span> de Acordes.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                <p>
                  A Olie Music nasceu do desejo do Prof. Renan Serpa de criar um ambiente onde a música não fosse imposta, mas descoberta. O que começou como aulas particulares em uma pequena sala, evoluiu para uma metodologia proprietária que já impactou milhares de vidas.
                </p>
                <p>
                  Em 2024, demos o maior salto da nossa história: a digitalização completa da nossa pedagogia através do ecossistema GCM Maestro, unindo o mundo físico ao digital (Phygital) para escalar o amor pela música.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Missão", 
                desc: "Democratizar o ensino musical de alta performance através do lúdico e da tecnologia.", 
                icon: "🚀",
                color: "bg-orange-500"
              },
              { 
                title: "Visão", 
                desc: "Ser o principal ecossistema de educação musical phygital do mundo até 2030.", 
                icon: "👁️",
                color: "bg-indigo-600"
              },
              { 
                title: "Valores", 
                desc: "Afeto pedagógico, Inovação constante, Disciplina Rockstar e Alegria no processo.", 
                icon: "💎",
                color: "bg-pink-500"
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-900 p-12 rounded-[3.5rem] border border-slate-100 dark:border-white/5 hover:shadow-2xl transition-all group">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase italic mb-4 tracking-tighter">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
              A Banda <span className="text-indigo-400">Principal</span>
            </h2>
            <p className="text-slate-400 text-xl font-medium mt-4">Os maestros por trás de cada inovação da Olie.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <div key={i} className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] hover:border-indigo-500/50 transition-all duration-500">
                <div className="relative mb-8">
                  <div className="absolute -inset-2 bg-indigo-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-48 h-48 rounded-full border-4 border-indigo-400 mx-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-0 right-1/4 bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-xl border-4 border-slate-900">
                    {member.icon}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-black text-white uppercase italic tracking-tight">{member.name}</h3>
                  <p className="text-indigo-400 font-black uppercase text-[10px] tracking-[0.3em] mb-4">{member.role}</p>
                  <p className="text-slate-400 font-medium leading-relaxed italic">"{member.bio}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-maestro-canvas dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-block px-5 py-2 rounded-full border border-slate-200 dark:border-white/10 glass">
               <span className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">Tira-Dúvidas Maestro</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
              O Que <span className="text-maestro-blue">Você Precisa</span> Saber.
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <article 
                key={i} 
                className={`overflow-hidden transition-all duration-500 border-2 rounded-[3rem] ${
                  openFaqIndex === i ? 'border-maestro-blue bg-white dark:bg-slate-900 shadow-2xl' : 'border-slate-100 dark:border-white/5 bg-white/50 dark:bg-slate-800/30'
                }`}
              >
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-8 md:p-10 flex items-center justify-between gap-8 outline-none"
                >
                  <h3 className={`text-xl md:text-2xl font-black uppercase italic tracking-tight transition-colors ${
                    openFaqIndex === i ? 'text-maestro-blue' : 'text-slate-900 dark:text-white'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    openFaqIndex === i ? 'border-maestro-blue bg-maestro-blue text-white rotate-180 shadow-lg' : 'border-slate-200 text-slate-400'
                  }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-10 pb-10">
                        <p className="text-slate-600 dark:text-slate-400 font-medium text-lg md:text-xl leading-relaxed border-t border-slate-100 dark:border-white/5 pt-8">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white dark:bg-slate-950 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-8">
            Quer fazer parte da <span className="text-indigo-600">nossa história</span>?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-xl uppercase italic tracking-widest shadow-2xl hover:bg-indigo-700 transition-all">
              Trabalhe Conosco
            </button>
            <button className="border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-10 py-5 rounded-2xl font-black text-xl uppercase italic tracking-widest hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
              Seja um Parceiro
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
