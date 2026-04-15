import "./PokemonGender.css";

function PokemonGender({ genderRate }) {
  if (genderRate === undefined || genderRate === null) return null;

  const getGender = () => {
    const genderless = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-gender-neuter"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V15.5a.5.5 0 0 1-1 0V9.975A5 5 0 0 1 3 5"
        />
      </svg>
    );
    const male = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-gender-male"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
        />
      </svg>
    );
    const female = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-gender-female"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5"
        />
      </svg>
    );
    if (genderRate === -1) {
      return (
        <span className="gender-badge" id="genderless">
          {genderless} Genderless
        </span>
      );
    } else if (genderRate === 0) {
      return (
        <span className="gender-badge" id="male">
          {male} Male
        </span>
      );
    } else if (genderRate === 8) {
      return (
        <span className="gender-badge" id="female">
          {female} Female
        </span>
      );
    }
    return (
      <>
        <span className="gender-badge" id="male">
          {male} Male
        </span>
        <span className="gender-badge" id="female">
          {female} Female
        </span>
      </>
    );
  };

  return <div className="pokemon-gender">{getGender()}</div>;
}

export default PokemonGender;
