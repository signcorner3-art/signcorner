"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BoxProps {
  text: string;
  imageSrc: string;
  link: string;
}

const Box: React.FC<BoxProps> = ({ text, imageSrc, link }) => {
  return (
    <Link href={link}>
      <div className="relative w-full max-w-md h-72 group overflow-hidden rounded-2xl cursor-pointer">

        {/* Image (disappears on hover) */}
        <Image
          src={imageSrc}
          alt={text}
          fill
          className="object-cover rounded-2xl transition-opacity duration-500 group-hover:opacity-0"
        />

        {/* Hover Background (appears only on hover) */}
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
    <div className="grid grid-cols-3 gap-4 p-4 bg-[#0b0b0b] [&>*]:h-72 [&>*]:w-100 [&>*]:rounded-3xl">
      <Box
        text="Hello from Div 1"
        imageSrc="/asset/picture/img100.jpg"
        link="/about"
      />
      <Box
        text="Hello from Div 2"
        imageSrc="/asset/picture/img101.jpg"
        link="/contact"
      />
      <Box
        text="Hello from Div 3"
        imageSrc="/asset/picture/img102.jpg"
        link="/services"
      />
      <Box
        text="Hello from Div 4"
        imageSrc="/asset/picture/img104.jpg"
        link="/services"
      />
      <Box
        text="Hello from Div 5"
        imageSrc="/asset/picture/img106.jpg"
        link="/services"
      />

    <Box
        text="Hello from Div 6"
        imageSrc="/asset/picture/img107.jpg"
        link="/services"
      />
    <Box
        text="Hello from Div 7"
        imageSrc="/asset/picture/img108.jpg"
        link="/services"
      />
    </div>
  );
}
