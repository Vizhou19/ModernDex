import "./PokemonOrigins.css";

function PokemonOrigins({ origin }) {
  const origins =
    origin.game_indices?.[0]?.version.name.charAt(0).toUpperCase() +
    origin.game_indices?.[0]?.version.name.slice(1);
  return (
    <div className="pokemon-origins">
      <h3>Origins:</h3>
      <p>{origin.game_indices?.length > 0 ? origins : "Not found"}</p>
    </div>
  );
}

export default PokemonOrigins;
