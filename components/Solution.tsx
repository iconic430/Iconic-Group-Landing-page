import React from 'react';
import { motion } from 'framer-motion';

interface SolutionProps {
  onNavigateForm: () => void;
}

export const Solution: React.FC<SolutionProps> = ({ onNavigateForm }) => {
  const cards = [
    {
      icon: "🎯",
      title: "Filtra a los curiosos",
      desc: "Nos encargamos de separar y entregarte únicamente a los prospectos que tengan urgencia, capacidad de pago e intención de agendar contigo"
    },
    {
      icon: "💳",
      title: "Cobra confirmación",
      desc: "El paciente confirma su interés genuino con un anticipo o registro de tarjeta antes de ocupar una hora valiosa en tu agenda."
    },
    {
      icon: "📅",
      title: "Llena tu sillón",
      desc: "Entre 5 y 15 citas de alto ticket garantizadas extra por mes, agendadas de manera 100% directa en tu propio Google Calendar."
    }
  ];

  return (
    <section id="sistema" className="py-24 bg-[#0d0d0d] relative overflow-hidden border-t border-white/5 scroll-mt-20">
      {/* Glow highlight */}
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-6xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white uppercase italic leading-tight">
              Iconic Group no es una agencia. <span className="text-cyan-400">Instalamos una infraestructura.</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mb-8 rounded-full" />
            
            <p className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed">
              Las agencias te venden campañas, reportes y juntas mensuales. Nosotros instalamos un sistema que <span className="text-cyan-400 font-bold border-b border-cyan-500/20">trabaja mientras tú atiendes a tus pacientes</span>.
            </p>
          </motion.div>
        </div>

        {/* 3 cards of direct benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-white/[0.03] hover:border-cyan-500/30 transition-all duration-300 group shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-2xl md:text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing details highlighting numbers */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-semibold">
            Todo instalado en <span className="text-cyan-400">14 días</span>. Solo necesitamos <span className="text-white">2 horas de tu tiempo</span> para el onboarding.
          </p>
          
          <button
            onClick={onNavigateForm}
            className="w-full sm:w-auto max-w-[380px] bg-cyan-500 hover:bg-cyan-400 text-black px-8 md:px-10 py-5 md:py-6 rounded-2xl text-lg md:text-2xl font-black transition-all transform hover:scale-105 active:scale-95 glow-brand shadow-2xl shadow-cyan-500/40 leading-tight"
          >
            Quiero ver si mi clínica califica
          </button>
        </div>
      </div>
    </section>
  );
};
