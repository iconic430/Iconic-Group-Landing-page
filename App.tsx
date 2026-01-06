
import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Benefits } from './components/Benefits';
import { SocialProof } from './components/SocialProof';
import { Footer } from './components/Footer';
import { TriageForm } from './components/TriageForm';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'form'>('landing');

  const handleScrollTo = useCallback((sectionId: string) => {
    // Si estamos en el formulario, primero volvemos a la landing
    if (view === 'form') {
      setView('landing');
      // Esperamos un momento a que el DOM de la landing se monte
      setTimeout(() => {
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
      }, 100);
    } else {
      // Si ya estamos en la landing, scroll directo
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
    }
  }, [view]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30">
      {/* Fondo ambiental fijo con destellos mejorados */}
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
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-blue-500/10 blur-[150px] rounded-full" 
        />
      </div>

      <Navbar 
        onNavigateForm={() => setView('form')} 
        onScrollTo={handleScrollTo}
      />
      
      {view === 'landing' ? (
        <main className="relative z-10">
          <Hero onNavigateForm={() => setView('form')} />
          <Problem />
          <Solution onNavigateForm={() => setView('form')} />
          <Benefits />
          <SocialProof />
          <Footer onNavigateForm={() => setView('form')} onScrollTo={handleScrollTo} />
        </main>
      ) : (
        <main className="relative z-10 pt-40 pb-12 px-6 flex flex-col items-center min-h-screen">
          <div className="max-w-4xl w-full">
            <button 
              onClick={() => setView('landing')}
              className="mb-8 text-gray-400 hover:text-white flex items-center gap-2 transition-colors group"
            >
              <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
              Volver al inicio
            </button>
            
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Verifica si tu clínica califica o consultorio califica</h1>
              <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
                Llena tus datos y te contactaremos en breve.
              </p>
            </div>
            
            <div className="w-full">
              <TriageForm />
            </div>
            
            <p className="text-center text-xs text-gray-500 mt-12 uppercase tracking-widest font-medium">
              Iconic Group Security Protocol &bull; Datos Protegidos
            </p>
          </div>
        </main>
      )}
    </div>
  );
};

export default App;
