export enum EnergyEfficiency {
  A123 = "A+++",
  A12 = "A++",
  A1 = "A+",
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
}

export interface IAirConditionerStat {
  id: number;
  productId: number;

  coolingCapacity: number;
  heatingCapacity: number;
  areaCoverage: number;
  energyEfficiency: EnergyEfficiency;

  noiseLevelIndoor: number;
  noiseLevelOutdoor: number;
  powerConsumption: number;
  refrigerantType: string;
  dimensionsIndoor: string;
  dimensionsOutdoor: string;
  weightIndoor: number;
  weightOutdoor: number;

  inverter: boolean;
  wifi: boolean;
}

export interface IRefrigeratorStat {
  id: number;
  productId: number;

  tempRange: number;
  coolingCapacity: number;
  refrigerantType: string;
  refrigerantMass: number;
  installationType: string;
  powerMax: number;
  compressorType: string;
  voltage: number;
  chamberVolumeM10: number;
  chamberVolumeM20: number;
  defrostType: string;

  // Внешний блок
  dimensionsOutdoor: string; // Размеры (ВхШхГ), см
  weightOutdoor: number; // Вес (кг)

  // Внутренний блок
  dimensionsIndoor: string;
  weightIndoor: number;
}
