
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SocialProofProps {
  onNavigateForm: () => void;
}

const testimonials = [
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dr. J.F.",
    specialty: "Carillas, Guadalajara",
    text: "Llevaba 8 meses recibiendo puros mensajes de '¿cuánto cuesta?' Sin excepciones.",
    stats: [
      "34 consultas calificadas en 60 días",
      "21 tratamientos cerrados",
      "Ticket promedio: $18,500 MXN"
    ]
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dra. M.I.",
    specialty: "Ortodoncia y Blanqueamiento, Culiacán",
    text: "Mi recepcionista pasaba el 80% del día explicando precios a gente que nunca llegaba.",
    stats: [
      "29 pacientes filtrados listos para consulta en 60 días",
      "Tiempo de respuesta reducido a menos de 60 segundos",
      "Cero citas fantasma el segundo mes"
    ]
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dr. H.J.",
    specialty: "Prótesis y Rehabilitación Oral, Hermosillo",
    text: "Había probado dos agencias antes. La diferencia es que Iconic me entrega pacientes que ya saben el precio y siguen queriendo la cita.",
    stats: [
      "41 leads calificados en 60 días",
      "18 cierres directos",
      "ROI recuperado en la primera semana"
    ]
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dra. C.A.",
    specialty: "Carillas, CDMX",
    text: "En CDMX la competencia es brutal. Con Iconic empecé a recibir pacientes que ya habían visto mis casos, conocían el proceso y llegaban a consulta listos para cerrar.",
    stats: [
      "38 consultas calificadas en 60 días",
      "24 carillas vendidas el primer mes",
      "Agenda con lista de espera por primera vez"
    ]
  }
];

export const SocialProof: React.FC<SocialProofProps> = ({ onNavigateForm }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 14000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="resultados" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/5 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 relative overflow-hidden min-h-fit md:min-h-[700px] flex items-center">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full" />
          
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center w-full">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 leading-tight">
                Resultados Reales en <span className="text-cyan-400">Clínicas Reales.</span>
              </h2>
              
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 min-h-[300px] md:min-h-[350px] flex flex-col justify-between relative group"
                  >
                    <div>
                      <div className="text-lg md:text-xl mb-4 text-yellow-500 tracking-tight">{testimonials[currentIndex].stars}</div>
                      <p className="text-base md:text-xl italic text-gray-200 leading-relaxed mb-6 md:mb-8">
                        "{testimonials[currentIndex].text}"
                      </p>
                      
                      {testimonials[currentIndex].stats && (
                        <div className="space-y-3 mb-8">
                          {testimonials[currentIndex].stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-sm md:text-base text-gray-300 font-medium">{stat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-500/20 flex items-center justify-center font-bold text-cyan-400 border border-cyan-500/30 text-sm md:text-base">
                          {testimonials[currentIndex].author.split(' ')[1].charAt(0)}
                        </div>
                        <div>
                          <div className="text-base md:text-lg font-bold text-white">{testimonials[currentIndex].author}</div>
                          <div className="text-xs md:text-sm text-cyan-400 font-medium">{testimonials[currentIndex].specialty}</div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">México</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="flex items-center gap-4 mt-6 md:mt-8">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2.5 md:p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div className="flex gap-2">
                    <span className="text-[10px] md:text-xs font-mono text-gray-500">
                      {currentIndex + 1} <span className="text-white/20">/</span> {testimonials.length}
                    </span>
                  </div>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2.5 md:p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-cyan-500/10 blur-[60px] rounded-full animate-pulse" />
              <div className="relative bg-white/5 p-3 md:p-4 rounded-[2rem] md:rounded-[2.5rem] border border-white/10">
                 <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                  alt="Equipo médico e infraestructura digital" 
                  className="rounded-[1.5rem] md:rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                <button 
                  onClick={onNavigateForm}
                  className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-[#0a0a0a] border border-cyan-500/30 p-5 md:p-8 rounded-2xl md:rounded-3xl z-20 shadow-2xl backdrop-blur-xl text-left hover:scale-105 transition-transform active:scale-95"
                >
                   <div className="flex flex-col gap-1 md:gap-2">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] md:text-sm font-black uppercase tracking-tighter text-white">Sistema Activo</span>
                      </div>
                      <div className="text-lg md:text-2xl font-black text-cyan-400 leading-none">43+ Citas / Mes</div>
                      <p className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest">Garantizado por infraestructura</p>
                   </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
