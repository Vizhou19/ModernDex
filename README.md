# ModernDex
Welcome to the ModernDex GitHub Repo. 
A modern Pokedex built with React, powered by PokeAPI, and smooth animations and the style of a Rotom with the use of AnimeJS.
Reimagining the iconic Pokedex into the Modern World.

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
- AnimeJS (In the works)
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
- Fetches the Data from PokeAPI such as Stats, Name, and Features. Displaying them to the website.

## Components

### Pokemon (Pokemon/Pokemon.jsx)
The main component that contains the necessary components. Handles the overall layout.

### usePokemon (hooks/usePokemon.js)
A Custom hook that fetches the data with the use of State and Effect Hooks and returns the Data.

### PokemonStats (PokemonStats/PokemonStats.jsx)
Maps each pokemon stats and displays the base stats for each Pokemon.

### SearchBar (SearchBar/SearchBar.jsx)
Handles user input for searching Pokemon by name or id.
Supports both button and enter key submission.

## Credits
- [PokeAPI](https://pokeapi.co/)

## Disclaimer
- Pokemon and all related names are trademarks of by Nintendo / Game Freak. 
- ModernDex has no asscoiation with Nintendo / Game Freak.
