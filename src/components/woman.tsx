import React from "react";
import Image from "next/image";

import I1 from "../../public/woman/görsel1.jpg";
import I2 from "../../public/woman/görsel2.jpg";
import I3 from "../../public/woman/görsel3.jpg";
import I4 from "../../public/woman/görsel4.jpg";
import I5 from "../../public/woman/görsel5.jpg";
import I6 from "../../public/woman/görsel6.jpg";
import I7 from "../../public/woman/görsel7.jpg";
import I8 from "../../public/woman/görsel8.jpg";
import I10 from "../../public/woman/görsel9.jpg";
import I9 from "../../public/woman/görsel10.jpg";

const listImages = [I1, I2, I3, I4, I5, I6, I7, I8, I9, I10];

export const Woman = () => {
  return (
    <div className=" bg-gray-200">
      <div className="container grid-min-max py-32 gap-4">
        {listImages.map((image, index) => (
          <div key={index} className={`div${index + 1}`}>
            <Image alt="" className="rounded-md shadow-xl" src={image} />
          </div>
        ))}
      </div>
    </div>
  );
};
