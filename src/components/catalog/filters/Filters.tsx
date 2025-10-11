"use client";

import { usePathname } from "next/navigation";
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
import CompressorFilter from "./BellunaFilters/compressor-type/CompressorFilter";
import PowerMaxFilter from "./BellunaFilters/power-max/PowerMaxFilter";
import SerieFilter from "./BellunaFilters/serie/SerieFilter";

const Filters = () => {
  const pathname = usePathname();

  const showSpecificFilters = pathname === "/catalog";

  return (
    <div className="flex flex-col sticky top-25">
      <div className="p-8 bg-zinc-50 rounded-2xl">
        {showSpecificFilters && (
          <>
            <InverterFilter />
            <WifiFilter />
          </>
        )}
        <Collapsible isOpenedDefault={true} title="Цена, ₽">
          <PriceFilter />
        </Collapsible>
        <Collapsible isOpenedDefault={true} title="Наличие">
          <StockFilter />
        </Collapsible>
        {showSpecificFilters && (
          <>
            <Collapsible title="Бренд">
              <BrandFilter />
            </Collapsible>
            <Collapsible title="Тип системы">
              <TypeOfFilter />
            </Collapsible>
            <Collapsible title="Холодопроизводительность">
              <CoolingFilter />
            </Collapsible>
            <Collapsible title="Теплопроизводительность">
              <HeatingFilter />
            </Collapsible>
            <Collapsible title="Площадь помещения">
              <AreaFilter />
            </Collapsible>
            <Collapsible title="Энергоэффективность">
              <EnergyFilter />
            </Collapsible>
          </>
        )}
        {!showSpecificFilters && (
          <>
            <Collapsible title="Серия">
              <SerieFilter />
            </Collapsible>
            <Collapsible title="Тип компрессора">
              <CompressorFilter />
            </Collapsible>
            <Collapsible title="Энергопотребление">
              <PowerMaxFilter />
            </Collapsible>
            <span className="mt-3 text-sm text-zinc-400">
              Некоторые фильтры временно отключены, приносим извинения за
              неудобства
            </span>
          </>
        )}
      </div>
      <ResetButton />
    </div>
  );
};

export default Filters;
