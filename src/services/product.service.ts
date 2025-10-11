import { axiosTemplate } from "@/api/axiosTemplate";
import {
  PRODUCTS,
  PRODUCTS_HREF,
  PRODUCTS_REFR,
  type TypeProductFilters,
} from "./product.types";
import { type TypePaginationProducts } from "@/types/product.interface";

export const ProductService = {
  async findAll(queryData = {} as TypeProductFilters) {
    const { data } = await axiosTemplate<TypePaginationProducts>({
      url: PRODUCTS,
      method: "GET",
      params: queryData,
    });

    return data;
  },

  async findRefr(queryData = {} as TypeProductFilters) {
    const { data } = await axiosTemplate<TypePaginationProducts>({
      url: PRODUCTS_REFR,
      method: "GET",
      params: queryData,
    });

    return data;
  },

  async findByHref(productHref: { href: string }) {
    const { data } = await axiosTemplate({
      url: PRODUCTS_HREF,
      method: "GET",
      params: productHref,
    });
    return data;
  },
};
