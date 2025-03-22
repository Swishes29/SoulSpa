import React from "react";
import { Search, MapPin, GraduationCap, Target, Landmark, Frown } from "lucide-react";

const FilterBar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-2xl w-full">
      <div className="relative w-full md:w-1/5">
        <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
        <input
          name="nombre"
          placeholder="Universidad..."
          className="pl-8 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={filters.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="relative w-full md:w-1/5">
        <MapPin className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
        <input
          name="departamento"
          placeholder="Departamento"
          className="pl-8 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={filters.departamento}
          onChange={handleChange}
        />
      </div>
      <div className="relative w-full md:w-1/5">
        <GraduationCap className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
        <input
          name="carrera"
          placeholder="Carrera"
          className="pl-8 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={filters.carrera}
          onChange={handleChange}
        />
      </div>
      <div className="relative w-full md:w-1/5">
        <Target className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
        <select
          name="nivel"
          className="pl-8 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={filters.nivel}
          onChange={handleChange}
        >
          <option value="">Nivel</option>
          <option value="Pregrado">Pregrado</option>
          <option value="Posgrado">Posgrado</option>
        </select>
      </div>
      <div className="relative w-full md:w-1/5">
        <Landmark className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
        <select
          name="tipo"
          className="pl-8 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={filters.tipo}
          onChange={handleChange}
        >
          <option value="">Tipo</option>
          <option value="Pública">Pública</option>
          <option value="Privada">Privada</option>
        </select>
      </div>
    </div>
  );
};

export const NoResults = () => (
  <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500 dark:text-gray-400">
    <Frown className="w-10 h-10 mb-4 text-gray-400" />
    <p className="text-lg font-medium">No se encontraron universidades con esos filtros.</p>
    <p className="text-sm">Prueba ajustando los campos o usando menos filtros.</p>
  </div>
);

export default FilterBar;