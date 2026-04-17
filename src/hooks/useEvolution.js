import { useQuery } from "@tanstack/react-query";

const fetchEvoChain = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Evolution chain not found");
  return res.json();
};

function useEvolution(speciesData) {
  const evoUrl = speciesData?.evolution_chain?.url;
  const isAltForm = speciesData?.id >= 10000;

  const { data } = useQuery({
    queryKey: ["evolution", evoUrl],
    queryFn: () => fetchEvoChain(evoUrl),
    enabled: !!evoUrl && !isAltForm,
    staleTime: Infinity,
  });

  const evoChain = [];

  if (data) {
    let current = data.chain;
    while (current) {
      const speciesUrl = current.species.url;
      const id = speciesUrl.split("/").filter(Boolean).pop();
      evoChain.push({ name: current.species.name, id });
      current = current.evolves_to?.[0] ?? null;
    }
  }

  return { evoChain };
}

export default useEvolution;
