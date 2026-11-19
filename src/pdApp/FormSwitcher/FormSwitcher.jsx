import { formatPokemonName } from "../../utils/helpers/formatPokemon";
import "./FormSwitcher.css";

function FormSwitcher({ varieties, currentForm, onFormChange }) {
  if (!varieties || varieties.length <= 1) return null;

  return (
    <div className="forms-switcher">
      {varieties.map((variety) => (
        <button
          key={variety.pokemon.name}
          className={[
            "form-button",
            currentForm === variety.pokemon.name ? "active" : "",
          ].join(" ")}
          onClick={() => onFormChange(variety.pokemon.name)}
        >
          {formatPokemonName(variety.pokemon.name)}
        </button>
      ))}
    </div>
  );
}

export default FormSwitcher;
