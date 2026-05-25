import React from 'react';
import { motion } from 'framer-motion';

interface FounderProps {
  onNavigateForm: () => void;
}

export const Founder: React.FC<FounderProps> = ({ onNavigateForm }) => {
  return (
    <section id="fundador" className="py-24 bg-[#0a0a0a] overflow-hidden relative border-t border-white/5 scroll-mt-20">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.01] uppercase tracking-[0.2em] pointer-events-none select-none whitespace-nowrap z-0">
        ICONIC GROUP
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-6xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white uppercase italic leading-tight">
              Sobre el <span className="text-cyan-400">fundador</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-500 rounded-full" />
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Foto profesional de Santiago */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-1"
            >
              <div className="bg-white/5 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 overflow-hidden relative group shadow-2xl h-fit">
                <img 
                  src="https://i.postimg.cc/dtGt0zpP/El-modelo-debe-202604261844.jpg" 
                  alt="Santiago Collado - Fundador" 
                  className="w-full h-auto transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-px bg-cyan-500"></span>
                    <span className="text-[10px] md:text-xs text-cyan-400 font-black uppercase tracking-[0.3em]">SANTIAGO COLLADO</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter">Santiago Collado</h3>
                  <p className="text-gray-400 font-bold text-xs md:text-sm mt-1 uppercase tracking-widest">Fundador, Iconic Group</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />
            </motion.div>

            {/* Storytelling block of text */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-2 text-left"
            >
              <h3 className="text-xl md:text-2xl text-cyan-400 font-extrabold uppercase tracking-tight">
                No vengo del mundo corporativo ni de una agencia de 50 personas.
              </h3>
              
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Construí Iconic Group con una obsesión específica: entender por qué los dentistas con las mejores clínicas de México siguen llenando su agenda con pacientes que preguntan precio y desaparecen.
              </p>
              
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Después de analizar decenas de clínicas dentales y supervisar <span className="text-white font-bold border-b border-cyan-500/30">+1,240 citas generadas</span>, desarrollé el <span className="text-white font-black">Sistema de Triaje Digital™</span>: un sistema que no solo atrae, sino que filtra, educa y entrega al dentista solo a quien ya decidió invertir en su sonrisa.
              </p>
              
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                En Iconic Group trabajamos con <span className="text-cyan-400 font-extrabold">máximo 3 clínicas nuevas por mes</span>. No por exclusividad artificial, sino porque cada implementación la superviso personalmente, desde la primera campaña hasta la primera cita confirmada.
              </p>
              
              <p className="text-cyan-300 font-bold text-sm md:text-lg italic border-l-2 border-cyan-500 pl-4 py-1">
                Si llegaste hasta acá, probablemente tu clínica está lista para dejar de competir por precio.
              </p>

              <div className="pt-4">
                <button
                  onClick={onNavigateForm}
                  className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-black px-6 md:px-8 py-4 rounded-xl text-base md:text-lg font-black transition-all transform hover:scale-105 active:scale-95 glow-brand shadow-xl shadow-cyan-500/20"
                >
                  Quiero ver si mi clínica califica
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
