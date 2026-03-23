import { useEffect, useState } from "react";

function usePokemon(nameId) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!nameId || nameId.trim() === "") return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${nameId}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [nameId]);

  return { data };
}

export default usePokemon;
