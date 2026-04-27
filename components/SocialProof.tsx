
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SocialProofProps {
  onNavigateForm: () => void;
}

const testimonials = [
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dr. Andrés Ruvalcaba",
    specialty: "Carillas, Guadalajara",
    image: "https://i.postimg.cc/nLhTB4HT/Dentist-in-clean-202604250024.jpg",
    text: "Llevaba 8 meses recibiendo puros mensajes de '¿cuánto cuesta?' Sin excepciones.",
    stats: [
      "34 consultas calificadas en 60 días",
      "21 tratamientos cerrados",
      "Ticket promedio: $1,100 USD"
    ]
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dra. María Izaguirre",
    specialty: "Ortodoncia y Blanqueamiento, Culiacán",
    image: "https://i.postimg.cc/W1CVYL8Z/Dentist-in-blue-202604250040.jpg",
    text: "Mi recepcionista pasaba el 80% del día explicando precios a gente que nunca llegaba.",
    stats: [
      "29 pacientes filtrados listos para consulta en 60 días",
      "Tiempo de respuesta reducido a menos de 60 segundos",
      "Cero citas fantasma el segundo mes"
    ]
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dr. Angel Vargas",
    specialty: "Prótesis y Rehabilitación Oral, Hermosillo",
    image: "https://i.postimg.cc/g0248VYN/Dentist-with-Mexican-202604250022.jpg",
    text: "Había probado dos agencias antes. La diferencia es que Iconic me entrega pacientes que ya saben el precio y siguen queriendo la cita.",
    stats: [
      "41 leads calificados en 60 días",
      "18 cierres directos",
      "ROI recuperado en la primera semana"
    ]
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dr. Mateo Ramírez",
    specialty: "Carillas, CDMX",
    image: "https://i.postimg.cc/mrgVCYbm/Dentist-with-Mexican-202604250022-(1).jpg",
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
                    className="bg-white/[0.03] backdrop-blur-sm p-6 md:p-10 rounded-[2.5rem] border border-white/10 min-h-[350px] md:min-h-[400px] flex flex-col justify-between relative group overflow-hidden"
                  >
                    {/* Subtle background glow for the card */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-[60px] rounded-full group-hover:bg-cyan-500/20 transition-colors duration-700" />

                    <div>
                      <div className="text-lg md:text-xl mb-6 text-yellow-500 tracking-tight flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-lg md:text-2xl font-medium italic text-white leading-relaxed mb-8">
                        "{testimonials[currentIndex].text}"
                      </p>
                      
                      {testimonials[currentIndex].stats && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                          {testimonials[currentIndex].stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                              <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                                <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-xs md:text-sm text-gray-300 font-semibold tracking-tight">{stat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between border-t border-white/5 pt-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-white/10 shadow-xl">
                          <img 
                            src={testimonials[currentIndex].image} 
                            alt={testimonials[currentIndex].author}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <div>
                          <div className="text-base md:text-xl font-black text-white tracking-tight">{testimonials[currentIndex].author}</div>
                          <div className="text-xs md:text-sm text-cyan-400 font-bold uppercase tracking-wider">{testimonials[currentIndex].specialty}</div>
                        </div>
                      </div>
                      <div className="hidden md:block text-[10px] text-gray-600 font-black uppercase tracking-[0.3em] rotate-90 origin-right">Iconic Verified</div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Bar for Rotation */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 rounded-full overflow-hidden mt-8">
                  <motion.div
                    key={currentIndex}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 14, ease: "linear" }}
                    className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                  />
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-12">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={prevTestimonial}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300 flex items-center justify-center text-white group"
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300 flex items-center justify-center text-white group"
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-[0.2em]">
                      Expediente <span className="text-white">{currentIndex + 1}</span> de {testimonials.length}
                    </span>
                    <div className="flex gap-1 mt-2">
                      {testimonials.map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-cyan-500' : 'w-2 bg-white/10'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-cyan-500/10 blur-[60px] rounded-full animate-pulse" />
              <div className="relative bg-white/5 p-3 md:p-4 rounded-[2rem] md:rounded-[2.5rem] border border-white/10">
                 <AnimatePresence mode="wait">
                   <motion.img 
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    src={testimonials[currentIndex].image} 
                    alt="Equipo médico e infraestructura digital" 
                    className="rounded-[1.5rem] md:rounded-[2rem] shadow-2xl w-full object-cover object-center aspect-[4/3] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                  />
                </AnimatePresence>
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
