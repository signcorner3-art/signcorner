"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="w-full py-16 flex flex-col items-center justify-center bg-gray-300 text-black text-center">

      {/* Heading */}
      <h1
        className="font-bold tracking-tight"
        style={{
          fontSize: "clamp(32px, 7vw, 180px)",
          WebkitTextStroke: "2px black",
          WebkitTextFillColor: "transparent",
          lineHeight: "0.9",
        }}
      >
        Your Brand Visibility Partner
      </h1>

      {/* Subheading */}
      <p
        className="font-semibold mt-6"
        style={{
          fontSize: "clamp(16px, 2vw, 32px)",
        }}
      >
        Signs Corner manufactures and installs premium signage to your specifications
        <br />
        <br />- on time - on budget - every time!
      </p>

    </section>
  );
}
