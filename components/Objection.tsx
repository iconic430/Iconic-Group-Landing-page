import React from 'react';
import { motion } from 'framer-motion';

export const Objection: React.FC = () => {
  const chips = [
    { text: "SOLO DENTISTAS", icon: "🦷" },
    { text: "SOLO MÉXICO", icon: "🇲🇽" },
    { text: "SOLO ALTO TICKET", icon: "💎" }
  ];

  return (
    <section id="objecion" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5 scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 w-full max-w-6xl">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white uppercase italic leading-tight">
              No somos una agencia. <span className="text-cyan-400">Y esa es exactamente la diferencia.</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mb-12 rounded-full" />
            
            {/* 3 chips/badges visuales */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
              {chips.map((chip, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs md:text-sm text-cyan-300 font-extrabold tracking-widest font-mono uppercase shadow-md hover:bg-cyan-500/20 transition-colors"
                >
                  <span>{chip.icon}</span>
                  <span>{chip.text}</span>
                </div>
              ))}
            </div>

            {/* Three logical paragraphs block */}
            <div className="space-y-6 md:space-y-8 text-left max-w-3xl bg-white/[0.01] border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl relative">
              <div className="absolute -top-10 -left-6 text-cyan-400/5 font-black text-9xl pointer-events-none font-mono">VS</div>
              
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed border-l-2 border-red-500/40 pl-4 md:pl-6">
                Las agencias optimizan por clics. Nosotros optimizamos por <span className="text-white font-bold">sillón ocupado</span>.
              </p>
              
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed border-l-2 border-cyan-500/40 pl-4 md:pl-6">
                Las agencias atienden restaurantes, e-commerce, coaches y &quot;lo que entre&quot;. Nosotros trabajamos <span className="text-white font-extrabold">exclusivamente con clínicas dentales mexicanas de alto ticket</span>. No atendemos otros nichos. No queremos.
              </p>
              
              <p className="text-gray-200 font-semibold text-sm md:text-lg leading-relaxed border-l-2 border-cyan-500 pl-4 md:pl-6 bg-cyan-500/5 py-3 rounded-r-xl">
                Esa especialización es lo que nos permite <span className="text-cyan-400 font-black">garantizar resultados por contrato</span>, y la razón por la que solo aceptamos 3 clínicas nuevas por mes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
