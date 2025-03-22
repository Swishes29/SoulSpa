// src/pages/Contacto.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, ArrowLeft } from "lucide-react";

const Contacto = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el mensaje (fetch, axios, etc.)
    alert("Mensaje enviado. Nos pondremos en contacto a la brevedad.");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div
      className={`min-h-screen transition-colors ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Encabezado con botón "Volver" y toggle de modo oscuro */}
      <header className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <button
          onClick={handleGoBack}
          className="flex items-center text-blue-600 dark:text-blue-300 hover:underline"
        >
          <ArrowLeft className="w-5 h-5 mr-1" /> Volver
        </button>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded hover:bg-white/10 transition"
          aria-label="Cambiar modo"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </header>

      <main className="p-6 max-w-3xl mx-auto">
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4 text-center text-blue-700 dark:text-blue-300">
            Contáctanos
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            Tu opinión es muy valiosa para nosotros. Completa el formulario y te responderemos a la brevedad.
          </p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4" noValidate>
            <div>
              <label htmlFor="nombre" className="block mb-1 font-medium">
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ej. Juan Pérez"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ej. ejemplo@correo.com"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block mb-1 font-medium">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                placeholder="Escribe tu mensaje..."
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
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
