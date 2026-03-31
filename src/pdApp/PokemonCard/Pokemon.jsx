import React, { useRef } from "react";
// * Files
import PokemonStats from "../PokemonStats/PokemonStats";
import PokemonTypes from "../PokemonTypes/PokemonTypes";
// * AnimeJS
import { animate } from "animejs";

function Pokemon({ data }) {
  if (!data) {
    return <div>Loading...</div>;
  }

  const spriteRef = useRef(null);

  const handleSpriteClick = () => {
    const audio = new Audio(data?.cries?.latest);
    audio.volume = 0.27;
    audio.play();

    animate(spriteRef.current, {
      keyframes: [
        { translateY: 0 },
        { translateY: -30 },
        { translateY: 0 },
        { translateY: -20 },
        { translateY: 0 },
      ],
      duration: 300,
      ease: "outInSine",
    });
  };

  const origins = (
    <div>
      <h3>Origins:</h3>
      <p>
        {data.game_indices?.[0]?.version.name.charAt(0).toUpperCase() +
          data.game_indices?.[0]?.version.name.slice(1)}
      </p>
    </div>
  );

  const sprites = (
    <div className="sprite-imgs">
      <img
        ref={spriteRef}
        src={data.sprites?.front_default}
        onClick={handleSpriteClick}
        alt="sprite"
        style={{ cursor: "pointer" }}
      />
      <img
        src={data.sprites?.other["official-artwork"]?.front_default}
        alt="artwork"
      />
    </div>
  );

  return (
    <div>
      <h2>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
      <p>#{data.id}</p>

      {data.sprites ? sprites : <p>Enter a Pokemon</p>}

      {data.game_indices?.length > 0 ? origins : <p>Not available</p>}

      <PokemonTypes types={data?.types} />

      <PokemonStats stats={data?.stats} />
    </div>
  );
}

export default Pokemon;
