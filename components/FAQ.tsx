
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "¿Esto funciona si mi clínica es nueva o pequeña?",
    answer: "El Protocolo de Triaje Digital está diseñado para clínicas que ya tienen operación activa y buscan escalar. Si facturas menos de $100k MXN al mes, probablemente aún no es el momento, y te lo diremos en la evaluación antes de comprometer tu tiempo o dinero."
  },
  {
    question: "¿En cuánto tiempo veo resultados?",
    answer: "La implementación toma 14 días. Los primeros leads calificados llegan en los primeros 7 días de campaña activa. En 30 días tienes datos reales para optimizar. En 60 días tienes un sistema funcionando de forma predecible."
  },
  {
    question: "¿Qué pasa si no funciona?",
    answer: "Está cubierto por la Garantía IGA: si en 60 días no alcanzamos los objetivos pactados por contrato, el tercer mes es completamente gratis. Sin letras chicas."
  },
  {
    question: "¿Tengo que cambiar todo mi equipo o mis procesos actuales?",
    answer: "No. Instalamos el sistema encima de lo que ya tienes. Tu equipo solo recibe las citas ya filtradas y listas para confirmar, no necesita aprender a calificar leads ni cambiar su forma de trabajar."
  },
  {
    question: "¿Cuántas clínicas atienden al mismo tiempo?",
    answer: "Máximo 5 clínicas nuevas por trimestre. Cada implementación la supervisa Santiago directamente. No somos una agencia de volumen, somos un equipo de resultado."
  },
  {
    question: "¿Ya trabajan con clínicas en mi ciudad?",
    answer: "Tenemos clientes activos en distintas ciudades de México. En la evaluación gratuita revisamos si hay conflicto de nicho en tu zona; si lo hay, te lo decimos antes de arrancar."
  },
  {
    question: "¿Tienen contrato?",
    answer: "Sí. Todo queda por escrito: objetivos, tiempos, entregables y la garantía. Nada de acuerdos de palabra."
  }
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#0d0d0d] scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
              Preguntas <span className="text-cyan-400">Frecuentes</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Todo lo que necesitas saber antes de iniciar tu proceso de escalado.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full px-6 py-5 md:py-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.07] transition-colors"
                >
                  <span className="text-sm md:text-lg font-bold text-white leading-tight">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border border-cyan-500/30 flex items-center justify-center transition-transform duration-300 ${activeIndex === index ? 'rotate-180 bg-cyan-500 text-black' : 'text-cyan-400'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
