import React from "react";
import { workingArea } from "@/constant/WorkingArea";
import { ServiceCard } from "./ui/ServiceCard";

export const Services = () => {
  return (
    <div className="clamp flex flex-col gap-12 ">
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-customYellow text-bold text-center text-2xl font-bold">
          DIENSTEN
        </h2>
        <p className="text-2xl">UW HAAR EN UW UITERLIJKVERTROUWD AAN ONS</p>
        <p className="text-sm ">
          Wij combineren een moderne aanpak met de traditionele kapperskunst en
          bieden elk van onze klanten een bijzondere ervaring.
        </p>
      </div>
      <div className="flex gap-2  mx-auto flex-col md:flex-row">
        {workingArea.map((item, i) => (
          <ServiceCard
            key={i + "idx"}
            image={item.photo}
            title={item.name}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};