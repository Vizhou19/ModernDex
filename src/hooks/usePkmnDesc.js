import { useEffect, useState } from "react";

function usePkmnDesc(nameId) {
  const [speciesData, setSpeciesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!nameId || nameId.trim() === "") return;

    setIsLoading(true);
    setError(null);

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

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${baseSpeciesName}`)
      .then((res) => {
        if (!res.ok) throw new Error("Species not found");
        return res.json();
      })
      .then((data) => {
        setSpeciesData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [nameId]);

  const description = speciesData?.flavor_text_entries
    ?.find((entry) => entry.language.name === "en")
    ?.flavor_text.replace(/\f/g, " ");

  const varieties = speciesData?.varieties ?? [];

  return {
    speciesData,
    varieties,
    description,
    isLoading,
    error,
    genderRate: speciesData?.gender_rate,
  };
}

export default usePkmnDesc;
