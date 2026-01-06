
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigateForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateForm }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-cyan-400 mb-6 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            Especialistas en Sector Salud & Estética
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            Deja de Perseguir Leads Curiosos. <br />
            <span className="text-gradient">Empieza a Recibir Pacientes Calificados.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
            Instalamos una infraestructura de adquisición en tu clínica que atrae, filtra y agenda pacientes en piloto automático, sin que tu recepción pierda tiempo explicando precios.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onNavigateForm}
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 active:scale-95 glow-brand shadow-lg shadow-cyan-500/20"
            >
              Quiero instalar este sistema
            </button>
            <button 
              onClick={onNavigateForm}
              className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-xl text-lg font-bold transition-all text-white"
            >
              Ver Demo del Triaje
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/${i + 40}/100/100`} 
                  alt="Doctor" 
                  className="w-10 h-10 rounded-full border-2 border-[#0a0a0a]" 
                />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Socio de confianza para <span className="text-white font-semibold">+50 Clínicas Premium</span> en LATAM y España.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full" />
          <div className="relative bg-[#0d0d0d] border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden group">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Agenda de Clínica Premium</h3>
                  <p className="text-xs text-gray-500">Filtrado activo por Triaje™</p>
                </div>
              </div>
              <div className="text-xs text-green-400 font-bold bg-green-400/10 px-2 py-1 rounded">LIVE</div>
            </div>
            
            <div className="space-y-4">
              {[
                { time: '09:00', name: 'Ricardo Mendez', type: 'Implantes', status: 'Confirmado' },
                { time: '11:30', name: 'Laura Sanchez', type: 'Estética Dental', status: 'Cita Pagada' },
                { time: '15:00', name: 'Carlos Ortiz', type: 'Ortodoncia Invisible', status: 'Confirmado' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-default group/item">
                  <div className="flex items-center gap-4">
                    <div className="text-xs font-mono text-cyan-400">{item.time}</div>
                    <div>
                      <div className="text-sm font-bold">{item.name}</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-tighter">{item.type}</div>
                    </div>
                  </div>
                  <div className={`text-[10px] font-bold px-2 py-1 rounded-md ${item.status === 'Cita Pagada' ? 'bg-cyan-500 text-black' : 'bg-white/10 text-white'}`}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-around">
               <div className="text-center">
                  <div className="text-xl font-bold text-white">43</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">Citas / Mes</div>
               </div>
               <div className="w-px h-10 bg-white/5" />
               <div className="text-center">
                  <div className="text-xl font-bold text-cyan-400">92%</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">Show-rate</div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};