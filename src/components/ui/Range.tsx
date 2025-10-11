"use client";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { type FC, useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import Input from "./Input";

interface IRange {
  min?: number;
  max: number;
  fromInitialValue?: number;
  toInitialValue?: number;
  onChangeFromValue: (value: number) => void;
  onChangeToValue: (value: number) => void;
}

const Range: FC<IRange> = ({
  min = 0,
  max,
  onChangeFromValue,
  onChangeToValue,
  fromInitialValue = 0,
  toInitialValue = max,
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
    <div className="w-full">
      <div className="flex items-center justify-between gap-x-4 mb-4">
        <Input
          type="number"
          className="w-1/2 h-10 bg-white border border-zinc-200 rounded-xl"
          placeholder="От, ₽"
        />
        <Input
          type="number"
          className="w-1/2 h-10 bg-white border border-zinc-200 rounded-xl"
          placeholder="До, ₽"
        />
      </div>

      <div className="px-2">
        <Slider
          range
          step={1000}
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
      </div>
    </div>
  );
};

export default Range;
