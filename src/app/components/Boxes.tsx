"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BoxProps {
  text: string;
  imageSrc: string;
  link: string;
  height?: string;
  width?: string;
}

const Box: React.FC<BoxProps> = ({
  text,
  imageSrc,
  link,
  // 🔥 Responsive height — keep rectangle shape
  height = "h-[260px] sm:h-[300px] md:h-[350px] lg:h-[400px]",
  width = "w-full",
}) => {
  return (
    <Link href={link}>
      <div
        className={`relative ${width} ${height} group overflow-hidden rounded-2xl cursor-pointer`}
      >
        {/* Image */}
        <Image
          src={imageSrc}
          alt={text}
          fill
          className="object-cover rounded-2xl transition-opacity duration-500 group-hover:opacity-0"
        />

        {/* Hover Layer */}
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
            group-hover:outline-offset-[-4px]
          "
        >
          <h2
            className="
              text-white text-xl md:text-2xl font-semibold
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
    <div className="bg-gray-300 p-6 sm:p-10 md:p-14">
      {/* 🔥 Responsive grid: 1 column mobile → 2 columns tablet → 2 desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <Box
          text="ABOUT US"
          imageSrc="/asset/picture/img100.jpg"
          link="../about"
        />

        <Box
          text="WHAT WE DO & SERVICES"
          imageSrc="/asset/picture/img101.jpg"
          link="../what-to-do"
        />

        <Box
          text="OUR TRUSTED PARTNERS"
          imageSrc="/asset/picture/img102.jpg"
          link="../trusted-partner"
        />

        <Box
          text="CONTACT US"
          imageSrc="/asset/picture/img104.jpg"
          link="../contact-us"
        />
      </div>
    </div>
  );
}
