
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dr. Roberto M.",
    specialty: "Cirujano Plástico",
    text: "Lo que más valoro de Iconic Group no son los anuncios, sino el filtro que instalaron. Antes mi asistente perdía horas contestando '¿precio?' en whatsapp e instagram. Ahora, gracias a su sistema de Triaje, solo me llegan notificaciones de pacientes que ya saben el costo aproximado y quieren agendar valoración, unicamente por WhatsApp Recuperé el control de mi agenda."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dra. Elena S.",
    specialty: "Medicina Estética",
    text: "Había trabajado con tres agencias antes y todas me traían 'likes'. Iconic Group fue la primera en hablarme de 'infraestructura'. La App que le instalaron a mi recepcionista es una maravilla; le avisa en tiempo real cuando un paciente quiere cerrar la cita. La tecnología que usan está a otro nivel."
  },
  {
    stars: "⭐⭐⭐⭐",
    author: "Dr. Javier C.",
    specialty: "Rinoplastia Ultrasónica",
    text: "Impresionante la velocidad de respuesta. Hice la prueba de dejar mis datos en mi propio anuncio y el WhatsApp automático me contactó en menos de 30 segundos con una atención super personalizada. Eso ha aumentado mi tasa de cierre un 40% en el primer mes."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dra. Sofía L.",
    specialty: "Armonización Facial",
    text: "Me daba miedo que la automatización se sintiera robótica, pero el equipo de Iconic logró un equilibrio perfecto. El bot hace el trabajo pesado de filtrar, y mi equipo solo entra para el cierre final. Mis pacientes llegan a consulta sintiendo que recibieron atención VIP desde el primer clic."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dr. Alejandro V.",
    specialty: "Liposucción HD",
    text: "Dejamos de perseguir a curiosos. El sistema de calificación que implementaron descarta automáticamente a quien no tiene presupuesto para una cirugía, así que ahora mi sala de espera tiene pacientes reales, no solo gente preguntando. Altamente recomendados como Growth Partners."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dra. Carmen R.",
    specialty: "Dermatóloga Estética",
    text: "La implementación fue rapidísima. En menos de 10 días ya tenía el sistema de citas automático funcionando. Lo mejor es que se integró con mi calendario actual, así que no hubo confusiones de horarios. Muy profesionales."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dr. Miguel Ángel P.",
    specialty: "Cirugía Reconstructiva",
    text: "La diferencia entre una agencia de marketing y Iconic Group es abismal. Ellos entendieron que yo no vendo productos, vendo procedimientos médicos de alto valor. Su sistema de 'Nivel de Consciencia' educa al paciente antes de que llegue a mí."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dra. Fernanda G.",
    specialty: "Odontopediatría",
    text: "Mi consultorio es un caos de niños y no tengo tiempo de estar en el celular. El sistema de Iconic Group trabaja solo 24/7. Me encanta despertar y ver que durante la noche se agendaron solas 3 valoraciones nuevas. Es como tener una recepcionista nocturna que no cobra extra."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dr. Luis T.",
    specialty: "Ortodoncia e Invisalign",
    text: "El problema de mi clínica no era falta de mensajes, era el ausentismo. La gente agendaba y no iba. Iconic Group implementó un sistema de confirmación por WhatsApp que redujo mis inasistencias a casi cero. Solo por eso, el servicio se paga solo."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dra. Patricia M.",
    specialty: "Diseño de Sonrisa",
    text: "Increíble el sistema de 'Rescate'. Me di cuenta de que mucha gente pedía info y se le olvidaba agendar. El sistema automatizado de Iconic les manda un audio de seguimiento que se siente súper natural y recuperamos muchísimas citas que dábamos por perdidas."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dr. Hugo R.",
    specialty: "Implantología",
    text: "Buscaba pacientes para implantes completos, no para limpiezas baratas. La segmentación y el formulario de filtrado que crearon funcionó perfecto. Ahora solo atiendo casos grandes que realmente son rentables para la clínica."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dra. Mónica B.",
    specialty: "Ortodoncia",
    text: "Al principio dudaba de cambiar mi forma de trabajar, pero la 'Iconic App' facilitó todo. Mi asistente tiene todo el control desde su celular y ya no mezcla su WhatsApp personal con los pacientes. Nos dio muchísima formalidad."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dr. Esteban Q.",
    specialty: "Cirujano Maxilofacial",
    text: "Profesionalismo total. No te venden humo ni seguidores falsos. Te entregan un panel donde ves exactamente cuántas citas generaron y cuánto dinero entró. Esa transparencia es lo que le falta al sector salud."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dra. Laura I.",
    specialty: "Clínica Dental Integral",
    text: "Somos una clínica con 4 sillones y necesitábamos flujo constante. El sistema de adquisición de Iconic Group nos mantiene la agenda llena semana tras semana. Lo mejor es que filtran a la gente que solo busca 'lo más barato'."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dr. Andrés O.",
    specialty: "Medicina Antienvejecimiento",
    text: "Convertirse en mi 'Growth Partner' fue literal. No solo me hacen los anuncios, se metieron a ver cómo contestaba mi recepción y nos ayudaron a mejorar los guiones de venta. Es un servicio 360 que no he visto en otra agencia."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dra. Valentina D.",
    specialty: "Estética Corporal",
    text: "El retorno de inversión es clarísimo. Invertimos en la infraestructura y en el primer mes ya habíamos recuperado el costo con solo 3 pacientes nuevos de paquete completo. El sistema es una máquina de ventas."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dr. Ricardo S.",
    specialty: "Rehabilitación Oral",
    text: "La paz mental de saber que hay un sistema captando y filtrando pacientes mientras yo estoy operando no tiene precio. Iconic Group automatizó la parte más tediosa de mi negocio."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dr. Fernando L.",
    specialty: "Tricología (Injerto Capilar)",
    text: "Excelente manejo de la privacidad y los datos. El CRM que instalan es muy seguro y nos permite llevar un seguimiento impecable de cada paciente desde que ve el anuncio hasta que se opera."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    author: "Dra. Mariana P.",
    specialty: "Medicina Integrativa",
    text: "Lo recomiendo ampliamente. Su promesa de 'Speed-to-Lead' es real. Hicimos Mystery Shopper a mi propia clínica y la velocidad con la que el bot atiende y resuelve dudas básicas es impresionante."
  }
];

