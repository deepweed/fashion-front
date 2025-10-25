import Button from "@/components/ui/Button";
import { Collapsible } from "@/components/ui/Collapsible";
import type { IProductResponse } from "@/types/product.interface";
import { convertPrice } from "@/utils/convertPrice";
import { ChevronRight, Phone } from "lucide-react";
import Link from "next/link";
import Price from "./price/Price";
import CartButton from "./cart-button/CartButton";

const PriceBlock = ({ product, relatedProducts }: IProductResponse) => {
  return (
    <div className="flex flex-col">
      {/* Название */}
      <h2 className="text-2xl font-medium border-b border-zinc-100 pb-5 mb-5">
        {product?.title || "Название у товара временно отсутствует"}
      </h2>

      {/* Связанные товары */}
      {relatedProducts?.length !== 0 ? (
        <div className="flex flex-col gap-y-3 mb-7">
          <span className="text-sm text-zinc-400">Связанные товары</span>
          <div className="flex items-center gap-x-2">
            {relatedProducts?.map((product) => (
              <Link
                href={product.href}
                key={product.href}
                className="bg-blue-50 p-3 text-sm text-zinc-500 rounded-lg hover:bg-blue-100/60"
              >
                {product.title}
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      {/* Цена товара */}
      <Price product={product} />

      {/* Добавить в корзину */}
      <CartButton product={product} />

      <div className="flex flex-col px-2">
        <Link
          className="flex items-center justify-between border-b border-zinc-300 py-3"
          href={"#"}
        >
          <span className="text-sm font-medium">Доставка товара</span>
          <ChevronRight size={12} />
        </Link>
        <Link
          className="flex items-center justify-between border-b border-zinc-300 py-3"
          href={"#"}
        >
          <span className="text-sm font-medium">Информация об оплате</span>
          <ChevronRight size={12} />
        </Link>
        <Link
          className="flex items-center justify-between border-b border-zinc-300 py-3"
          href={"#"}
        >
          <span className="text-sm font-medium">Связаться с нами</span>
          <Phone size={12} />
        </Link>
      </div>
    </div>
  );
};

export default PriceBlock;
