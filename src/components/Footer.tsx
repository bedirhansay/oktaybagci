import { Phone, LocateIcon, Clock, MapPin } from "lucide-react";
import React from "react";
import logo from "../../public/logo-img.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-customGray ">
      <div className="clamp">
        <div className="flex flex-col gap-4 items-center md:flex-row justify-between py-12 text-white">
          <div className="flex gap-2 items-center">
            <span className="border m-4 p-2 rounded">
              <Phone />
            </span>

            <div>
              <span className="flex gap-2">Telefoonnummer</span>
              <a href="tel:+905325275748" className="text-center">
                +90 532 527 57 48
              </a>
            </div>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <span className="border m-4 p-2 rounded">
              <MapPin />
            </span>

            <div className="flex flex-col items-center">
              <span className="flex gap-2 text-center">Plaats</span>
              <p className="text-center">
                BORAZANLAR MH. AKŞEMSETTİN CD. GAYRETLİ, APT. NO:6, 14100
                Merkez/Bolu
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <span className="border m-4 p-2 rounded">
              <Clock />
            </span>

            <div>
              <span className="flex gap-2">Werkuren</span>
              <p>09:00-21:00</p>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex flex-col gap-8 items-center justify-center my-8">
          <Image alt="logo" src={logo} />
          <ul className=" flex text-white cursor-pointer gap-4 justify-between items-center  ">
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
