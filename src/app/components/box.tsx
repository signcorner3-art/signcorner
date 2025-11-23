"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, Variants, easeOut } from "framer-motion";

interface BoxProps {
  text: string;
  imageSrc: string;
  link: string;
}

const childVariant: Variants = {
  hidden: { y: -80, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easeOut,
    },
  },
};

const Box: React.FC<BoxProps> = ({ text, imageSrc, link }) => {
  return (
    <motion.div variants={childVariant}>
      <Link href={link}>
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
              group-hover:bg-black group-hover:bg-opacity-70 
              group-hover:outline group-hover:outline-2
              group-hover:outline-white group-hover:outline-offset-[-4px]
            "
          >
            <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-4">
              {text}
            </h2>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Box;
