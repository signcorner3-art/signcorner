"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Boxes: React.FC = () => {
  return (
      <div className="grid grid-cols-3 gap-4 p-4 bg-[#0b0b0b]  [&>*]:h-72 [&>*]:w-100 [&>*]:rounded-3xl">

        {/* 1st div */}
        <Link href="">
                <div className="relative w-full max-w-md h-72 group overflow-hidden rounded-2xl ">

  {/* Image (disappears on hover) */}
  <Image
    src="/asset/picture/img100.jpg"
    alt="Nature Image"
    fill
    className="object-cover rounded-2xl transition-opacity duration-500 group-hover:opacity-0"
  />

  {/* Hover Background (appears only on hover) */}
  <div
    className="
      absolute inset-[2px]  /* inner 2px gap for outline look */
      bg-transparent
      rounded-2xl
      flex items-center justify-center
      transition-all duration-500
      group-hover:bg-black
      group-hover:outline
      group-hover:outline-2
      group-hover:outline-white
      group-hover:outline-offset-[-2px] /* keep outline inside */
    "
  >
    <h2
      className="
        text-white text-2xl font-semibold 
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-500
      "
    >
      Hello from div 1
    </h2>
  </div>
        </div>
        </Link>
        {/* end 1st div */}



      {/* 2nd Div */}
        <div className="relative w-full max-w-md h-72 group overflow-hidden rounded-2xl ">

  {/* Image (disappears on hover) */}
  <Image
    src="/asset/picture/img101.jpg"
    alt="Nature Image"
    fill
    className="object-cover rounded-2xl transition-opacity duration-500 group-hover:opacity-0"
  />

  {/* Hover Background (appears only on hover) */}
  <div
    className="
      absolute inset-[2px]  /* inner 2px gap for outline look */
      bg-transparent
      rounded-2xl
      flex items-center justify-center
      transition-all duration-500
      group-hover:bg-black
      group-hover:outline
      group-hover:outline-2
      group-hover:outline-white
      group-hover:outline-offset-[-2px] /* keep outline inside */
    "
  >
    <h2
      className="
        text-white text-2xl font-semibold 
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-500
      "
    >
      Hello from div 2
    </h2>
  </div>
</div>
    {/* end 2nd div */}


        {/* 3rd div */}
                <div className="relative w-full max-w-md h-72 group overflow-hidden rounded-2xl ">

  {/* Image (disappears on hover) */}
  <Image
    src="/asset/picture/img103.jpg"
    alt="Nature Image"
    fill
    className="object-cover rounded-2xl transition-opacity duration-500 group-hover:opacity-0"
  />

  {/* Hover Background (appears only on hover) */}
  <div
    className="
      absolute inset-[2px]  /* inner 2px gap for outline look */
      bg-transparent
      rounded-2xl
      flex items-center justify-center
      transition-all duration-500
      group-hover:bg-black
      group-hover:outline
      group-hover:outline-2
      group-hover:outline-white
      group-hover:outline-offset-[-2px] /* keep outline inside */
    "
  >
    <h2
      className="
        text-white text-2xl font-semibold 
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-500
      "
    >
      Hello from div 3
    </h2>
  </div>
</div>
        {/*end 3rd div */}


        {/* 4th div */}
        <div className="relative w-full max-w-md h-72 group overflow-hidden rounded-2xl ">

  {/* Image (disappears on hover) */}
  <Image
    src="/asset/picture/img104.jpg"
    alt="Nature Image"
    fill
    className="object-cover rounded-2xl transition-opacity duration-500 group-hover:opacity-0"
  />

  {/* Hover Background (appears only on hover) */}
  <div
    className="
      absolute inset-[2px]  /* inner 2px gap for outline look */
      bg-transparent
      rounded-2xl
      flex items-center justify-center
      transition-all duration-500
      group-hover:bg-black
      group-hover:outline
      group-hover:outline-2
      group-hover:outline-white
      group-hover:outline-offset-[-2px] /* keep outline inside */
    "
  >
    <h2
      className="
        text-white text-2xl font-semibold 
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-500
      "
    >
      Hello from div 4
    </h2>
  </div>
</div>

        {/*end 4th div */}

        {/* 5th div */}
        <div className="relative w-full max-w-md h-72 group overflow-hidden rounded-2xl ">

  {/* Image (disappears on hover) */}
  <Image
    src="/asset/picture/img106.jpg"
    alt="Nature Image"
    fill
    className="object-cover rounded-2xl transition-opacity duration-500 group-hover:opacity-0"
  />

  {/* Hover Background (appears only on hover) */}
  <div
    className="
      absolute inset-[2px]  /* inner 2px gap for outline look */
      bg-transparent
      rounded-2xl
      flex items-center justify-center
      transition-all duration-500
      group-hover:bg-black
      group-hover:outline
      group-hover:outline-2
      group-hover:outline-white
      group-hover:outline-offset-[-2px] /* keep outline inside */
    "
  >
    <h2
      className="
        text-white text-2xl font-semibold 
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-500
      "
    >
      Hello from div 5
    </h2>
  </div>
</div>
        {/*end 5th div */}


                {/* 6th div */}
        <div className="relative w-full max-w-md h-72 group overflow-hidden rounded-2xl ">

  {/* Image (disappears on hover) */}
  <Image
    src="/asset/picture/img107.jpg"
    alt="Nature Image"
    fill
    className="object-cover rounded-2xl transition-opacity duration-500 group-hover:opacity-0"
  />

  {/* Hover Background (appears only on hover) */}
  <div
    className="
      absolute inset-[2px]  /* inner 2px gap for outline look */
      bg-transparent
      rounded-2xl
      flex items-center justify-center
      transition-all duration-500
      group-hover:bg-black
      group-hover:outline
      group-hover:outline-2
      group-hover:outline-white
      group-hover:outline-offset-[-2px] /* keep outline inside */
    "
  >
    <h2
      className="
        text-white text-2xl font-semibold 
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-500
      "
    >
      Hello from div 6
    </h2>
  </div>
</div>
        {/*end 6th div */}

      </div>
 
  );
};

export default Boxes;