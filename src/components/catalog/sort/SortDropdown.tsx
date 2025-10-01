import { useFilters } from "../useFilters";

import type { EnumProductSort } from "@/services/product.types";
import { Select } from "@/components/ui/select/Select";
import type { FC } from "react";
import { SORT_SELECT_DATA } from "./sort-select.data";

const SortDropdown: FC = () => {
  const { queryParams, updateQueryParams } = useFilters();

  return (
    <div className="text-right z-10">
      <Select<EnumProductSort>
        isMobile={true}
        data={SORT_SELECT_DATA}
        onChange={(value) => updateQueryParams("sort", value.key.toString())}
        value={SORT_SELECT_DATA.find((value) => value.key === queryParams.sort)}
        title="Сортировать"
      />
    </div>
  );
};

export default SortDropdown;
