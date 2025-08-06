import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronRight, Calendar } from 'lucide-react';

const services = [
  {
    title: 'Spa y Bienestar Corporal',
    image: '/Imagen1.avif',
    items: [
      'Masaje relajante Armonía',
      'Drenajes linfáticos',
      'Exfoliación corporal',
      'Masaje reductor Amarse',
      'Día de spa “Me lo merezco”',
      'Depilación corporal con cera',
      'Limpieza facial profunda'
    ]
  },
  {
    title: 'Extensiones de Pestañas',
    image: '/imagen2.avif',
    items: [
      'Clásicas',
      'Cola de sirena',
      'Foxy',
      'Pestañina',
      'Húmedo',
      'Volumen ruso',
      'Hawaiano',
      'Híbridas',
      'Anime',
      'Wispy',
      'Griego',
      'Kim K',
      'Egipcio',
      'Bratz',
      'Megavolumen'
    ]
  },
  {
    title: 'Cejas y Complementarios',
    image: '/imagen3.avif',
    items: [
      'Lifting de pestañas',
      'Laminado de cejas',
      'Diseño de cejas en henna',
      'Depilación en cera'
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 18 } }
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#faf3eb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-16 leading-tight max-w-3xl mx-auto"
        >
          Nuestros Servicios
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16"
        >
          {services.map((svc, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl"
            >
              <div className="relative h-64 group overflow-hidden">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-white text-2xl md:text-3xl font-serif font-bold drop-shadow-lg">
                  {svc.title}
                </h3>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <ul className="flex-grow mb-8 text-gray-700 text-base leading-relaxed space-y-2 sm:columns-2 sm:gap-x-6 list-disc list-inside">
                  {svc.items.map((item, idx) => (
                    <li key={idx} className="flex items-start break-inside-avoid">
                      <ChevronRight className="w-5 h-5 mt-1 text-gray-400 mr-2" />
                      <span className="font-serif hover:text-indigo-600 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link to="contacto" smooth duration={500} offset={-80}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-[#f6e6c2] hover:bg-[#e7d7b1] text-neutral-800 px-6 py-2 rounded-full font-semibold tracking-wide uppercase text-sm shadow-md transition flex items-center justify-center"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Reserva Ahora
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
