import React from 'react';
import { motion } from 'framer-motion';

export const Guarantee: React.FC = () => {
  return (
    <section id="garantia" className="py-24 bg-[#0a0a0a] border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6 w-full max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#111] to-[#050505] border border-cyan-500/30 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <svg className="w-32 h-32 md:w-40 md:h-40 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
          </div>

          <div className="relative z-10 text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500 text-black text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 md:mb-8 font-mono">
              GARANTÍA IGA
            </div>
            
            <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter leading-tight text-white uppercase italic">
              Garantía IGA: <span className="text-cyan-400">si no funciona, el mes 3 es gratis</span>
            </h2>

            <div className="space-y-4 md:space-y-6 max-w-4xl">
              <p className="text-lg md:text-2xl text-gray-200 leading-relaxed font-semibold">
                Cada implementación del <span className="text-white font-black">Sistema de Triaje Digital™</span> viene respaldada por nuestra Garantía por Contrato:
              </p>
              
              <p className="text-base md:text-xl text-gray-400 leading-relaxed font-medium">
                Si en los primeros <span className="text-white font-bold">60 días no te entregamos al menos 40 citas calificadas extra</span>, el tercer mes es <span className="text-cyan-400 font-extrabold">completamente gratis</span>, para asegurar al menos un ROI mínimo antes de que decidas si continuamos.
              </p>

              {/* 3 sellos visuales */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-8 pt-6 md:pt-8">
                <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 py-2.5 px-4 rounded-xl">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-extrabold text-white uppercase tracking-widest text-xs md:text-sm font-mono">SIN LETRAS CHICAS</span>
                </div>

                <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 py-2.5 px-4 rounded-xl">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-extrabold text-white uppercase tracking-widest text-xs md:text-sm font-mono">SIN EXCUSAS</span>
                </div>

                <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 py-2.5 px-4 rounded-xl">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-extrabold text-cyan-400 uppercase tracking-widest text-xs md:text-sm font-mono">FIRMADO POR CONTRATO</span>
                </div>
              </div>

              <div className="italic mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/5 text-gray-500 text-sm md:text-base font-medium">
                Porque si nuestro sistema no funciona en tu clínica, nosotros somos los primeros en saberlo y los primeros en hacernos responsables.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
