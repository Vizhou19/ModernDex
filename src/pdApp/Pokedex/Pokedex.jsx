import { useState, useEffect } from "react";
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
import PokemonOrigins from "../PokemonOrigins/PokemonOrigins";
import { typeColors } from "../../utils/helpers/typeColors";
import "./Pokedex.css";

function Pokedex() {
  const [nameId, setNameId] = useState("6");
  const debouncedId = useDebounce(nameId, 500);
  const { data } = usePokemon(nameId);
  const { speciesData, description, varieties } = usePkmnDesc(debouncedId);
  const { evoChain } = useEvolution(speciesData);

  // * Captializing title and putting the Pokemon on the title
  useEffect(
    function captializeTitle() {
      if (!data) return;
      const captializedTitle =
        data.name.charAt(0).toUpperCase() + data.name.slice(1);
      document.title = `${captializedTitle} Pokédex | ModernDex`;
    },
    [data],
  );

  // * Neon Lights
  const primaryType = data?.types?.[0]?.type?.name;
  const secondaryType = data?.types?.[1]?.type?.name;

  const primaryColor = typeColors[primaryType];
  const secondaryColor = secondaryType
    ? typeColors[secondaryType]
    : primaryColor;

  useEffect(() => {
    if (primaryColor) {
      document.documentElement.style.setProperty(
        "--type-color-1",
        primaryColor,
      );
      document.documentElement.style.setProperty(
        "--type-color-2",
        secondaryColor,
      );
    }
  }, [primaryColor, secondaryColor]);

  return (
    <div className="pokedex">
      <header className="pokedex-header">
        <h1>ModernDex</h1>
        <p>Powered by PokeAPI</p>
      </header>
      <nav className="pokedex-search">
        <SearchBar setNameId={setNameId} />
      </nav>
      <FormSwitcher
        varieties={varieties}
        currentForm={nameId}
        onFormChange={setNameId}
      />
      <main className="pokedex-main">
        <Pokemon data={data} />
        <div className="pokedex-right pokedex-bottom">
          <PokemonOrigins origin={data} />
          <div className="pokemon-desc">
            <h3>Desc:</h3>
            <p>{description}</p>
          </div>
          <h3>Evolution:</h3>
          <EvolutionChain evoChain={evoChain} onPokemonClick={setNameId} />
        </div>
      </main>
    </div>
  );
}

export default Pokedex;
