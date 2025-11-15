"use client"


import React from 'react'
import Image from 'next/image'
import { px } from 'framer-motion'
import PictureSlider from '../components/PictureSlider'
import ImageGalleryWithLightbox from '../components/PictureSlider'
import BackToTopButton from '../components/BackToTopButton'

const about = () => {
//   const images = [
//   { src: "/asset/picture/Aboutus.jpg", alt: "Slide 1" },
//   { src: "/asset/picture/img101.jpg", alt: "Slide 2" },
//   { src: "/asset/picture/img102.jpg", alt: "Slide 3" },
//   { src: "/asset/picture/img103.jpg", alt: "Slide 3" },
//   { src: "/asset/picture/img104.jpg", alt: "Slide 3" },
//   { src: "/asset/picture/img105.jpg", alt: "Slide 3" },
// ];
// // galary data
  return (
    <div className='bg-gray-800 w-full h-full'>
      <div className='flex justify-end items-end h-auto w-auto'>
          <Image
            src="/asset/picture/Aboutus.jpg"
            alt="Nature Image"
            width={1350}
            height={100}
            className="object-cover rounded-2xl transition-opacity duration-500 group-hover:opacity-0"
          />
         
      </div>
{/* ending dispaly main pic div */}
{/* <div className='py-20'>
   <ImageGalleryWithLightbox images={images} />
</div> */}
{/* ending glary div */}
 <div>
 <section className="w-full py-16 bg-gray-300">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE – Heading */}
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-gray-900 tracking-wide mb-4">
            ABOUT <span className="text-red-600">US</span>
          </h2>

          <div className="w-20 h-1 bg-red-600 rounded-full" />
        </div>

        {/* RIGHT SIDE – Content */}
        <div className="text-blac leading-relaxed space-y-5 text-lg">

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

          <p className="font-semibold text-gray-900 text-xl">
            Smart design. Clean execution. Real impact.  
            <br /> Your brand, elevated.
          </p>
          <BackToTopButton />
        </div>

      </div>
    </section>

 </div>
{/* ending contant div */}

      

    </div>
  )
}

export default about

