"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type ServiceCardProps = {
  image: any;
  title: string;
  desc: string;
  href: string;
};

export const ServiceCard: FC<ServiceCardProps> = ({
  image,
  title,
  desc,
  href,
}) => {
  const local = useLocale();
  return (
    <Link
      href={`${local}/${href}`}
      className=" p-4 shadow-lg rounded flex flex-col gap-2 items-center justify-between"
    >
      <Image alt="Image" src={image} />
      <h2 className="font-semibold">{title}</h2>
      <p className="text-center">{desc}</p>
    </Link>
  );
};
