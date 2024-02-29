import React from "react";

import { SheetComp } from "./Sheet";
import logo from "../../public/logo-img.png";
import Image from "next/image";
import { Menu } from "lucide-react";

export const Navbar = () => {
  const sheetContent = (
    <ul className=" flex flex-col gap-4 text-black justify-between items-center text-4xl mt-2 navbar ">
      <li>Startpagina</li>
      <li>Over ons</li>
      <li>Onze Diensten</li>
      <li>Contact</li>
    </ul>
  );

  return (
    <nav className="max-w-3xl mx-auto items-center py-12 fixed left-0 right-0 w-full text-white">
      <ul className="hidden web-navbar sm:flex items-center mx-auto justify-between w-full">
        <li>Startpagina</li>
        <li>Over ons</li>
        <li className="flex flex-col items-center">
          <Image alt="logo" src={logo} />
        </li>
        <li>Onze Diensten</li>
        <li>Contact</li>
      </ul>

      {/* //! Mobile navbar */}

      <div className="flex items-center justify-between w-full px-4 sm:hidden  ">
        <Image alt="logo" src={logo} />
        <SheetComp triggerIcon={<Menu />} sheetContent={sheetContent} />
      </div>
    </nav>
  );
};
