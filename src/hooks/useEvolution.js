import React, { useState, useEffect } from "react";

function useEvolution(speciesData) {
  const [evoChain, setEvoChain] = useState([]);

  useEffect(() => {
    if (!speciesData?.evolution_chain?.url) return;

    fetch(speciesData.evolution_chain.url)
      .then((res) => res.json())
      .then((data) => {
        const chain = [];
        let current = data.chain;

        while (current) {
          chain.push(current.species.name);
          current = current.evolves_to?.[0] ?? null;
        }

        setEvoChain(chain);
      })
      .catch((err) => console.error(err));
  }, [speciesData]);

  return { evoChain };
}

export default useEvolution;
