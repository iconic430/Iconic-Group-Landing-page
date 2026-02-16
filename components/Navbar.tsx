
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigateForm: () => void;
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateForm, onScrollTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-2xl font-extrabold tracking-tighter text-white">
            ICONIC<span className="text-cyan-500">GROUP</span>
          </span>
        </div>

        <div>
          <button 
            onClick={onNavigateForm}
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 glow-brand shadow-lg shadow-cyan-500/20"
          >
            Agendar Consultoría
          </button>
        </div>
      </div>
    </nav>
  );
};
