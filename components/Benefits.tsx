
import React from 'react';
import { motion } from 'framer-motion';

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-[#0d0d0d] scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Más que Marketing, somos tu <span className="text-cyan-400">Socio de Crecimiento.</span>
        </h2>

        <div className="grid md:grid-cols-6 md:grid-rows-2 gap-6 h-full lg:h-[600px]">
          {/* Bento Box 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 md:row-span-2 bg-glass rounded-[2rem] p-10 flex flex-col justify-end relative overflow-hidden group border-white/10"
          >
            <div className="absolute top-0 right-0 p-10">
              <div className="w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center text-4xl group-hover:rotate-12 transition-transform">🎯</div>
            </div>
            <h3 className="text-3xl font-bold mb-4">Cero Curiosos</h3>
            <p className="text-gray-400 text-lg">
              Tu equipo de recepción solo hablará con personas que han pasado el filtro de presupuesto y están listas para comprar tu tratamiento de alto valor.
            </p>
          </motion.div>

          {/* Bento Box 2 */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="md:col-span-3 bg-glass rounded-[2rem] p-10 border-white/10 relative overflow-hidden group"
          >
             <div className="flex items-center gap-6">
                <div className="text-4xl group-hover:scale-110 transition-transform">📱</div>
                <div>
                   <h3 className="text-2xl font-bold mb-2">Tecnología Propia</h3>
                   <p className="text-gray-400">Te instalamos el CRM y la Iconic App móvil. Un activo que te pertenece para siempre.</p>
                </div>
             </div>
          </motion.div>

          {/* Bento Box 3 */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="md:col-span-3 bg-glass rounded-[2rem] p-10 border-white/10 relative overflow-hidden group"
          >
             <div className="flex items-center gap-6">
                <div className="text-4xl group-hover:scale-110 transition-transform">🗓️</div>
                <div>
                   <h3 className="text-2xl font-bold mb-2">Agenda Llena</h3>
                   <p className="text-gray-400">Priorizamos la ocupación de sillón/camilla. Optimizamos para facturación, no por likes.</p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
