import type { Brands, Stock, TypeOf } from "@/types/product.interface";
import type { EnergyEfficiency } from "@/types/stat.interface";

export const PRODUCTS = "products";
export const PRODUCTS_REFR = "products/belluna";
export const PRODUCTS_GOODS = "products/goods";

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

  // Belluna

  compressorType?: string;
  minPowerMax?: string;
  maxPowerMax?: string;
  minTemp?: string;
  maxTemp?: string;
  minCooling?: string;
  maxCooling?: string;

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
