import Image from "next/image";
import React from "react";
import arrow from "../../public/arrow.svg";
export const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-image">
      <div className="absolutes w-full text-white flex flex-col items-center gap-8">
        <h2 className="text-2xl sm:text-6xl max-w-xl text-center w-full uppercase">
          handen die je stijl raken
        </h2>
        <p className="text-center px-4">
          We volgen de trends met ons deskundige team en voegen een gloednieuwe
          schoonheid toe aan je haar.
        </p>
        <button className="border px-8 py-2 text-3xl hover:bg-gray-100 hover:text-black shadow-md transition-all ease-out duration-300 ">
          Meer
        </button>
      </div>

      <div>
        <Image
          className="absolute bottom-10 left-[50%] -translate-x-1/2 animate-pulse"
          alt="arrow"
          src={arrow}
        />
      </div>
    </div>
  );
};
