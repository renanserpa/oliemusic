
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useTheme } from '../contexts/ThemeContext';

interface NavbarProps {
  onNavigate: (view: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Busca sessão inicial
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Escuta mudanças no estado de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleNav = (view: string) => {
    onNavigate(view);
    setIsOpen(false);
  };

  const menuItems = [
    { label: 'Famílias', view: 'families', color: 'hover:text-maestro-red' },
    { label: 'Professores', view: 'teachers', color: 'hover:text-maestro-blue' },
    { label: 'Escolas', view: 'schools', color: 'hover:text-maestro-purple' },
    { label: 'Sobre', view: 'about', color: 'hover:text-slate-900' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-slate-200/50 dark:border-white/10 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group"
            aria-label="Voltar para a Home"
          >
            <div className="w-12 h-12 bg-maestro-red rounded-2xl flex items-center justify-center text-white font-[900] text-2xl shadow-xl shadow-maestro-red/20 group-hover:scale-110 transition-transform">
              O
            </div>
            <span className="text-3xl font-[900] tracking-tighter uppercase italic text-slate-900 dark:text-white">
              Olie<span className="text-maestro-blue">Music</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <button 
                key={item.view}
                onClick={() => handleNav(item.view)} 
                className={`${item.color} dark:hover:text-white font-black uppercase text-[11px] tracking-[0.3em] transition-colors`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              aria-label="Alternar Tema"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* VIP Area Button - Dynamic logic requested */}
            {user ? (
              <button 
                onClick={() => handleNav('dashboard')}
                className="group flex items-center gap-3 bg-maestro-blue text-white px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-maestro-blue/20 hover:scale-105 transition-all"
              >
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                Painel
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </button>
            ) : (
              <button 
                onClick={() => handleNav('auth')}
                className="flex items-center gap-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-maestro-red dark:hover:bg-maestro-blue transition-all"
              >
                Login/Cadastro
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-4 text-slate-900 dark:text-white"
            aria-label="Abrir Menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className="w-6 h-0.5 bg-current transition-all"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white dark:bg-slate-950 z-50 transform transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-12 h-full flex flex-col justify-between">
          <div className="space-y-12">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-black tracking-tighter italic uppercase text-slate-400">Menu</span>
              <button onClick={() => setIsOpen(false)} className="text-3xl font-black text-slate-900 dark:text-white p-4">
                ✕
              </button>
            </div>
            
            <div className="space-y-8">
              {menuItems.map((item) => (
                <button 
                  key={item.view} 
                  onClick={() => handleNav(item.view)} 
                  className="block w-full text-left text-5xl font-black uppercase italic tracking-tighter hover:text-maestro-blue transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-10 border-t border-slate-100 dark:border-white/10 space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">Área VIP</span>
              <button onClick={toggleTheme} className="text-2xl">{theme === 'dark' ? '☀️' : '🌙'}</button>
            </div>
            
            {user ? (
              <button 
                onClick={() => handleNav('dashboard')}
                className="w-full bg-maestro-blue text-white py-6 rounded-3xl font-black uppercase italic tracking-widest shadow-2xl text-2xl"
              >
                Acessar Painel
              </button>
            ) : (
              <button 
                onClick={() => handleNav('auth')}
                className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-6 rounded-3xl font-black uppercase italic tracking-widest shadow-2xl text-2xl"
              >
                Login/Cadastro
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
