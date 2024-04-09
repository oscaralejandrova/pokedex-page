import React, { useState } from "react";
import PokeCard from "./PokeCard";

const ListPokemons = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 16;
  const totalPages = Math.ceil((pokemons?.length || 0) / perPage);

  const nextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const setPage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (!pokemons) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokeCard">
      {pokemons
        .slice((currentPage - 1) * perPage, currentPage * perPage)
        .map((pokeInfo) => (
          <PokeCard key={pokeInfo.url} pokeInfo={pokeInfo} />
        ))}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          {"<"}
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setPage(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ListPokemons;
