import "./SideButtons.css";

const min_id = 1;
const max_id = 1025;

function SideButtons({ nameId, speciesId, setNameId, children }) {
  const numericNameId = Number(nameId);
  const currentId =
    Number.isInteger(numericNameId) &&
    numericNameId >= min_id &&
    numericNameId <= max_id
      ? numericNameId
      : speciesId;

  const goToPrevious = (event) => {
    event.preventDefault();
    if (!currentId || currentId <= min_id) return;
    setNameId(currentId - 1);
  };

  const goToNext = (event) => {
    event.preventDefault();
    if (!currentId || currentId >= max_id) return;
    setNameId(currentId + 1);
  };

  const handleLeftKeyPress = (event) => {
    if (event.key === "ArrowLeft") goToPrevious();
  };

  const handleRightKeyPress = (event) => {
    if (event.key === "ArrowRight") goToNext();
  };

  return (
    <div className="side-buttons">
      <button
        type="button"
        className="side-button sb-left"
        onClick={goToPrevious}
        onKeyDown={handleLeftKeyPress}
        disabled={!currentId || currentId <= min_id}
        aria-label="Previous Pokémon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
      </button>
      {children}
      <button
        type="button"
        className="side-button sb-right"
        onClick={goToNext}
        onKeyDown={handleRightKeyPress}
        disabled={!currentId || currentId >= max_id}
        aria-label="Next Pokémon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      </button>
    </div>
  );
}

export default SideButtons;
