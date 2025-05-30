import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Mail, MessageSquare } from "lucide-react";

const Contacto = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado. Nos pondremos en contacto a la brevedad.");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex flex-col">
      {/* Encabezado */}
      <header className="flex items-center p-6 max-w-6xl mx-auto">
        <button
          onClick={handleGoBack}
          className="flex items-center space-x-2 bg-white bg-opacity-60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 text-blue-600" />
          <span className="text-blue-600 font-semibold">Volver</span>
        </button>
      </header>

      {/* Contenido */}
      <main className="flex-grow flex items-center justify-center px-4 pb-12">
        <section className="relative bg-white bg-opacity-80 backdrop-blur-sm w-full max-w-lg p-10 rounded-3xl shadow-2xl border border-blue-200">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full shadow-lg">
            <Mail className="w-8 h-8 text-white" />
          </div>

          <h1 className="mt-4 text-4xl font-bold text-center text-blue-700 mb-2">
            Contáctanos
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Tu opinión es muy valiosa para nosotros. Completa el formulario y te responderemos pronto.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label htmlFor="nombre" className="block mb-2 font-medium">
                Nombre completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Ej. Juan Pérez"
                  required
                  className="w-full pl-10 p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="email" className="block mb-2 font-medium">
                Correo electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ej. ejemplo@correo.com"
                  required
                  className="w-full pl-10 p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="mensaje" className="block mb-2 font-medium">
                Mensaje
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400" />
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  placeholder="Escribe tu mensaje..."
                  required
                  className="w-full pl-10 p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none transition resize-none"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg transform hover:scale-105 transition"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contacto;