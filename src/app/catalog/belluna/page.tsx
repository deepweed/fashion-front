// page.tsx
import type {
  TypeParamsFilters,
  TypeProductFilters,
} from "@/services/product.types";
import { BellunaCatalogPage } from "./BellunaCatalog";
import { ProductService } from "@/services/product.service";

export const revalidate = 60;

async function getProducts(searchParams: TypeProductFilters) {
  const data = await ProductService.findRefr(searchParams);
  return data;
}

export default async function BellunaCatalog({
  searchParams,
}: TypeParamsFilters) {
  const resolvedParams = await searchParams;
  const data = await getProducts(resolvedParams);

  return <BellunaCatalogPage defaultProducts={data} />;
}
