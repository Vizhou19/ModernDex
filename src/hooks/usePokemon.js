import { useQuery } from "@tanstack/react-query";

async function fetchPokemon(nameId) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameId}`, {
    headers: {
      "Cache-Control": "max-age=3600", // * Tells the browser to keep it for an hour.
    },
  });
  if (!res.ok) throw new Error("Pokemon not found");
  return res.json();
}

function usePokemon(nameId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemon", nameId],
    queryFn: () => fetchPokemon(nameId),
    enabled: !!nameId && nameId.trim() !== "",
  });

  return { data, isLoading, error };
}
export default usePokemon;
