import { Collapsible } from "@/components/ui/Collapsible";
import { InverterFilter } from "./inverter/InverterFilter";
import PriceFilter from "./price/PriceFilter";
import { SearchField } from "./search-field/SearchField";
import { WifiFilter } from "./wifi/WifiFilter";

const Filters = () => {
  return (
    <div className="flex flex-col sticky top-25">
      <h2 className="text-xl font-medium mb-7">Фильтры</h2>
      <SearchField />
      <PriceFilter />
      <InverterFilter />
      <WifiFilter />
      <Collapsible title="SOMETHING">
        <div>HUI</div>
      </Collapsible>

      {/* TODO: ОСТАЛЬНЫЕ ФИЛЬТРЫ, ДАЛЕЕ ПАГИНАЦИЯ И ОСНОВНОЙ КАТАЛОГ ГОТОВ. НА ФИЛЬТРЫ ПРОСТО ПРОВЕРКУ СДЕЛАТЬ
      МОЛ ЕСЛИ КАТАЛОГ - ТО ВОТ ЭТИ, ЕСЛИ БЕЛЛУНА - ТО ВОТ ЭТИ И ВСЕ */}
    </div>
  );
};

export default Filters;
