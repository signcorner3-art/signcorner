"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// The BoxProps interface is clean, no changes needed here.
interface BoxProps {
  text: string;
  imageSrc: string;
  link: string;
  // height and width props are now optional/deprecated 
  // if you adopt the aspect-square approach.
}

const Box: React.FC<BoxProps> = ({
  text,
  imageSrc,
  link,
  // Removed default height/width to rely on the grid and aspect ratio
}) => {
  return (
    <Link href={link}>
      {/* The main change: w-full ensures it takes the column width, 
        and aspect-square ensures it maintains a 1:1 ratio.
      */}
      <div className="relative w-full aspect-square group overflow-hidden rounded-2xl cursor-pointer">
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
            group-hover:bg-black group-hover:bg-opacity-70 /* Added opacity */
            group-hover:outline group-hover:outline-2
            group-hover:outline-white group-hover:outline-offset-[-4px]
          "
        >
          {/* Made the text size responsive */}
          <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-4">
            {text}
          </h2>
        </div>
      </div>
    </Link>
  );
};

interface BoxaProps {
  boxes: BoxProps[];
}

export default function Boxa({ boxes }: BoxaProps) {
  return (
    <div 
      className="
        grid 
        grid-cols-1                /* Mobile (xs) */
        sm:grid-cols-2             /* Small tablets (sm) */
        lg:grid-cols-3             /* Large tablets / Desktops (lg) */
        xl:grid-cols-4             /* Large Desktops / 4K (xl and above) */
        justify-center items-center 
        gap-4 sm:gap-6 lg:gap-10   /* Responsive gap */
        p-4 sm:p-8 lg:p-12         /* Responsive padding */
        bg-gray-300
      "
    >
      {boxes.map((item, index) => (
        // Using index as a key is okay for static lists, 
        // but it's generally better to use a unique ID if available.
        <Box
          key={index} 
          text={item.text}
          imageSrc={item.imageSrc}
          link={item.link}
          // height and width are no longer passed/needed
        />
      ))}
    </div>
  );
}