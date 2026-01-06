
import React from 'react';

interface FooterProps {
  onNavigateForm: () => void;
  onScrollTo: (id: string) => void;
  showCTA?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateForm, onScrollTo, showCTA = true }) => {
  return (
    <footer id="doctores" className="bg-[#0a0a0a] border-t border-white/5 pt-12 pb-12 scroll-mt-20">
      <div className="container mx-auto px-6 text-center">
        {showCTA && (
          <>
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter text-white">¿Listo para el siguiente nivel?</h2>
            <button 
              onClick={onNavigateForm}
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-12 py-6 rounded-2xl text-xl font-black mb-16 transition-all transform hover:scale-105 active:scale-95 glow-brand shadow-lg shadow-cyan-500/20"
            >
              Hablar con un Experto
            </button>
          </>
        )}

        <div className={`grid md:grid-cols-3 gap-12 items-center ${showCTA ? 'border-t border-white/5 pt-16' : ''}`}>
          <div className="text-left">
            <span className="text-2xl font-black tracking-tighter">ICONIC<span className="text-cyan-500">GROUP</span></span>
            <p className="text-gray-500 text-sm mt-4">Infraestructura de Adquisición de Pacientes para el Sector Salud.</p>
          </div>

          <div className="flex justify-center gap-8">
            <button onClick={() => onScrollTo('resultados')} className="text-gray-400 hover:text-white transition-colors">Resultados</button>
            <button onClick={() => onScrollTo('beneficios')} className="text-gray-400 hover:text-white transition-colors">Beneficios</button>
          </div>

          <div className="text-right text-xs text-gray-500 flex flex-col items-end gap-2">
            <span>Iconic Group © 2025. Todos los derechos reservados.</span>
            <div className="flex gap-4">
              <span className="hover:text-white cursor-pointer">Política de Privacidad</span>
              <span className="hover:text-white cursor-pointer">Términos de Servicio</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
