import React, { useState, useEffect } from "react";
import universitiesData from "../data/universities.json";
import FilterBar, { NoResults } from "../components/FilterBar";
import UniversityCard from "../components/UniversityCard";
import { Moon, Sun, Compass, Home as HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode, explorar }) => (
  <header className={`${
    darkMode ? "bg-gray-900 text-white" : "bg-blue-800 text-white"
  } shadow-md sticky top-0 z-50 transition-colors`}>
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
        🎓 FindMyUniversity
      </h1>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-6 text-sm items-center">
          <a href="#top" className="hover:underline flex items-center gap-1"><HomeIcon className="w-4 h-4" />Inicio</a>
          <button onClick={explorar} className="hover:underline flex items-center gap-1"><Compass className="w-4 h-4" />Explorar</button>
          <Link to="/contacto" className="hover:underline flex items-center gap-1">📩 Contáctanos</Link>
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

const Home = () => {
  const [filters, setFilters] = useState({
    nombre: "",
    departamento: "",
    carrera: "",
    nivel: "",
    tipo: ""
  });

  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const itemsPerPage = 6;

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const handleResetFilters = () => {
    setFilters({ nombre: "", departamento: "", carrera: "", nivel: "", tipo: "" });
    setFilteredData([]);
    setHasSearched(false);
    setCurrentPage(1);
  };

  const explorar = () => {
    setFilters({ tipo: "Pública", nombre: "", departamento: "", carrera: "", nivel: "" });
  };

  useEffect(() => {
    const isAnyFilterFilled = Object.values(filters).some((value) => value.trim() !== "");
    if (!isAnyFilterFilled) {
      setFilteredData([]);
      return;
    }
    const results = universitiesData.filter((uni) => {
      const nombreMatch = uni.nombre.toLowerCase().includes(filters.nombre.toLowerCase());
      const departamentoMatch = uni.departamento.toLowerCase().includes(filters.departamento.toLowerCase());
      const carreraMatch = filters.carrera === "" || uni.carreras.some((c) => c.toLowerCase().includes(filters.carrera.toLowerCase()));
      const nivelMatch = filters.nivel === "" || uni.nivel.toLowerCase() === filters.nivel.toLowerCase();
      const tipoMatch = filters.tipo === "" || uni.tipo.toLowerCase() === filters.tipo.toLowerCase();

      return nombreMatch && departamentoMatch && carreraMatch && nivelMatch && tipoMatch;
    });

    setFilteredData(results);
    setCurrentPage(1);
    setHasSearched(true);
  }, [filters]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div id="top" className={`min-h-screen transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        explorar={explorar}
      />
      <main className="p-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 dark:text-blue-300">
          Encuentra tu universidad ideal en Colombia
        </h2>

        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <FilterBar filters={filters} setFilters={setFilters} />
          <button
            onClick={handleResetFilters}
            className="ml-auto bg-red-100 hover:bg-red-200 text-red-700 font-medium py-2 px-4 rounded shadow-sm transition"
          >
            Limpiar filtros
          </button>
        </div>

        {hasSearched && (
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Resultados encontrados: <strong>{filteredData.length}</strong>
          </p>
        )}

        {!hasSearched ? null : filteredData.length === 0 ? (
          <NoResults />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedData.map((uni, idx) => (
                <div
                  key={idx}
                  className="transform transition duration-500 hover:scale-105"
                >
                  <UniversityCard university={uni} />
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 rounded shadow-sm text-sm font-medium transition ${
                      currentPage === i + 1
                        ? "bg-blue-700 text-white"
                        : "bg-white text-blue-700 border border-blue-300 hover:bg-blue-100 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Home;