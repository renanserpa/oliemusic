
import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useToast } from './Toast';

const LeadCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [publico, setPublico] = useState('familia');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const { showToast } = useToast();

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      showToast('E-mail inválido! Tente novamente.', 'error');
      return;
    }

    setStatus('loading');

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{ email, publico, origem: 'home_lead_capture' }]);

      if (error) throw error;
      
      setStatus('success');
      showToast('Acesso VIP liberado! Verifique seu e-mail.');
      setEmail('');
      
      // Retorna ao estado idle após 3 segundos de sucesso
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error('Error saving lead:', err);
      // Demo fallback simulation
      setTimeout(() => {
        setStatus('success');
        showToast('Acesso VIP liberado! (Modo Demo)');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      }, 1000);
    }
  };

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">E-mail Rockstar</label>
                <input
                  type="email"
                  required
                  disabled={status !== 'idle'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voce@exemplo.com"
                  className="w-full bg-slate-900/50 border-2 border-slate-700 text-white px-6 py-4 rounded-2xl focus:border-indigo-500 transition-all outline-none disabled:opacity-50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Qual seu perfil?</label>
                <select
                  disabled={status !== 'idle'}
                  value={publico}
                  onChange={(e) => setPublico(e.target.value)}
                  className="w-full bg-slate-900/50 border-2 border-slate-700 text-white px-6 py-4 rounded-2xl focus:border-indigo-500 transition-all outline-none appearance-none cursor-pointer disabled:opacity-50"
                >
                  <option value="familia">Família (Pais/Mães)</option>
                  <option value="professor">Professor(a) de Música</option>
                  <option value="escola">Gestor de Escola</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={status !== 'idle'}
              className={`w-full relative group overflow-hidden py-5 rounded-2xl font-black text-xl uppercase italic tracking-widest transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-[0.98] ${
                status === 'success' ? 'bg-emerald-500 text-white' : 'bg-indigo-600 text-white'
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {status === 'idle' && (
                  <>
                    Quero Acesso VIP!
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </>
                )}
                
                {status === 'loading' && (
                  <>
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processando...
                  </>
                )}

                {status === 'success' && (
                  <>
                    <svg className="w-6 h-6 text-white animate-in zoom-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                    </svg>
                    Acesso Liberado!
                  </>
                )}
              </span>
              {status === 'idle' && (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              )}
            </button>
          </form>
          
          <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] mt-10">
            Powered by Olie Music Ecosystem • Zero Spam Policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
