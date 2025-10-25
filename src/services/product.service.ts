import { axiosTemplate } from "@/api/axiosTemplate";
import {
  PRODUCTS,
  PRODUCTS_GOODS,
  PRODUCTS_REFR,
  type TypeProductFilters,
} from "./product.types";
import {
  type IProductResponse,
  type TypePaginationProducts,
} from "@/types/product.interface";

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
    try {
      const { data } = await axiosTemplate<IProductResponse>({
        url: `${PRODUCTS_GOODS}/${productHref.href}`,
        method: "GET",
      });
      return data;
    } catch (error: any) {
      if (error.response?.status === 404) {
        return null;
      }
      throw error;
    }
  },
};
