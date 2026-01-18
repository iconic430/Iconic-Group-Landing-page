
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
            Especialistas en Sector Salud & Estética
          </div>
          
          <h1 className="text-5xl md:text-[5.5rem] font-extrabold leading-[0.95] mb-10 tracking-tighter w-full">
            Deja de Perseguir Leads Curiosos. <br className="hidden md:block" />
            Empieza a Recibir <br className="hidden md:block" />
            <span className="text-gradient">Pacientes Calificados.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-14 max-w-4xl leading-relaxed">
            Instalamos una infraestructura de adquisición en tu clínica que atrae, filtra y agenda pacientes en piloto automático, sin que tu recepción pierda tiempo explicando precios.
          </p>
          
          <div className="flex flex-col items-center gap-8 w-full sm:w-auto">
            <button 
              onClick={onNavigateForm}
              className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-black px-14 py-7 rounded-2xl text-2xl md:text-3xl font-black transition-all transform hover:scale-105 active:scale-95 glow-brand shadow-2xl shadow-cyan-500/40"
            >
              Quiero instalar este sistema
            </button>
            
            <button 
              onClick={onNavigateForm}
              className="text-gray-400 hover:text-white transition-colors text-lg font-medium flex items-center gap-2 group"
            >
              <span>O ver demo del triaje digital</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
          <div className="mt-24 flex flex-col items-center gap-5">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/${i + 55}/100/100`} 
                  alt="Doctor" 
                  className="w-14 h-14 rounded-full border-2 border-[#0a0a0a]" 
                />
              ))}
            </div>
            <p className="text-sm md:text-base text-gray-500 font-medium">
              Socio de confianza para <span className="text-white font-bold">+50 Clínicas Premium</span> en LATAM y España.
            </p>
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
