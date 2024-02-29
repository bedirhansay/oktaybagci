import Image from "next/image";
import React, { FC } from "react";

type ServiceCardProps = {
  image: any;
  title: string;
  desc: string;
};

export const ServiceCard: FC<ServiceCardProps> = ({ image, title, desc }) => {
  return (
    <div className="border p-2 shadow-lg rounded flex flex-col gap-2 items-center justify-between">
      <Image alt="Image" src={image} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};
