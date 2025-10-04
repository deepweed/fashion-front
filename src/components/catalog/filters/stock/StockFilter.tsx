import { type FC } from "react";

import { useFilters } from "../../useFilters";

import Checkbox from "@/components/ui/Checkbox";
import { STOCK_VARIANTS } from "./stock-variants.data";
import { convertProductStock } from "@/utils/convertProductStock";

const StockFilter: FC = () => {
  const { queryParams, updateQueryParams } = useFilters();

  return (
    <>
      {STOCK_VARIANTS.map((stock) => (
        <Checkbox
          isChecked={queryParams.stock?.includes(stock) || false}
          onClick={() => {
            const currentGenres = queryParams.stock
              ? queryParams.stock.split("|")
              : [];

            if (currentGenres.includes(stock)) {
              const newArray = currentGenres.filter((s) => s !== stock);

              updateQueryParams("stock", newArray.join("|"));
            } else {
              // Добавляем жанр к списку
              updateQueryParams("stock", [...currentGenres, stock].join("|"));
            }
          }}
          key={stock}
          className="mb-2 text-lg"
        >
          <span className="flex items-center gap-1">
            {convertProductStock(stock)}
          </span>
        </Checkbox>
      ))}
    </>
  );
};

export default StockFilter;
