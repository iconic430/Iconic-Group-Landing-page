import React from 'react';
import { motion } from 'framer-motion';

export const Frustrations: React.FC = () => {
  const points = [
    {
      id: "01",
      text: 'Tu WhatsApp se llena de "¿cuánto cuesta?" y casi nada se cierra.',
      highlight: '"¿cuánto cuesta?"'
    },
    {
      id: "02",
      text: 'Subes el presupuesto en anuncios y llegan peores leads.',
      highlight: 'peores leads'
    },
    {
      id: "03",
      text: 'Tu aparatología de $80,000 USD está subutilizada.',
      highlight: '$80,000 USD está subutilizada'
    },
    {
      id: "04",
      text: 'Cada descuento que haces diluye tu prestigio.',
      highlight: 'diluye tu prestigio'
    },
    {
      id: "05",
      text: 'Probaste agencias, cursos y mentorías... pero sigues cerrando tú.',
      highlight: 'sigues cerrando tú'
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Background radial gradient decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-6xl font-black mb-4 tracking-tighter text-white uppercase italic">
              ¿Cuántas de estas <span className="text-red-500">te suenan?</span>
            </h2>
            <div className="w-20 h-1 bg-red-500 mt-2 rounded-full" />
          </motion.div>
        </div>

        {/* Bento/Grid Layout for Frustrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {points.map((point, index) => {
            // Let the 5th item take full width on large screens to look balanced, or center it nicely.
            const isLast = index === 4;
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/[0.01] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between group hover:bg-white/[0.03] hover:border-red-500/30 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)] md:min-h-[180px] ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-red-500 bg-red-500/10 px-3 py-1 rounded-full">
                      SÍNTOMA {point.id}
                    </span>
                    <span className="text-red-500/10 font-bold text-4xl group-hover:text-red-500/25 transition-colors duration-300">
                      ?
                    </span>
                  </div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium">
                    {point.text.split(point.highlight).map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="text-white font-bold border-b border-red-500/30">
                            {point.highlight}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
