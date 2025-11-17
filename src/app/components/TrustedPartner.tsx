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
    <section className="w-full py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Trusted Partner
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-6">
        {partners.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
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
