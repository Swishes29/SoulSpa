// src/components/Hero.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const phrases = ['Relájate profundamente', 'Renueva tu energía', 'Reconecta con tu esencia'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full bg-black text-white overflow-hidden z-0"
    >
      {/* Video de fondo */}
      <video
        src="public\SoulSpa.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 brightness-75"
      />

      {/* Overlay con textura suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 backdrop-blur-sm -z-5" />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Logo grande o nombre visual */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-serif font-bold tracking-wide text-white drop-shadow-2xl"
        >
          Soul Spa
        </motion.h1>

        {/* Frase rotativa elegante */}
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-xl md:text-3xl font-light italic text-white tracking-wide"
          >
            {phrases[index]}
          </motion.p>
        </AnimatePresence>

        {/* Botones de acción */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          <Link to="servicios" smooth duration={600} offset={-80}>
            <button className="px-8 py-3 bg-[#f6e6c2] text-neutral-800 font-semibold rounded-full tracking-wide uppercase shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
              Descubre Servicios
            </button>
          </Link>

          <Link to="contacto" smooth duration={600} offset={-80}>
            <button className="px-8 py-3 border border-white text-white font-semibold rounded-full tracking-wide uppercase hover:bg-white hover:text-neutral-800 transition-all duration-200 shadow-md">
              Reserva Ahora
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 w-full flex justify-center"
      >
        <ChevronDown size={28} className="text-white opacity-60" />
      </motion.div>
    </section>
  );
}
