import { useQuery } from "@tanstack/react-query";

const fetchPkmnSpecies = async (nameId) => {
  const hyphenatedNames = [
    "mr-mime",
    "ho-oh",
    "porygon-z",
    "mime-jr",
    "mr-mime",
    "jangmo-o",
    "hakamo-o",
    "kommo-o",
  ];

  const baseSpeciesName = hyphenatedNames.includes(nameId)
    ? nameId
    : nameId.split("-")[0];

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${baseSpeciesName}`,
  );
  if (!res.ok) throw new Error("Species not found");
  return res.json();
};

function usePkmnDesc(nameId) {
  const {
    data: speciesData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["species", nameId],
    queryFn: () => fetchPkmnSpecies(nameId),
    enabled: !!nameId && nameId.trim() !== "",
  });

  const desc = speciesData?.flavor_text_entries
    ?.find((entry) => entry.language.name === "en")
    ?.flavor_text.replace(/\f/g, " ");
  const varieties = speciesData?.varieties ?? [];
  const genderRate = speciesData?.gender_rate;

  return { speciesData, desc, varieties, genderRate, isLoading, error };
}

export default usePkmnDesc;
