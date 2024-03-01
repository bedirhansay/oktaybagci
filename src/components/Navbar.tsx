"use client";

import React, { useEffect, useState } from "react";
import { SheetComp } from "./Sheet";
import logo from "../../public/logo-img.png";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const path = pathname === "/";

  const sheetContent = (
    <ul className=" flex flex-col gap-4 text-black justify-between items-center text-4xl mt-2 navbar ">
      <li>
        <a href="/">Startpagina</a>
      </li>
      <li>
        <a href="/over-ons">Over Ons</a>
      </li>
      <li>
        <a href="/#onze-diesten">Onze Diesten</a>
      </li>
      <li>
        <a href="/#contact">Contact</a>
      </li>
    </ul>
  );

  const [isScrolled, setIsScrolled] = useState(false);

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
              <a href="/">Startpagina</a>
            </li>
            <li>
              <a href="/over-ons">Over Ons</a>
            </li>
            <li className="flex hover:border-none flex-col items-center">
              <Image alt="logo" src={logo} />
            </li>
            <li>
              <a href="/#onze-diesten">Onze Diesten</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>

          {/* //! Mobile navbar */}

          <div className="flex items-center justify-between w-full px-4 sm:hidden  ">
            <Image alt="logo" src={logo} />
            <SheetComp triggerIcon={<Menu />} sheetContent={sheetContent} />
          </div>
        </div>
      </nav>
    </div>
  );
};
