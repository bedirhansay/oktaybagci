"use client";
import React from "react";
import { brands } from "@/constant/WorkingArea";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
export const Brands = () => {
  const t = useTranslations("aboutUs");
  return (
    <div className="flex flex-col gap-12 bg-gray-50 p-4 shadow-md py-12 ">
      <h2 className="text-3xl text-center">{t("brandsWork")}</h2>

      <div className="flex max-w-5xl mx-auto flex-wrap justify-between gap-12 brands__item ">
        {brands.map((item, id) => (
          <Image
            className="!w-44"
            alt=""
            key={id + "item"}
            objectFit="contain"
            src={item}
          />
        ))}
      </div>
    </div>
  );
};
