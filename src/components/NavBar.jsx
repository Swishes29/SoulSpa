
// src/components/Navbar.jsx
import React from "react";
import { Moon, Sun, Compass, Home as HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode, explorar }) => {
  return (
    <header
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-blue-800 text-white"
      } shadow-md sticky top-0 z-50 transition-colors`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          🎓 FindMyUniversity
        </h1>
        <div className="flex flex-wrap gap-4 items-center">
          <nav className="flex flex-wrap gap-4 text-sm items-center">
            <a href="#top" className="hover:underline flex items-center gap-1">
              <HomeIcon className="w-4 h-4" />Inicio
            </a>
            <button
              onClick={explorar}
              className="hover:underline flex items-center gap-1"
            >
              <Compass className="w-4 h-4" />Explorar
            </button>
            <Link
              to="/contacto"
              className="hover:underline flex items-center gap-1"
            >
              📩 Contáctanos
            </Link>
          </nav>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded hover:bg-white/10 transition"
            title="Cambiar modo"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;