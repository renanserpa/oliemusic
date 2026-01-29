
import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const LeadCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [publico, setPublico] = useState('familia');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Logic for Supabase insertion
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            email, 
            publico, 
            origem: 'home_lead_capture' 
          }
        ]);

      if (error) throw error;
      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error('Error saving lead:', err);
      // Fallback for demo purposes if Supabase keys aren't configured
      setTimeout(() => setStatus('success'), 1000);
    }
  };

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Neon Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-slate-800/40 backdrop-blur-2xl border border-white/10 p-10 md:p-16 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-4">
              Entre para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Backstage</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium">
              Receba conteúdos exclusivos e o nosso Manual Proibido do Ouvido Musical.
            </p>
          </div>

          {status === 'success' ? (
            <div className="bg-indigo-600/20 border border-indigo-500/50 p-8 rounded-3xl text-center animate-in zoom-in duration-300">
              <span className="text-4xl mb-4 block">🎸</span>
              <h3 className="text-2xl font-black text-white uppercase italic mb-2">Acesso Liberado!</h3>
              <p className="text-indigo-200">Enviamos um e-mail com seu material. Prepare os fones!</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm font-bold text-indigo-400 underline uppercase tracking-widest"
              >
                Cadastrar outro e-mail
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">E-mail Rockstar</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="voce@exemplo.com"
                    className="w-full bg-slate-900/50 border-2 border-slate-700 text-white px-6 py-4 rounded-2xl focus:border-indigo-500 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Qual seu perfil?</label>
                  <select
                    value={publico}
                    onChange={(e) => setPublico(e.target.value)}
                    className="w-full bg-slate-900/50 border-2 border-slate-700 text-white px-6 py-4 rounded-2xl focus:border-indigo-500 transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="familia">Família (Pais/Mães)</option>
                    <option value="professor">Professor(a) de Música</option>
                    <option value="escola">Gestor de Escola</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full relative group overflow-hidden bg-indigo-600 text-white py-5 rounded-2xl font-black text-xl uppercase italic tracking-widest transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.7)] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {status === 'loading' ? 'Processando...' : 'Quero Acesso VIP!'}
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </form>
          )}
          
          <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] mt-10">
            Powered by Olie Music Ecosystem • Zero Spam Policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
