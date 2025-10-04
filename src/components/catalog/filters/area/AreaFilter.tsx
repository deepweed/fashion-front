import { type FC } from "react";

import { useFilters } from "../../useFilters";
import FilterRange from "../FilterRange";

const AreaFilter: FC = () => {
  const { queryParams, updateQueryParams } = useFilters();

  return (
    <FilterRange
      counData="м2"
      max={100}
      fromInitialValue={
        queryParams.minArea ? Number(queryParams.minArea) : undefined
      }
      toInitialValue={
        queryParams.maxArea ? Number(queryParams.maxArea) : undefined
      }
      onChangeFromValue={(value) =>
        updateQueryParams("minArea", value.toString())
      }
      onChangeToValue={(value) =>
        updateQueryParams("maxArea", value.toString())
      }
    />
  );
};

export default AreaFilter;
