"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BoxProps {
  text: string;
  imageSrc: string;
  link: string;
  height?: string; // optional custom height
}


const Box: React.FC<BoxProps> = ({ text, imageSrc, link, height = "h-80" }) => {
  return (
    <Link href={link}>
      {/* ✅ relative is critical for next/image fill to work */}
      <div
        className={`relative w-full ${height} group overflow-hidden rounded-2xl cursor-pointer`}
      >
        {/* Image (disappears on hover) */}
        <Image
          src={imageSrc}
          alt={text}
          fill
          className="object-cover rounded-2xl transition-opacity duration-500 group-hover:opacity-0"
        />

        {/* Hover Background */}
        <div
          className="
            absolute inset-[2px]
            bg-transparent
            rounded-2xl
            flex items-center justify-center
            transition-all duration-500
            group-hover:bg-black
            group-hover:outline
            group-hover:outline-2
            group-hover:outline-white
            group-hover:outline-offset-[-2px]
          "
        >
          <h2
            className="
              text-white text-2xl font-semibold 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-500
            "
          >
            {text}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default function Boxes() {
  return (
    <div className="grid grid-cols-2 gap-14 p-14 bg-[#0b0b0b]">
      <Box
        text="ABOUT US"
        imageSrc="/asset/picture/img100.jpg"
        link="/about"
        height="h-[400px]" // 🔥 You can freely adjust height now
      />
      <Box
        text="WHAT WE DO & SERVICES"
        imageSrc="/asset/picture/img101.jpg"
        link="/contact"
        height="h-[400px]"
      />
      <Box
        text="OUR TRUSTED PARTNERS"
        imageSrc="/asset/picture/img102.jpg"
        link="/services"
        height="h-[400px]"
      />
      <Box
        text="CONTACT US"
        imageSrc="/asset/picture/img104.jpg"
        link="/services"
        height="h-[400px]"
      />
    </div>
  );
}
