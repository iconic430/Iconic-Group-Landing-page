
import React from 'react';
import { motion } from 'framer-motion';

export const Founder: React.FC = () => {
  return (
    <section id="fundador" className="py-16 md:py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1"
            >
              <div className="aspect-[4/5] bg-white/5 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 overflow-hidden relative group">
                {/* Santiago Collado image */}
                <img 
                  src="https://i.postimg.cc/9Mq0CqFc/E9A121B8-25AB-4956-8156-E13BDC7E43CD.png" 
                  alt="Santiago Collado - Fundador" 
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white">Santiago Collado</h3>
                  <p className="text-cyan-400 font-medium text-sm md:text-base">Fundador, Iconic Group</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-cyan-500/10 blur-[40px] md:blur-[50px] rounded-full" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-2"
            >
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                No vengo del mundo corporativo ni de una agencia de 50 personas. Construí Iconic Group con una obsesión muy específica: entender por qué los dentistas con las mejores clínicas de México siguen llenando su agenda con pacientes que preguntan precio y desaparecen.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Después de analizar decenas de clínicas dentales y más de 150 pacientes generados, desarrollé el Protocolo de Triaje Digital: un sistema que no solo atrae, sino que filtra, educa y entrega al dentista solo a quien ya decidió invertir en su salud.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium italic border-l-2 border-cyan-500 pl-5 md:pl-6">
                Trabajo con máximo 5 clínicas nuevas por trimestre. No por exclusividad artificial, sino porque cada implementación la superviso personalmente.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
