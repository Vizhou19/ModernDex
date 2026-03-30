import React from "react";
import { typeColors } from "../../utils/helpers/typeColors";
import "./PokemonTypes.css";

function PokemonTypes({ types }) {
  return (
    <div className="types-container">
      {types?.map((typeObj) => (
        <span
          key={typeObj.type.name}
          className="type-badge"
          style={{ backgroundColor: typeColors[typeObj.type.name] }}
        >
          {typeObj.type.name}
        </span>
      ))}
    </div>
  );
}

export default PokemonTypes;
