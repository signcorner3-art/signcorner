"use client";

import Image from "next/image";
import React from "react";

interface PartnerItem {
  image: string;       // logo path
  name?: string;       // optional partner name
}

interface TrustedPartnerProps {
  partners: PartnerItem[];   // array of objects
}

export default function TrustedPartner({ partners }: TrustedPartnerProps) {
  return (
    <section className="w-full">
<div className='bg-gray-300 text-center py-4'>
        <h1
        className="font-bold tracking-tight"
        style={{
          fontSize: "clamp(32px, 7vw, 90px)",
          WebkitTextStroke: "3px black",
          WebkitTextFillColor: "transparent",
          lineHeight: "0.9",
        }}
      >
        Our Trusted Partner
      </h1>
</div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-6 bg-gray-200 py-10">
        {partners.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.name || "trusted-partner"}
              width={120}
              height={120}
              className="object-contain"
            />

            {item.name && (
              <p className="mt-3 text-sm font-medium text-gray-700 text-center">
                {item.name}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
