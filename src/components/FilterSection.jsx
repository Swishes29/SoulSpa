// src/components/FilterSection.jsx
import FilterBar from "./FilterBar";

const FilterSection = ({ filters, setFilters, handleResetFilters }) => (
  <section className="space-y-4">
    <FilterBar filters={filters} setFilters={setFilters} />
    <div className="flex justify-center">
      <button
        onClick={handleResetFilters}
        className="bg-white border border-red-500 text-red-500 hover:bg-red-50 hover:border-red-600 hover:text-red-600 font-semibold py-2 px-6 rounded-full shadow-md transition-transform transform hover:scale-105"
      >
        Limpiar filtros
      </button>
    </div>
  </section>
);
export default FilterSection;
