"use client";

import React from "react";

export default function Hero() {
  return (
    <div>

    <section className="h-full w-full p-10 flex flex-col items-center justify-center bg-gray-300 text-white text-center">
            {/* Main Heading */}
      <h1
        className="text-[10px] sm:text-[20px] md:text-[90px] font-bold tracking-tight text-transparent
                   stroke-1px] stroke-white"
        style={{
          WebkitTextStroke: "1px white",
          WebkitTextFillColor: "transparent",
        }}
      >
        Your Brand Visibility Partner
      </h1>
      

      
      {/* Subheading */}
      <p className="text-base sm:text-lg md:text-[30px] font-semibold tracking-wide mb-4">
        Signs Corner manufactures and installs premium signage to your specifications
        <br />
         <br />- on time - on budget - every time!
      </p>




      </section>

 
</div>
    
  );
}
