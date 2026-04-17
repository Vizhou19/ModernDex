import { useRef } from "react";
// * Files
import "./Pokemon.css";
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

  const sprites = (
    <div className="sprite-imgs">
      <img
        ref={spriteRef}
        src={data.sprites?.front_default}
        onClick={handleSpriteClick}
        alt={data?.name}
        style={{ cursor: "pointer" }}
        id="pokemon-sprite"
        width={80}
        height={80}
        fetchPriority="high"
        className="skeleton"
      />
      <img
        src={data.sprites?.other["official-artwork"]?.front_default}
        alt="artwork"
        id="pokemon-artwork"
        width={380}
        height={380}
        fetchPriority="high"
        className="skeleton"
      />
    </div>
  );

  return (
    <div className="pokemon-section">
      <div className="pokemon-left pokemon-top">
        <h2 id="pokemon-name">{data.name}</h2>
        <p id="pokemon-id">#{data.id}</p>
        {data.sprites ? sprites : <p>Enter a Pokemon</p>}
      </div>
    </div>
  );
}

export default Pokemon;
