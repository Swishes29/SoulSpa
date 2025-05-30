import React, { useEffect, useState, useMemo } from "react";
import eventosData from "../data/eventos.json";
import { differenceInDays, format } from "date-fns";
import {
  Calendar,
  MapPin,
  Info,
  CalendarDays,
  Monitor,
  Users,
  Ticket,
  Star,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ICONS = {
  Virtual: <Monitor className="w-4 h-4 mr-1" />, 
  Presencial: <Users className="w-4 h-4 mr-1" />, 
  "Cupos limitados": <Ticket className="w-4 h-4 mr-1" />, 
  Gratuito: <Star className="w-4 h-4 mr-1" />, 
};

const TAG_STYLES = {
  Virtual: "bg-purple-100 text-purple-700 border-purple-300",
  Presencial: "bg-green-100 text-green-700 border-green-300",
  "Cupos limitados": "bg-yellow-100 text-yellow-800 border-yellow-300",
  Gratuito: "bg-blue-100 text-blue-700 border-blue-300",
};

const DAYS_STYLES = dias => {
  if (dias < 10) return "bg-red-100 text-red-600";
  if (dias < 30) return "bg-yellow-100 text-yellow-700";
  return "bg-blue-100 text-blue-600";
};

export default function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEventos(eventosData);
      setLoading(false);
    }, 500);
  }, []);

  const filtered = useMemo(() => {
    return eventos
      .filter(e => e.titulo.toLowerCase().includes(search.toLowerCase()))
      .filter(e => activeTags.length ? activeTags.every(tag => e.etiquetas?.includes(tag)) : true);
  }, [eventos, search, activeTags]);

  const toggleTag = tag => {
    setActiveTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <CalendarDays className="mx-auto w-14 h-14 text-blue-700" />
          <h1 className="mt-4 text-5xl font-extrabold text-blue-800">
            Eventos Universitarios 2025
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Participa en ferias académicas, congresos y charlas exclusivas en Colombia.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar eventos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {Object.keys(TAG_STYLES).map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`flex items-center text-sm font-medium px-4 py-1.5 rounded-full border transition hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  activeTags.includes(tag)
                    ? `${TAG_STYLES[tag]} ring-2 ring-blue-500`
                    : `bg-gray-100 text-gray-600 border-gray-200`
                }`}
              >
                {ICONS[tag]}
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Event Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-xl shadow" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-500 text-xl py-20">
            No se encontraron eventos.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {filtered.map((evento, idx) => {
                const dias = differenceInDays(new Date(evento.fechaISO), new Date());
                return (
                  <motion.div
                    key={idx}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-transform transform hover:scale-102"
                  >
                    <div className="p-6 flex flex-col h-full">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {evento.etiquetas?.map((et, i) => (
                          <span
                            key={i}
                            className={`flex items-center text-xs font-medium px-2 py-0.5 rounded-full border ${TAG_STYLES[et]}`}
                          >
                            {ICONS[et]}
                            {et}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                        {evento.titulo}
                      </h2>

                      <div className="flex items-center text-sm text-gray-500 gap-2 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{format(new Date(evento.fechaISO), 'dd MMM yyyy')}</span>
                        {dias >= 0 && (
                          <span className={`ml-auto text-xs font-medium px-2 py-0.5 rounded-full ${DAYS_STYLES(dias)}`}>Faltan {dias} días</span>
                        )}
                      </div>

                      <div className="flex items-center text-sm text-gray-500 gap-2 mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{evento.lugar}</span>
                      </div>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {evento.descripcion}
                      </p>

                      <a
                        href={evento.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center justify-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-shadow shadow"
                      >
                        <Info className="w-4 h-4 mr-2" /> Ver detalles
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
