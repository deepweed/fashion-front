"use client";

import Image from "next/image";

import { type IProduct } from "@/types/product.interface";

import { convertPrice } from "@/utils/convertPrice";
import { m } from "framer-motion";
import { ImageSlide } from "./product/ImageSlide";
import { convertProductStock } from "@/utils/convertProductStock";
import Button from "@/components/ui/Button";
import { ShoppingBasket } from "lucide-react";

export function ProductItem({ product }: { product: IProduct }) {
  if (!product) return null;

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.97, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full"
    >
      <div className="flex flex-col h-full">
        {/* картинка */}
        <div className="relative overflow-hidden aspect-[4/5] rounded-lg mb-3">
          {/* <Image
            fill
            src="/logo.svg"
            alt="Product"
            className="object-contain p-4"
            priority
          /> */}
          <ImageSlide product={product} />
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:gap-2 mb-2">
          {!product.discount && (
            <span className="text-[12px] font-semibold text-red-500 md:order-2">
              -{convertPrice(product.price)}%
            </span>
          )}

          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">
              {convertPrice(product.price)}
            </span>
            {product.price && (
              <span className="text-sm text-zinc-400 line-through">
                {convertPrice(product.price)}
              </span>
            )}
          </div>
        </div>

        {/* код */}
        <span className="text-[11px] text-zinc-400">Серия {product.serie}</span>
        {/* название */}
        <h3 className="font-medium text-sm lg:text-md leading-5 line-clamp-2 mb-2">
          {product.title}
        </h3>

        {/* доставка и корзина */}
        <div className="mt-auto">
          <Button
            color={product.stock === "OUT_OF_STOCK" ? "gray" : "blue"}
            className="text-sm font-medium w-full h-10 rounded-lg"
          >
            <ShoppingBasket size={20} strokeWidth={2.2} />
            {convertProductStock(product.stock)}
          </Button>
        </div>
      </div>
    </m.div>
  );
}
