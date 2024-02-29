import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/services";
import React from "react";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <About />
      <Services />
    </div>
  );
};
