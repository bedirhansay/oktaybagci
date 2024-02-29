import React from "react";
import { brands } from "@/constant/WorkingArea";
import Image from "next/image";
export const Brands = () => {
  return (
    <div className="flex flex-col gap-12 bg-gray-50 p-4 shadow-md py-12 ">
      <h2 className="text-3xl text-center">Merken Die Wij Gebruiken</h2>

      <div className="flex flex-wrap justify-between gap-12 ">
        {brands.map((item, id) => (
          <Image
            className="w-16 "
            alt=""
            key={id + "item"}
            objectFit="contain"
            src={item}
          />
        ))}
      </div>
    </div>
  );
};
