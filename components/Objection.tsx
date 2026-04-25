
import React from 'react';
import { motion } from 'framer-motion';

export const Objection: React.FC = () => {
  return (
    <section id="objecion" className="py-16 md:py-24 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
              No somos una agencia. <span className="text-cyan-400">Y esa es exactamente la diferencia.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-left mt-12 md:mt-16">
              <div className="bg-white/5 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-colors">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Las agencias te venden campañas, reportes y reuniones mensuales. Nosotros instalamos infraestructura que trabaja aunque tú no estés en el consultorio.
                </p>
              </div>
              <div className="bg-white/5 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-colors">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Una agencia optimiza por clics. Nosotros optimizamos por sillón ocupado.
                </p>
              </div>
            </div>

            <div className="bg-cyan-500/10 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-cyan-500/20 mt-10 md:mt-12">
              <p className="text-lg md:text-2xl text-white font-bold leading-relaxed">
                Trabajamos exclusivamente con clínicas dentales de alto ticket en Latinoamérica. No atendemos restaurantes, e-commerce ni coaches. Solo dentistas. Solo Latinoamérica. Solo alto valor.
              </p>
              <p className="text-cyan-400 font-bold mt-6 uppercase tracking-widest text-[10px] md:text-sm">
                Esa especialización es lo que nos permite garantizar resultados por contrato.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
