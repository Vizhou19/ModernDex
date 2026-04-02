# ModernDex

Welcome to the ModernDex GitHub Repo.
A modern Pokédex built with React and powered by PokeAPI.
Reimagining the iconic Pokédex into the modern world.

# Note: Still In Progress

## 📖 Table of Contents

1. Tech
2. Getting Started
3. Features
4. Logic
5. Components
6. Credits
7. Disclaimer

## 📦 Tech

- Vite + React
- AnimeJS
- PokéAPI

## ✅ Getting Started

1. Clone the Repo
2. Run `npm install`
3. Run `npm run dev`

## ⚙️ Features

- Search Pokémon by name or ID
- View stats, types, abilites, and cries
- Game-feel like animations
- Mobile and Desktop responsive

## 🧠 Logic

- Fetches the data from PokéAPI such as stats, name, desc, and types, utilizing custom hooks to grab each data and returns them to the DOM.

## 💻 Components

### 🪝 usePokemon (hooks/usePokemon.js)

Fetches the API data with the use of state and effect hooks and returns the data.

### 🪝 usePkmnDesc (hooks/usePkmnDesc.js)

Grabs and returns both the description and the other forms (Megas, Gmax, etc.) data from the API.

### 🪝 useEvolutionChain (hooks/useEvolutionChain.js)

Fetches the url and pushes each data that is part of a pokémon's evolution into an array.

### 🎨 typeColors (utils/helpers/typeColors.js)

A dictionary that contains each color representing each types {type: color}.

### Pokedex (Pokedex/Pokedex.jsx)

The main component that contains the necessary components. Handles the overall layout.

### Pokemon (PokemonCard/Pokemon.jsx)

Imports PokemonStats and PokemonTypes, grabs and return each variables that contains origin, sprite, types, and cries.

### PokemonStats (PokemonStats/PokemonStats.jsx)

Maps each pokémon stats and displays the base stats for each pokémon.

### PokemonTypes (PokemonTypes/PokemonTypes.jsx)

Imports typeColors.js and maps each pokémon types, styled them, and displays each types.

### SearchBar (SearchBar/SearchBar.jsx)

Handles user input for searching pokémon by name or id.
Supports both button and enter key submission.

### EvolutionChain(EvolutionChain/EvolutionChain.jsx)

Fetches the API for each pokémon that is a part of the evolution path and returns them as their own element.

## Credits

- [PokéAPI](https://pokeapi.co/)

## ⚠️ Disclaimer

- Pokémon and all related names are trademarks of Nintendo / Game Freak.
- ModernDex has no asscoiation with Nintendo / Game Freak.
