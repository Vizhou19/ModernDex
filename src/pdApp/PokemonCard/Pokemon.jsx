import React from "react";
import PokemonStats from "../PokemonStats/PokemonStats";

function Pokemon({ data }) {
  if (!data) {
    return <div>Loading...</div>;
  }

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
    <div>
      <h3>Sprites:</h3>
      <img src={data.sprites?.front_default} alt="sprite" />
      <img
        src={data.sprites?.other["official-artwork"]?.front_default}
        alt="artwork"
      />
    </div>
  );

  const types = (
    <div>
      <h3>Types:</h3>
      <ul>
        {data.types?.map((t) => (
          <li key={t.slot}>{t.type.name}</li>
        ))}
      </ul>
    </div>
  );

  const cries = (
    <div>
      <h3>Cries:</h3>
      <audio controls src={data.cries?.latest}>
        Your browser doesn't support audio
      </audio>
    </div>
  );

  return (
    <div>
      <h2>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
      <p>ID: {data.id}</p>

      {data.sprites ? sprites : <p>Enter a Pokemon</p>}

      {data.game_indices?.length > 0 ? origins : <p>Not available</p>}

      {data.types ? types : <p>Go support my stuff</p>}

      {data.cries ? cries : <p>See ya</p>}

      <PokemonStats stats={data?.stats} />
    </div>
  );
}

export default Pokemon;
