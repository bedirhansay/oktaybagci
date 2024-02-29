import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/services";
import React from "react";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};
