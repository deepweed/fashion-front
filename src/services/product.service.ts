import { axiosTemplate } from "@/api/axiosTemplate";
import { PRODUCTS, type TypeProductFilters } from "./product.types";
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
};
