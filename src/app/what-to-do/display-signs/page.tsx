import BackButton from '@/app/components/backbutton';
import BackToTopButton from '@/app/components/BackToTopButton';
import ImageGalleryWithLightbox from '@/app/components/PictureSlider'
import React from 'react'

export default function DisplaySigns() {
    const images = [
  { src: "/asset/picture/ds-101.png", alt: "Slide 1" },
  { src: "/asset/picture/ds-102.png", alt: "Slide 2" },
  { src: "/asset/picture/ds-103.png", alt: "Slide 3" },
  { src: "/asset/picture/ds-104.png", alt: "Slide 4" },
  { src: "/asset/picture/ds-105.png", alt: "Slide 5" },
  { src: "/asset/picture/ds-106.png", alt: "Slide 6" },
  { src: "/asset/picture/ds-107.png", alt: "Slide 7" },


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
        Display Signs
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
