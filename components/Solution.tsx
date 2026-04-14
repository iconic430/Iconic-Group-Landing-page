
import React from 'react';
import { motion } from 'framer-motion';

interface SolutionProps {
  onNavigateForm: () => void;
}

export const Solution: React.FC<SolutionProps> = ({ onNavigateForm }) => {
  const steps = [
    {
      title: "Atracción de Alta Intención",
      desc: "No usamos anuncios genéricos. Educamos al paciente antes del click para elevar su nivel de consciencia."
    },
    {
      title: "Filtrado Inteligente (Triaje)",
      desc: "Un sistema de cualificación que descarta automáticamente a quien no tiene presupuesto o urgencia."
    },
    {
      title: "Contacto Automático",
      desc: "Tu WhatsApp contacta al paciente en menos de 60 segundos, justo cuando su interés es máximo, sin consumir el tiempo de tu secretaria."
    },
    {
      title: "Cierre Asistido",
      desc: "Tu equipo solo recibe las citas listas para confirmar directo en tu Google Calendar. Menos fricción, más ventas."
    }
  ];

  return (
    <section id="sistema" className="py-16 md:py-24 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight">
            Presentando: <span className="text-cyan-400">El Protocolo de Triaje Digital™</span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto">
            Un sistema de ingeniería aplicado al crecimiento de clínicas que elimina la incertidumbre de tu flujo de pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent hidden lg:block -translate-y-1/2" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-glass rounded-2xl md:rounded-3xl p-6 md:p-8 relative z-10 group hover:border-cyan-500/50 transition-colors"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-500 text-black flex items-center justify-center font-bold text-lg md:text-xl mb-4 md:mb-6 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button 
            onClick={onNavigateForm}
            className="max-w-[320px] bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-5 rounded-2xl text-lg font-black transition-all transform hover:-translate-y-1 active:scale-95 glow-brand shadow-2xl shadow-cyan-500/20 leading-tight"
          >
             Quiero ver si mi clínica califica
          </button>
        </div>
      </div>
    </section>
  );
};
