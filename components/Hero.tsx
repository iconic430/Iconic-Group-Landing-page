
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigateForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateForm }) => {
  // Nuevo enlace de Google Drive formateado para previsualización (embed)
  const driveEmbedUrl = "https://drive.google.com/file/d/1CJ33bdICKxMFg57RpvxFSSqSuinAHuZO/preview";

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
          
          <h1 className="text-3xl md:text-[3.2rem] font-extrabold leading-[1.15] mb-8 tracking-tighter w-full max-w-6xl text-white">
            Implementamos el Sistema de Triaje Digital en tu <span className="text-gradient">clínica para agendar 30 pacientes de alto valor en 60 días o menos.</span>
          </h1>

          {/* Contenedor de Video con Proporción 9:16 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full max-w-[340px] aspect-[9/16] bg-black border border-white/10 rounded-[2.5rem] mb-12 relative overflow-hidden shadow-2xl shadow-cyan-500/10"
          >
            {/* 
              Técnica de Cropping para 9:16:
              - Altura del iframe al 120% para desbordar intencionalmente.
              - Desplazamiento superior del -10% para ocultar la barra de herramientas superior de Google Drive.
              - El overflow-hidden del contenedor padre recorta los bordes restantes.
            */}
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
              <iframe
                src={driveEmbedUrl}
                className="absolute w-full h-[120%] border-0"
                style={{ top: '-10%', left: 0 }}
                allow="autoplay; fullscreen"
                title="Iconic Group Presentation Video"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Capa de protección estética para el formato 9:16 */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-[2.5rem] shadow-[inset_0_0_50px_rgba(0,0,0,0.9)]"></div>
          </motion.div>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-14 max-w-4xl leading-relaxed">
            Exclusivo para clínicas dentales que facturan +$6,000 USD y buscan escalar con un modelo de adquisición probado con un 77.7% de efectividad.
          </p>
          
          <button 
            onClick={onNavigateForm}
            className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-black px-14 py-7 rounded-2xl text-2xl md:text-3xl font-black transition-all transform hover:scale-105 active:scale-95 glow-brand shadow-2xl shadow-cyan-500/40"
          >
            Quiero instalar este sistema
          </button>
          
          <div className="mt-20 flex flex-col gap-4">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm md:text-lg text-gray-500 font-medium">
                Socio de confianza para <span className="text-white font-bold">+21 Clínicas Premium</span> en México.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm md:text-lg text-gray-500 font-medium">
                Garantía de resultados firmada <span className="text-white font-bold">por contrato.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
