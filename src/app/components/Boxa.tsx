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
  height = "h-[300px]",
  width = "w-[300px]",
}) => {
  return (
    <Link href={link}>
      <div className={`relative w-full ${height} ${width} group overflow-hidden rounded-2xl cursor-pointer`}>
        <Image
          src={imageSrc}
          alt={text}
          fill
          className="object-cover rounded-2xl transition-opacity duration-500 group-hover:opacity-0"
        />

        <div
          className="
            absolute inset-0 bg-transparent rounded-2xl
            flex items-center justify-center
            transition-all duration-500
            group-hover:bg-black
            group-hover:outline group-hover:outline-2
            group-hover:outline-white group-hover:outline-offset-[-4px]
          "
        >
          <h2 className="text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {text}
          </h2>
        </div>
      </div>
    </Link>
  );
};

// ✅ BOXA NOW TAKES AN ARRAY OF BOX OBJECTS
interface BoxaProps {
  boxes: BoxProps[];
}

export default function Boxa({ boxes }: BoxaProps) {
  return (
    <div className="grid grid-cols-4 justify-between items-center gap-12 p-5 bg-gray-300">

      {boxes.map((item, index) => (
        <Box
          key={index}
          text={item.text}
          imageSrc={item.imageSrc}
          link={item.link}
          height={item.height}
          width={item.width}
        />
      ))}

    </div>
  );
}
