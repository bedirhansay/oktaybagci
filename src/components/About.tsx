import Image from "next/image";
import React from "react";
import about from "../../public/about-img.png";
import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations("aboutUs");
  return (
    <div
      id="over-ons"
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 clamp scroll-mt-4"
    >
      <Image alt="" src={about} />
      <div className="flex flex-col gap-2 justify-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-customYellow text-2xl font-bold uppercase">
            {t("title")}
          </h2>
          <p className="text-4xl uppercase">{t("subTitle")}</p>
          <p>{t("notes.note1")}</p>
          <div className="flex gap-2">
            <span className="w-1 bg-customYellow rounded"></span>
            <p>{t("notes.note2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
