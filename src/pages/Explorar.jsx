import React from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Star, Trophy, ArrowLeft } from "lucide-react";

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
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-6 text-gray-900">
      {/* Hero */}
      <section
        className="relative max-w-6xl mx-auto mb-16 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: "url('https://source.unsplash.com/featured/?campus,universidad')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70" />
        <div className="relative p-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Explora universidades destacadas
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Descubre las instituciones más reconocidas en Colombia por su excelencia académica, infraestructura de punta y proyección internacional.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {universidadesTop.map((uni) => (
          <a
            key={uni.nombre}
            href={uni.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group transform hover:scale-105 transition-colors duration-300"
          >
            <article className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent group-hover:border-gradient bg-gradient-to-br group-hover:from-green-200 group-hover:to-blue-200">
              <img
                src={uni.imagen}
                alt={`Logo ${uni.nombre}`}
                className="w-full h-40 object-contain p-6 bg-white"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <GraduationCap className="w-6 h-6 text-green-500 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    {uni.nombre}
                  </h2>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {uni.descripcion}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-yellow-600">
                    <Trophy className="w-5 h-5 mr-1" />
                    <span className="font-medium">{uni.ranking}</span>
                  </div>
                  <Star className="w-5 h-5 text-gray-300 group-hover:text-yellow-500 transition" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {uni.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </a>
        ))}
      </section>

      {/* Did you know */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <article className="inline-block bg-gradient-to-br from-green-200 to-blue-200 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-8 h-8 text-yellow-500 mr-2" />
            <h3 className="text-2xl font-bold text-gray-800">
              ¿Sabías que...?
            </h3>
          </div>
          <p className="text-base text-gray-700 mb-6">
            Colombia cuenta con más de 300 instituciones de educación superior reconocidas por el Ministerio de Educación Nacional.
          </p>
          <button
            className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
            onClick={() => alert("Más información próximamente...")}
          >
            Descubre más
          </button>
        </article>
      </section>

      {/* Floating Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed bottom-6 left-6 bg-white p-3 rounded-full shadow-lg hover:shadow-2xl transition-transform hover:scale-110"
        aria-label="Volver atrás"
      >
        <ArrowLeft className="w-6 h-6 text-gray-700" />
      </button>
    </main>
  );
};

export default ExplorarPage;
