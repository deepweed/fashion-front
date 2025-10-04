"use client";

import { useState } from "react";
import Image from "next/image";
import { type IProduct } from "@/types/product.interface";

export function ImageSlide({ product }: { product: IProduct }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!product?.images?.length) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const percent = x / width;
    const index = Math.floor(percent * product.images.length);
    setActiveIndex(index);
  };

  return (
    <div
      className="relative overflow-hidden aspect-[4/5] rounded-lg mb-3 bg-zinc-100 border border-slate-200 shadow"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActiveIndex(0)}
    >
      <Image
        // src={product.images[activeIndex]}
        src={"/logo.svg"}
        alt={product.title}
        fill
        className="object-contain p-4"
      />

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
        {product.images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-colors duration-200 ${
              i === activeIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
