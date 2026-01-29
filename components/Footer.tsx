
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-24 relative overflow-hidden">
      {/* Methodology Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-pink-500 to-emerald-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Identity & Inspirational Phrase */}
          <div className="md:col-span-5 space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-indigo-900/50">O</div>
              <span className="text-3xl font-black tracking-tighter uppercase italic">Olie<span className="text-indigo-500">Music</span></span>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter italic uppercase text-indigo-400">
                Música leve, <br/>
                natural e divertida.
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-sm">
                Unindo pedagogia clássica e tecnologia futurista para criar uma jornada musical apaixonante.
              </p>
            </div>

            <div className="flex gap-4">
              {['instagram', 'youtube', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href={`#${social}`} 
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 hover:text-white transition-all group"
                  aria-label={`Siga-nos no ${social}`}
                >
                  <div className="w-6 h-6 bg-slate-400 group-hover:bg-white rounded-md opacity-50 group-hover:opacity-100 transition-all"></div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="font-black mb-8 text-white uppercase text-xs tracking-[0.3em] opacity-50">Explorar</h4>
              <ul className="space-y-4 text-slate-400 font-bold text-sm">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Nossa Metodologia</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Aulas em Casa</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Portal Professor</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Whitepaper Escola</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-8 text-white uppercase text-xs tracking-[0.3em] opacity-50">Produtos</h4>
              <ul className="space-y-4 text-slate-400 font-bold text-sm">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">GCM Maestro v3</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Combo Atividades</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Apostila Master</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Loja Digital</a></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-black mb-8 text-white uppercase text-xs tracking-[0.3em] opacity-50">Legal</h4>
              <ul className="space-y-4 text-slate-400 font-bold text-sm">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Suporte</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Parcerias</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Methodology Footnote */}
        <div className="bg-white/5 rounded-[2.5rem] p-10 md:p-12 mb-16 border border-white/10 border-dashed flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             {['Suzuki', 'Dalcroze', 'Gordon', 'Orff', 'Kodály'].map(method => (
               <span key={method} className="text-xs font-black uppercase tracking-[0.2em] border border-white/20 px-4 py-1.5 rounded-full">{method}</span>
             ))}
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] text-center md:text-right">
            Inspired by classics. <br/>
            Engineered for the future.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} OLIE MUSIC ECOSYSTEM • TODOS OS DIREITOS RESERVADOS
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Site Seguro</span>
              <div className="w-5 h-5 bg-emerald-500/20 rounded-md flex items-center justify-center">
                <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
