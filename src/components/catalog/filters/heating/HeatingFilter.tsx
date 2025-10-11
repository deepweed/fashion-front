"use client";

import { useState, useEffect, type FC } from "react";

import { useFilters } from "../../useFilters";
import Input from "@/components/ui/Input";
import { useDebounce } from "@/hooks/useDebounce";
import useFiltersStore from "@/store/catalog.store";

const HeatingFilter: FC = () => {
  const { updateQueryParams, queryParams } = useFilters();
  const { resetVersion } = useFiltersStore();

  const [fromValue, setFromValue] = useState<string>(
    queryParams.minHeatingC ?? ""
  );
  const [toValue, setToValue] = useState<string>(queryParams.maxHeatingC ?? "");
  const debouncedFromValue = useDebounce(fromValue, 500);
  const debouncedToValue = useDebounce(toValue, 500);

  useEffect(() => {
    if (debouncedFromValue !== "" && debouncedFromValue !== undefined) {
      updateQueryParams("minHeatingC", debouncedFromValue);
    }
  }, [debouncedFromValue]);

  useEffect(() => {
    if (debouncedToValue !== "" && debouncedToValue !== undefined) {
      updateQueryParams("maxHeatingC", debouncedToValue);
    }
  }, [debouncedToValue]);

  useEffect(() => {
    setFromValue("");
    setToValue("");
  }, [resetVersion]);

  return (
    <div className="flex items-center justify-between gap-x-4 mb-4">
      <Input
        inputMode="numeric"
        pattern="\d*"
        value={fromValue}
        onChange={(e) => {
          const onlyDigits = e.target.value.replace(/\D/g, "");
          setFromValue(onlyDigits);
        }}
        className="w-1/2 h-10 bg-white border border-zinc-200 rounded-xl"
        placeholder="От, кВт"
      />
      <Input
        inputMode="numeric"
        pattern="\d*"
        value={toValue}
        onChange={(e) => {
          const onlyDigits = e.target.value.replace(/\D/g, "");
          setToValue(onlyDigits);
        }}
        className="w-1/2 h-10 bg-white border border-zinc-200 rounded-xl"
        placeholder="До, кВт"
      />
    </div>
  );
};

export default HeatingFilter;
