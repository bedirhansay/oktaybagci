"use client";

import Image from "next/image";
import React from "react";
import arrow from "../../public/arrow.svg";
import { useTranslations } from "next-intl";

export const Hero = () => {
  const t = useTranslations("hero");

  return (
    <div id="hero" className="min-h-screen bg-image">
      <div className="absolutes w-full text-white flex flex-col items-center gap-8">
        <h2 className="text-2xl sm:text-6xl max-w-xl text-center w-full uppercase">
          {t("title")}
        </h2>
        <p className="text-center font-semibold px-4">{t("subTitle")}</p>
        <a
          href="#over-ons"
          className="text-3xl hover:bg-gray-100 hover:text-black shadow-md  "
        >
          <Image
            className="absolute bottom-[-10] left-[50%] -translate-x-1/2 animate-pulse duration-1000"
            alt="arrow"
            src={arrow}
          />
        </a>
      </div>

      <div></div>
    </div>
  );
};
