<div align="center">

# ModernDex V1.1

Welcome to the ModernDex GitHub Repo.
A modern Pokédex built with React and powered by PokeAPI.
Reimagining the iconic Pokédex into the modern world.

![ModernDex Screenshot](./src/assets/Screenshot%202026-04-15%20164410.png)
![ModernDex Screenshot](./src/assets/Screenshot%202026-04-15%20164440.png)

</div>

## 📖 Table of Contents

1. [Tech](#-tech)
2. [Getting Started](#-getting-started)
3. [Features](#️-features)
4. [Logic](#-logic)
5. [Components](#-components)
6. [Credits](#credits)
7. [Disclaimer](#️-disclaimer)

## 📦 Tech

- Vite + React
- AnimeJS
- PokéAPI
- Tanstack / React Query

## ✅ Getting Started

1. Clone the Repo
2. Run `npm install`
3. Run `npm run dev`

## ⚙️ Features

- Search Pokémon by name or ID
- View stats, pkmn info, evolutions
- Game-feel like animations
- Mobile and Desktop responsive

## 🧠 Logic

- Fetches the data from PokéAPI such as stats, name, desc, types, evoultions, genders, and origins, using React Query and utilizing custom hooks to grab each data and returns them to the DOM.

## 💻 Components

### 🪝 usePokemon (hooks/usePokemon.js)

Fetches and stores the API data with the use of React Query and returns the data.

### 🪝 usePkmnDesc (hooks/usePkmnDesc.js)

Fetches and returns both the description, gender and the other forms (Megas, Gmax, etc.) data from the API and save the data via React Query.

### 🪝 useEvolutionChain (hooks/useEvolutionChain.js)

Fetches the url and pushes each data that is part of a pokémon's evolution into an array.

### ⏱️useDebounce (hooks/useDebounce.js)

Creates a timeout delay to let the API properly send out the data without causing a 404 errors.

### 🎨 typeColors (utils/helpers/typeColors.js)

A dictionary that contains each color representing each types {type: color}.

### 🎨 originColors (utils/helpers/typeColors.js)

A dictionary that contains each color representing each games of origin {origin: color}

Note: PokéAPI's game_indices doesn't covering newer games (From Gen 6 to so forth), This file will be updated once PokéAPI expands game_indices.

### 🖥️ Pokedex (Pokedex/Pokedex.jsx)

The main component that contains the necessary components. Handles the overall layout.

### 🎴 Pokemon (PokemonCard/Pokemon.jsx)

Returns the pokémon artwork, sprite, cry and Id.

### 🎮 PokemonOrigins (PokemonOrigins/PokemonOrigins.jsx)

Imports originColors.js and Gets the first two games that the pokémon appears and map each origin with their respective colors.

### 📊 PokemonStats (PokemonStats/PokemonStats.jsx)

Maps each pokémon stats and displays the base stats for each pokémon.

### 🎨 PokemonTypes (PokemonTypes/PokemonTypes.jsx)

Imports typeColors.js and maps each pokémon types, styled them, and displays each types.

### ⚥ PokemonGender (PokemonGender/PokemonGender.jsx)

Displays the gender availability of each pokémon based on the gender_rate field from the species endpoints. Handles four cases: male or female only, genderless, and both genders for pokémon that can be either.

### 🔎 SearchBar (SearchBar/SearchBar.jsx)

Handles user input for searching pokémon by name or id.
Supports both button and enter key submission.

### 🧬 EvolutionChain (EvolutionChain/EvolutionChain.jsx)

Fetches the API for each pokémon that is a part of the evolution path and returns them as their own element.

## Credits

- [PokéAPI](https://pokeapi.co/)

## ⚠️ Disclaimer

- Pokémon and all related names are trademarks of Nintendo / Game Freak.
- ModernDex has no asscoiation with Nintendo / Game Freak.

[Back to top](#moderndex-v10)
