"use client";

import Image from "next/image";

import { type IProduct } from "@/types/product.interface";

import { convertPrice } from "@/utils/convertPrice";
import { m } from "framer-motion";
import { ImageSlide } from "./product/ImageSlide";
import { convertProductStock } from "@/utils/convertProductStock";
import Button from "@/components/ui/Button";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";

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
        <Link href={`product/${product.href}`}>
          <div className="relative overflow-hidden aspect-[4/5] rounded-3xl mb-3">
            <ImageSlide product={product} />
          </div>
        </Link>

        {/* цена */}
        {product.discount ? (
          <div className="flex items-center gap-x-2 mb-1">
            <span className="text-2xl font-bold">
              {convertPrice(
                Math.round(
                  product.price * (1 - product.discount?.percent / 100)
                )
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
          <span className="text-2xl font-bold mb-1">
            {convertPrice(product.price)}
          </span>
        )}

        {/* код */}
        <span className="text-[11px] text-zinc-400">Серия {product.serie}</span>
        {/* название */}
        <Link href={`product/${product.href}`}>
          <h3 className="font-medium text-sm lg:text-md leading-5 line-clamp-2 mb-2 hover:text-blue-600 transition-colors duration-300">
            {product.title}
          </h3>
        </Link>

        {/* доставка и корзина */}
        <Link className="mt-auto" href={`product/${product.href}`}>
          <Button
            color={product.stock === "OUT_OF_STOCK" ? "gray" : "blue"}
            className="text-base font-medium w-full h-12 rounded-full"
          >
            <ShoppingBasket size={20} strokeWidth={2.2} />
            {convertProductStock(product.stock)}
          </Button>
        </Link>
      </div>
    </m.div>
  );
}
