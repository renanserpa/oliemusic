
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onNavigate('home');
  };

  const handleNav = (view: string) => {
    onNavigate(view);
    setIsOpen(false);
  };

  const menuItems = [
    { label: 'Famílias', icon: '❤️', view: 'families' },
    { label: 'Professores', icon: '🎮', view: 'teachers' },
    { label: 'Escolas', icon: '🏢', view: 'schools' },
    { label: 'Sobre', icon: '🤘', view: 'about' },
    { label: 'Rastreio', icon: '📦', view: 'order-tracking' },
  ];

  const isDark = theme === 'dark';

  return (
    <>
      <div 
        className={`fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[45] transition-all duration-700 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-slate-200/50 dark:border-white/10 h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <button 
              onClick={() => handleNav('home')}
              className="flex-shrink-0 flex items-center gap-2 group relative z-[60]"
            >
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform">
                O
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-800 dark:text-white">
                Olie<span className="text-indigo-600">Music</span>
              </span>
            </button>

            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <button 
                  key={item.view}
                  onClick={() => handleNav(item.view)} 
                  className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold uppercase text-[11px] tracking-widest transition-colors flex items-center gap-1.5"
                >
                  <span className="text-lg">{item.icon}</span> {item.label}
                </button>
              ))}
              
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>

              <button 
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                aria-label="Toggle Theme"
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M13.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {user ? (
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => handleNav('dashboard')}
                    className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-indigo-500 transition-all shadow-md"
                  >
                    Painel
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="p-2 text-slate-400 hover:text-pink-500 transition-colors bg-slate-100 dark:bg-slate-800 rounded-xl"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => handleNav('auth')}
                  className="bg-slate-900 dark:bg-indigo-600 text-white px-6 py-2.5 rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-indigo-600 transition-all"
                >
                  Login / Cadastro
                </button>
              )}
            </div>

            <div className="md:hidden flex items-center gap-2 relative z-[60]">
              <button onClick={() => setIsOpen(!isOpen)} className={`p-3 rounded-2xl transition-all ${isOpen ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 bg-slate-100/80 dark:bg-slate-800/80'}`}>
                <div className="relative w-6 h-6">
                  <span className={`absolute block w-6 h-0.5 bg-current rounded-full transition-all transform ${isOpen ? 'rotate-45 translate-y-3' : 'translate-y-1'}`} />
                  <span className={`absolute block w-6 h-0.5 bg-current rounded-full transition-all transform translate-y-3 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                  <span className={`absolute block w-6 h-0.5 bg-current rounded-full transition-all transform ${isOpen ? '-rotate-45 translate-y-3' : 'translate-y-5'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className={`fixed inset-y-0 right-0 w-full max-w-[85%] bg-white dark:bg-slate-900 shadow-2xl z-[55] transform transition-transform duration-700 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-28 px-8 pb-12 overflow-y-auto">
            <div className="space-y-2 mb-auto">
              {menuItems.map((item, idx) => (
                <button key={item.view} onClick={() => handleNav(item.view)} className={`w-full group flex items-center justify-between p-5 rounded-3xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`} style={{ transitionDelay: `${isOpen ? idx * 75 + 150 : 0}ms` }}>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-slate-900 dark:text-white font-black uppercase text-sm tracking-[0.15em]">{item.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
