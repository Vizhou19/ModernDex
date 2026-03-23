import React, { useState } from "react";
import Pokemon from "../PokemonCard/Pokemon";
// * Files
import SearchBar from "../SearchBar/SearchBar";
// * Custom Hooks
import usePokemon from "../../hooks/usePokemon";

function Pokedex() {
  const [nameId, setNameId] = useState("1");
  const { data } = usePokemon(nameId);

  return (
    <div>
      <h1>ModernDex</h1>
      <SearchBar setNameId={setNameId} />
      <Pokemon data={data} />
    </div>
  );
}

export default Pokedex;
