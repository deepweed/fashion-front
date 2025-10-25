import Heading from "@/components/ui/Heading";
import { ProductService } from "@/services/product.service";
import type { IProduct, IProductResponse } from "@/types/product.interface";
import { notFound } from "next/navigation";
import ProductPage from "./ProductPage";

interface ProductPageProps {
  params: {
    href: string;
  };
}

export default async function Product({ params }: ProductPageProps) {
  const { href } = await params;

  const product: IProductResponse | null = await ProductService.findByHref({
    href: href,
  });

  if (!product) {
    notFound();
  }

  return (
    <ProductPage
      product={product.product}
      relatedProducts={product.relatedProducts}
    />
  );
}
