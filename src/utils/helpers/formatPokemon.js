export const formatPokemonName = (name) => {
  const specialCases = {
    "mr-mime": "Mr. Mime",
    "mr-rime": "Mr. Rime",
    "ho-oh": "Ho-Oh",
    "porygon-z": "Porygon-Z",
    "jangmo-o": "Jangmo-O",
    "kommo-o": "Kommo-O",
    "mime-jr": "Mime Jr",
  };

  if (specialCases[name]) return specialCases[name];

  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
