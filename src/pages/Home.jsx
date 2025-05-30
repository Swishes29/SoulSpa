import React, { useState, useEffect } from "react";
import universitiesData from "../data/universities.json";
import Hero from "../components/Hero";
import FilterSection from "../components/FilterSection";
import Results from "../components/Results";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [filters, setFilters] = useState({
    nombre: "",
    departamento: "",
    carrera: "",
    nivel: "",
    tipo: "",
  });

  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);

  const navigate = useNavigate();
  const itemsPerPage = 6;

  const handleResetFilters = () => {
    setFilters({ nombre: "", departamento: "", carrera: "", nivel: "", tipo: "" });
    setFilteredData([]);
    setHasSearched(false);
    setCurrentPage(1);
  };

  const explorar = () => {
    navigate("/explorar");
  };

  useEffect(() => {
    const isAnyFilterFilled = Object.values(filters).some(
      (value) => value.trim() !== ""
    );
    if (!isAnyFilterFilled) {
      setFilteredData([]);
      setHasSearched(false);
    } else {
      const results = universitiesData.filter((uni) => {
        if (uni.simulada) return false; 

        const nombreMatch = uni.nombre
          .toLowerCase()
          .includes(filters.nombre.toLowerCase());
        const departamentoMatch = uni.departamento
          .toLowerCase()
          .includes(filters.departamento.toLowerCase());
        const carreraMatch =
          filters.carrera === "" ||
          uni.carreras.some((c) =>
            c.toLowerCase().includes(filters.carrera.toLowerCase())
          );
        const nivelMatch =
          filters.nivel === "" ||
          uni.nivel.toLowerCase() === filters.nivel.toLowerCase();
        const tipoMatch =
          filters.tipo === "" ||
          uni.tipo.toLowerCase() === filters.tipo.toLowerCase();

        return (
          nombreMatch &&
          departamentoMatch &&
          carreraMatch &&
          nivelMatch &&
          tipoMatch
        );
      });

      setFilteredData(results);
      setCurrentPage(1);
      setHasSearched(true);
    }
  }, [filters]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div id="top" className="min-h-screen bg-gray-100 text-black">
      <main className="p-6 max-w-7xl mx-auto space-y-12">
        <Hero />
        <FilterSection
          filters={filters}
          setFilters={setFilters}
          handleResetFilters={handleResetFilters}
        />
        <Results
          paginatedData={paginatedData}
          filteredData={filteredData}
          hasSearched={hasSearched}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </main>
    </div>
  );
};

export default Home;
