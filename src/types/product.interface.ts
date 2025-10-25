import { type IDiscount } from "./discount.interface";
import { type IDocuments } from "./documents.interface";
import {
  type IAirConditionerStat,
  type IRefrigeratorStat,
} from "./stat.interface";

export interface IRelatedProduct {
  title: string;
  href: string;
}

export interface IProductResponse {
  product: IProduct;
  relatedProducts?: IRelatedProduct[];
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  brand: Brands;
  serie: string;
  images: string[];
  price: number;
  stock: Stock;
  documents: IDocuments[];
  type: Type;
  typeOf: TypeOf;
  href: string;

  groupId: string;

  airConditionerStat: IAirConditionerStat;
  refrigeratorStat: IRefrigeratorStat;

  discount: IDiscount;
}

export enum Brands {
  BALLU = "BALLU",
  ISHIMATSU = "ISHIMATSU",
  MITSUBISHI_ELECTRIC = "MITSUBISHI_ELECTRIC",
  HISENSE = "HISENSE",
  SHUFT = "SHUFT",
  BIRYUSA = "BIRYUSA",
  TCL = "TCL",
  DAHACI = "DAHACI",
  BELLUNA = "BELLUNA",
}

export enum Stock {
  IN_STOCK = "IN_STOCK",
  PRE_ORDER = "PRE_ORDER",
  OUT_OF_STOCK = "OUT_OF_STOCK",
}

export enum Type {
  AIR_CONDITIONER = "AIR_CONDITIONER",
  FRIDGE_EQUIPMENT = "FRIDGE_EQUIPMENT",
  CONSUMABLES = "CONSUMABLES",
}

export enum TypeOf {
  WALL_MOUNTED_AIR = "WALL_MOUNTED_AIR", // Настенные кондиционеры
  CASSETE_CONDITIONER = "CASSETE_CONDITIONER", // Кассетные кондиционеры
  DUCTED_CONDITIONER = "DUCTED_CONDITIONER", // Канальные кондиционеры
  WALL_CEILING_CONDITIONER = "WALL_CEILING_CONDITIONER", // Настенно потолочные
}

export type TypePaginationProducts = {
  length: number;
  products: IProduct[];
};
