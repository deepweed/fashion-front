import { useFilters } from "../useFilters";

import type { EnumProductSort } from "@/services/product.types";
import { Select } from "@/components/ui/select/Select";
import type { FC } from "react";
import { SORT_SELECT_DATA } from "./sort-select.data";

interface IMobile {
  isMobile: boolean;
}

const SortDropdown: FC<IMobile> = ({ isMobile }) => {
  const { queryParams, updateQueryParams } = useFilters();

  return (
    <div className="text-right z-10">
      <Select<EnumProductSort>
        isMobile={isMobile}
        data={SORT_SELECT_DATA}
        onChange={(value) => updateQueryParams("sort", value.key.toString())}
        value={SORT_SELECT_DATA.find((value) => value.key === queryParams.sort)}
        title="Сортировать как"
      />
    </div>
  );
};

export default SortDropdown;
