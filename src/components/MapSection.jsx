import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export default function MapSection() {
  const [loaded, setLoaded] = useState(false);
  const locationUrl = 'https://goo.gl/maps/YourShortenedLinkHere'; // Acorta con Google Maps

  return (
    <section id="ubicacion" className="py-24 bg-[#faf3eb]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-semibold text-gray-800 text-center mb-6"
        >
          Nuestra Ubicación
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-600 text-lg mb-12"
        >
          Visítanos en Laureles de Terranova, Medellín. Te esperamos para darte una experiencia inolvidable.
        </motion.p>

        <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[450px] md:h-[550px] lg:h-[650px]">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <svg
                className="animate-spin h-12 w-12 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
            </div>
          )}

          <iframe
            onLoad={() => setLoaded(true)}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.415387184472!2d-75.54704242524835!3d6.340210693649529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f8913c22803%3A0x3ce60932d1b878fe!2sUnidad%20Residencial%20Laureles%20de%20Terranova!5e0!3m2!1ses-419!2sco!4v1754496211633!5m2!1ses-419!2sco"
            title="Mapa de la ubicación"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute bottom-8 right-8 bg-white bg-opacity-90 backdrop-blur-md rounded-lg p-6 max-w-xs shadow-lg"
          >
            <h3 className="text-xl font-medium text-gray-800 mb-4">Contáctanos</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-green-600" />
                Laureles de Terranova, Medellín
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-green-600" />
                +57 320 123 4567
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-green-600" />
                info@tuspa.com
              </li>
            </ul>
            <a
              href={locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-4 py-2 bg-[#f6e6c2] hover:bg-[#e7d7b1] text-neutral-800 text-sm font-semibold rounded-md shadow hover:shadow-md transition-transform transform hover:scale-105"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver en Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
