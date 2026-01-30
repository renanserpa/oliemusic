
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PersonaCards from './components/PersonaCards';
import ProductShowcase from './components/ProductShowcase';
import LeadCapture from './components/LeadCapture';
import StoreGrid from './components/StoreGrid';
import Testimonials from './components/Testimonials';
import ProductDetails from './components/ProductDetails';
import FamilyLanding from './components/FamilyLanding';
import TeacherLanding from './components/TeacherLanding';
import SchoolLanding from './components/SchoolLanding';
import ComboMaestroKidsLanding from './components/ComboMaestroKidsLanding';
import AuthoritySection from './components/AuthoritySection';
import GCMTeaser from './components/GCMTeaser';
import AdminDashboard from './components/AdminDashboard';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import ToastProvider, { useToast } from './components/Toast';
import { PRODUCTS, ProductDetail } from './constants/products';
import { ThemeProvider } from './contexts/ThemeContext';

type View = 'home' | 'product' | 'families' | 'teachers' | 'schools' | 'combo-kids-lp' | 'auth' | 'dashboard' | 'order-tracking' | 'admin-dashboard' | 'about';

const AppContent: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [activeProductSlug, setActiveProductSlug] = useState<string | null>(null);

  // Router logic based on window.location.hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      const [route, param] = hash.split('/');

      if (route === 'product' && param) {
        setView('product');
        setActiveProductSlug(param);
      } else if (hash === '' || hash === '/') {
        setView('home');
      } else {
        setView(hash as View);
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (newView: string) => {
    window.location.hash = `#/${newView}`;
  };

  const renderView = () => {
    const activeProduct = activeProductSlug ? PRODUCTS.find(p => p.slug === activeProductSlug) : null;

    switch(view) {
      case 'about': return <AboutPage />;
      case 'admin-dashboard': return <AdminDashboard onBack={() => handleNavigate('home')} />;
      case 'combo-kids-lp': return <ComboMaestroKidsLanding onBack={() => handleNavigate('home')} />;
      case 'product': 
        return activeProduct ? <ProductDetails product={activeProduct} onBack={() => handleNavigate('home')} /> : <div className="pt-40 text-center">Produto não encontrado.</div>;
      case 'families': return <FamilyLanding />;
      case 'teachers': return <TeacherLanding />;
      case 'schools': return <SchoolLanding />;
      case 'order-tracking':
        return (
          <div className="pt-32 pb-24 flex items-center justify-center bg-slate-50 dark:bg-slate-950 min-h-screen">
             <div className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-white/5 max-w-2xl w-full text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8 shadow-inner">📦</div>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 text-slate-900 dark:text-white">Rastreio de Pedido</h2>
                <div className="space-y-8">
                  <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">
                    Insira o código da transação ou o e-mail utilizado na compra.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input type="text" placeholder="Código do Pedido" className="flex-grow bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 px-6 py-4 rounded-2xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-900 dark:text-white" />
                    <button className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black uppercase italic tracking-widest shadow-xl transition-all active:scale-95">Rastrear</button>
                  </div>
                </div>
                <button onClick={() => handleNavigate('home')} className="mt-12 text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-widest text-xs underline">Voltar ao Início</button>
             </div>
          </div>
        );
      case 'auth':
        return (
          <div className="pt-32 pb-24 flex items-center justify-center bg-slate-50 dark:bg-slate-950 min-h-screen">
             <div className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-white/5 max-w-md w-full text-center">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-6">Acesso Administrativo</h2>
                <p className="text-slate-500 mb-8">Deseja entrar no Backstage Estratégico?</p>
                <button onClick={() => handleNavigate('admin-dashboard')} className="w-full bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg hover:bg-indigo-600 transition-all">Acessar Admin Dashboard</button>
             </div>
          </div>
        );
      case 'dashboard':
        return (
          <div className="pt-32 pb-24 flex items-center justify-center bg-slate-50 dark:bg-slate-950 min-h-screen">
             <div className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-white/5 max-w-2xl w-full text-center">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-6">Seu Painel Maestro</h2>
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl">Meus Cursos</div>
                   <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl">Materiais PDF</div>
                </div>
             </div>
          </div>
        );
      case 'home':
      default:
        return (
          <main className="flex-grow">
            <Hero />
            <PersonaCards />
            <AuthoritySection />
            <LeadCapture />
            <ProductShowcase />
            <StoreGrid />
            <GCMTeaser />
            <Testimonials />
            <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-16">
                  O DNA <span className="text-indigo-600 dark:text-indigo-400">Serpa-Híbrido</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-12 rounded-[3rem] border border-slate-100 dark:border-white/5">
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase italic">Educação Pela Escuta</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xl font-medium">Todo talento é fruto de estímulo.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-12 rounded-[3rem] border border-slate-100 dark:border-white/5">
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase italic">Ritmo e Movimento</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xl font-medium">Se o corpo entende, o cérebro aprende.</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-600 bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar onNavigate={handleNavigate} />
      {renderView()}
      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  </ThemeProvider>
);

export default App;
