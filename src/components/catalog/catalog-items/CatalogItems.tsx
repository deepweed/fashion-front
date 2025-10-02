import type { FC } from "react";

import type { IProduct } from "@/types/product.interface";
import SkeletonLoader from "./ProductSkeleton";
import { ProductItem } from "./ProductItem";

interface ICatalog {
  products: IProduct[];
  isLoading?: boolean;
}

const Catalog: FC<ICatalog> = ({ products, isLoading }) => {
  if (isLoading) return <SkeletonLoader />;

  return (
    <section>
      {products.length ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div>no products data!</div>
      )}
    </section>
  );
};

export default Catalog;
