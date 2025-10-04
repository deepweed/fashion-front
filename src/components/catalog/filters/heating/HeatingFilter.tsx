import { type FC } from "react";

import { useFilters } from "../../useFilters";
import FilterRange from "../FilterRange";

const HeatingFilter: FC = () => {
  const { queryParams, updateQueryParams } = useFilters();

  return (
    <FilterRange
      counData="кВт"
      max={100}
      fromInitialValue={
        queryParams.minHeatingC ? Number(queryParams.minHeatingC) : undefined
      }
      toInitialValue={
        queryParams.maxHeatingC ? Number(queryParams.maxHeatingC) : undefined
      }
      onChangeFromValue={(value) =>
        updateQueryParams("minHeatingC", value.toString())
      }
      onChangeToValue={(value) =>
        updateQueryParams("maxHeatingC", value.toString())
      }
    />
  );
};

export default HeatingFilter;
