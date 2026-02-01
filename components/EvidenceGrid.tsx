
import React from 'react';

interface Evidence {
  id: string;
  studentName: string;
  age: string;
  achievement: string;
  videoThumb: string;
  color: string;
}

const evidences: Evidence[] = [
  {
    id: 'e1',
    studentName: 'Léo',
    age: '4 anos',
    achievement: 'Audiation Nível 1: Identificação de Tônicas',
    videoThumb: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=600&h=800&fit=crop',
    color: 'from-maestro-red to-orange-500'
  },
  {
    id: 'e2',
    studentName: 'Clara',
    age: '7 anos',
    achievement: 'Performance Rockstar: Solo de Violão GCM',
    videoThumb: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=800&fit=crop',
    color: 'from-maestro-blue to-cyan-500'
  },
  {
    id: 'e3',
    studentName: 'Escola Harmonia',
    age: 'B2B Case',
    achievement: 'Retenção de 96% após implementação Phygital',
    videoThumb: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=800&fit=crop',
    color: 'from-maestro-purple to-pink-500'
  }
];

const EvidenceGrid: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-8xl font-[900] text-slate-900 dark:text-white uppercase italic tracking-tighter rockstar-title leading-none">
              Evidence <span className="text-maestro-blue">Locker</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium">Resultados reais medidos pela rítmica e pelo afeto.</p>
          </div>
          <div className="bg-maestro-red/10 border-2 border-maestro-red text-maestro-red px-8 py-4 rounded-3xl font-black text-3xl tracking-tighter italic shadow-xl">
            +90% Retenção
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {evidences.map((item) => (
            <div 
              key={item.id} 
              className="group relative aspect-[3/4] rounded-[3.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-4"
            >
              {/* Image / Video Placeholder */}
              <img 
                src={item.videoThumb} 
                alt={item.achievement}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Gradient Border Overlay */}
              <div className={`absolute inset-0 border-[3px] border-transparent bg-gradient-to-b ${item.color} [mask-image:linear-gradient(white,white)_padding-box,linear-gradient(white,white)] border-box opacity-60`}></div>

              {/* Text Content Overlay */}
              <div className="absolute inset-x-6 bottom-6 glass p-8 rounded-[2.5rem] border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-2">{item.age}</p>
                <h3 className="text-2xl font-[900] text-white uppercase italic tracking-tight mb-3">{item.studentName}</h3>
                <p className="text-white/80 text-sm font-medium leading-snug">
                  {item.achievement}
                </p>
                
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-maestro-blue shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Ver Progresso</span>
                </div>
              </div>
              
              {/* Play Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-maestro-blue">
                   <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvidenceGrid;
