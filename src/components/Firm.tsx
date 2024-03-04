"use client";
import { useTranslations } from "next-intl";
import React from "react";

export const Firm = () => {
  const t = useTranslations("aboutUs");
  return (
    <div className="max-w-5xl mx-auto px-4 flex flex-col gap-8">
      <h2 className="font-semibold text-2xl">{t("introTitle")}</h2>
      <p className="text-justify tracking-wide leading-10">
        {t("introDescription")}
      </p>
    </div>
  );
};
