import React from "react";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-12 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">Contáctanos</h1>
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Escribe tu mensaje..."
            rows="5"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;