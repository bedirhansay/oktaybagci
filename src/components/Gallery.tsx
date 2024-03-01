"use client";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import { sliders } from "@/constant/WorkingArea";

export const Gallery = () => {
  return (
    <div className="bg-customGray pt-8 pb-16">
      <h2 className="text-2xl uppercase font-bold text-center mt-4 text-customYellow">
        Gallery
      </h2>
      <p className="text-4xl mb-16 text-center text-white ">Our Works</p>

      <div className="mb-16 mt-4 clamp">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView="auto"
          navigation
          autoplay
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {sliders.map((item, idx) => (
            <SwiperSlide
              style={{
                aspectRatio: "16/9",
              }}
              key={idx + "k"}
            >
              <Image alt="" fill src={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
