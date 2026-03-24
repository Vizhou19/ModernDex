# ModernDex

Welcome to the ModernDex GitHub Repo.
A modern Pokedex built with React and powered by PokeAPI.
Reimagining the iconic Pokedex into the modern world.

# Note: Still In Progress

## Table of Contents

1. Tech
2. Getting Started
3. Features
4. Logic
5. Components
6. Credits
7. Disclaimer

## Tech

- Vite + React
- AnimeJS
- PokeAPI

## Getting Started

1. Clone the Repo
2. Run `npm install`
3. Run `npm run dev`

## Features

- Search Pokemon by name or ID
- View stats, types, abilites, and cries
- Animated stat bars (Soon)
- Mobile and Desktop responsive

## Logic

- Fetches the data from PokeAPI such as stats, name, and features. Displaying them to the website.

## Components

### usePokemon (hooks/usePokemon.js)

A Custom hook that fetches the API data with the use of state and effect hooks and returns the data.

### usePkmnDesc (hooks/usePkmnDesc.js)

A Custom hook that grabs and returns both the description and the other forms (Megas, Gmax, etc.) data from the API.

### Pokedex (Pokedex/Pokedex.jsx)

The main component that contains the necessary components. Handles the overall layout.

### Pokemon (PokemonCard/Pokemon.jsx)

Imports PokemonStats, grabs and return each variables that contains origin, sprite, types, and cries.

### PokemonStats (PokemonStats/PokemonStats.jsx)

Maps each pokemon stats and displays the base stats for each Pokemon.

### SearchBar (SearchBar/SearchBar.jsx)

Handles user input for searching Pokemon by name or id.
Supports both button and enter key submission.

## Credits

- [PokeAPI](https://pokeapi.co/)

## Disclaimer

- Pokemon and all related names are trademarks of Nintendo / Game Freak.
- ModernDex has no asscoiation with Nintendo / Game Freak.
