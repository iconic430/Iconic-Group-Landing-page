
import React from 'react';
import { motion } from 'framer-motion';

export const Dependence: React.FC = () => {
  const items = [
    "Agencias genéricas",
    "Referidos",
    "Cambios del algoritmo",
    "Cientos de mensajes",
    "Humor del consumidor",
    "Bailes de TikTok"
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter text-white uppercase italic">
              Escala <span className="text-cyan-400">sin depender</span> de:
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mt-4 rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex items-center justify-center text-center group hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="relative">
                <span className="text-base md:text-xl font-black text-white uppercase tracking-[0.1em] group-hover:text-cyan-400 transition-colors">
                  {item}
                </span>
                <div className="absolute -inset-2 bg-cyan-500/0 blur-lg group-hover:bg-cyan-500/10 transition-all rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none z-0 opacity-30"></div>
    </section>
  );
};
