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
    staleTime: Infinity,
  });

  const desc = speciesData?.flavor_text_entries
    ?.find((entry) => entry.language.name === "en")
    ?.flavor_text.replace(/\f/g, " ");

  /*
  ! NOTE: meaningfulForms requires manual maintence as edge cases exist.
  * So update this code once new Pokemon Forms released.
  * Pumkaboo and Goureist size variants are excluded
  * as they don't affect gameplay enough to warrant display in the UI.
  */
  const meaningfulForms = [
    "-altered",
    "-origin",
    "-land",
    "-sky",
    "-normal",
    "-attack",
    "-defense",
    "-speed",
    "-heat",
    "-wash",
    "-frost",
    "--fan",
    "-mow",
    "-incranate",
    "-therian",
    "-black",
    "-white",
    "-resolute",
    "-aria",
    "-pirouette",
    "-shield",
    "-blade",
    "-50",
    "-complete",
    "-baile",
    "-pom-pom",
    "-pau",
    "-sensu",
    "-midday",
    "-midnight",
    "-dusk",
    "-solo",
    "-school",
    "-disguised",
    "-busted",
    "-hangry",
    "-ice",
    "-noice",
    "-gmax",
    "-mega",
    "-alola",
    "-galar",
    "-hisui",
    "-paldea",
  ];

  const varieties =
    speciesData?.varieties?.filter((variety) => {
      const name = variety.pokemon.name;
      const isDefault = variety.is_default;

      /*
      ! Pikachu's original-cap and alola-cap contain strings
      ! that match meaningful form patterns but are actually costume variants
      */
      if (name.includes("-original-cap") || name.includes("-alola-cap"))
        return false;
      if (isDefault) return true;

      return meaningfulForms.some((form) => name.includes(form));
    }) ?? [];
  const genderRate = speciesData?.gender_rate;

  return { speciesData, desc, varieties, genderRate, isLoading, error };
}

export default usePkmnDesc;
