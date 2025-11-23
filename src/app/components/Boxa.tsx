"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Box from "@/app/components/box";

interface BoxProps {
  text: string;
  imageSrc: string;
  link: string;
}

interface BoxaProps {
  boxes: BoxProps[];
}

const parentVariant: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22, // Animate children one by one
    },
  },
};

export default function Boxa({ boxes }: BoxaProps) {
  return (
    <motion.div
      variants={parentVariant}
      initial="hidden"
      animate="show"
      className="
        grid 
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        justify-center items-center 
        gap-4 sm:gap-6 lg:gap-10
        p-4 sm:p-8 lg:p-12
        bg-gray-300
      "
    >
      {boxes.map((item, index) => (
        <Box
          key={index}
          text={item.text}
          imageSrc={item.imageSrc}
          link={item.link}
        />
      ))}

      
    </motion.div>

  );
}
