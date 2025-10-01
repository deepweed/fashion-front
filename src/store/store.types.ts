import type { TypeProductFilters } from "@/services/product.types";

export interface IStore {
  queryParams: TypeProductFilters;
  isFilterUpdated: boolean;
  updateQueryParam: (data: {
    key: keyof TypeProductFilters;
    value: string;
  }) => void;
  reset: () => void;
}
