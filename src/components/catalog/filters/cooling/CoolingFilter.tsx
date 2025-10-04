import { type FC } from "react";

import { useFilters } from "../../useFilters";
import FilterRange from "../FilterRange";

const CoolingFilter: FC = () => {
  const { queryParams, updateQueryParams } = useFilters();

  return (
    <FilterRange
      max={100}
      counData="кВт"
      fromInitialValue={
        queryParams.minCoolingC ? Number(queryParams.minCoolingC) : undefined
      }
      toInitialValue={
        queryParams.maxCoolingC ? Number(queryParams.maxCoolingC) : undefined
      }
      onChangeFromValue={(value) =>
        updateQueryParams("minCoolingC", value.toString())
      }
      onChangeToValue={(value) =>
        updateQueryParams("maxCoolingC", value.toString())
      }
    />
  );
};

export default CoolingFilter;
