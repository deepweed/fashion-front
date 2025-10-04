import { useFilters } from "../../useFilters";
import FilterWrapper from "../FilterWrapper";

export function InverterFilter() {
  const { queryParams, updateQueryParams } = useFilters();

  const isInverter = queryParams.inverter === "true";

  return (
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-medium">Только инвертор</span>
      <button
        onClick={() => {
          if (isInverter) {
            updateQueryParams("inverter", "");
          } else {
            updateQueryParams("inverter", "true");
          }
        }}
        className={`relative inline-flex items-center h-7 rounded-full w-13 focus:outline-none cursor-pointer ${
          isInverter ? "bg-blue-500" : "bg-zinc-300"
        }`}
      >
        <span
          className={`${
            isInverter ? "translate-x-7" : "translate-x-1"
          } inline-block w-5 h-5 transform bg-white rounded-full transition-transform`}
        />
      </button>
    </div>
  );
}
