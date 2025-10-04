"use client";

import { useDebounce } from "@/hooks/useDebounce";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { type FC, useEffect, useState } from "react";

interface IRange {
  min?: number;
  max: number;
  fromInitialValue?: number;
  toInitialValue?: number;
  onChangeFromValue: (value: number) => void;
  onChangeToValue: (value: number) => void;
  counData?: string;
}

const FilterRange: FC<IRange> = ({
  min = 0,
  max,
  onChangeFromValue,
  onChangeToValue,
  fromInitialValue = 0,
  toInitialValue = max,
  counData,
}) => {
  const [fromValue, setFromValue] = useState(fromInitialValue);
  const [toValue, setToValue] = useState(toInitialValue);

  useEffect(() => {
    setFromValue(fromInitialValue);
    setToValue(toInitialValue);
  }, [fromInitialValue, toInitialValue]);

  const debouncedFromValue = useDebounce(fromValue, 500);
  const debouncedToValue = useDebounce(toValue, 500);

  // Обновляем значения с дебаунсом
  useEffect(() => {
    if (debouncedFromValue !== min) {
      onChangeFromValue(debouncedFromValue);
    }
  }, [debouncedFromValue]);

  useEffect(() => {
    if (debouncedToValue !== max) {
      onChangeToValue(debouncedToValue);
    }
  }, [debouncedToValue]);

  return (
    <div className="w-full px-2">
      <Slider
        range
        min={min}
        max={max}
        value={[fromValue, toValue]}
        onChange={(value) => {
          if (typeof value === "object") {
            setFromValue(value[0]);
            setToValue(value[1]);
          }
        }}
        styles={{
          track: {
            backgroundColor: "#2563eb", // синий трек
            height: 4,
          },
          rail: {
            backgroundColor: "#d1d5db", // серый фон
            height: 4,
          },
          handle: {
            borderColor: "#2563eb",
            backgroundColor: "#fffff",
            width: 16,
            height: 16,
            boxShadow: "0 0 0 2px #2563eb33", // лёгкая подсветка вокруг
          },
        }}
      />
      <div className="flex justify-between text-sm text-slate-400 mt-2">
        <span>
          От {fromInitialValue}
          {counData}
        </span>
        <span>
          До {toInitialValue}
          {counData}
        </span>
      </div>
    </div>
  );
};

export default FilterRange;
