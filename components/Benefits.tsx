import React from 'react';
import { motion } from 'framer-motion';

interface BenefitsProps {
  onNavigateForm: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onNavigateForm }) => {
  const pillars = [
    {
      num: "01",
      icon: "🩺",
      title: "Pilar 1: Autoridad de Marca y Tráfico de Alta Intención",
      subhead: "Posicionamiento como la clínica #1 de tu ciudad",
      body: "No usamos anuncios genéricos. Producimos creativos que educan al paciente antes del click: explican por qué un implante de calidad cuesta $25,000 MXN y no $8,000, y por qué tu clínica es la indicada. Resultado: el lead llega pre-vendido al precio.",
      visualBadge: "AUTORIDAD MÉDICA"
    },
    {
      num: "02",
      icon: "🤖",
      title: "Pilar 2: Filtrado Inteligente con IA Médica",
      subhead: "Inteligencia artificial entrenada en consulta dental",
      body: "Una IA entrenada específicamente para el lenguaje dental atiende cada mensaje en menos de 60 segundos. Hace triaje, califica intención de compra, descarta a quien busca lo más barato y propone horarios. Tu recepcionista deja de explicar precios y empieza a recibir pacientes confirmados.",
      visualBadge: "TRIAJE IA FLUJO"
    },
    {
      num: "03",
      icon: "📅",
      title: "Pilar 3: Agendamiento Directo en Google Calendar",
      subhead: "Tecnología propia: la Iconic App",
      body: "La cita se agenda automáticamente en el Google Calendar del dueño y del operatorio asignado. Ves cada paciente, mensaje y métrica desde la Iconic App en tu teléfono. Sin Excel, sin hojas, sin \"el lunes te paso el reporte\".",
      visualBadge: "GOOGLE CALENDAR SYNC"
    }
  ];

  return (
    <section id="pilares" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5 scroll-mt-20">
      {/* Background glow shadow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-6xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white uppercase italic leading-tight">
              Los 3 Pilares del <span className="text-cyan-400">Sistema de Triaje Digital™</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mb-8 rounded-full" />
            
            <p className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed">
              Un sistema de ingeniería aplicado al crecimiento de clínicas dentales. Probado en <span className="text-white font-bold">+22 clínicas</span>, <span className="text-cyan-400 font-bold">+1,240 citas generadas</span>.
            </p>
          </motion.div>
        </div>

        {/* Pillars detail layout */}
        <div className="space-y-10 max-w-5xl mx-auto mb-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 md:p-10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col lg:flex-row gap-8 items-stretch relative overflow-hidden shadow-xl"
            >
              {/* Highlight decor */}
              <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500" />
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{pillar.icon}</span>
                    <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full uppercase">
                      PILAR {pillar.num}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black text-white mb-2 tracking-tight uppercase">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-cyan-400 font-bold text-sm md:text-base uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                    {pillar.subhead}
                  </p>
                  
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </div>

              {/* Sugerido visual element */}
              <div className="lg:w-72 flex-shrink-0 flex items-center justify-center bg-[#111] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/0 to-cyan-500/10 blur-[20px] pointer-events-none group-hover:to-cyan-500/25 transition-all duration-700" />
                <div className="text-center relative z-10 select-none">
                  <span className="text-cyan-500 font-bold text-xs uppercase tracking-widest block mb-2 font-mono">
                    ✦ {pillar.visualBadge}
                  </span>
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 mx-auto flex items-center justify-center text-cyan-400 text-2xl border border-cyan-500/30 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-cyan-500/10">
                    👑
                  </div>
                  <span className="text-gray-500 text-[10px] uppercase font-mono tracking-wider block mt-3">
                    Iconic App Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA at end of pillars block */}
        <div className="text-center">
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
