import Image from "next/image";
import React from "react";
import about from "../../public/about-img.png";
import { Button } from "./ui/button";

export const About = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 clamp">
      <Image alt="" src={about} />
      <div className="flex flex-col gap-2 justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#FFCC01] text-3xl font-bold">Over Ons</h2>
          <p className="text-2xl">
            Beeld is het beeld dat we achterlaten in de hoofden van anderen.
          </p>
          <p>
            In elke haarlok zit een spoor van jouw persoonlijkheid. Creëer het
            perfecte beeld dat u in de hoofden van anderen achterlaat door uw
            imago vorm te geven in onze kapsalon.
          </p>
          <div className="flex gap-2">
            <span className="w-2 bg-[#FFCC01] rounded"></span>
            <p>
              Vergeet niet dat je haar ook een weerspiegeling is van je
              karakter.
            </p>
          </div>
        </div>
        <button className="border">Meer</button>
      </div>
    </div>
  );
};
