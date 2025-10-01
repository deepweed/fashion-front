// page.tsx
import type {
  TypeParamsFilters,
  TypeProductFilters,
} from "@/services/product.types";
import { CatalogPage } from "./CatalogPage";
import { ProductService } from "@/services/product.service";

export const revalidate = 60;

async function getProducts(searchParams: TypeProductFilters) {
  const data = await ProductService.findAll(searchParams);
  return data;
}

export default async function Catalog({ searchParams }: TypeParamsFilters) {
  const resolvedParams = await searchParams;
  const data = await getProducts(resolvedParams);

  return <CatalogPage defaultProducts={data} />;
}
