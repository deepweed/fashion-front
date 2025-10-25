import type { IRefrigeratorStat } from "@/types/stat.interface";

const refrigeratorLabels: Record<keyof IRefrigeratorStat, string> = {
  id: "ID",
  productId: "ID товара",

  tempRange: "Температурный диапазон (°C)",
  coolingCapacity: "Холодопроизводительность (Вт)",
  refrigerantType: "Тип хладагента",
  refrigerantMass: "Масса хладагента (г)",
  installationType: "Тип установки",
  powerMax: "Максимальная мощность (Вт)",
  compressorType: "Тип компрессора",
  voltage: "Напряжение (В)",
  chamberVolumeM10: "Объем камеры M10 (л)",
  chamberVolumeM20: "Объем камеры M20 (л)",
  defrostType: "Тип разморозки",

  // Внешний блок
  dimensionsOutdoor: "Размеры внешнего блока (В×Ш×Г, см)",
  weightOutdoor: "Вес внешнего блока (кг)",

  // Внутренний блок
  dimensionsIndoor: "Размеры внутреннего блока (В×Ш×Г, см)",
  weightIndoor: "Вес внутреннего блока (кг)",
};

const excludedKeys = ["id", "productId"];

export const RefrigeratorStatsBlock: React.FC<{ stat: IRefrigeratorStat }> = ({
  stat,
}) => {
  if (!stat) {
    return <div>Характеристики отсутствуют</div>;
  }

  return (
    <div className="flex flex-col gap-y-5">
      {Object.entries(stat)
        .filter(([key]) => !excludedKeys.includes(key))
        .map(([key, value]) => {
          const label = refrigeratorLabels[key as keyof IRefrigeratorStat];
          if (!label) return null;

          return (
            <div key={key} className="block md:flex md:items-center md:gap-x-4">
              <span className="whitespace-nowrap text-sm text-zinc-600">
                {label}
              </span>
              <span className="border-b border-dotted border-zinc-400 flex-grow"></span>
              <span className="whitespace-nowrap text-sm">
                {typeof value === "boolean"
                  ? value
                    ? "Да"
                    : "Нет"
                  : value ?? "N/A"}
              </span>
            </div>
          );
        })}
    </div>
  );
};
