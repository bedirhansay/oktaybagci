import { Brands } from "@/components/Brands";
import { Certificate } from "@/components/Certificate";
import { Firm } from "@/components/Firm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/services";
import React from "react";

export default function page() {
  return (
    <div className="pt-44 flex flex-col gap-24">
      <div className="clamp flex flex-col gap-24">
        <Services />
        <Firm />
        <Brands />
        <Certificate />
      </div>

      <Footer />
    </div>
  );
}
