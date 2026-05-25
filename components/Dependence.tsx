import React from 'react';
import { motion } from 'framer-motion';

export const Dependence: React.FC = () => {
  const modelOld = [
    "Perseguir pacientes uno por uno por WhatsApp",
    "Bajar precios o regalar consulta para llenar agenda",
    "Depender del esfuerzo de la recepcionista",
    "Rezar que el boca a boca alcance este mes",
    "Pagar agencias que entregan \"leads\" sin filtrar"
  ];

  const modelNew = [
    "Infraestructura comercial automatizada 24/7",
    "IA que filtra a los curiosos antes de que escriban",
    "Cobro de anticipo de consulta antes de pisar la clínica",
    "Posicionamiento de autoridad antes de la cita",
    "Agenda directa en Google Calendar del dueño"
  ];

  return (
    <section id="paradigma" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5 scroll-mt-20">
      {/* Light glow inside section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-6xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white uppercase italic leading-tight">
              Lo que antes funcionaba <span className="text-cyan-400">ya no alcanza</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mb-8 rounded-full" />
            
            <p className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed">
              El mercado dental mexicano se saturó. La publicidad genérica trae curiosos. Las clínicas que hoy facturan $500K MXN+/mes cambiaron las reglas: ya no persiguen pacientes, los <span className="text-cyan-400 font-bold border-b border-cyan-500/30">filtran</span>.
            </p>
          </motion.div>
        </div>

        {/* Comparison grid: Model Viejo vs Model Nuevo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* El Modelo Viejo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 md:p-8 relative group hover:border-red-500/20 transition-all duration-300 shadow-xl"
          >
            <div className="absolute top-4 right-6 text-red-500/10 font-black text-6xl pointer-events-none uppercase">OLD</div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
              <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight">El Modelo Viejo</h3>
            </div>
            
            <ul className="space-y-4">
              {modelOld.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm md:text-base leading-relaxed">
                  <span className="text-red-500/70 text-lg mt-0.5 select-none">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* El Modelo Nuevo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0e1717]/40 border border-cyan-500/20 rounded-3xl p-6 md:p-8 relative group hover:border-cyan-500/40 hover:bg-[#0e1717]/60 transition-all duration-300 shadow-2xl"
          >
            <div className="absolute top-4 right-6 text-cyan-400/10 font-black text-6xl pointer-events-none uppercase">NEW</div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight text-cyan-400">El Modelo Nuevo</h3>
            </div>
            
            <ul className="space-y-4">
              {modelNew.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-200 text-sm md:text-base leading-relaxed font-semibold">
                  <span className="text-cyan-400 text-lg mt-0.5 select-none">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
