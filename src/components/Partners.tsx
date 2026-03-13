import { useEffect, useState } from "react";
import partnerPetrzalka from "@/assets/partner-petrzalka.jpg";
import partnerSaintGobain from "@/assets/partner-saint-gobain.png";
import partnerNicolaus from "@/assets/partner-nicolaus.png";
import partnerVajnory from "@/assets/partner-vajnory.png";

const partners = [
  { name: "Saint-Gobain", logo: partnerSaintGobain },
  { name: "MČ Bratislava – Petržalka", logo: partnerPetrzalka },
  { name: "Nicolaus", logo: partnerNicolaus },
  { name: "Vajnory", logo: partnerVajnory },
];

const Partners = () => {
  return (
    <section className="py-16 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            Dôverujú nám
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Partneri a Spolupráce
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Static logos grid */}
        <div className="flex flex-wrap justify-center items-end gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-end justify-center h-32 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`object-contain self-end ${partner.name === "Vajnory" ? "h-24 w-auto" : "h-20 w-auto"}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
