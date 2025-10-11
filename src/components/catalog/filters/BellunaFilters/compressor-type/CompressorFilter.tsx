import { type FC } from "react";

import { useFilters } from "@/components/catalog/useFilters";

import Checkbox from "@/components/ui/Checkbox";
import { COMPRESSOR_VARIANTS } from "./compressor-variants.data";

const CompressorFilter: FC = () => {
  const { queryParams, updateQueryParams } = useFilters();

  return (
    <>
      {COMPRESSOR_VARIANTS.map(({ label, d }) => (
        <Checkbox
          key={d}
          isChecked={queryParams.compressorType === d}
          onClick={() => updateQueryParams("compressorType", d)}
          className="mb-2 text-lg"
        >
          <span className="flex items-center gap-1">{label}</span>
        </Checkbox>
      ))}
    </>
  );
};

export default CompressorFilter;
