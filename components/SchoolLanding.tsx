
import React from 'react';
import ContactForm from './ContactForm';

const SchoolLanding: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
                <span className="text-xs font-black uppercase tracking-[0.2em]">B2B • Gestão & Pedagogia</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
                A Revolução <span className="text-indigo-400">Phygital</span> na sua Escola.
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
                Vença o "Vale da Morte" da evasão de alunos. Implemente o GCM Maestro e conecte famílias, professores e direção em um ecossistema inteligente.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#demo" className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-xl uppercase italic tracking-widest hover:bg-indigo-400 hover:text-white transition-all shadow-xl">
                  Solicitar Demo
                </a>
                <button className="border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl uppercase italic tracking-widest hover:bg-white/5 transition-all">
                  Ver Whitepaper
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-10 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse"></div>
              <div className="bg-slate-800 p-8 rounded-[3rem] border border-white/10 relative shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/40 rounded-full blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop" 
                  className="rounded-2xl shadow-lg mb-8 grayscale hover:grayscale-0 transition-all duration-700"
                  alt="GCM Maestro Dashboard"
                />
                <div className="space-y-4">
                  <div className="h-2 w-1/2 bg-indigo-500/40 rounded-full"></div>
                  <div className="h-2 w-full bg-slate-700 rounded-full"></div>
                  <div className="h-2 w-3/4 bg-slate-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">
              A Solução <span className="text-indigo-600">GCM Maestro</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">Muito além de um software, um diferencial competitivo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Gestão Integrada", desc: "Controle pedagógico e trilhas de aprendizagem em um só lugar.", icon: "📊" },
              { title: "App da Família", desc: "Transparência total. Pais acompanham a evolução do aluno em tempo real.", icon: "📱" },
              { title: "Gamificação", desc: "Sistema de conquistas que mantém o aluno motivado e reduz a evasão.", icon: "🏆" }
            ].map((s, i) => (
              <div key={i} className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 hover:scale-[1.02] transition-all">
                <div className="text-5xl mb-8">{s.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase italic leading-tight">{s.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="demo">
        <ContactForm />
      </div>
    </div>
  );
};

export default SchoolLanding;
