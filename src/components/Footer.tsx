import { Phone, Clock, MapPin } from "lucide-react";

import React from "react";
import logo from "../../public/logo-img.png";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export const Footer = () => {
  const local = useLocale();
  const t = useTranslations("footer");

  return (
    <div className="bg-customGray mt-28 ">
      <div className="clamp">
        <div className="flex flex-col gap-4 md:flex-row justify-between py-12 text-white">
          <div className="flex gap-2 items-center">
            <span className="border m-4 p-2 rounded">
              <Phone />
            </span>

            <div>
              <span className="flex gap-2"> {t("phoneNumber")}</span>
              <a href="tel:+905325275748" className="text-center">
                +90 532 527 57 48
              </a>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <span className="border m-4 p-2 rounded">
              <MapPin />
            </span>

            <div className="flex flex-col">
              <span className="!text-left">{t("location")}</span>
              <p>
                BORAZANLAR MH. AKŞEMSETTİN CD. GAYRETLİ, APT. NO:6, 14100
                Merkez/Bolu
              </p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <span className="border m-4 p-2 rounded">
              <Clock />
            </span>

            <div>
              <span className="flex gap-2">{t("workHours")}</span>
              <p>09:00-21:00</p>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex flex-col gap-8 items-center justify-center py-8">
          <Image alt="logo" src={logo} />
          <ul className=" flex text-white cursor-pointer gap-4 justify-between items-center  ">
            <li>
              <Link href={`/${local}`}>{t("homepage")}</Link>
            </li>
            <li>
              <Link href={`/${local}/over-ons`}>{t("aboutUs")}</Link>
            </li>
            <li>
              <Link href={`/${local}/#onze-diesten`}>{t("services")}</Link>
            </li>
            <li>
              <Link href={`/${local}/#contact`}>{t("contact")}</Link>
            </li>
          </ul>
          <hr />

          <div className="flex gap-8">
            {Array(3)
              .fill(0)
              .map((item, i) => (
                <span
                  key={item + i}
                  className="w-8 h-8 bg-white rounded-full"
                ></span>
              ))}
          </div>

          <p className="text-[#8C8C8C]">© 2024 OKTAYBAGCI</p>
        </div>
      </div>
    </div>
  );
};
