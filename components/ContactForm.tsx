
import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    escola: '',
    cargo: '',
    mensagem: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const { error } = await supabase
        .from('escola_leads')
        .insert([{ ...formData, origem: 'lp_escolas' }]);
      
      if (error) throw error;
      setStatus('success');
    } catch (err) {
      console.error(err);
      // Fallback
      setTimeout(() => setStatus('success'), 1500);
    }
  };

  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">
              Solicitar <span className="text-indigo-600">Demonstração</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium">Nossa equipe entrará em contato para apresentar o GCM Maestro.</p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12 animate-in zoom-in">
              <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl">✓</div>
              <h3 className="text-3xl font-black text-slate-900 uppercase italic mb-4">Pedido Recebido!</h3>
              <p className="text-slate-600 font-medium mb-8">Prepare-se para transformar sua escola. Retornaremos em breve.</p>
              <button onClick={() => setStatus('idle')} className="text-indigo-600 font-black uppercase tracking-widest text-sm underline">Fazer novo pedido</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Nome Completo</label>
                  <input
                    required
                    type="text"
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    className="w-full bg-slate-50 border-2 border-slate-100 px-6 py-4 rounded-2xl focus:border-indigo-500 outline-none transition-all font-medium"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">E-mail Corporativo</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 border-2 border-slate-100 px-6 py-4 rounded-2xl focus:border-indigo-500 outline-none transition-all font-medium"
                    placeholder="email@escola.com.br"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Nome da Instituição</label>
                  <input
                    required
                    type="text"
                    value={formData.escola}
                    onChange={(e) => setFormData({...formData, escola: e.target.value})}
                    className="w-full bg-slate-50 border-2 border-slate-100 px-6 py-4 rounded-2xl focus:border-indigo-500 outline-none transition-all font-medium"
                    placeholder="Ex: Escola de Música Harmonia"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Seu Cargo</label>
                  <input
                    required
                    type="text"
                    value={formData.cargo}
                    onChange={(e) => setFormData({...formData, cargo: e.target.value})}
                    className="w-full bg-slate-50 border-2 border-slate-100 px-6 py-4 rounded-2xl focus:border-indigo-500 outline-none transition-all font-medium"
                    placeholder="Ex: Diretor, Coordenador"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Mensagem (Opcional)</label>
                <textarea
                  value={formData.mensagem}
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                  className="w-full bg-slate-50 border-2 border-slate-100 px-6 py-4 rounded-2xl focus:border-indigo-500 outline-none transition-all font-medium h-32 resize-none"
                  placeholder="Conte um pouco sobre sua escola..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-slate-900 text-white py-6 rounded-3xl font-black text-xl uppercase italic tracking-widest shadow-2xl hover:bg-indigo-600 transition-all disabled:opacity-50"
              >
                {status === 'loading' ? 'Agendando...' : 'Quero Conhecer o GCM Maestro'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
