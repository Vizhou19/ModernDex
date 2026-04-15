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
      <button id="search-button" onClick={handleSearch} aria-label="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
