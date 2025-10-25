import type { IProduct } from "@/types/product.interface";
import { convertPrice } from "@/utils/convertPrice";

interface IPrice {
  product: IProduct;
}

const Price = ({ product }: IPrice) => {
  return product.discount ? (
    <div className="flex items-center gap-x-4 mb-4 px-2">
      <span className="text-3xl font-bold">
        {convertPrice(
          Math.round(product.price * (1 - product.discount?.percent / 100))
        )}
      </span>
      <span className="text-sm text-zinc-400 line-through">
        {convertPrice(product.price)}
      </span>
      <span className="text-sm text-red-700">
        {" "}
        -{product.discount?.percent}%
      </span>
    </div>
  ) : (
    <span className="text-3xl font-bold mb-4 px-2">
      {convertPrice(product.price)}
    </span>
  );
};

export default Price;
