
import React, { useCallback } from 'react';
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
        
        <section id="verificacion" className="py-24 bg-[#0a0a0a] scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-6">Fase 1: Verificación de Infraestructura</div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Verifica si tu clínica califica</h2>
                <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
                  Completa el triaje a continuación para iniciar el proceso de validación técnica de tu clínica y descubrir si podemos implementar nuestro sistema.
                </p>
              </div>
              <div className="w-full relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-black/40 rounded-[2rem] border border-white/5 overflow-hidden backdrop-blur-sm">
                  <TriageForm />
                </div>
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
