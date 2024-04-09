import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./PokeDetailPage.css"; 

const PokeDetailPage = () => {
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemon] = useFetch(url);

  React.useEffect(() => {
    getPokemon();
  }, [name]);

  return (
    <div className="poke-detail-container">
      <header>
        <img
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
          className="poke-image"
        />
      </header>

      <p className="poke-id"> # {pokemon?.id} </p>
      <br />
      <hr />
      <h2 className="poke-name"> {pokemon?.name} </h2>
      <br />
      <hr />
      <p className="poke-info">
        {" "}
        Peso: <br /> {pokemon?.height}{" "}
      </p>
      <p className="poke-info">
        {" "}
        Altura: <br /> {pokemon?.weight}{" "}
      </p>
    
      <h3 className="poke-subtitle"> Tipo </h3>
      <div className="poke-types-container">
        {pokemon?.types.map((type, index) => (
          <div key={index} className={`poke-type-container ${type.type.name}`}>
            {type.type.name}
          </div>
        ))}
      </div>
      <h3 className="poke-subtitle-2"> Habilidades </h3>
      <ul className="poke-list-2">
        {pokemon?.abilities.map((ability) => (
          <li key={ability.ability.name} className="poke-ability">
            {ability.ability.name}
          </li>
        ))}
      </ul>
      <br />
      <hr />
      <h3 className="poke-subtitle-3"> Stats </h3>
      <ul className="poke-list-3">
        <li className="poke-stat">
          HP:
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${(pokemon?.stats[0].base_stat / 150) * 100}%` }}
            ></div>
          </div>
          <span className="progress-text">
            {pokemon?.stats[0].base_stat}/150
          </span>
        </li>
        <li className="poke-stat">
          Attack:
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${(pokemon?.stats[1].base_stat / 150) * 100}%` }}
            ></div>
          </div>
          <span className="progress-text">
            {pokemon?.stats[1].base_stat}/150
          </span>
        </li>
        <li className="poke-stat">
          Defense:
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${(pokemon?.stats[2].base_stat / 150) * 100}%` }}
            ></div>
          </div>
          <span className="progress-text">
            {pokemon?.stats[2].base_stat}/150
          </span>
        </li>
        <li className="poke-stat">
          Speed:
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${(pokemon?.stats[5].base_stat / 150) * 100}%` }}
            ></div>
          </div>
          <span className="progress-text">
            {pokemon?.stats[5].base_stat}/150
          </span>
        </li>
      </ul>
      <br />
      <hr />
      <br />
      <br />
      <h3 className="poke-subtitle-4"> Moves </h3>
      <div className="poke-moves-container">
        {pokemon?.moves.map((move, index) => (
          <div key={index} className="poke-move">
            {move.move.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokeDetailPage;
