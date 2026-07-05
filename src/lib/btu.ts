export const btuCommercialCapacities = [9000, 12000, 18000, 24000, 30000, 36000, 48000, 60000] as const;

export type SunExposure = "nao" | "manha" | "tarde" | "dia_todo";

export const sunExposureLabels: Record<SunExposure, string> = {
  nao: "Não",
  manha: "Sim, pela manhã",
  tarde: "Sim, à tarde",
  dia_todo: "Sim, o dia todo"
};

type BtuInput = {
  width: number;
  length: number;
  people: number;
  electronics: number;
  sun: SunExposure;
};

export function calculateEstimatedBtu({ width, length, people, electronics, sun }: BtuInput) {
  const area = width * length;
  let btus = area * 600;

  if (people > 1) {
    btus += (people - 1) * 600;
  }

  btus += electronics * 600;

  if (sun === "manha") btus *= 1.1;
  if (sun === "tarde") btus *= 1.15;
  if (sun === "dia_todo") btus *= 1.2;

  return Math.round(btus);
}

export function suggestCommercialBtu(estimatedBtu: number): number {
  const match = btuCommercialCapacities.find((capacity) => capacity >= estimatedBtu);
  return match ?? btuCommercialCapacities[btuCommercialCapacities.length - 1];
}
