"use client";

import React, { useEffect, useState } from "react";
import { SheetComp } from "./Sheet";
import logo from "../../public/logo-img.png";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import LocalSwitcher from "./localSwitcher";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export const Navbar = () => {
  const pathname = usePathname();
  const path = pathname === "/";
  const local = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const t = useTranslations("navbar");

  const sheetContent = (
    <ul className=" flex flex-col gap-4 text-black justify-between items-center text-4xl mt-2 navbar ">
      <LocalSwitcher />
      <li>
        <Link onClick={() => setSheetOpen(false)} href={`/${local}`}>
          {t("homepage")}
        </Link>
      </li>
      <li>
        <Link onClick={() => setSheetOpen(false)} href={`/${local}/over-ons`}>
          {t("aboutUs")}
        </Link>
      </li>

      <li>
        <Link
          onClick={() => setSheetOpen(false)}
          href={`/${local}/#onze-diesten`}
        >
          {t("services")}
        </Link>
      </li>
      <li onClick={() => setSheetOpen(false)}>
        <Link onClick={() => setSheetOpen(false)} href={`/${local}/#contact`}>
          {t("contact")}
        </Link>
      </li>
    </ul>
  );

  return (
    <div
      className={`mx-auto items-center fixed z-50 left-0 right-0 w-full text-white ${
        isScrolled
          ? "backdrop-blur-md bg-[#292B2C] py-0"
          : path
          ? ""
          : "bg-[#292B2C]"
      }`}
    >
      <nav
        className={`max-w-3xl mx-auto items-center py-4  left-0 right-0 w-full text-white ${
          isScrolled ? "backdrop-blur-md" : ""
        }`}
      >
        <div>
          <ul className="hidden web-navbar sm:flex items-center mx-auto justify-between w-full">
            <li>
              <Link onClick={() => setSheetOpen(false)} href={`/${local}`}>
                {t("homepage")}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSheetOpen(false)}
                href={`/${local}/over-ons`}
              >
                {t("aboutUs")}
              </Link>
            </li>
            <li
              onClick={() => setSheetOpen(false)}
              className="flex hover:border-none flex-col items-center"
            >
              <Image alt="logo" src={logo} />
            </li>
            <li>
              <Link
                onClick={() => setSheetOpen(false)}
                href={`/${local}/#onze-diesten`}
              >
                {t("services")}
              </Link>
            </li>
            <li onClick={() => setSheetOpen(false)}>
              <Link
                onClick={() => setSheetOpen(false)}
                href={`/${local}/#contact`}
              >
                {t("contact")}
              </Link>
            </li>
            <LocalSwitcher />
          </ul>

          {/* //! Mobile navbar */}

          <div className="flex items-center justify-between w-full px-4 sm:hidden  ">
            <Image alt="logo" src={logo} />

            <SheetComp
              closeSheet={sheetOpen}
              openSheet={setSheetOpen}
              triggerIcon={<Menu />}
              sheetContent={sheetContent}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};
