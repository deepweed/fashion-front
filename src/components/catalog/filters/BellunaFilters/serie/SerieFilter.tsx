import { type FC } from "react";

import { useFilters } from "@/components/catalog/useFilters";

import Checkbox from "@/components/ui/Checkbox";
import { SERIE_VARIANTS } from "./serie-variants.data";

const SerieFilter: FC = () => {
  const { queryParams, updateQueryParams } = useFilters();

  return (
    <>
      {SERIE_VARIANTS.map(({ label, d }) => (
        <Checkbox
          isChecked={queryParams.serie?.includes(d) || false}
          onClick={() => {
            const currentGenres = queryParams.serie
              ? queryParams.serie.split("|")
              : [];

            if (currentGenres.includes(d)) {
              // Удаляем жанр из списка, если он уже выбран
              const newArray = currentGenres.filter((data) => data !== d);

              updateQueryParams("serie", newArray.join("|"));
            } else {
              // Добавляем жанр к списку
              updateQueryParams("serie", [...currentGenres, d].join("|"));
            }
          }}
          key={d}
          className="mb-2 text-lg"
        >
          <span className="flex items-center gap-1">{label}</span>
        </Checkbox>
      ))}
    </>
  );
};

export default SerieFilter;
