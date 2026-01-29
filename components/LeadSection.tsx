
import React, { useState } from 'react';

const LeadSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Rockstar Background */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-[3rem] shadow-2xl text-center">
          <div className="inline-block bg-indigo-600 text-white text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
            E-book Gratuito
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight italic uppercase tracking-tighter">
            O Manual <span className="text-indigo-400">Proibido</span> do Ouvido Musical
          </h2>
          
          <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-10 font-medium">
            Descubra os segredos que as escolas tradicionais não te contam sobre como despertar o ouvido absoluto de forma natural.
          </p>

          {status === 'success' ? (
            <div className="bg-emerald-500/20 border border-emerald-500/50 p-6 rounded-2xl text-emerald-400 font-bold animate-in zoom-in duration-300">
              ⚡ ROCKSTAR! Verifique seu e-mail para baixar o manual.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                required
                placeholder="Seu melhor e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-slate-800/50 border-2 border-slate-700 text-white px-6 py-4 rounded-2xl focus:border-indigo-500 focus:outline-none transition-all text-lg font-medium"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="group relative bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-2xl font-black text-xl uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] active:scale-95 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    ENVIANDO...
                  </span>
                ) : (
                  "QUERO O MANUAL!"
                )}
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </button>
            </form>
          )}
          
          <p className="mt-8 text-slate-500 text-sm font-medium">
            🛡️ Fique tranquilo, também odiamos spam. Seus dados estão seguros.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadSection;
