import React, { useState } from "react";
import { Compass, Home as HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-800 text-white shadow-md sticky top-0 z-50 transition-colors backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          🎓 UniAcceso
        </h1>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-sm items-center" aria-label="Navegación principal">
            <a href="#top" className="hover:underline flex items-center gap-1">
              <HomeIcon className="w-4 h-4" /> Inicio
            </a>
            <Link to="/explorar" className="hover:underline flex items-center gap-1">
              <Compass className="w-4 h-4" /> Explorar
            </Link>
            <Link to="/contacto" className="hover:underline flex items-center gap-1">
              📩 Contáctanos
            </Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-white/10 transition"
            aria-label="Menú"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-blue-800 text-white px-4 py-2" aria-label="Navegación móvil">
          <a
            href="#top"
            className="block py-2 hover:underline flex items-center gap-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            <HomeIcon className="w-4 h-4" /> Inicio
          </a>
          <Link
            to="/explorar"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:underline flex items-center gap-1"
          >
            <Compass className="w-4 h-4" /> Explorar
          </Link>
          <Link
            to="/contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:underline flex items-center gap-1"
          >
            📩 Contáctanos
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
