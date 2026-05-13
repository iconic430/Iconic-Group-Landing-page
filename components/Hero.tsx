
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigateForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateForm }) => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-24 overflow-hidden">
      {/* Subtle Radial Glow behind Hero content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] md:text-[10px] font-black text-cyan-400 mb-6 uppercase tracking-[0.2em] backdrop-blur-sm whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Especialistas en clínicas odontológicas
          </div>
          
          <h1 className="text-3xl md:text-[3.2rem] font-black leading-[1.1] md:leading-[1.1] mb-6 tracking-tighter w-full max-w-6xl text-white">
            Instalamos en <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">14 días</span> el sistema que atrae pacientes de <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] whitespace-nowrap">$20,000 a $80,000 MXN</span> por procedimiento y los agenda solo
          </h1>
          
          <div className="flex flex-col items-center mb-10 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm"
            >
              <p className="text-cyan-400 font-black uppercase tracking-[0.2em] text-[10px] md:text-sm">
                o sino el tercer mes es gratis
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-x-12 px-8 py-5 md:py-6 rounded-[2rem] md:rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-md relative group overflow-hidden shadow-2xl"
            >
              <div className="flex items-center gap-3 relative z-10 group/item">
                <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                <p className="text-white font-black text-lg md:text-xl tracking-tight">
                  +22 <span className="text-cyan-400 font-bold ml-1">Clínicas dentales</span>
                </p>
              </div>
              <span className="hidden md:block w-px h-6 bg-white/10" />
              <div className="flex items-center gap-3 relative z-10 group/item">
                <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                <p className="text-white font-black text-lg md:text-xl tracking-tight">
                  +300 <span className="text-cyan-400 font-bold ml-1">Pacientes generados</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contenedor de Video con Proporción 16:9 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0]
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-full max-w-[850px] aspect-[16/9] bg-black border border-white/10 rounded-2xl md:rounded-[2rem] mb-8 md:mb-12 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] group"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-[2rem]">
              <iframe
                id="panda-ac7edc90-e679-4b3a-9770-db6e0229b760"
                src="https://player-vz-9b0754fb-cb5.tv.pandavideo.com/embed/?v=ac7edc90-e679-4b3a-9770-db6e0229b760"
                style={{ border: 'none' }}
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                allowFullScreen={true}
                className="absolute w-full h-full border-0"
                title="Iconic Group Presentation Video"
              ></iframe>
            </div>
            
            {/* Capa de protección estética */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl md:rounded-[2rem] shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] group-hover:shadow-[inset_0_0_40px_rgba(6,182,212,0.1)] transition-shadow duration-700"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-8 md:mb-10 -mt-4 md:-mt-6"
          >
            <span className="text-cyan-500">▶</span> Mira cómo funciona el sistema - 3 min
          </motion.div>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-10 md:mb-14 max-w-4xl leading-relaxed px-4 md:px-0">
            <span className="text-white font-bold">Exclusivo para clínicas odontológicas que ya facturen +$200,000 MXN y quieran escalar con el paciente correcto, no el más barato</span>
          </p>
          
          <button 
            onClick={onNavigateForm}
            className="w-full sm:w-auto max-w-[380px] bg-cyan-500 hover:bg-cyan-400 text-black px-8 md:px-10 py-5 md:py-6 rounded-2xl text-lg md:text-2xl font-black transition-all transform hover:scale-105 active:scale-95 glow-brand shadow-2xl shadow-cyan-500/40 leading-tight"
          >
            Quiero ver si mi clínica califica
          </button>
        </motion.div>
      </div>
    </section>
  );
};
