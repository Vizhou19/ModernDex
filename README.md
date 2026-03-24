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
- Animated stat bars (Soon)
- Mobile and Desktop responsive

## Logic

- Fetches the data from PokéAPI such as stats, name, desc, and types, utilizing custom hooks to grab each data and returns them to the DOM.

## 💻 Components

### 🪝 usePokemon (hooks/usePokemon.js)

A custom hook that fetches the API data with the use of state and effect hooks and returns the data.

### 🪝 usePkmnDesc (hooks/usePkmnDesc.js)

A custom hook that grabs and returns both the description and the other forms (Megas, Gmax, etc.) data from the API.

### Pokedex (Pokedex/Pokedex.jsx)

The main component that contains the necessary components. Handles the overall layout.

### Pokemon (PokemonCard/Pokemon.jsx)

Imports PokemonStats, grabs and return each variables that contains origin, sprite, types, and cries.

### PokemonStats (PokemonStats/PokemonStats.jsx)

Maps each pokémon stats and displays the base stats for each pokémon.

### SearchBar (SearchBar/SearchBar.jsx)

Handles user input for searching pokémon by name or id.
Supports both button and enter key submission.

## Credits

- [PokéAPI](https://pokeapi.co/)

## ⚠️ Disclaimer

- Pokémon and all related names are trademarks of Nintendo / Game Freak.
- ModernDex has no asscoiation with Nintendo / Game Freak.
