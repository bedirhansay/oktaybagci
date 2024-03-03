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
import { useTranslations } from "next-intl";

export const Gallery = () => {
  const t = useTranslations("gallery");

  return (
    <div className="bg-customGray pt-8 pb-16">
      <h2 className="text-2xl uppercase font-bold text-center mt-4 text-customYellow">
        {t("title")}
      </h2>
      <p className="text-4xl mb-16 text-center text-white "> {t("subTitle")}</p>

      <div className="mb-16 mt-4 clamp">
        <Swiper
          slidesPerView="auto"
          className="w-full"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          navigation
          loop
          speed={1800}
          freeMode
          autoplay
          scrollbar={{ draggable: true }}
        >
          {sliders.map((item, idx) => (
            <SwiperSlide className="m-2 !w-96" key={idx + "k"}>
              <Image
                width={400}
                loading="lazy"
                className=" aspect-square"
                src={item}
                alt=""
                sizes="(min-width: 640px) 176px, 200px"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
