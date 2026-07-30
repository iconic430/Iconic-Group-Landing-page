import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  id: number;
  rating: number;
  date: string;
  text: string;
  author: string;
  initials: string;
  pageNum: number;
}

const reviewsData: Review[] = [
  {
    id: 1,
    rating: 5,
    date: "oct. 24, 2025",
    text: "Lo mejor Iconic, son un tremendo equipo, me han ayudado muchísimo. Y el sistema automatizado es mi mejor trabajador ❤️",
    author: "Carmen Gloria Mora Valdes",
    initials: "CG",
    pageNum: 32
  },
  {
    id: 2,
    rating: 5,
    date: "nov. 12, 2025",
    text: "Teníamos un monton de mensajes en whatsapp de las campañas que haciamos y de 500 mensajes nomas salian 3 implantes, gracias a santiago ya no tenemos ninguno de esos dos problemas.",
    author: "Dr. Alejandro Ruiz Salcedo",
    initials: "AR",
    pageNum: 33
  },
  {
    id: 3,
    rating: 5,
    date: "ene. 18, 2026",
    text: "Antes de trabajar con iconic group hacia 2 diseños de sonrisa al mes. Este mes lo cerré con 11 diseños realizados.",
    author: "Dra. Sofía Mendoza Martínez",
    initials: "SM",
    pageNum: 34
  },
  {
    id: 4,
    rating: 5,
    date: "mar. 05, 2026",
    text: "Increible el cambio de facturación de la clínica. Pasé de 90,000 a 325,000 sin cambiar nada dentro de la clínica, solo la agencia y comunicación.",
    author: "Dr. Roberto Garza Villarreal",
    initials: "RG",
    pageNum: 35
  },
  {
    id: 5,
    rating: 5,
    date: "may. 14, 2026",
    text: "Recomiendo. Generé un aumento bastante considerable en ortodoncia invisible e implantes.",
    author: "Dra. Lucía Hernández Fernández",
    initials: "LH",
    pageNum: 36
  }
];

export const RealResults: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  // Auto transition every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentReview = reviewsData[currentIndex];

  const pages = [30, 31, 32, 33, 34];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden border-t border-white/10 select-none">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
        {/* Eyebrow */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gray-400 font-semibold mb-3">
          ALGUNAS DE NUESTRAS CLÍNICAS
        </p>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
          Clínicas Reales. Resultados Reales.
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-base sm:text-xl max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
          Nadie en el mercado se atreve a mostrar sus métricas, nosotros nos enorgullecemos.
        </p>

        {/* Testimonial Card */}
        <div className="relative max-w-2xl mx-auto mb-10 px-2 touch-pan-y">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, x: 20, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                const swipeThreshold = 50;
                if (info.offset.x < -swipeThreshold) {
                  handleNext();
                } else if (info.offset.x > swipeThreshold) {
                  handlePrev();
                }
              }}
              className="bg-white text-gray-900 rounded-3xl p-6 sm:p-10 text-left shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative border border-gray-100 cursor-grab active:cursor-grabbing"
            >
              {/* Header inside card: Rating & Date */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-500 font-extrabold text-xl sm:text-2xl mr-1">
                    {currentReview.rating}
                  </span>
                  <div className="flex text-amber-400 text-lg sm:text-xl gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                <span className="text-gray-400 text-xs sm:text-sm font-medium">
                  {currentReview.date}
                </span>
              </div>

              {/* Body quote */}
              <p className="text-gray-800 text-base sm:text-xl font-medium leading-relaxed mb-8">
                {currentReview.text}
              </p>

              {/* Bottom row inside card: Author and Google Badge */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-400 text-white font-bold flex items-center justify-center text-sm sm:text-base shrink-0 shadow-inner">
                    {currentReview.initials}
                  </div>
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">
                    {currentReview.author}
                  </span>
                </div>

                {/* Google Logo */}
                <div className="p-1">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination controls below card matching screenshot style */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 text-gray-500 font-semibold text-sm sm:text-base select-none">
          <button
            onClick={handlePrev}
            aria-label="Anterior"
            className="hover:text-white transition-colors p-2 text-lg sm:text-xl cursor-pointer"
          >
            &lt;
          </button>

          <span className="text-gray-600 text-xs sm:text-sm">1</span>
          <span className="text-gray-600 text-xs sm:text-sm">...</span>

          {pages.map((p, idx) => {
            const isActive = idx === currentIndex % pages.length;
            return (
              <button
                key={p}
                onClick={() => setCurrentIndex(idx % reviewsData.length)}
                className={`transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white font-black text-xl sm:text-2xl scale-110'
                    : 'text-gray-600 hover:text-gray-300'
                }`}
              >
                {p}
              </button>
            );
          })}

          <span className="text-gray-600 text-xs sm:text-sm">...</span>
          <span className="text-gray-600 text-xs sm:text-sm">36</span>

          <button
            onClick={handleNext}
            aria-label="Siguiente"
            className="hover:text-white transition-colors p-2 text-lg sm:text-xl cursor-pointer"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};
