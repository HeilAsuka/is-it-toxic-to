import { ANIMAL_EMOJI_MAP } from "../constants";

export function getMetaDescription(plant: Plant): string {
  const animals = plant.toxicTo
    .map((animal) => `${ANIMAL_EMOJI_MAP[animal]}${animal}`)
    .join("、");
  return `${plant.name}（${plant.scientificName}）对${animals}有毒。${
    plant.clinicalSigns !== null ? `临床症状：${plant.clinicalSigns}` : ""
  }`;
}
