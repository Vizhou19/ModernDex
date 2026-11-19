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
import PokemonGender from "../PokemonGender/PokemonGender";
import PokemonStats from "../PokemonStats/PokemonStats";
import PokemonTypes from "../PokemonTypes/PokemonTypes";
import SideButtons from "../SideButtons/SideButtons";
import { typeColors } from "../../utils/helpers/typeColors";
import Skeleton from "../Skeleton/Skeleton";
// * Styles and Fonts
import "./Pokedex.css";
import "@fontsource/press-start-2p"; // * Title
import "@fontsource-variable/outfit"; // * Secondary

function Pokedex() {
  const [nameId, setNameId] = useState(6);
  const stringId = nameId.toString();
  const debouncedId = useDebounce(stringId, 500);
  const { data, isLoading } = usePokemon(stringId);
  const { speciesData, desc, varieties, genderRate } = usePkmnDesc(debouncedId);
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

  // * add typesColor to the background
  useEffect(
    function addTypeColorsToBG() {
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
    },
    [primaryColor, secondaryColor],
  );

  return (
    <div className="pokedex">
      <header className="pokedex-header">
        <div className="title">
          <h1>ModernDex</h1>
          <p id="version">V1.2</p>
        </div>
        <p id="power">
          Powered by{" "}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PokéAPI
          </a>
        </p>
      </header>
      <nav className="pokedex-search">
        <SearchBar setNameId={setNameId} />
      </nav>
      <div className="forms">
        <FormSwitcher
          varieties={varieties}
          currentForm={nameId}
          onFormChange={setNameId}
        />
      </div>
      <main className="pokedex-main">
        <div className="pokedex-info">
          <section className="pokedex-left pokedex-top-mobile">
            <SideButtons
              nameId={nameId}
              speciesId={speciesData?.id}
              setNameId={setNameId}
            >
              {isLoading ? (
                <div className="glass-card">
                  <Skeleton width="300px" height="300px" borderRadius="16px" />
                </div>
              ) : (
                <div className="glass-card">
                  <Pokemon data={data} />
                </div>
              )}
            </SideButtons>
          </section>
          {isLoading ? (
            <div className="pokedex-right pokedex-bottom-mobile glass-card">
              <Skeleton width="660px" height="87px" />
              <Skeleton width="660px" height="87px" />
              <Skeleton width="660px" height="87px" />
              <Skeleton width="660px" height="75px" />
              <Skeleton width="660px" height="150px" />
            </div>
          ) : (
            <section className="pokedex-right pokedex-bottom-mobile">
              <div className="glass-card">
                <h3>Types:</h3>
                <PokemonTypes types={data?.types} />
              </div>
              <div className="glass-card">
                <h3>Origins:</h3>
                <PokemonOrigins origin={data} />
              </div>
              <div className="glass-card">
                <h3>Genders:</h3>
                <PokemonGender genderRate={genderRate} />
              </div>
              <div className="pokemon-desc glass-card">
                <h3>Desc:</h3>
                <p>{desc}</p>
              </div>
              <div className="pokemon-evo glass-card">
                <h3>Evolution:</h3>
                <EvolutionChain
                  evoChain={evoChain}
                  onPokemonClick={setNameId}
                />
              </div>
            </section>
          )}
        </div>
        {isLoading ? (
          <div className="glass-card">
            <Skeleton width="100%" height={200} />
          </div>
        ) : (
          <section className="pokedex-bottom pokedex-bottom-mobile">
            <div className="glass-card">
              <PokemonStats stats={data?.stats} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default Pokedex;
