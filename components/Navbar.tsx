
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
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

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
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 bg-maestro-red rounded-2xl flex items-center justify-center text-white font-[900] text-2xl shadow-xl shadow-maestro-red/20 group-hover:scale-110 transition-transform">
              O
            </div>
            <span className="text-3xl font-[900] tracking-tighter uppercase italic text-slate-900 dark:text-white">
              Olie<span className="text-maestro-blue">Music</span>
            </span>
          </button>

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
            
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {user ? (
              <button 
                onClick={() => handleNav('dashboard')}
                className="bg-maestro-blue text-white px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-maestro-blue/20 hover:scale-105 transition-all"
              >
                Painel
              </button>
            ) : (
              <button 
                onClick={() => handleNav('auth')}
                className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-maestro-red dark:hover:bg-maestro-blue transition-all"
              >
                Login/Cadastro
              </button>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-4">
            <div className="w-6 h-0.5 bg-slate-900 dark:bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-slate-900 dark:bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-slate-900 dark:bg-white"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Simplificado */}
      <div className={`fixed inset-0 bg-white dark:bg-slate-900 z-50 transform transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-12 space-y-8">
          <button onClick={() => setIsOpen(false)} className="text-3xl font-black mb-12">FECHAR</button>
          {menuItems.map((item) => (
            <button key={item.view} onClick={() => handleNav(item.view)} className="block w-full text-left text-5xl font-black uppercase italic tracking-tighter">
              {item.label}
            </button>
          ))}
          <div className="pt-10 border-t border-slate-100 dark:border-white/10">
            {user ? (
              <button 
                onClick={() => handleNav('dashboard')}
                className="w-full text-left text-4xl font-black uppercase text-maestro-blue"
              >
                Painel
              </button>
            ) : (
              <button 
                onClick={() => handleNav('auth')}
                className="w-full text-left text-4xl font-black uppercase text-maestro-red"
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
