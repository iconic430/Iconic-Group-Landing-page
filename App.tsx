
import React, { useCallback } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Problem } from './components/Problem.tsx';
import { Solution } from './components/Solution.tsx';
import { Benefits } from './components/Benefits.tsx';
import { SocialProof } from './components/SocialProof.tsx';
import { Founder } from './components/Founder.tsx';
import { Objection } from './components/Objection.tsx';
import { Guarantee } from './components/Guarantee.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Footer } from './components/Footer.tsx';
import { motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

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
    window.location.href = 'https://form.iconicgroupmkt.com/';
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30 relative">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Luces de fondo decorativas */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-cyan-500/20 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" 
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
        <Founder />
        <SocialProof onNavigateForm={navigateToForm} />
        <Objection />
        <Guarantee />
        <FAQ />
        
        <Footer onNavigateForm={navigateToForm} onScrollTo={handleScrollTo} />
      </main>
      <Analytics />
    </div>
  );
};

export default App;