export const SocialProof: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="resultados" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden min-h-[700px] flex items-center">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
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
                    className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 min-h-[350px] flex flex-col justify-between relative group"
                  >
                    <div>
                      <div className="text-xl mb-4 text-yellow-500 tracking-tight">{testimonials[currentIndex].stars}</div>
                      <p className="text-lg md:text-xl italic text-gray-200 leading-relaxed mb-8">
                        "{testimonials[currentIndex].text}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center font-bold text-cyan-400 border border-cyan-500/30">
                          {testimonials[currentIndex].author.split(' ')[1].charAt(0)}
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">{testimonials[currentIndex].author}</div>
                          <div className="text-sm text-cyan-400 font-medium">{testimonials[currentIndex].specialty}</div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">México</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="flex items-center gap-4 mt-8">
                  <button 
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div className="flex gap-2">
                    <span className="text-xs font-mono text-gray-500">
                      {currentIndex + 1} <span className="text-white/20">/</span> {testimonials.length}
                    </span>
                  </div>
                  <button 
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/10 blur-[60px] rounded-full animate-pulse" />
              <div className="relative bg-white/5 p-4 rounded-[2.5rem] border border-white/10">
                 <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                  alt="Equipo médico e infraestructura digital" 
                  className="rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-8 -right-8 bg-[#0a0a0a] border border-cyan-500/30 p-8 rounded-3xl z-20 shadow-2xl backdrop-blur-xl">
                   <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-black uppercase tracking-tighter text-white">Sistema Activo</span>
                      </div>
                      <div className="text-2xl font-black text-cyan-400 leading-none">43+ Citas / Mes</div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Garantizado por infraestructura</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
