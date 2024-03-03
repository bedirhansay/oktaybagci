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
import { certificate, sliders } from "@/constant/WorkingArea";
import { useTranslations } from "next-intl";

export const Certificate = () => {
  const t = useTranslations("aboutUs");
  return (
    <div className="bg-customGray pt-8 pb-16">
      <h2 className="text-2xl uppercase font-bold text-center mt-4 text-customYellow">
        {t("certificate")}
      </h2>

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
          {certificate.map((item, idx) => (
            <SwiperSlide className="m-2 !w-[400px]" key={idx + "k"}>
              <Image width={400} loading="lazy" src={item} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
