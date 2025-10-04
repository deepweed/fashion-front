import { useFilters } from "../../useFilters";

export function WifiFilter() {
  const { queryParams, updateQueryParams } = useFilters();

  const isWifi = queryParams.wifi === "true";

  return (
    <div className="flex items-center justify-between mb-6">
      <span className="text-sm font-medium">Поддержка WiFi</span>
      <button
        onClick={() => {
          if (isWifi) {
            updateQueryParams("wifi", "");
          } else {
            updateQueryParams("wifi", "true");
          }
        }}
        className={`relative inline-flex items-center h-7 rounded-full w-13 focus:outline-none cursor-pointer ${
          isWifi ? "bg-blue-500" : "bg-zinc-300"
        }`}
      >
        <span
          className={`${
            isWifi ? "translate-x-7" : "translate-x-1"
          } inline-block w-5 h-5 transform bg-white rounded-full transition-transform`}
        />
      </button>
    </div>
  );
}
