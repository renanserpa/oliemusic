
import React, { useState } from 'react';

const GCMTeaser: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  return (
    <section className="py-32 relative overflow-hidden bg-slate-950">
      {/* Elementos Visuais Futuristas / Neon Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-indigo-600/20 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0)_0%,rgba(15,23,42,1)_100%)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-3 bg-indigo-500/10 px-5 py-2 rounded-full border border-indigo-500/20 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              <span className="text-indigo-300 text-xs font-black uppercase tracking-[0.4em]">Future of Music Ed</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase italic">
              GCM Maestro: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-pink-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]">A Sala de Aula Aumentada.</span>
            </h2>
            
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
              Chega de planilhas e PDFs soltos. O GCM Maestro centraliza sua pedagogia e transforma cada lição em uma experiência de jogo imersiva.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {[
                { t: "Modo TV Maestro", d: "Gamificação cinematográfica para aulas coletivas.", i: "📺" },
                { t: "Radar de Ouvido", d: "Tecnologia de rastreio de percepção rítmica e melódica.", i: "📡" },
                { t: "Live Dashboards", d: "Engajamento dos alunos mapeado em tempo real.", i: "🚀" }
              ].map((feature) => (
                <div key={feature.t} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-indigo-600/20 group-hover:border-indigo-500/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                    {feature.i}
                  </div>
                  <div>
                    <h4 className="text-white text-xl font-black uppercase italic tracking-tight">{feature.t}</h4>
                    <p className="text-slate-500 font-medium">{feature.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Waitlist Neon Card */}
            <div className="bg-slate-900/60 backdrop-blur-3xl border border-white/10 p-12 md:p-16 rounded-[4.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden ring-1 ring-white/10">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]"></div>
              
              <div className="text-center mb-12">
                <div className="text-5xl mb-6 animate-bounce">⚡</div>
                <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">Lista de Espera v3.0</h3>
                <p className="text-slate-400 font-medium leading-relaxed">
                  Garanta sua vaga na primeira leva de usuários e receba condições de <span className="text-white font-bold">Membro Fundador</span>.
                </p>
              </div>

              {isSubscribed ? (
                <div className="bg-indigo-600/10 border border-indigo-500/50 p-10 rounded-[2.5rem] text-center animate-in zoom-in-95 duration-500">
                  <h4 className="text-2xl font-black text-white uppercase italic mb-2 tracking-tighter">Frequência Sintonizada!</h4>
                  <p className="text-indigo-200 text-sm font-medium">Você será notificado assim que o radar detectar o lançamento.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com.br"
                      className="w-full bg-white/5 border-2 border-white/10 text-white px-8 py-6 rounded-[2.5rem] focus:border-indigo-500 focus:outline-none transition-all font-bold placeholder:text-slate-600 shadow-inner"
                    />
                  </div>
                  <button className="w-full relative group overflow-hidden bg-indigo-600 hover:bg-indigo-500 text-white py-6 rounded-[2.5rem] font-black text-xl uppercase italic tracking-widest transition-all shadow-[0_20px_40px_rgba(79,70,229,0.3)] hover:shadow-[0_25px_60px_rgba(79,70,229,0.5)] active:scale-95">
                    <span className="relative z-10">Entrar na Lista VIP</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </form>
              )}
              
              <div className="mt-12 pt-8 border-t border-white/5 text-center">
                 <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.4em]">
                   Powered by Olie Music Intelligence
                 </p>
              </div>
            </div>

            {/* Orbitals Decoration */}
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-1/2 -right-12 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GCMTeaser;
