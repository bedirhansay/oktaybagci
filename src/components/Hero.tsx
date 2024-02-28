import Image from "next/image";
import React from "react";
import intro from "../../public/logo.svg";
export const Hero = () => {
  return (
    <div className="min-h-screen bg-image">
      <Image
        className="absolutes z-10 bg-transparent opacity-45 "
        alt=""
        src={intro}
      ></Image>
      <p className="text-white absolute bg-rose-600 py-10 top-4 px-4 opacity-65 animate-pulse right-0 w-fit text-center  rounded uppercase ">
        Onze website is momenteel in aanbouw.
      </p>
    </div>
  );
};
