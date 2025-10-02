import { type FC } from "react";

import Range from "@/components/ui/Range";

import { useFilters } from "../../useFilters";
import FilterWrapper from "../FilterWrapper";

const PriceFilter: FC = () => {
  const { queryParams, updateQueryParams } = useFilters();

  return (
    <FilterWrapper title="ЦЕНА">
      <Range
        max={1000000}
        fromInitialValue={
          queryParams.minPrice ? Number(queryParams.minPrice) : undefined
        }
        toInitialValue={
          queryParams.maxPrice ? Number(queryParams.maxPrice) : undefined
        }
        onChangeFromValue={(value) =>
          updateQueryParams("minPrice", value.toString())
        }
        onChangeToValue={(value) =>
          updateQueryParams("maxPrice", value.toString())
        }
      />
    </FilterWrapper>
  );
};

export default PriceFilter;
