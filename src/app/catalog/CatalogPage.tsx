"use client";

import CatalogItems from "@/components/catalog/catalog-items/CatalogItems";
import Pagination from "@/components/catalog/pagination/Pagination";
import SlideFiltersWrapper from "@/components/catalog/slide-filters-menu/SlideFiltersWrapper";
import SortDropdown from "@/components/catalog/sort/SortDropdown";
import { useFilters } from "@/components/catalog/useFilters";
import Heading from "@/components/ui/Heading";
import { ProductService } from "@/services/product.service";
import type { TypePaginationProducts } from "@/types/product.interface";
import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";

interface ICatalogPage {
  defaultProducts: TypePaginationProducts;
}

export const CatalogPage: FC<ICatalogPage> = ({ defaultProducts }) => {
  const { queryParams, isFilterUpdated, updateQueryParams } = useFilters();
  const { data, isPending, isFetching, isLoading, isRefetching } = useQuery({
    queryKey: ["catalog", queryParams],
    queryFn: () => ProductService.findAll(queryParams),
    initialData: defaultProducts,
    enabled: isFilterUpdated,
  });

  return (
    <>
      <Heading className="mb-10">Каталог сплит-систем и кондиционеров</Heading>
      <div className="w-full h-10 border-b border-zinc-200">
        <div className="flex items-center justify-between mb-5 px-4">
          <SlideFiltersWrapper />
          <SortDropdown />
        </div>
      </div>
      <div className="flex gap-6">
        <aside className="hidden lg:block w-64 px-2">Hello</aside>

        <section className="flex-1">
          <CatalogItems
            products={data.products}
            isLoading={isPending || isFetching || isRefetching || isLoading}
          />
          <Pagination
            changePage={(page) => updateQueryParams("page", page.toString())}
            currentPage={queryParams.page?.toString()}
            numberPages={data.length / +queryParams.perPage}
          />
        </section>
      </div>
    </>
  );
};
