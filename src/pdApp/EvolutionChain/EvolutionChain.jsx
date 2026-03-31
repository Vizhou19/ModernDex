import { useState, useEffect } from "react";

function EvolutionChain({ evoChain, onPokemonClick }) {
  const [sprites, setSprites] = useState({});

  useEffect(() => {
    if (!evoChain.length) return;

    evoChain.forEach((name) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then((data) => {
          setSprites((prev) => ({
            ...prev,
            [name]: data.sprites?.front_default,
          }));
        })
        .catch((err) => console.error(err));
    });
  }, [evoChain]);

  if (!evoChain.length) return null;

  return (
    <div className="evolution-chain">
      {evoChain.map((name, index) => (
        <div key={name} className="evolution-step">
          <div
            className="evolution-pokemon"
            onClick={() => onPokemonClick(name)}
            style={{ cursor: "pointer" }}
          >
            <img src={sprites[name]} alt={name} />
            <span>{name}</span>
          </div>
          {index < evoChain - 1 && <span className="evolution-arrow">→</span>}
        </div>
      ))}
    </div>
  );
}

export default EvolutionChain;
