import { type FC } from "react";

import { useFilters } from "../../useFilters";

import Checkbox from "@/components/ui/Checkbox";
import { BRAND_VARIANTS } from "./brands-variants.data";
import { formatBrandName } from "@/utils/formartBrandName";

const BrandFilter: FC = () => {
  const { queryParams, updateQueryParams } = useFilters();

  return (
    <>
      {BRAND_VARIANTS.map((brand) => (
        <Checkbox
          isChecked={queryParams.brands?.includes(brand) || false}
          onClick={() => {
            const currentGenres = queryParams.brands
              ? queryParams.brands.split("|")
              : [];

            if (currentGenres.includes(brand)) {
              // Удаляем жанр из списка, если он уже выбран
              const newArray = currentGenres.filter((b) => b !== brand);

              updateQueryParams("brands", newArray.join("|"));
            } else {
              // Добавляем жанр к списку
              updateQueryParams("brands", [...currentGenres, brand].join("|"));
            }
          }}
          key={brand}
          className="mb-2 text-lg"
        >
          <span className="flex items-center gap-1">
            {formatBrandName(brand)}
          </span>
        </Checkbox>
      ))}
    </>
  );
};

export default BrandFilter;
