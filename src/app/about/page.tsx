"use client";

import React from "react";
import Image from "next/image";
import BackToTopButton from "../components/BackToTopButton";


export default function AboutPage() {
  // optional gallery images — uncomment to use the gallery component below
  const images = [
    { src: "/asset/picture/Aboutus.jpg", alt: "About us 1" },
    { src: "/asset/picture/img101.jpg", alt: "About us 2" },
    { src: "/asset/picture/img102.jpg", alt: "About us 3" },
    { src: "/asset/picture/img103.jpg", alt: "About us 4" },
    { src: "/asset/picture/img104.jpg", alt: "About us 5" },
    { src: "/asset/picture/img105.jpg", alt: "About us 6" },
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-black">
      {/* Top banner image (responsive, keeps rectangle aspect) */}
      <div className="w-full">
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[620px] overflow-hidden">
          <Image
            src="/asset/picture/Aboutus.jpg"
            alt="About us banner"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* About content */}
      <section className="w-full py-12 sm:py-16 bg-gray-300">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Heading */}
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide mb-4">
              ABOUT <span className="text-red-600">US</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 rounded-full" />
          </div>

          {/* Right: Content */}
          <div className="text-gray-800 leading-relaxed space-y-5 text-base sm:text-lg">
            <p>
              At <span className="font-semibold text-gray-900">Signs Corner</span>, we create signage and print
              solutions that define brands and transform spaces.
            </p>

            <p>
              Based in <span className="font-semibold">Melbourne</span> and <span className="font-semibold">Perth</span>,
              we partner with businesses of all sizes — from growing local brands to national corporates —
              to deliver impactful visual communication.
            </p>

            <p>
              Our focus is simple: <strong>design with purpose</strong>, <strong>produce with precision</strong>,
              and <strong>deliver with reliability</strong>.
            </p>

            <p>
              From corporate branding and store signage to fit-outs, uniforms, custom prints, and digital marketing —
              we bring creativity and technical expertise to every project.
            </p>

            <p>
              With in-house manufacturing and professional installation, we ensure seamless quality and consistency
              from concept to completion — so your brand stands out, everywhere it appears.
            </p>

            <p className="font-semibold text-gray-900 text-lg sm:text-xl">
              Smart design. Clean execution. Real impact.
              <br /> Your brand, elevated.
            </p>

            <div className="mt-4">
              <BackToTopButton />
            </div>
          </div>
        </div>
      </section>

      {/* Optional gallery below - responsive and interactive */}
      <section className="w-full py-12 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Uncomment the line below to show image gallery */}
          {/* <ImageGalleryWithLightbox images={images} /> */}
        </div>
      </section>
    </div>
  );
}
