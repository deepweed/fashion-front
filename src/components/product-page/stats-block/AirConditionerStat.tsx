import type { IAirConditionerStat } from "@/types/stat.interface";

const airConditionerLabels: Record<keyof IAirConditionerStat, string> = {
  id: "ID",
  productId: "ID товара",
  inverter: "Инвертор",
  wifi: "Wi-Fi",
  coolingCapacity: "Мощность охлаждения (кВт)",
  heatingCapacity: "Мощность нагрева (кВт)",
  areaCoverage: "Площадь помещения (м²)",
  energyEfficiency: "Класс энергоэффективности",
  noiseLevelIndoor: "Уровень шума (в помещении)",
  noiseLevelOutdoor: "Уровень шума (снаружи)",
  powerConsumption: "Потребляемая мощность (Вт)",
  refrigerantType: "Тип хладагента",
  dimensionsIndoor: "Размеры внутреннего блока (мм)",
  dimensionsOutdoor: "Размеры внешнего блока (мм)",
  weightIndoor: "Вес внутреннего блока (кг)",
  weightOutdoor: "Вес внешнего блока (кг)",
};

const excludedKeys = ["id", "productId"];

const AirStatBlock: React.FC<{ stat: IAirConditionerStat }> = ({ stat }) => {
  if (!stat) {
    return <div>Характеристики отсутствуют</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {Object.entries(stat)
        .filter(([key]) => !excludedKeys.includes(key))
        .map(([key, value]) => {
          const label = airConditionerLabels[key as keyof IAirConditionerStat];
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
                  : value ?? "—"}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default AirStatBlock;
