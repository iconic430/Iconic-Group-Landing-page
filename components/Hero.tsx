import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigateForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateForm }) => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-cyan-400 mb-10 uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            Especialistas en clínicas & consultorios dentales
          </div>
          
          <h1 className="text-3xl md:text-[3.2rem] font-extrabold leading-[1.15] mb-8 tracking-tighter w-full max-w-6xl text-white">
            Implementamos el Sistema de Triaje Digital en tu <span className="text-gradient">clínica para agendar 30 pacientes de alto valor en 60 días o menos.</span>
          </h1>

          {/* Video Placeholder Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full max-w-4xl aspect-video bg-white/5 border border-white/10 rounded-[2rem] mb-12 relative overflow-hidden group cursor-pointer shadow-2xl shadow-cyan-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/40 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Fondo simulando video */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/40 text-xs uppercase tracking-widest font-bold">
              <span>Demo del Sistema</span>
              <span>02:45</span>
            </div>
          </motion.div>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-14 max-w-4xl leading-relaxed">
            Exclusivo para clínicas dentales que facturan +$6,000 USD y buscan escalar con un modelo de adquisición probado con un 77.7% de efectividad.
          </p>
          
          <div className="flex flex-col items-center gap-8 w-full sm:w-auto">
            <button 
              onClick={onNavigateForm}
              className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-black px-14 py-7 rounded-2xl text-2xl md:text-3xl font-black transition-all transform hover:scale-105 active:scale-95 glow-brand shadow-2xl shadow-cyan-500/40"
            >
              Quiero instalar este sistema
            </button>
          </div>
          
          <div className="mt-20 flex flex-col gap-4">
            {/* Line 1: Social Proof */}
            <div className="flex items-center justify-center gap-3">
              <svg 
                className="w-6 h-6 text-cyan-500 flex-shrink-0" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <p className="text-sm md:text-lg text-gray-500 font-medium">
                Socio de confianza para <span className="text-white font-bold">+21 Clínicas Premium</span> en México.
              </p>
            </div>

            {/* Line 2: Contract Guarantee */}
            <div className="flex items-center justify-center gap-3">
              <svg 
                className="w-6 h-6 text-cyan-500 flex-shrink-0" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <p className="text-sm md:text-lg text-gray-500 font-medium">
                <span className="text-white font-bold">Garantizado por contrato.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none opacity-30 select-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full" />
      </div>
    </section>
  );
};