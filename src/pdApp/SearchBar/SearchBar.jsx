import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ setNameId }) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = async () => {
    if (!inputValue.trim()) return;

    const query = inputValue.toLowerCase().trim();

    try {
      const speciesRes = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${query}`,
      );

      const speciesData = await speciesRes.json();

      const defaultVariety = speciesData.varieties.find(
        (v) => v.is_default === true,
      );

      setNameId(defaultVariety.pokemon.name);
      setInputValue("");
    } catch (error) {
      console.error("Pokemon not found:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="pkmnSearch">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search by name or ID..."
        id="searchbar"
      />
      <button id="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
