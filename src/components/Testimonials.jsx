import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const feedback = [
  { name: 'María Pérez', text: 'La experiencia fue transformadora, me sentí en otra dimensión de relajación.' },
  { name: 'Carlos Gómez', text: 'Cada detalle está cuidado, desde la bienvenida hasta el último masaje.' },
  { name: 'Ana Rodríguez', text: 'Sin duda, el mejor spa que he visitado. Mi piel luce increíble.' }
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p === 0 ? feedback.length - 1 : p - 1));
  const next = () => setI((p) => (p === feedback.length - 1 ? 0 : p + 1));

  return (
    <section id="testimonios" className="py-20 bg-neutral-100">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-heading text-neutral-800 mb-12">Testimonios</h3>
        <div className="relative">
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-soft">
            <ChevronLeft size={24} />
          </button>
          <AnimatePresence>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="p-10 bg-white rounded-2xl shadow-soft"
            >
              <p className="italic text-neutral-700 mb-4">“{feedback[i].text}”</p>
              <h4 className="font-semibold text-neutral-900">— {feedback[i].name}</h4>
            </motion.div>
          </AnimatePresence>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-soft">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
