import { useState, useEffect } from "react";

function useEvolution(speciesData) {
  const [evoChain, setEvoChain] = useState([]);

  useEffect(() => {
    if (!speciesData?.evolution_chain?.url) return;

    const speciesId = speciesData.id;

    if (speciesId >= 10000) {
      setEvoChain([]);
      return;
    }

    let cancelled = false;

    fetch(speciesData.evolution_chain.url)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          const chain = [];
          let current = data.chain;

          while (current) {
            const speciesName = current.species.name;
            const speciesUrl = current.species.url;

            const speciesId = speciesUrl.split("/").filter(Boolean).pop();

            chain.push({
              name: speciesName,
              id: speciesId,
            });

            current = current.evolves_to?.[0] ?? null;
          }
          setEvoChain(chain);
        }
      })
      .catch((err) => {
        if (!cancelled) console.error(err);
      });

    return () => {
      cancelled = true;
    };
  }, [speciesData]);

  return { evoChain };
}

export default useEvolution;
