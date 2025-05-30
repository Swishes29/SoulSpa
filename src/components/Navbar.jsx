import React, { useState } from "react";
import { Compass, Home as HomeIcon, Calendar, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-70 backdrop-blur-md shadow-lg transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            🎓 UniAcceso
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { to: "/", icon: <HomeIcon className="w-5 h-5" />, label: "Inicio" },
            { to: "/explorar", icon: <Compass className="w-5 h-5" />, label: "Explorar" },
            { to: "/eventos", icon: <Calendar className="w-5 h-5" />, label: "Eventos" },
            { to: "/contacto", icon: <Calendar className="w-5 h-5 rotate-45" />, label: "Contáctanos" }
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-white bg-opacity-90 backdrop-blur-md shadow-inner transform transition-max-height duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-3">
          {[
            { to: "/", icon: <HomeIcon className="w-5 h-5" />, label: "Inicio" },
            { to: "/explorar", icon: <Compass className="w-5 h-5" />, label: "Explorar" },
            { to: "/eventos", icon: <Calendar className="w-5 h-5" />, label: "Eventos" },
            { to: "/contacto", icon: <Calendar className="w-5 h-5 rotate-45" />, label: "Contáctanos" }
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
