"use client";

import ProductDocs from "@/components/product-page/documents/ProductDocs";
import PriceBlock from "@/components/product-page/price-block/PriceBlock";
import AirStatBlock from "@/components/product-page/stats-block/AirConditionerStat";
import { RefrigeratorStatsBlock } from "@/components/product-page/stats-block/RefrigeratorStat";
import SwiperBlock from "@/components/product-page/swiper/SwiperBlock";
import type { IProductResponse } from "@/types/product.interface";

export default function ProductPage({
  product,
  relatedProducts,
}: IProductResponse) {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Левая колонка (на мобильных w-full) */}
      <div className="w-full lg:w-2/3 flex flex-col gap-10">
        <SwiperBlock product={product} />

        {/* Блок с ценой — на мобильных сразу под Swiper */}
        <div className="block lg:hidden">
          <PriceBlock product={product} relatedProducts={relatedProducts} />
        </div>

        {/* Описание */}
        <div className="flex flex-col gap-y-5">
          <h2 className="text-xl font-semibold">Описание</h2>
          <span className="text-sm">
            {product?.description || "Описание отсутствует"}
          </span>
        </div>

        {/* Характеристики */}
        <div className="flex flex-col gap-y-5">
          <h2 className="text-xl font-semibold">Характеристики</h2>
          {product?.type === "AIR_CONDITIONER" ? (
            <AirStatBlock stat={product.airConditionerStat} />
          ) : product?.type === "FRIDGE_EQUIPMENT" ? (
            <RefrigeratorStatsBlock stat={product.refrigeratorStat} />
          ) : product?.type === "CONSUMABLES" ? (
            <span className="text-gray-400">Характеристики отсутствует</span>
          ) : null}
          <div className="flex flex-col gap-y-5 text-[12px] text-zinc-400">
            <span className="border-b border-dotted border-zinc-400 flex-grow"></span>
            Некоторые характеристики могут отсутствовать в описании, так как
            либо соответствующие параметры не предусмотрены в данной модели,
            либо информация не была заполнена по техническим причинам. Для
            получения полной и подробной информации, а также полного пакета
            технических характеристик и документации рекомендуем обратиться к
            официальным документам производителя, которые приложены к товару.
            Документация доступна в разделе «Документация» внизу страницы. В
            случае необходимости дополнительной информации по интересующим
            параметрам, пожалуйста, пользуйтесь этими материалами.
          </div>
        </div>

        {/* Документация */}
        <ProductDocs product={product} />
      </div>

      {/* Правая колонка — ток на lg */}
      <div className="hidden lg:block w-full lg:w-1/3">
        <div className="sticky top-25">
          <PriceBlock product={product} relatedProducts={relatedProducts} />
        </div>
      </div>
    </div>
  );
}
