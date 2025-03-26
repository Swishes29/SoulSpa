// src/pages/Explorar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Star, Trophy } from "lucide-react";

const universidadesTop = [
  {
    nombre: "Universidad Nacional de Colombia",
    descripcion: "Una de las instituciones de educación superior más importantes del país.",
    tags: ["Pública", "Investigación", "Ranking QS"],
    imagen: "https://sibcolombia.net/wp-content/uploads/2016/08/Logo-unal.png",
    ranking: "#1",
    url: "https://unal.edu.co/",
  },
  {
    nombre: "Universidad de los Andes",
    descripcion: "Reconocida por su excelencia académica y programas internacionales.",
    tags: ["Privada", "Excelencia", "Internacional"],
    imagen: "https://images.seeklogo.com/logo-png/55/1/universidad-de-los-andes-logo-png_seeklogo-555463.png",
    ranking: "#2",
    url: "https://www.uniandes.edu.co/",
  },
  {
    nombre: "Universidad de Antioquia",
    descripcion: "Con fuerte presencia regional y programas destacados de investigación.",
    tags: ["Pública", "Ciencias", "Cultura"],
    imagen: "https://www.udea.edu.co/wps/wcm/connect/udea/472beb5a-3b6c-4b61-8b95-e37303582e83/Logos%C3%ADmbolo+Universidad+de+Antioquia+vertical+%C2%AE-02.png?MOD=AJPERES&CVID=nG2u7eta",
    ranking: "#3",
    url: "https://www.udea.edu.co/",
  },
];

const ExplorarPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 text-gray-900 dark:text-white">
      {/* Hero con imagen de fondo */}
      <header
        className="max-w-5xl mx-auto text-center mb-12 relative overflow-hidden rounded-xl"
        style={{
          backgroundImage: "url('https://source.unsplash.com/featured/?campus,universidad')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay para mejorar legibilidad */}
        <div className="bg-black bg-opacity-50 p-8 rounded-xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-100 drop-shadow-lg">
            Explora universidades destacadas
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Descubre las instituciones más reconocidas en Colombia por su excelencia académica,
            infraestructura de punta y proyección internacional.
          </p>
        </div>
      </header>

      {/* Sección de Tarjetas */}
      <section className="max-w-5xl mx-auto mb-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {universidadesTop.map((uni) => (
            <a
              key={uni.nombre}
              href={uni.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group focus:outline-none"
            >
              <article
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-transparent 
                           group-hover:border-blue-300 group-hover:shadow-xl transform group-hover:scale-105 
                           transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {/* Imagen de la universidad */}
                {uni.imagen && (
                  <img
                    src={uni.imagen}
                    alt={`Imagen de ${uni.nombre}`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}

                {/* Encabezado de la tarjeta */}
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-6 h-6 text-indigo-500" />
                  <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                    {uni.nombre}
                  </h2>
                </div>

                {/* Descripción */}
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {uni.descripcion}
                </p>

                {/* Ranking */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1 text-sm text-yellow-600 dark:text-yellow-400">
                    <Trophy className="w-4 h-4" />
                    <span>Ranking QS: {uni.ranking}</span>
                  </div>
                </div>

                {/* Etiquetas */}
                <div className="flex flex-wrap gap-2">
                  {uni.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-indigo-100 dark:bg-indigo-700 dark:text-white px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>

      {/* Sección "¿Sabías que...?" */}
      <section className="max-w-5xl mx-auto mt-16 text-center">
        <article className="inline-block bg-blue-50 dark:bg-blue-900 p-8 rounded-xl shadow-lg transition-transform hover:scale-105 duration-300">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-yellow-500 mr-2" />
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">
              ¿Sabías que...?
            </h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Colombia cuenta con más de 300 instituciones de educación superior reconocidas
            por el Ministerio de Educación Nacional.
          </p>
          <button
            className="bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => alert("Más información próximamente...")}
          >
            Descubre más
          </button>
        </article>
      </section>

      {/* Botón para volver atrás */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full transition-all shadow-md"
        >
          ← Volver atrás
        </button>
      </div>
    </main>
  );
};

export default ExplorarPage;
