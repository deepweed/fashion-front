import type { Brands, Stock, TypeOf } from "@/types/product.interface";
import type { EnergyEfficiency } from "@/types/stat.interface";

export const PRODUCTS = "products";

export type TypeProductFilters = {
  sort?: EnumProductSort;
  search?: string;
  serie?: string; // Serie?, refr type
  minPrice?: string;
  maxPrice?: string;
  stock?: Stock;
  brands?: Brands;
  typeOf?: TypeOf;
  inverter?: "true" | "false";
  wifi?: "true" | "false";

  minCoolingC?: string;
  maxCoolingC?: string;
  minHeatingC?: string;
  maxHeatingC?: string;
  minArea?: string;
  maxArea?: string;
  energyEfficiency?: EnergyEfficiency;
  refrigerantType?: string;

  page?: string | number;
  perPage: string | number;
};

export enum EnumProductSort {
  LOW_PRICE = "LOW_PRICE",
  HIGH_PRICE = "HIGH_PRICE",
}

export type TypeParamsFilters = {
  searchParams: TypeProductFilters;
};
