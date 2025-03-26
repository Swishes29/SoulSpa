// src/components/Explorar.jsx
import React from "react";

const categorias = [
  {
    titulo: "Ciencia y Tecnología",
    descripcion: "Universidades con enfoque STEM",
    filtros: { carrera: "ingeniería" },
    icono: "🧬",
  },
  {
    titulo: "Artes y Humanidades",
    descripcion: "Para mentes creativas",
    filtros: { carrera: "arte" },
    icono: "🎨",
  },
  {
    titulo: "Universidades Públicas",
    descripcion: "Accesibles y con gran trayectoria",
    filtros: { tipo: "Pública" },
    icono: "🏛️",
  },
  {
    titulo: "Privadas de Alto Nivel",
    descripcion: "Modernas y personalizadas",
    filtros: { tipo: "Privada" },
    icono: "🎓",
  },
  {
    titulo: "Doble Titulación",
    descripcion: "Convenios internacionales",
    filtros: { doble_titulacion: true },
    icono: "🌍",
  },
];

const universidadesDestacadas = [
  "Universidad Nacional de Colombia",
  "Universidad de los Andes",
  "Pontificia Universidad Javeriana",
  "Universidad de Antioquia",
  "Universidad del Valle",
];

const Explorar = ({ setFilters }) => {
  const aplicarCategoria = (filtros) => {
    setFilters((prev) => ({ ...prev, ...filtros }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300">Explora por Categorías</h2>
        <p className="text-gray-600 dark:text-gray-400">Descubre opciones según tus intereses</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categorias.map((cat, i) => (
          <button
            key={i}
            onClick={() => aplicarCategoria(cat.filtros)}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition text-left text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 hover:scale-[1.02]"
          >
            <div className="text-3xl mb-2">{cat.icono}</div>
            <h3 className="text-lg font-semibold">{cat.titulo}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{cat.descripcion}</p>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 text-center">
          Universidades Destacadas
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {universidadesDestacadas.map((nombre, i) => (
            <li
              key={i}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700"
            >
              🎓 {nombre}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Explorar;