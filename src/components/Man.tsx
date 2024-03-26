import React from "react";
import Image from "next/image";

import I1 from "../../public/man/görsel1.jpg";
import I2 from "../../public/man/görsel2.jpg";
import I3 from "../../public/man/görsel3.jpg";
import I4 from "../../public/man/görsel4.jpg";
import I5 from "../../public/man/görsel5.jpg";
import I6 from "../../public/man/görsel6.jpg";
import I7 from "../../public/man/görsel7.jpg";
import I8 from "../../public/man/görsel8.jpg";
import I10 from "../../public/man/görsel9.jpg";
import I9 from "../../public/man/görsel10.jpg";

const listImages = [I1, I2, I3, I4, I5, I6, I7, I8, I9, I10];

export const Man = () => {
  return (
    <div className=" bg-gray-200">
      <div className="container grid-min-max py-32 gap-4 ">
        {listImages.map((image, index) => (
          <div key={index} className={`div${index + 1}`}>
            <Image alt="" className="rounded-md shadow-xl" src={image} />
          </div>
        ))}
      </div>
    </div>
  );
};
