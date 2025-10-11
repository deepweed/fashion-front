import { ProductService } from "@/services/product.service";
import { notFound } from "next/navigation";

export const revalidate = 60;

async function getProduct(href: string) {
  try {
    const data = await ProductService.findByHref({ href });
    return data;
  } catch (error) {
    console.error("Ошибка при получении товара:", error);
    return null;
  }
}

interface ProductPageProps {
  params: { href: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const data = await getProduct(params.href);

  if (!data) return notFound();

  return (
    <div>
      <h1>{data.productName}</h1>
      <p>{data.description}</p>
    </div>
  );
}
