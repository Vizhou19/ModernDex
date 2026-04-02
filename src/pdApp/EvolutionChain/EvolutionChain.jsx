import "./EvolutionChain.css";

function EvolutionChain({ evoChain, onPokemonClick }) {
  const getSpriteUrl = (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  if (!evoChain.length || !evoChain) return null;

  return (
    <div className="evolution-chain">
      {evoChain.map((name, index) => (
        <div key={name.name} className="evolution-step">
          <div
            className="evolution-pokemon"
            onClick={() => onPokemonClick(name.name)}
            style={{ cursor: "pointer" }}
          >
            <img src={getSpriteUrl(name.id)} alt={name.name} />
            <span>{name.name}</span>
          </div>
          {index < evoChain.length - 1 && (
            <span className="evolution-arrow">→</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default EvolutionChain;
