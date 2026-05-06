
import React from 'react';
import { motion } from 'framer-motion';

export const Founder: React.FC = () => {
  return (
    <section id="fundador" className="py-16 md:py-24 bg-[#0a0a0a] overflow-hidden relative">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] uppercase tracking-[0.2em] pointer-events-none select-none whitespace-nowrap z-0">
        Iconic Group
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1"
            >
              <div className="bg-white/5 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 overflow-hidden relative group shadow-2xl h-fit">
                {/* Santiago Collado image */}
                <img 
                  src="https://i.postimg.cc/dtGt0zpP/El-modelo-debe-202604261844.jpg" 
                  alt="Santiago Collado - Fundador" 
                  className="w-full h-auto transition-all duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-px bg-cyan-500"></span>
                    <span className="text-[10px] md:text-xs text-cyan-400 font-black uppercase tracking-[0.3em]">Fundador</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter">Santiago Collado</h3>
                  <p className="text-gray-400 font-bold text-sm md:text-base mt-1">Iconic Group</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-cyan-500/10 blur-[60px] md:blur-[80px] rounded-full pointer-events-none" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-2"
            >
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                No vengo del mundo corporativo ni de una agencia de 50 personas. Construí Iconic Group con una obsesión muy específica: entender por qué los dentistas con las mejores clínicas de Latinoamérica siguen llenando su agenda con pacientes que preguntan precio y desaparecen.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Después de analizar decenas de clínicas dentales y más de 150 pacientes generados, desarrollé el Sistema de Triaje Digital: un sistema que no solo atrae, sino que filtra, educa y entrega al dentista solo a quien ya decidió invertir en su salud.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium italic border-l-2 border-cyan-500 pl-5 md:pl-6">
                Trabajo con máximo 3 clínicas nuevas por mes. No por exclusividad artificial, sino porque cada implementación la superviso personalmente.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
