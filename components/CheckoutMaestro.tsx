
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CheckoutProps {
  productSlug: string;
  onBack: () => void;
}

const CheckoutMaestro: React.FC<CheckoutProps> = ({ productSlug, onBack }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', card: '', expiry: '', cvv: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "O Mestre precisa do seu nome!";
    if (!formData.email.includes('@')) newErrors.email = "E-mail rítmico inválido!";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-xl w-full text-center space-y-10"
        >
          <div className="text-[120px] leading-none mb-8 animate-bounce">🤘</div>
          <h2 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
            Compra <span className="text-emerald-500">Aprovada</span>!
          </h2>
          <div className="bg-slate-50 dark:bg-slate-900 p-10 rounded-[3rem] border-2 border-slate-100 dark:border-white/5 relative">
            <p className="text-2xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
              "Bem-vindo ao Palco! O e-mail com os seus Power-ups já foi disparado. Vamos fazer barulho?"
            </p>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-950 text-white px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-[0.5em]">
              Ass: Lucca Maestro
            </div>
          </div>
          <button 
            onClick={onBack}
            className="bg-maestro-blue text-white px-12 py-5 rounded-2xl font-black uppercase italic tracking-widest shadow-2xl hover:scale-105 transition-all"
          >
            Voltar ao Início
          </button>
        </motion.div>
        
        {/* Simple Confetti Effect Simulation */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-sm"
              style={{ 
                backgroundColor: i % 3 === 0 ? '#FF0000' : i % 3 === 1 ? '#0000FF' : '#8B00FF',
                left: `${Math.random() * 100}%`,
                top: `-5%`
              }}
              animate={{ 
                y: ['0vh', '110vh'], 
                rotate: 360,
                x: [0, (Math.random() - 0.5) * 200]
              }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-maestro-canvas dark:bg-slate-950 pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Checkout Form */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white dark:bg-slate-900 p-10 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100 dark:border-white/5"
        >
          <button onClick={onBack} className="text-slate-400 font-black uppercase text-[10px] tracking-widest mb-10 hover:text-slate-900 transition-colors">
            ← Alterar Pedido
          </button>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-12">
            Finalizar <span className="text-maestro-red">Sinfonia</span>
          </h2>

          <form onSubmit={handlePay} className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-2">Músico no Palco (Nome Completo)</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className={`w-full p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 transition-all text-lg font-medium outline-none ${errors.name ? 'border-maestro-red' : 'border-slate-100 dark:border-slate-700 focus:ring-2 focus:ring-maestro-red'}`}
                  placeholder="Seu nome artístico ou real"
                />
                {errors.name && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl" title={errors.name}>▲</span>}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-2">E-mail para os Power-ups</label>
              <div className="relative">
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className={`w-full p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 transition-all text-lg font-medium outline-none ${errors.email ? 'border-maestro-red' : 'border-slate-100 dark:border-slate-700 focus:ring-2 focus:ring-maestro-red'}`}
                  placeholder="voce@exemplo.com"
                />
                {errors.email && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl" title={errors.email}>▲</span>}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-white/5">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Cartão de Crédito</span>
                <div className="flex gap-2">
                   <div className="w-10 h-6 bg-slate-100 rounded"></div>
                   <div className="w-10 h-6 bg-slate-100 rounded"></div>
                </div>
              </div>
              <div className="space-y-4">
                <input type="text" className="w-full p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:ring-2 focus:ring-maestro-red outline-none font-medium" placeholder="0000 0000 0000 0000" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:ring-2 focus:ring-maestro-red outline-none font-medium" placeholder="MM/AA" />
                  <input type="text" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:ring-2 focus:ring-maestro-red outline-none font-medium" placeholder="CVV" />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#00FF00] text-slate-900 py-8 rounded-[2rem] font-black text-2xl uppercase italic tracking-widest shadow-[0_0_25px_rgba(0,255,0,0.3)] hover:shadow-[0_0_45px_rgba(0,255,0,0.5)] transition-all active:scale-95"
            >
              Liberar Meu Acesso
            </button>
          </form>

          {/* Trust Signal */}
          <div className="mt-16 flex items-center gap-6 p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-slate-100 dark:border-white/5">
            <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-3xl flex items-center justify-center text-3xl shadow-lg">🛡️</div>
            <p className="text-[11px] font-[900] uppercase text-slate-500 tracking-tight leading-relaxed">
              Fica tranquilo! O <span className="text-slate-900 dark:text-white underline decoration-maestro-blue underline-offset-4">Mestre Renan</span> protege os teus dados com criptografia de elite.
            </p>
          </div>
        </motion.div>

        {/* Right: Order Summary */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-slate-950 p-12 md:p-20 rounded-[4.5rem] text-white flex flex-col justify-between shadow-3xl"
        >
          <div className="space-y-12">
            <div className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.4em]">Resumo do Power-Up</div>
            
            <div className="space-y-10">
              <div className="flex items-start gap-8 group">
                <div className="w-24 h-24 bg-white/10 rounded-3xl overflow-hidden flex-shrink-0 border border-white/20">
                  <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase italic tracking-tight mb-2">Combo Sementinha</h3>
                  <p className="text-slate-500 font-medium">Nível: Iniciante (DÓ)</p>
                  <p className="text-maestro-red font-black uppercase text-[9px] tracking-[0.3em] mt-2">+230 ATIVIDADES PDF</p>
                </div>
              </div>
              
              <div className="h-px bg-white/5"></div>
              
              <div className="space-y-6">
                <div className="flex justify-between font-medium text-slate-400">
                  <span>Subtotal</span>
                  <span>R$ 97,00</span>
                </div>
                <div className="flex justify-between font-medium text-emerald-400">
                  <span>Desconto Rockstar</span>
                  <span>- R$ 50,00</span>
                </div>
                <div className="flex justify-between items-end pt-6">
                  <span className="text-xl font-black uppercase italic tracking-widest">Total</span>
                  <div className="text-right">
                    <span className="text-6xl font-black tracking-tighter leading-none block">R$ 47</span>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Taxa Única • Sem Assinatura</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <div className="text-center opacity-30 group cursor-default">
              <div className="text-6xl mb-2 grayscale group-hover:grayscale-0 transition-all duration-500">🎹</div>
              <span className="text-[9px] font-black uppercase tracking-[0.6em]">Powered by GCM Core</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutMaestro;
