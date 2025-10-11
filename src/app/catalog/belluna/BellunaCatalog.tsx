"use client";

import CatalogItems from "@/components/catalog/catalog-items/CatalogItems";
import Filters from "@/components/catalog/filters/Filters";
import { SearchField } from "@/components/catalog/filters/search-field/SearchField";
import Pagination from "@/components/catalog/pagination/Pagination";
import SlideFiltersWrapper from "@/components/catalog/slide-filters-menu/SlideFiltersWrapper";
import SortDropdown from "@/components/catalog/sort/SortDropdown";
import { useFilters } from "@/components/catalog/useFilters";
import Heading from "@/components/ui/Heading";
import { ProductService } from "@/services/product.service";
import type { TypePaginationProducts } from "@/types/product.interface";
import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";

interface IBellunaPage {
  defaultProducts: TypePaginationProducts;
}

export const BellunaCatalogPage: FC<IBellunaPage> = ({ defaultProducts }) => {
  const { queryParams, isFilterUpdated, updateQueryParams } = useFilters();

  const { data, isPending, isFetching, isLoading, isRefetching } = useQuery({
    queryKey: ["belluna catalog", queryParams],
    queryFn: () => ProductService.findRefr(queryParams),
    initialData: defaultProducts,
    enabled: isFilterUpdated,
  });

  return (
    <>
      <Heading className="mb-20 mt-20">
        Холодильное оборудование Belluna
      </Heading>

      <div className="w-full h-10 bg-white border-b border-zinc-200 mb-5 lg:hidden">
        <div className="flex items-center justify-between px-4">
          <SlideFiltersWrapper />
          <SortDropdown isMobile={true} />
        </div>
      </div>

      <div className="flex gap-x-2">
        <aside className="hidden lg:block w-95 px-2">
          <Filters />
        </aside>

        <section className="flex-1">
          <div className="hidden lg:flex items-center justify-between gap-x-5 w-full mb-3">
            <SearchField />
            <SortDropdown isMobile={false} />
          </div>
          <CatalogItems
            products={data.products}
            isLoading={isPending || isFetching || isRefetching || isLoading}
          />
          {!data.products && (
            <Pagination
              changePage={(page) => updateQueryParams("page", page.toString())}
              currentPage={queryParams.page?.toString()}
              numberPages={data.length / +queryParams.perPage}
            />
          )}
        </section>
      </div>
    </>
  );
};
