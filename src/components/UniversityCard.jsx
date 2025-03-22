// src/components/UniversityCard.jsx
import React from "react";
import { MapPin, GraduationCap, Target, Landmark } from "lucide-react";

const UniversityCard = ({ university }) => {
  return (
    <article
      tabIndex="0"
      className="border border-gray-200 dark:border-gray-700 p-4 rounded-xl shadow-sm bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label={`Información de la universidad ${university.nombre}`}
    >
      <header className="mb-2">
        <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300 flex items-center gap-2">
          🎓 {university.nombre}
        </h2>
      </header>
      <p className="text-sm flex items-center gap-1 text-gray-700 dark:text-gray-200">
        <MapPin className="w-4 h-4 text-pink-600" aria-hidden="true" />
        <span><strong>Departamento:</strong> {university.departamento}</span>
      </p>
      <p className="text-sm flex items-center gap-1 text-gray-700 dark:text-gray-200">
        <GraduationCap className="w-4 h-4 text-purple-600" aria-hidden="true" />
        <span><strong>Carreras:</strong> {university.carreras.join(", ")}</span>
      </p>
      <p className="text-sm flex items-center gap-1 text-gray-700 dark:text-gray-200">
        <Target className="w-4 h-4 text-red-500" aria-hidden="true" />
        <span><strong>Nivel:</strong> {university.nivel}</span>
      </p>
      <p className="text-sm flex items-center gap-1 text-gray-700 dark:text-gray-200">
        <Landmark className="w-4 h-4" aria-hidden="true" />
        <span><strong>Tipo:</strong> {university.tipo}</span>
      </p>
    </article>
  );
};

export default UniversityCard;
