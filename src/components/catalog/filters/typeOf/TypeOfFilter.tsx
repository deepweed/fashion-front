import { type FC } from "react";

import { useFilters } from "../../useFilters";

import Checkbox from "@/components/ui/Checkbox";
import { TYPEOF_VARIANTS } from "./type-of.data";
import { convertTypeOf } from "@/utils/convertTypeOfName";

const TypeOfFilter: FC = () => {
  const { queryParams, updateQueryParams } = useFilters();

  return (
    <>
      {TYPEOF_VARIANTS.map((typeOf) => (
        <Checkbox
          isChecked={queryParams.typeOf?.includes(typeOf) || false}
          onClick={() => {
            const currentGenres = queryParams.typeOf
              ? queryParams.typeOf.split("|")
              : [];

            if (currentGenres.includes(typeOf)) {
              const newArray = currentGenres.filter((t) => t !== typeOf);

              updateQueryParams("typeOf", newArray.join("|"));
            } else {
              updateQueryParams("typeOf", [...currentGenres, typeOf].join("|"));
            }
          }}
          key={typeOf}
          className="mb-2 text-lg"
        >
          <span className="flex items-center gap-1">
            {convertTypeOf(typeOf)}
          </span>
        </Checkbox>
      ))}
    </>
  );
};

export default TypeOfFilter;
