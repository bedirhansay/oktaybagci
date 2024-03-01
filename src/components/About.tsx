import Image from "next/image";
import React from "react";
import about from "../../public/about-img.png";

export const About = () => {
  return (
    <div
      id="over-ons"
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 clamp scroll-mt-4"
    >
      <Image alt="" src={about} />
      <div className="flex flex-col gap-2 justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-customYellow text-2xl font-bold uppercase">
            Over Ons
          </h2>
          <p className="text-4xl uppercase">
            Beeld is het beeld dat we achterlaten in de hoofden van anderen.
          </p>
          <p>
            In elke haarlok zit een spoor van jouw persoonlijkheid. Creëer het
            perfecte beeld dat u in de hoofden van anderen achterlaat door uw
            imago vorm te geven in onze kapsalon.
          </p>
          <div className="flex gap-2">
            <span className="w-1 bg-customYellow rounded"></span>
            <p>
              Vergeet niet dat je haar ook een weerspiegeling is van je
              karakter.
            </p>
          </div>
        </div>
        <button className="border py-2 max-w-24">
          <a href="/over-ons">Meer</a>
        </button>
      </div>
    </div>
  );
};
