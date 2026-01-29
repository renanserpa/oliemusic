
import React, { useEffect, useRef } from 'react';

interface ComboMaestroKidsLandingProps {
  onBack: () => void;
}

const ComboMaestroKidsLanding: React.FC<ComboMaestroKidsLandingProps> = ({ onBack }) => {
  const priceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToPrice = () => {
    priceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const blocks = [
    {
      title: "Bloco Sensorial (Dalcroze)",
      desc: "Ritmo e movimento corporal. O corpo como o primeiro instrumento da criança.",
      icon: "🤸‍♂️",
      color: "bg-orange-500",
      lightBg: "bg-orange-50",
      textColor: "text-orange-600"
    },
    {
      title: "Bloco Auditivo (Gordon)",
      desc: "O ouvido de detetive. Desenvolvendo a Audiation e a percepção profunda.",
      icon: "👂",
      color: "bg-indigo-500",
      lightBg: "bg-indigo-50",
      textColor: "text-indigo-600"
    },
    {
      title: "Teoria Lúdica (Colors)",
      desc: "Maestro Colors e desafios visuais que ensinam teoria sem parecer estudo.",
      icon: "🎨",
      color: "bg-pink-500",
      lightBg: "bg-pink-50",
      textColor: "text-pink-600"
    },
    {
      title: "Inclusão (PECS)",
      desc: "Atividades adaptadas para neurodiversidade (TEA/TDAH). Música para todos.",
      icon: "🧩",
      color: "bg-emerald-500",
      lightBg: "bg-emerald-50",
      textColor: "text-emerald-600"
    },
    {
      title: "Game Design Musical",
      desc: "Jogos para imprimir: Bingo, Dominó e Cards que tornam a aula viciante.",
      icon: "🎲",
      color: "bg-amber-500",
      lightBg: "bg-amber-50",
      textColor: "text-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-600">
      {/* Navigation / Back */}
      <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 font-bold hover:text-indigo-600 transition-all uppercase text-[10px] tracking-widest"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar ao Portal
          </button>
          <div className="text-xl font-black italic uppercase tracking-tighter">
            Olie<span className="text-indigo-600">Music</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Vibrant Light Mode */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white opacity-60"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-8 shadow-lg shadow-indigo-200">
            Combo Maestro Kids: +230 Atividades
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic mb-8 max-w-5xl mx-auto text-slate-900">
            Nunca mais perca horas planejando aulas que seus alunos acham <span className="text-indigo-600">chatas</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto mb-12">
            O arsenal definitivo com <span className="text-slate-900 font-bold">+230 atividades baseadas na Metodologia Serpa-Híbrida</span>. Leveza, diversão e engajamento real.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={scrollToPrice}
              className="group relative bg-slate-900 text-white px-12 py-6 rounded-[2.5rem] font-black text-2xl uppercase italic tracking-widest shadow-2xl hover:bg-indigo-600 hover:-translate-y-2 transition-all active:scale-95"
            >
              QUERO O COMBO AGORA
              <div className="absolute -inset-1 bg-indigo-400 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-4">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Acesso imediato após o pagamento
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic tracking-tighter leading-tight mb-4">
              O <span className="text-pink-500">Vale da Morte</span> das Aulas de Música
            </h2>
            <p className="text-xl text-slate-500 font-medium">Você sente que está competindo com o TikTok?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-[3.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase italic">Esgotamento Criativo</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-lg">
                Passar o domingo no Canva ou Pinterest tentando criar materiais do zero drena sua energia. O professor exausto não consegue encantar ninguém.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[3.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase italic">Evasão Escolar</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-lg">
                Alunos desmotivados abandonam o curso nos primeiros 6 meses. O ensino tradicional e 'seco' não sobrevive à era da dopamina digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Blocks Showcase - Maestro Colors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic tracking-tighter">
              Vitrine dos <span className="text-indigo-600">5 Blocos</span>
            </h2>
            <p className="mt-4 text-xl text-slate-500 font-medium">Cada atividade é um degrau na trilha Rockstar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {blocks.map((block, i) => (
              <div key={i} className={`group ${block.lightBg} p-8 rounded-[3rem] border-2 border-transparent hover:border-slate-200 transition-all duration-500 flex flex-col items-center text-center`}>
                <div className={`w-20 h-20 ${block.color} rounded-3xl flex items-center justify-center text-4xl shadow-lg mb-8 group-hover:scale-110 transition-transform`}>
                  {block.icon}
                </div>
                <h3 className={`text-lg font-black ${block.textColor} uppercase italic mb-4 leading-tight`}>{block.title}</h3>
                <p className="text-sm text-slate-600 font-bold leading-relaxed">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Bonuses */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-[0.9]">
                O Que Você <span className="text-indigo-400">Garante</span> Hoje
              </h2>
              <div className="space-y-6">
                {[
                  { t: "Acesso Vitalício", d: "Pague uma vez, use para sempre. Sem assinaturas." },
                  { t: "Atualizações Gratuitas", d: "Sempre que adicionarmos novas atividades, você recebe." },
                  { t: "Manual Proibido do Ouvido", d: "BÔNUS: Guia para despertar o ouvido absoluto lúdico." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex-shrink-0 flex items-center justify-center font-black">✓</div>
                    <div>
                      <h4 className="text-xl font-black uppercase italic">{item.t}</h4>
                      <p className="text-slate-400 font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10">
               <div className="text-5xl mb-6">🎸</div>
               <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4">A Ponte Phygital</h3>
               <p className="text-lg text-slate-300 font-medium leading-relaxed">
                 Este material não é apenas "papel". Ele foi desenhado para preparar o corpo e o ouvido da criança para a experiência do <span className="text-indigo-400 font-bold">Software GCM Maestro</span>. Você cria a base sólida no mundo real para depois brilhar no digital.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Section */}
      <section ref={priceRef} className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-6">
              Invista na Sua <span className="text-indigo-600">Autoridade</span>.
            </h2>
            <p className="text-xl text-slate-500 font-medium uppercase tracking-[0.2em]">O preço de uma pizza, o valor de uma carreira.</p>
          </div>

          <div className="bg-slate-50 rounded-[4rem] border-4 border-slate-900 p-12 md:p-20 relative shadow-2xl">
            {/* Guarantee Seal */}
            <div className="absolute -top-12 right-4 md:-right-12 w-32 h-32 bg-amber-400 rounded-full flex flex-col items-center justify-center border-4 border-slate-900 rotate-12 shadow-xl animate-float">
               <span className="text-xs font-black uppercase tracking-widest text-slate-900">Garantia</span>
               <span className="text-3xl font-black text-slate-900 tracking-tighter">7 DIAS</span>
            </div>

            <div className="mb-12">
              <span className="text-slate-400 text-2xl font-bold line-through">R$ 97,00</span>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-indigo-600 text-3xl font-black">R$</span>
                <span className="text-8xl md:text-9xl font-black tracking-tighter text-slate-900">47</span>
                <span className="text-indigo-600 text-3xl font-black">,00</span>
              </div>
              <p className="text-slate-400 font-bold uppercase text-xs mt-4 tracking-widest">Pagamento único • Sem mensalidades</p>
            </div>

            <a 
              href="https://pay.kiwify.com.br/seu-link-aqui"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-indigo-600 text-white py-8 rounded-[2rem] font-black text-2xl md:text-3xl uppercase italic tracking-widest hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-200 active:scale-95"
            >
              EU QUERO O COMBO AGORA!
            </a>

            <div className="mt-12 flex flex-col items-center gap-6">
               <div className="flex items-center gap-4 opacity-50">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-5" alt="PayPal" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-8" alt="Mastercard" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
               </div>
               <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-relaxed max-w-sm">
                 Ao clicar em comprar você será redirecionado para o checkout seguro da nossa plataforma parceira. Seus dados estão 100% protegidos.
               </p>
            </div>
          </div>
          
          <p className="mt-20 text-slate-400 font-black text-[10px] uppercase tracking-[0.5em]">
            © Olie Music Ecosystem • Pedagogia Phygital em Escala
          </p>
        </div>
      </section>
    </div>
  );
};

export default ComboMaestroKidsLanding;
