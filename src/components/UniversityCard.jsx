import React from "react";
import { MapPin, GraduationCap, Target, Landmark, Info, ArrowRight } from "lucide-react";

const UniversityCard = ({ university, onClick }) => {
  return (
    <article
      tabIndex="0"
      role="button"
      onClick={onClick}
      className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md bg-white dark:bg-gray-900 transition-transform duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label={`Información detallada de la universidad ${university.nombre}`}
    >
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <h2
          id={`university-${university.id}-title`}
          className="text-2xl font-bold text-blue-800 dark:text-blue-300 flex items-center gap-2"
        >
          <GraduationCap className="w-6 h-6" aria-hidden="true" />
          {university.nombre}
        </h2>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onClick) onClick(e);
          }}
          className="mt-2 sm:mt-0 p-2 rounded-full bg-blue-50 dark:bg-blue-800 hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={`Más información sobre ${university.nombre}`}
        >
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-200" />
        </button>
      </header>
      <ul className="space-y-3">
        <li className="flex items-center gap-3">
          <MapPin className="w-6 h-6 text-pink-500" aria-hidden="true" />
          <span className="text-sm text-gray-800 dark:text-gray-200">
            <strong>Departamento:</strong> {university.departamento}
          </span>
        </li>
        <li className="flex items-center gap-3">
          <GraduationCap className="w-6 h-6 text-purple-500" aria-hidden="true" />
          <span className="text-sm text-gray-800 dark:text-gray-200">
            <strong>Carreras:</strong> {university.carreras.join(", ")}
          </span>
        </li>
        <li className="flex items-center gap-3">
          <Target className="w-6 h-6 text-red-500" aria-hidden="true" />
          <span className="text-sm text-gray-800 dark:text-gray-200">
            <strong>Nivel:</strong> {university.nivel}
          </span>
        </li>
        <li className="flex items-center gap-3">
          <Landmark className="w-6 h-6 text-green-500" aria-hidden="true" />
          <span className="text-sm text-gray-800 dark:text-gray-200">
            <strong>Tipo:</strong> {university.tipo}
          </span>
        </li>
      </ul>
      <div className="mt-6">
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onClick) onClick(e);
          }}
          className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={`Ver más detalles de ${university.nombre}`}
        >
          Ver más
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};

export default UniversityCard;
