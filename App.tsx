
import React, { useCallback } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Problem } from './components/Problem.tsx';
import { Solution } from './components/Solution.tsx';
import { Benefits } from './components/Benefits.tsx';
import { SocialProof } from './components/SocialProof.tsx';
import { Footer } from './components/Footer.tsx';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const handleScrollTo = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const navigateToForm = () => {
    handleScrollTo('verificacion');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30 relative">
      {/* Luces de fondo decorativas */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] left-[-10%] w-[60%] h-[60%] bg-cyan-500/20 blur-[130px] rounded-full" 
        />
      </div>

      <Navbar 
        onNavigateForm={navigateToForm} 
        onScrollTo={handleScrollTo}
      />
      
      <main className="relative z-10">
        <Hero onNavigateForm={navigateToForm} />
        <Problem />
        
        <Solution onNavigateForm={navigateToForm} />
        <Benefits />
        <SocialProof />
        <Footer onNavigateForm={navigateToForm} onScrollTo={handleScrollTo} />
      </main>
    </div>
  );
};

export default App;
