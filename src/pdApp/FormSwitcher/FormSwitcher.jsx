import "./FormSwitcher.css";

function FormSwitcher({ varieties, currentForm, onFormChange }) {
  if (varieties.length <= 1) return null;

  return (
    <div className="forms-switcher">
      {varieties.map((variety) => (
        <button
          key={variety.pokemon.name}
          className={currentForm === variety.pokemon.name ? "active" : ""}
          onClick={() => onFormChange(variety.pokemon.name)}
        >
          {variety.pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default FormSwitcher;
