import { Collapsible } from "@/components/ui/Collapsible";
import { InverterFilter } from "./inverter/InverterFilter";
import PriceFilter from "./price/PriceFilter";
import { SearchField } from "./search-field/SearchField";
import { WifiFilter } from "./wifi/WifiFilter";
import BrandFilter from "./brand/BrandFilter";
import StockFilter from "./stock/StockFilter";
import TypeOfFilter from "./typeOf/TypeOfFilter";
import CoolingFilter from "./cooling/CoolingFilter";
import { ResetButton } from "./ResetButton";
import HeatingFilter from "./heating/HeatingFilter";
import AreaFilter from "./area/AreaFilter";
import EnergyFilter from "./energy-effeciency/EnergyFilter";

const Filters = () => {
  return (
    <div className="flex flex-col sticky top-25">
      <h2 className="text-xl font-medium mb-7">Фильтры</h2>
      <SearchField />
      <PriceFilter />
      <InverterFilter />
      <WifiFilter />
      <Collapsible title="НАЛИЧИЕ">
        <StockFilter />
      </Collapsible>
      <Collapsible title="БРЕНД">
        <BrandFilter />
      </Collapsible>
      <Collapsible title="ТИП СИСТЕМЫ">
        <TypeOfFilter />
      </Collapsible>
      <Collapsible title="ХОЛОДОПРОИЗВОДИТЕЛЬНОСТЬ">
        <CoolingFilter />
      </Collapsible>
      <Collapsible title="ТЕПЛОПРОИЗВОДИТЕЛЬНОСТЬ">
        <HeatingFilter />
      </Collapsible>
      <Collapsible title="ПЛОЩАДЬ ПОМЕЩЕНИЯ">
        <AreaFilter />
      </Collapsible>
      <Collapsible title="ЭНЕРГОЭФФЕКТИВНОСТЬ">
        <EnergyFilter />
      </Collapsible>
      <ResetButton />

      {/* TODO: ОСТАЛЬНЫЕ ФИЛЬТРЫ, ДАЛЕЕ ПАГИНАЦИЯ И ОСНОВНОЙ КАТАЛОГ ГОТОВ. НА ФИЛЬТРЫ ПРОСТО ПРОВЕРКУ СДЕЛАТЬ
      МОЛ ЕСЛИ КАТАЛОГ - ТО ВОТ ЭТИ, ЕСЛИ БЕЛЛУНА - ТО ВОТ ЭТИ И ВСЕ */}
    </div>
  );
};

export default Filters;
