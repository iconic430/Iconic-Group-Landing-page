
import React from 'react';
import { motion } from 'framer-motion';

export const Guarantee: React.FC = () => {
  return (
    <section id="garantia" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#111] to-[#050505] border-2 border-cyan-500/30 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg className="w-32 h-32 md:w-40 md:h-40 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
          </div>

          <div className="relative z-10">
            <div className="inline-block px-4 py-1 rounded-full bg-cyan-500 text-black text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 md:mb-8">Garantía IGA</div>
            
            <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter leading-tight">
              Si no ves resultados, <span className="text-cyan-400">el mes 3 es gratis.</span>
            </h2>

            <div className="space-y-4 md:space-y-6 max-w-3xl">
              <p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-medium">
                Cada implementación del Protocolo de Triaje Digital viene respaldada por nuestra Garantía IGA:
              </p>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed">
                Si en los primeros 60 días no alcanzamos los objetivos pactados por contrato, el tercer mes no pagas nada.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 pt-6 md:pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold text-white uppercase tracking-wider text-[10px] md:text-sm">Sin letras chicas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold text-white uppercase tracking-wider text-[10px] md:text-sm">Sin excusas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold text-white uppercase tracking-wider text-[10px] md:text-sm">Firmado</span>
                </div>
              </div>
              <p className="text-gray-500 italic mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/10 text-sm md:text-base">
                Porque si nuestro sistema no funciona en tu clínica, nosotros somos los primeros en saberlo y los primeros en hacernos responsables.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
