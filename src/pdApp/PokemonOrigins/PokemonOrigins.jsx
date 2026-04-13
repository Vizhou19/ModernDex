import "./PokemonOrigins.css";
import { originColors } from "../../utils/helpers/originColors";

function PokemonOrigins({ origin }) {
  if (!origin) return null;

  return (
    <div className="pokemon-origins">
      {origin.game_indices?.length > 0 &&
        origin.game_indices.slice(0, 2).map((originObj) => (
          <span
            key={originObj.version.name}
            className="origin-badge"
            style={{ backgroundColor: originColors[originObj.version.name] }}
          >
            {originObj.version.name}
          </span>
        ))}
    </div>
  );
}

export default PokemonOrigins;
