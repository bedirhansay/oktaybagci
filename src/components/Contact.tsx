import { Mail, Phone } from "lucide-react";
import React from "react";
import wp from "../../public/wpicon.svg";
import Image from "next/image";

export const Contact = () => {
  return (
    <div id="contact" className="scroll-mt-28 flex flex-col items-center gap-8">
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-customYellow text-bold text-center text-2xl font-bold">
          CONTACT
        </h2>
        <p className="text-4xl max-w-2xl mx-auto">NEEM CONTACT MET ONS OP</p>
        <p className="text-sm max-w-2xl mx-auto">
          Als u meer informatie wilt, kunt u contact met ons opnemen via de
          betreffende kanalen.
        </p>
      </div>

      <div className="flex gap-8 ">
        <a href="tel:+905325275748" className="text-center">
          <Phone className="w-12 h-12 cursor-pointer" />
        </a>

        <a href="mailto:oktaybagci14@gmail.com">
          <Mail className="w-12 h-12 cursor-pointer " />
        </a>

        <a href="http://wa.me/+905325275748">
          <Image src={wp} alt="" className="w-12 h-12 " />
        </a>
      </div>
    </div>
  );
};
