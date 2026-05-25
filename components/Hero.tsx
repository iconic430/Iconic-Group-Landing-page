
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigateForm: () => void;
}

const clinics = [
  {
    image: "https://i.postimg.cc/Jn3ZwJYJ/Logo-cli-nica-ontolo-gica-negro-bl-202605242144.jpg",
    name: "Clínica 1",
    location: "CDMX"
  },
  {
    image: "https://i.postimg.cc/cH7wqYk6/Logo-clinic-dental-smile-202605242145.jpg",
    name: "Clínica 2",
    location: "Monterrey"
  },
  {
    image: "https://i.postimg.cc/FRb3tcCS/Logo-Portal-Dental-Clinic-202605242144.jpg",
    name: "Clínica 3",
    location: "Guadalajara"
  },
  {
    image: "https://i.postimg.cc/Dy0J6thC/Insignia-Clinic-logo-design-202605242144.jpg",
    name: "Clínica 4",
    location: "Querétaro"
  },
  {
    image: "https://i.postimg.cc/BngvGpJG/logo-de-clinica-dental-202605242149.jpg",
    name: "Clínica 5",
    location: "Puebla"
  },
  {
    image: "https://i.postimg.cc/YC3SwRt7/logo-de-clinica-dental-202605242150.jpg",
    name: "Clínica 6",
    location: "Mérida"
  },
  {
    image: "https://i.postimg.cc/rwJpLjqX/logo-de-clinica-dental-202605242151.jpg",
    name: "Clínica 7",
    location: "Querétaro"
  }
];

const duplicatedClinics = [...clinics, ...clinics, ...clinics];

export const Hero: React.FC<HeroProps> = ({ onNavigateForm }) => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-24 overflow-hidden">
      {/* Subtle Radial Glow behind Hero content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] md:text-[10px] font-black text-cyan-400 mb-6 uppercase tracking-[0.2em] backdrop-blur-sm whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            ESPECIALISTAS EN CLÍNICAS ODONTOLÓGICAS
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-[3.2rem] font-black leading-[1.1] md:leading-[1.1] mb-6 tracking-tighter w-full max-w-6xl text-white">
            Instalamos en <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">14 días</span> el sistema que atrae pacientes de <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">$20,000 a $200,000 MXN</span> por procedimiento y los agenda automáticamente
          </h1>
          
          <div className="flex flex-col items-center mb-10 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 font-medium text-sm md:text-xl mb-10 text-center max-w-4xl px-4 space-y-1 md:space-y-2"
            >
              <p>Implantes, carillas, All-on-4 y prótesis completa.</p>
              <p>
                <span className="text-white font-black">40 citas agendadas extras</span> en menos de <span className="text-white font-bold">60 días</span>. Garantizado por contrato
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-x-12 px-8 py-5 md:py-6 rounded-[2rem] md:rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-md relative group overflow-hidden shadow-2xl"
            >
              <div className="flex items-center gap-3 relative z-10 group/item">
                <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                <p className="text-white font-black text-lg md:text-xl tracking-tight">
                  +22 <span className="text-cyan-400 font-bold ml-1">Clínicas dentales</span>
                </p>
              </div>
              <span className="hidden md:block w-px h-6 bg-white/10" />
              <div className="flex items-center gap-3 relative z-10 group/item">
                <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                <p className="text-white font-black text-lg md:text-xl tracking-tight">
                  +1,240 <span className="text-cyan-400 font-bold ml-1">Citas generadas</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contenedor de Video con Proporción 9:16 Vertical */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0]
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-full max-w-[340px] bg-black border border-white/10 rounded-2xl md:rounded-[2rem] mb-8 md:mb-12 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] group"
            style={{ aspectRatio: '9/16' }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-[2rem]">
              <iframe
                id="panda-530493da-0c91-40a8-992e-70993897d788"
                src="https://player-vz-9b0754fb-cb5.tv.pandavideo.com/embed/?v=530493da-0c91-40a8-992e-70993897d788"
                style={{ border: 'none' }}
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                allowFullScreen={true}
                className="absolute w-full h-full border-0"
                title="Iconic Group Presentation Video"
                fetchPriority="high"
              ></iframe>
            </div>
            
            {/* Capa de protección estética */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl md:rounded-[2rem] shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] group-hover:shadow-[inset_0_0_40px_rgba(6,182,212,0.1)] transition-shadow duration-700"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-8 md:mb-10 -mt-4 md:-mt-6"
          >
            <span className="text-cyan-500">▶</span> Mira cómo funciona el sistema - 3 min
          </motion.div>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-10 md:mb-14 max-w-4xl leading-relaxed px-4 md:px-0">
            <span className="text-white font-bold">El resultado: dejas de quemar dinero en leads basura, tu equipo cierra tickets altos sin dar descuentos, y tu clínica factura más sin depender de ti</span>
          </p>

          {/* Carrusel de Clínicas Infinito */}
          <div className="w-full max-w-5xl overflow-hidden relative py-4 mb-12 select-none">
            {/* Difuminados en los bordes para transición suave */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
            
            <motion.div
              className="flex gap-4 md:gap-6 w-max"
              animate={{ x: [0, "-33.333%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
            >
              {duplicatedClinics.map((clinic, idx) => (
                <div 
                  key={idx}
                  className="flex-shrink-0 flex items-center justify-center p-1"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden relative border-2 border-white/10 hover:border-cyan-500/50 transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <img 
                      src={clinic.image} 
                      alt="Clínica"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <button 
            onClick={onNavigateForm}
            className="w-full sm:w-auto max-w-[380px] bg-cyan-500 hover:bg-cyan-400 text-black px-8 md:px-10 py-5 md:py-6 rounded-2xl text-lg md:text-2xl font-black transition-all transform hover:scale-105 active:scale-95 glow-brand shadow-2xl shadow-cyan-500/40 leading-tight"
          >
            Quiero ver si mi clínica califica
          </button>
        </motion.div>
      </div>
    </section>
  );
};
