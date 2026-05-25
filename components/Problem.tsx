import React from 'react';
import { motion } from 'framer-motion';

export const Problem: React.FC = () => {
  const pointList = [
    {
      id: "01",
      title: "WhatsApp lleno de curiosos",
      text: 'Tu WhatsApp se llena de "¿cuánto cuesta?" y casi nada se cierra.'
    },
    {
      id: "02",
      title: "Pagar por peores prospectos",
      text: "Subes el presupuesto en Meta Ads y los leads bajan de calidad."
    },
    {
      id: "03",
      title: "Tecnología subutilizada",
      text: "Tu aparatología de cientos de miles de dólares ($80,000 USD) está subutilizada porque no hay sillón lleno."
    },
    {
      id: "04",
      title: "Prestigio devaluándose",
      text: "Cada descuento que haces para cerrar un caso diluye el prestigio que tardaste años en construir."
    },
    {
      id: "05",
      title: "Tú sigues persiguiendo leads",
      text: "Probaste 2-3 agencias, cursos y mentorías, y al final sigues cerrando tú por WhatsApp a las 11 de la noche."
    }
  ];

  return (
    <section id="problema" className="py-24 bg-[#0d0d0d] relative overflow-hidden border-t border-white/5 scroll-mt-20">
      {/* Background decoration blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-6xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white uppercase italic leading-tight">
              La dura realidad de tener una clínica dental de <span className="text-red-500">alto ticket en México</span>
            </h2>
            <div className="w-20 h-1 bg-red-500 mb-8 rounded-full" />
            
            <p className="text-gray-300 text-lg md:text-2xl max-w-3xl leading-relaxed mb-4">
              Tienes un odontólogo estético o implantólogo formado en el extranjero, aparatología de <span className="text-white font-bold">$80,000 USD</span> y procesos clínicos impecables.
            </p>
            <p className="text-gray-300 text-lg md:text-2xl max-w-3xl leading-relaxed">
              Y aun así sigues compitiendo contra el dentista de la esquina que cobra la mitad.
            </p>

            <div className="mt-8 px-6 py-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-sm md:text-base max-w-2xl">
              Lo peor: lo sabes. Pero el mercado no, porque <span className="text-white font-black border-b border-red-500/40">tu proceso comercial no lo comunica</span>.
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-xl md:text-3xl font-black text-gray-300 uppercase tracking-widest italic">
            ¿Cuántas de estas <span className="text-red-500">te suenan?</span>
          </h3>
        </div>

        {/* 5 Symptoms Cards in a beautifully structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pointList.map((point, index) => {
            const isLast = index === 4;
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white/[0.01] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between group hover:bg-white/[0.03] hover:border-red-500/30 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)] ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-red-500 bg-red-500/10 px-3 py-1 rounded-full uppercase">
                      SÍNTOMA {point.id}
                    </span>
                    <span className="text-red-500/20 font-bold text-3xl group-hover:text-red-500/50 transition-colors duration-300">
                      ?
                    </span>
                  </div>
                  <h4 className="text-white text-lg font-black mb-2 group-hover:text-red-400 transition-colors">
                    {point.title}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {point.text}
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
