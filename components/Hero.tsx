
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-cyan-400 mb-8 uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            Especialistas en clínicas & consultorios dentales
          </div>
          
          <h1 className="text-4xl md:text-[3.2rem] font-extrabold leading-[1.1] md:leading-[1.15] mb-6 md:mb-8 tracking-tighter w-full max-w-6xl text-white">
            En 60 días instalamos un sistema que atrae pacientes listos para invertir <span className="text-gradient">$20,000 MXN en su sonrisa,</span> y los agenda automáticamente
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-10 text-cyan-400/80 font-medium text-sm md:text-base tracking-tight px-4"
          >
            <span className="text-center">150+ pacientes calificados generados</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="text-center">+22 clínicas dentales han confiado en nosotros</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="text-center">97% de clínicas renuevan el segundo mes</span>
          </motion.div>

          {/* Contenedor de Video con Proporción 16:9 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full max-w-[800px] aspect-[16/9] bg-black border border-white/10 rounded-2xl md:rounded-[1.5rem] mb-8 md:mb-12 relative overflow-hidden shadow-2xl shadow-cyan-500/10"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-[1.5rem]">
              <iframe
                id="panda-58f2bbcd-377c-46bf-9c15-7ad44e5d7c4b"
                src="https://player-vz-9b0754fb-cb5.tv.pandavideo.com/embed/?v=58f2bbcd-377c-46bf-9c15-7ad44e5d7c4b"
                style={{ border: 'none' }}
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                allowFullScreen={true}
                className="absolute w-full h-full border-0"
                title="Iconic Group Presentation Video"
              ></iframe>
            </div>
            
            {/* Capa de protección estética */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl md:rounded-[1.5rem] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"></div>
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
            <span className="text-white font-bold">Exclusivo para clínicas dentales en México que ya facturan +$120k y quieren llenar su agenda con el paciente correcto, no con el más barato</span>
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
