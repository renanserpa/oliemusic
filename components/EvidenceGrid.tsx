
import React from 'react';
import { motion } from 'framer-motion';

interface Evidence {
  id: string;
  studentName: string;
  age: string;
  skill: string;
  pilar: string;
  videoThumb: string;
  color: string;
  pecsIcon: string;
  precision: string;
}

const evidences: Evidence[] = [
  {
    id: 'e1',
    studentName: 'Arthur',
    age: '7 anos',
    skill: 'Independência Motora',
    pilar: 'Suzuki',
    videoThumb: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=600&h=800&fit=crop',
    color: '#FF0000', // Dó (Red)
    pecsIcon: '▲',
    precision: '98%'
  },
  {
    id: 'e2',
    studentName: 'Beatriz',
    age: '9 anos',
    skill: 'Precisão Rítmica',
    pilar: 'Dalcroze',
    videoThumb: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=800&fit=crop',
    color: '#00FF00', // Fá (Green)
    pecsIcon: '⚡',
    precision: '95%'
  },
  {
    id: 'e3',
    studentName: 'Caio',
    age: '6 anos',
    skill: 'Audição Ativa',
    pilar: 'Gordon',
    videoThumb: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=800&fit=crop',
    color: '#0000FF', // Lá (Blue)
    pecsIcon: '★',
    precision: '92%'
  }
];

const EvidenceGrid: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-maestro-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Section with NPC Lucca */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 px-5 py-2 rounded-full shadow-sm">
               <span className="w-2 h-2 bg-maestro-red rounded-full animate-pulse"></span>
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Evidence-Based Pedagogy</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-[900] text-slate-900 dark:text-white rockstar-title uppercase italic tracking-tighter leading-none">
              Evidence <span className="text-maestro-red">Locker</span>.
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed italic">
              "Não é apenas música. É neurociência aplicada. <br className="hidden md:block" /> Veja a evolução real dos nossos pequenos Rockstars."
            </p>
          </div>

          {/* NPC Lucca Auditor Bubble */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-6 bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-white/5 relative"
          >
            <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center text-4xl shadow-lg animate-lucca">
              🧐
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-1">Lucca Auditor</p>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-tight">
                "Cada vídeo aqui foi validado<br/>pelo meu radar rítmico!"
              </p>
            </div>
            {/* Speech Bubble Arrow */}
            <div className="absolute -bottom-2 left-10 w-4 h-4 bg-white dark:bg-slate-900 rotate-45 border-r border-b border-slate-100 dark:border-white/5"></div>
          </motion.div>
        </div>

        {/* Evidence Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {evidences.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -15 }}
              className="group bg-white dark:bg-slate-900 rounded-[3rem] p-5 shadow-2xl border-b-[10px] transition-all duration-500 relative flex flex-col h-full"
              style={{ borderBottomColor: item.color }}
            >
              {/* Video Thumbnail Wrapper */}
              <div className="relative aspect-[4/3] rounded-[2.2rem] overflow-hidden mb-8 border border-slate-100 dark:border-white/5 bg-slate-900">
                <img 
                  src={item.videoThumb} 
                  alt={item.studentName}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center text-white transition-colors group-hover:bg-maestro-red"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>

                {/* PECS Tag Overlay */}
                <div className="absolute top-4 left-4 glass px-4 py-1.5 rounded-full flex items-center gap-2 border border-white/30">
                  <span className="text-sm font-black" style={{ color: item.color }}>{item.pecsIcon}</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">{item.pilar}</span>
                </div>

                {/* Precision Badge Overlay */}
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-xl flex items-center gap-1.5 shadow-lg">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[10px] font-black tracking-tighter">{item.precision} Precisão</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="px-3 pb-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">
                      {item.studentName}
                    </h3>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.age}</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6">
                    Habilidade Destravada: <br/>
                    <span className="text-slate-900 dark:text-white font-black uppercase text-xs tracking-widest">{item.skill}</span>
                  </p>
                </div>

                <button className="w-full py-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-slate-400 dark:text-slate-500 font-black uppercase text-[10px] tracking-[0.4em] hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-all">
                  Abrir Arquivo Completo
                </button>
              </div>

              {/* Lucca Stamp of Confidence */}
              <div className="absolute -bottom-6 -right-4 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-12 group-hover:rotate-0">
                <div className="w-full h-full bg-amber-400 rounded-full border-4 border-white dark:border-slate-800 shadow-xl flex items-center justify-center text-2xl">
                  🤘
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Evidence Trust Signal */}
        <div className="mt-24 text-center">
           <div className="inline-block p-1 bg-slate-100 dark:bg-white/5 rounded-3xl">
              <div className="px-8 py-4 bg-white dark:bg-slate-900 rounded-2xl flex flex-wrap justify-center items-center gap-8 shadow-sm">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-black text-maestro-blue">5k+</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Vidas Impactadas</span>
                </div>
                <div className="w-px h-8 bg-slate-100 dark:bg-white/10 hidden sm:block"></div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-black text-maestro-red">96%</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Taxa de Retenção</span>
                </div>
                <div className="w-px h-8 bg-slate-100 dark:bg-white/10 hidden sm:block"></div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-black text-maestro-purple">120+</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Escolas Parceiras</span>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceGrid;
