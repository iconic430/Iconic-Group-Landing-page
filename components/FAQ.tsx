
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "¿Esto funciona si mi clínica es nueva o pequeña?",
    answer: "El Sistema de Triaje Digital está diseñado para clínicas que ya tienen presencia y buscan escalar. Si facturas menos de $200,000 MXN al mes, probablemente aún no es el momento de implementar este nivel de infraestructura, y te lo diremos con honestidad en la evaluación previa."
  },
  {
    question: "¿En cuánto tiempo veo resultados?",
    answer: "La implementación toma 14 días. Los primeros leads calificados llegan en los primeros 7 días de campaña activa. En 30 días tienes datos reales para optimizar. En 60 días tienes un sistema funcionando de forma predecible."
  },
  {
    question: "¿Qué pasa si no funciona?",
    answer: "Está cubierto por la Garantía IGA: si en 60 días no alcanzamos los objetivos pactados por contrato, el tercer mes es <span class=\"text-white font-bold\">completamente gratis.</span> Sin letras chicas."
  },
  {
    question: "¿Tengo que cambiar todo mi equipo o mis procesos actuales?",
    answer: "No. Instalamos el sistema encima de lo que ya tienes. Tu equipo solo recibe las citas ya filtradas y listas para confirmar, no necesita aprender a calificar leads ni cambiar su forma de trabajar."
  },
  {
    question: "¿Los anuncios van a verse genéricos o van a reflejar el nivel de mi clínica?",
    answer: "Diseñamos cada campaña para reflejar el nivel premium de tu especialidad. Tus pacientes van a llegar habiendo visto casos de tu trabajo, no ofertas de precio."
  },
  {
    question: "¿Cuántas clínicas atienden al mismo tiempo?",
    answer: "Máximo 3 clínicas nuevas por mes. Cada implementación la supervisa Santiago directamente. No somos una agencia de volumen, somos un equipo de resultado."
  },
  {
    question: "¿Para quién NO es el Sistema de Triaje Digital?",
    answer: "Este sistema no es para ti si tu clínica factura menos de $200,000 MXN al mes, si buscas resultados mágicos sin compromiso, o si prefieres seguir compitiendo por precio bajo en lugar de posicionarte como la opción premium. Si cumples el perfil, el sistema funciona. Si no, te lo diremos antes de empezar."
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
                className={`group rounded-2xl transition-all duration-500 border ${activeIndex === index ? 'bg-white/[0.05] border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-white/10'}`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full px-6 py-6 md:py-8 text-left flex items-center justify-between gap-6 transition-all"
                >
                  <span className={`text-base md:text-xl font-black tracking-tight transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-cyan-500 border-cyan-500 text-black rotate-180 shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'border-white/10 text-cyan-400 group-hover:border-cyan-500/50'}`}>
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-10 text-gray-400 text-sm md:text-lg leading-relaxed border-t border-white/5 pt-6">
                        <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
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
