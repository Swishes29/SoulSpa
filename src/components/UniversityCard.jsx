
import React from "react";
import { MapPin, GraduationCap, Target, Landmark } from "lucide-react";

const UniversityCard = ({ university }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-xl shadow-sm bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
        🎓 {university.nombre}
      </h2>
      <p className="text-sm flex items-center gap-1">
        <MapPin className="w-4 h-4 text-pink-600" />
        <strong>Departamento:</strong> {university.departamento}
      </p>
      <p className="text-sm flex items-center gap-1">
        <GraduationCap className="w-4 h-4 text-purple-600" />
        <strong>Carreras:</strong> {university.carreras.join(", ")}
      </p>
      <p className="text-sm flex items-center gap-1">
        <Target className="w-4 h-4 text-red-500" />
        <strong>Nivel:</strong> {university.nivel}
      </p>
      <p className="text-sm flex items-center gap-1">
        <Landmark className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        <strong>Tipo:</strong> {university.tipo}
      </p>
    </div>
  );
};

export default UniversityCard;