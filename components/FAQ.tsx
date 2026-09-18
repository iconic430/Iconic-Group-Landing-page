import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "¿Esto funciona si mi clínica es nueva o pequeña?",
    answer: "El Sistema de Triaje Digital™ está diseñado para clínicas que ya tienen presencia y buscan escalar. Si facturas menos de $200,000 MXN al mes, probablemente aún no es el momento de implementar este nivel de infraestructura, y te lo diremos con honestidad en la evaluación previa."
  },
  {
    question: "¿En cuánto tiempo veo resultados con el sistema?",
    answer: "La implementación e instalación toma exactamente 14 días. Los primeros leads pre-filtrados y consultas agendadas llegan en la primera semana de encender campañas. En 60 días tienes un sistema de triaje funcionando de forma totalmente predecible."
  },
  {
    question: "¿Qué pasa si no alcanzamos la meta contratada?",
    answer: "Está cubierto por la Garantía IGA: si en 60 días no te entregamos al menos 40 citas calificadas extra por escrito, el tercer mes es <strong>completamente gratis</strong>. Nosotros asumimos el riesgo."
  },
  {
    question: "¿Tengo que cambiar todo mi equipo o mis procesos actuales?",
    answer: "No. Instalamos el sistema de triaje encima de lo que ya tienes. Tu equipo de secretarias o recepción solo recibe las citas ya pre-pagadas, filtradas y listas para confirmar directo en Google Calendar. No requiere cambiar de CRM ni entrenamientos complejos."
  },
  {
    question: "¿Los anuncios van a verse vulgares o van a reflejar el prestigio de mi clínica?",
    answer: "Diseñamos creatividades de autoridad médica premium. Nuestro enfoque educa al paciente y eleva tu prestigio, explicando el valor antes del precio. Nadie verá ofertas de descuento masivo que devalúen tu marca."
  },
  {
    question: "¿Cuántas clínicas atienden al mismo tiempo?",
    answer: "Máximo 3 clínicas nuevas por mes en todo México. Cada implementación la supervisa Santiago directamente para mantener la calidad y el cumplimiento de la garantía."
  },
  {
    question: "¿Para quién NO es el Sistema de Triaje Digital™?",
    answer: "No es para clínicas de bajo costo o volumen masivo popular sin presupuesto. No es para quien busca likes superficiales de redes sin infraestructura, ni para dueños que no tengan al menos 2 horas para el onboarding inicial."
  },
  {
    question: "¿Ya trabajan con clínicas de mi misma especialidad en mi ciudad?",
    answer: "Tenemos un acuerdo estricto de exclusividad de zona. En nuestra sesión diagnóstica evaluamos geográficamente si tu ciudad tiene el espacio de exclusividad libre antes de firmar."
  },
  {
    question: "¿Se firma contrato legal para la garantía?",
    answer: "Sí. Firmamos un contrato antes de iniciar donde se declaran claramente los objetivos de citas calificadas, la garantía de reembolso y la exclusividad."
  },
  {
    question: "¿Cuál es el costo de la infraestructura de triaje?",
    answer: "No cobramos un fee genérico de agencia de marketing. Configuramos una cotización a la medida de tu capacidad y volumen de sillón tras determinar la viabilidad en la sesión diagnóstica."
  }
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0d0d0d] relative overflow-hidden border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6 w-full max-w-6xl">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white uppercase italic leading-tight">
              Preguntas <span className="text-cyan-400">Frecuentes</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6 rounded-full" />
            <p className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto">
              Todo lo que necesitas saber antes de iniciar tu proceso de escalado premium.
            </p>
          </motion.div>

          {/* FAQ list */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group rounded-2xl transition-all duration-500 border ${activeIndex === index ? 'bg-white/[0.04] border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]' : 'bg-white/[0.01] border-white/5 hover:border-white/10'}`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-6 transition-all"
                >
                  <span className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${activeIndex === index ? 'text-cyan-400' : 'text-gray-300 group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-cyan-500 border-cyan-500 text-black rotate-180 shadow-md' : 'border-white/10 text-cyan-400 group-hover:border-cyan-500/50'}`}>
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
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
