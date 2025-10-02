"use client";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { type FC, useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

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
  fromInitialValue,
  toInitialValue,
}) => {
  const [fromValue, setFromValue] = useState(fromInitialValue ?? min);
  const [toValue, setToValue] = useState(toInitialValue ?? max);

  // локальное состояние обновляется сразу
  const handleChange = (value: number[]) => {
    setFromValue(value[0]);
    setToValue(value[1]);
  };

  // срабатывает только когда юзер отпустил ползунок
  const handleAfterChange = (value: number[]) => {
    setFromValue(value[0]);
    setToValue(value[1]);
    // дергаем наружные колбэки
    onChangeFromValue(value[0]);
    onChangeToValue(value[1]);
  };

  return (
    <div className="w-full px-1">
      {/* Верхняя панель с "инпутами" */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center justify-between gap-x-3 mb-3 w-full">
          <span className="flex items-center justify-between w-full h-10 border border-zinc-200 rounded-lg font-medium text-[0.8rem] px-2">
            <span className="text-gray-400 select-none">от</span>
            {fromValue.toLocaleString()} ₽
          </span>
          <span className="text-gray-400 font-semibold">-</span>
          <span className="flex items-center justify-between w-full h-10 border border-zinc-200 rounded-lg font-medium text-[0.8rem] px-2">
            <span className="text-gray-400 select-none">до</span>
            {toValue.toLocaleString()} ₽
          </span>
        </div>
      </div>

      {/* Слайдер */}
      <Slider
        range
        step={1000}
        min={min}
        max={max}
        value={[fromValue, toValue]}
        onChange={(val) => Array.isArray(val) && handleChange(val)}
        onChangeComplete={(val) => Array.isArray(val) && handleAfterChange(val)}
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
  );
};

export default Range;
