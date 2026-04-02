import React, { useState, useEffect } from "react";
// * Custom Hooks
import usePokemon from "../../hooks/usePokemon";
import usePkmnDesc from "../../hooks/usePkmnDesc";
import useEvolution from "../../hooks/useEvolution";
import useDebounce from "../../hooks/useDebounce";
// * Files
import SearchBar from "../SearchBar/SearchBar";
import Pokemon from "../PokemonCard/Pokemon";
import FormSwitcher from "../FormSwitcher/FormSwitcher";
import EvolutionChain from "../EvolutionChain/EvolutionChain";

function Pokedex() {
  const [nameId, setNameId] = useState("1");
  const debouncedId = useDebounce(nameId, 500);
  const { data } = usePokemon(nameId);
  const { speciesData, description, varieties } = usePkmnDesc(debouncedId);
  const { evoChain } = useEvolution(speciesData);

  useEffect(() => {
    if (!data) return;
    const captializedTitle =
      data.name.charAt(0).toUpperCase() + data.name.slice(1);
    document.title = `${captializedTitle} Pokédex | ModernDex`;
  }, [data]);

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
      <EvolutionChain evoChain={evoChain} onPokemonClick={setNameId} />
    </div>
  );
}

export default Pokedex;
