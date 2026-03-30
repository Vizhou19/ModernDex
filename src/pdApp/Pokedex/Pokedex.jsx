import React, { useState } from "react";
// * Files
import SearchBar from "../SearchBar/SearchBar";
import Pokemon from "../PokemonCard/Pokemon";
import FormSwitcher from "../FormSwitcher/FormSwitcher";
// * Custom Hooks
import usePokemon from "../../hooks/usePokemon";
import usePkmnDesc from "../../hooks/usePkmnDesc";

function Pokedex() {
  const [nameId, setNameId] = useState("6");
  const { data } = usePokemon(nameId);
  const { description, varieties } = usePkmnDesc(nameId);

  return (
    <div>
      <h1>ModernDex</h1>
      <SearchBar setNameId={setNameId} />
      <FormSwitcher
        varieties={varieties}
        currentForm={nameId}
        onFormChange={setNameId}
      />
      <Pokemon data={data} />
      <p>{description}</p>
    </div>
  );
}

export default Pokedex;
