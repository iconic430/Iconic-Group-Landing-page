
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface SecretPageProps {
  onBack: () => void;
}

export const SecretPage: React.FC<SecretPageProps> = ({ onBack }) => {
  useEffect(() => {
    // Carga el script de GoHighLevel necesario para el widget de reserva
    const script = document.createElement('script');
    script.src = "https://link.markgrowth.pro/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-5xl mx-auto flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-cyan-500 mb-4 font-bold">
            Acceso Privado | Gestión de Agenda
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-2">
            Reserva de <span className="text-gray-500">Consultoría</span>
          </h1>
          <p className="text-gray-400 max-w-md">
            Selecciona el horario que mejor se adapte para tu sesión estratégica de infraestructura.
          </p>
        </div>
        <button 
          onClick={onBack}
          className="self-start px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-bold flex items-center gap-2 group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow min-h-[700px] w-full bg-glass border border-white/10 rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-cyan-500/5 flex flex-col"
      >
        <div className="w-full h-full min-h-[700px] relative z-10">
          <iframe 
            src="https://link.markgrowth.pro/widget/booking/4yLc6nWJE0ytLrijalNv" 
            style={{ width: '100%', height: '100%', minHeight: '700px', border: 'none', overflow: 'hidden' }} 
            scrolling="no" 
            id="4yLc6nWJE0ytLrijalNv_1769910126436"
            title="GoHighLevel Booking Calendar"
          ></iframe>
        </div>

        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-500/20 pointer-events-none" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-500/20 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-500/20 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-500/20 pointer-events-none" />
      </motion.div>
      
      <p className="mt-8 text-center text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">
        Secure Infrastructure Layer • Powered by Iconic Group
      </p>
    </div>
  );
};
