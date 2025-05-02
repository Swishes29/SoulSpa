// src/components/Results.jsx
import UniversityCard from "./UniversityCard";
import { NoResults } from "./FilterBar";

const Results = ({
  paginatedData,
  filteredData,
  hasSearched,
  currentPage,
  setCurrentPage,
  totalPages,
}) => (
  <section aria-live="polite" className="mt-4">
    {hasSearched && (
      <p
        className="text-sm text-gray-700 dark:text-gray-300 text-center mb-4"
        aria-atomic="true"
      >
        Resultados encontrados:{" "}
        <strong>{filteredData.length}</strong>
      </p>
    )}

    {hasSearched && filteredData.length === 0 ? (
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
          <nav
            className="flex justify-center mt-8 gap-2"
            role="navigation"
            aria-label="Paginación de resultados"
          >
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              const isActive = currentPage === page;

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded shadow-sm text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "bg-white text-blue-700 border border-blue-300 hover:bg-blue-100 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  }`}
                  aria-label={`Página ${page}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {page}
                </button>
              );
            })}
          </nav>
        )}
      </>
    )}
  </section>
);

export default Results;
