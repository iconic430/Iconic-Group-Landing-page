
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigateForm: () => void;
}

const clinics = [
  {
    image: "https://i.postimg.cc/c1BJ469q/1.png",
    name: "Clínica 1",
    location: "México"
  },
  {
    image: "https://i.postimg.cc/Jn3ZwJYJ/Logo-cli-nica-ontolo-gica-negro-bl-202605242144.jpg",
    name: "Clínica 2",
    location: "CDMX"
  },
  {
    image: "https://i.postimg.cc/Gh3mBrVr/2.png",
    name: "Clínica 3",
    location: "México"
  },
  {
    image: "https://i.postimg.cc/cH7wqYk6/Logo-clinic-dental-smile-202605242145.jpg",
    name: "Clínica 4",
    location: "Monterrey"
  },
  {
    image: "https://i.postimg.cc/4N4xKZqf/3.png",
    name: "Clínica 5",
    location: "México"
  },
  {
    image: "https://i.postimg.cc/FRb3tcCS/Logo-Portal-Dental-Clinic-202605242144.jpg",
    name: "Clínica 6",
    location: "Guadalajara"
  },
  {
    image: "https://i.postimg.cc/Dy0J6thC/Insignia-Clinic-logo-design-202605242144.jpg",
    name: "Clínica 7",
    location: "Querétaro"
  },
  {
    image: "https://i.postimg.cc/BngvGpJG/logo-de-clinica-dental-202605242149.jpg",
    name: "Clínica 8",
    location: "Puebla"
  },
  {
    image: "https://i.postimg.cc/YC3SwRt7/logo-de-clinica-dental-202605242150.jpg",
    name: "Clínica 9",
    location: "Mérida"
  },
  {
    image: "https://i.postimg.cc/rwJpLjqX/logo-de-clinica-dental-202605242151.jpg",
    name: "Clínica 10",
    location: "Querétaro"
  }
];

const duplicatedClinics = [...clinics, ...clinics, ...clinics];

export const Hero: React.FC<HeroProps> = ({ onNavigateForm }) => {
  useEffect(() => {
    const scriptId = 'leadconnector-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-28 pb-20 overflow-hidden">
      {/* Subtle Radial Glow behind Hero content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center flex flex-col items-center"
        >
          {/* Label superior */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs sm:text-sm font-bold text-cyan-400 mb-6 uppercase tracking-wider backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
            <span>Exclusivo para clínicas dentales</span>
          </div>

          {/* Headline principal (H1) */}
          <h1 className="text-3xl sm:text-5xl md:text-[3.35rem] font-black leading-[1.15] md:leading-[1.18] mb-6 tracking-tighter w-full max-w-5xl text-white/90">
            <span className="underline decoration-cyan-400 decoration-[3px] underline-offset-8 text-white">2 de cada 3 clínicas</span> que instalan el{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">Sistema de Triaje Digital</span> agregan entre{" "}
            <span className="text-white font-black drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">$150,000 y $470,000 MXN al mes</span> en menos de 60 días.
          </h1>
          
          {/* Subheadline */}
          <div className="flex flex-col items-center mb-8 w-full max-w-4xl">
            <p className="text-gray-300 font-medium text-base md:text-xl lg:text-2xl text-center leading-relaxed">
              Las agencias te mandan leads. <span className="text-cyan-400 font-bold">Nosotros te mandamos pacientes.</span>
            </p>
          </div>

          {/* Contenedor de Video con Proporción 9:16 Vertical (VSL) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -8, 0]
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-full max-w-[280px] sm:max-w-[320px] bg-black border border-white/10 rounded-2xl md:rounded-[2rem] mb-6 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] group"
            style={{ aspectRatio: '9/16' }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-[2rem]">
              <iframe
                id="panda-c1e2c6ba-f98e-4f7e-b065-c4b21262b4f1"
                src="https://player-vz-9b0754fb-cb5.tv.pandavideo.com/embed/?v=c1e2c6ba-f98e-4f7e-b065-c4b21262b4f1"
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
            className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-10"
          >
            <span className="text-cyan-500">▶</span> MIRA LO QUE HAREMOS POR TI - 3 MIN
          </motion.div>

          {/* BARRA DE LOGOS DE CLIENTES (DE LADO A LADO EN MÓVIL Y ESCRITORIO) */}
          <div className="-mx-6 w-[calc(100%+3rem)] md:w-screen md:relative md:left-1/2 md:-translate-x-1/2 md:mx-0 mb-12 overflow-hidden">
            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.2em] mb-4 text-center px-6">
              Clínicas que ya operan con Iconic Group
            </p>
            <div className="overflow-hidden relative py-4 select-none w-full">
              {/* Difuminados sutiles en los bordes para transición suave sin ocultar logos en móvil */}
              <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-16 md:w-36 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-16 md:w-36 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none" />
              
              <motion.div
                className="flex gap-3 sm:gap-4 md:gap-6 w-max"
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
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden relative border border-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-[#111] flex items-center justify-center">
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
          </div>

          {/* Métricas de confianza */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-x-12 px-8 py-5 md:py-6 rounded-[2rem] md:rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-md relative group overflow-hidden shadow-2xl mb-4"
          >
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              <p className="text-white font-black text-lg md:text-xl tracking-tight">
                +22 <span className="text-cyan-400 font-bold ml-1">Clínicas dentales</span>
              </p>
            </div>
            <span className="hidden md:block w-px h-6 bg-white/10" />
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              <p className="text-white font-black text-lg md:text-xl tracking-tight">
                +1,240 <span className="text-cyan-400 font-bold ml-1">Citas generadas</span>
              </p>
            </div>
            <span className="hidden md:block w-px h-6 bg-white/10" />
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              <p className="text-white font-black text-lg md:text-xl tracking-tight">
                Citas 100% <span className="text-cyan-400 font-bold ml-1">automáticas</span>
              </p>
            </div>
          </motion.div>

          {/* Formulario Embed LeadConnector */}
          <div id="qualification-form" className="w-full max-w-xl md:max-w-2xl mx-auto mt-12 mb-4 relative z-10 scroll-mt-28">
            <div className="text-center mb-6">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                Averigua si <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">calificas</span>
              </h3>
            </div>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/Aj9RYqEazInvOBAy0PhN"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '582px',
                border: 'none',
                borderRadius: '8px'
              }}
              id="inline-Aj9RYqEazInvOBAy0PhN"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form 1"
              data-height="582"
              data-layout-iframe-id="inline-Aj9RYqEazInvOBAy0PhN"
              data-form-id="Aj9RYqEazInvOBAy0PhN"
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              title="Form 1"
            />
          </div>


        </motion.div>
      </div>
    </section>
  );
};
