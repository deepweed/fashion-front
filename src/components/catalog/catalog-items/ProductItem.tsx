"use client";

import Image from "next/image";

import { type IProduct } from "@/types/product.interface";

import { convertPrice } from "@/utils/convertPrice";
import { m } from "framer-motion";

export function ProductItem({ product }: { product: IProduct }) {
  if (!product) return null;

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.97, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full"
    >
      <div>
        {/* картинка занимает всю ширину карточки */}
        <div className="rounded-xl relative overflow-hidden aspect-[4/5]">
          <Image
            fill
            src="/logo.svg"
            alt="Product"
            className="object-contain p-4"
            priority
          />
        </div>

        <h3 className="mt-2 font-semibold text-base leading-6 line-clamp-2">
          {product.title}
        </h3>

        <div className="text-xl font-semibold">
          {convertPrice(product.price)}
        </div>
      </div>
    </m.div>
  );
}
