"use client";
import React from "react";
import { workingArea } from "@/constant/WorkingArea";
import { ServiceCard } from "./ui/ServiceCard";
import { useTranslations } from "use-intl";
import { useLocale } from "next-intl";
import { getTranslation } from "@/lib/helper/getTranslation";

export const Services = () => {
  const locale = useLocale();
  const t = (key: string) => getTranslation(key, locale);

  return (
    <div
      id="onze-diesten"
      className="clamp !scroll-mt-52 flex flex-col gap-12 "
    >
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-customYellow text-bold text-center text-2xl font-bold">
          {t("services.title")}
        </h2>
        <p className="text-4xl max-w-2xl mx-auto">{t("services.subTitle")}</p>
        <p className="text-sm max-w-2xl mx-auto">{t("services.notes.note1")}</p>
      </div>
      <div className="flex gap-2  mx-auto flex-col md:flex-row">
        {workingArea.map((item, i) => (
          <ServiceCard
            key={i + "idx"}
            image={item.photo}
            title={t(`services.categories.${item.name}.title`)}
            desc={t(`services.categories.${item.name}.subTitle`)}
          />
        ))}
      </div>
    </div>
  );
};
