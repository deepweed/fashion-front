import { type FC } from "react";

import { useFilters } from "../../useFilters";

import Checkbox from "@/components/ui/Checkbox";
import { ENERGY_VARIANTS } from "./energy.data";

const EnergyFilter: FC = () => {
  const { queryParams, updateQueryParams } = useFilters();

  return (
    <>
      {ENERGY_VARIANTS.map((energy) => (
        <Checkbox
          isChecked={
            queryParams.energyEfficiency
              ? queryParams.energyEfficiency.split("|").includes(energy)
              : false
          }
          onClick={() => {
            const currentGenres = queryParams.energyEfficiency
              ? queryParams.energyEfficiency.split("|")
              : [];

            if (currentGenres.includes(energy)) {
              const newArray = currentGenres.filter((e) => e !== energy);

              updateQueryParams("energyEfficiency", newArray.join("|"));
            } else {
              updateQueryParams(
                "energyEfficiency",
                [...currentGenres, energy].join("|")
              );
            }
          }}
          key={energy}
          className="mb-2 text-lg"
        >
          <span className="flex items-center gap-1">{energy}</span>
        </Checkbox>
      ))}
    </>
  );
};

export default EnergyFilter;
