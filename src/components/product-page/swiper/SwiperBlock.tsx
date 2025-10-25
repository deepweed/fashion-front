"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "@/app/globals.css";

import { Pagination } from "swiper/modules";
import type { IProduct } from "@/types/product.interface";
import Image from "next/image";

interface ISwiperBlock {
  product: IProduct;
}

const SwiperBlock = ({ product }: ISwiperBlock) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        className="mySwiper"
      >
        {product.images.map((_, i) => (
          <SwiperSlide key={i}>
            <Image
              src={product.images[i]}
              alt={product.title}
              fill
              style={{ objectFit: "contain", padding: "2rem" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperBlock;
