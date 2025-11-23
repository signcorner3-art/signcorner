import BackButton from '@/app/components/backbutton';
import BackToTopButton from '@/app/components/BackToTopButton';
import ImageGalleryWithLightbox from '@/app/components/PictureSlider'
import React from 'react'

export default function Installation() {
    const images = [
  { src: "/asset/picture/ins-101.png", alt: "Slide 1" },
  { src: "/asset/picture/ins-102.png", alt: "Slide 2" },
  { src: "/asset/picture/ins-103.png", alt: "Slide 3" },
  { src: "/asset/picture/ins-104.png", alt: "Slide 4" },
  { src: "/asset/picture/ins-105.png", alt: "Slide 5" },
  { src: "/asset/picture/ins-106.png", alt: "Slide 6" },
  { src: "/asset/picture/ins-107.png", alt: "Slide 7" },


];
// galary data
  return (
    <div>
       <div className='bg-gray-300 text-center py-4'>
        <h1
        className="font-bold tracking-tight"
        style={{
          fontSize: "clamp(32px, 5vw, 90px)",
          WebkitTextStroke: "2px black",
          WebkitTextFillColor: "transparent",
          lineHeight: "0.9",
        }}
      >   
        Installation
      </h1>
</div>

    <BackButton />
    {/* ending dispaly main pic div */}
<div className='py-10 bg-gray-300'>
   <ImageGalleryWithLightbox images={images} />
   <BackToTopButton />
</div>
{/* ending glary div */}
    </div>
  )
}
