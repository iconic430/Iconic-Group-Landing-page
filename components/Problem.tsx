
import React from 'react';
import { motion } from 'framer-motion';

export const Problem: React.FC = () => {
  const cards = [
    {
      title: "El Problema",
      desc: "Recibes 100 mensajes preguntando '¿Precio?'. Leads de baja calidad que solo buscan lo más barato.",
      icon: "🚫"
    },
    {
      title: "La Consecuencia",
      desc: "Tu recepción se satura. Pierden horas explicando lo mismo a gente que nunca llegará a la clínica.",
      icon: "⌛"
    },
    {
      title: "El Resultado",
      desc: "Quemas presupuesto en anuncios. El paciente calificado se va con la competencia porque tardaste en responder.",
      icon: "📉"
    }
  ];

  return (
    <section id="problema" className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">El modelo tradicional de agencia <span className="text-red-500">está roto.</span></h2>
          <p className="text-gray-400 text-lg">
            Las agencias te venden "Likes" y "Clicks". Nosotros instalamos una infraestructura que te entrega pacientes educados y listos para pagar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.04] transition-all group"
            >
              <div className="text-4xl mb-6">{card.icon}</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
