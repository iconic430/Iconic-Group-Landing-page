
import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Problem } from './components/Problem.tsx';
import { Solution } from './components/Solution.tsx';
import { Benefits } from './components/Benefits.tsx';
import { SocialProof } from './components/SocialProof.tsx';
import { Footer } from './components/Footer.tsx';
import { TriageForm } from './components/TriageForm.tsx';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'form'>('landing');

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
    // Ahora en lugar de cambiar de vista, hacemos scroll a la sección del formulario integrada
    handleScrollTo('verificacion');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-[-15%] left-[-10%] w-[60%] h-[60%] bg-cyan-500/20 blur-[130px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] bg-cyan-600/20 blur-[130px] rounded-full" 
        />
      </div>

      <Navbar 
        onNavigateForm={navigateToForm} 
        onScrollTo={handleScrollTo}
      />
      
      <main className="relative z-10">
        <Hero onNavigateForm={navigateToForm} />
        <Problem />
        
        {/* Sección de Formulario Integrada */}
        <section id="verificacion" className="py-24 bg-[#0a0a0a] scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Verifica si tu clínica califica</h2>
                <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
                  Completa el formulario a continuación y te contactaremos para analizar tu caso.
                </p>
              </div>
              <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-4 md:p-8 shadow-2xl">
                <TriageForm />
              </div>
            </div>
          </div>
        </section>

        <Solution onNavigateForm={navigateToForm} />
        <Benefits />
        <SocialProof />
        <Footer onNavigateForm={navigateToForm} onScrollTo={handleScrollTo} />
      </main>
    </div>
  );
};

export default App;
