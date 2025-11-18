import BackToTopButton from '@/app/components/BackToTopButton';
import ImageGalleryWithLightbox from '@/app/components/PictureSlider'
import React from 'react'

export default function Designs() {
    const images = [
  { src: "/asset/picture/Aboutus.jpg", alt: "Slide 1" },
  { src: "/asset/picture/img101.jpg", alt: "Slide 2" },
  { src: "/asset/picture/img102.jpg", alt: "Slide 3" },
  { src: "/asset/picture/img103.jpg", alt: "Slide 3" },
  { src: "/asset/picture/img104.jpg", alt: "Slide 3" },
  { src: "/asset/picture/img105.jpg", alt: "Slide 3" },
];
// galary data
  return (
    <div>
    <div className='bg-gray-50 text-center py-4'>
        <h1
        className="font-bold tracking-tight"
        style={{
          fontSize: "clamp(32px, 5vw, 90px)",
          WebkitTextStroke: "3px black",
          WebkitTextFillColor: "transparent",
          lineHeight: "0.9",
        }}
      >
        Design
      </h1>
</div>
    {/* ending dispaly main pic div */}
<div className='py-10 bg-gray-50'>
   <ImageGalleryWithLightbox images={images} />
   <BackToTopButton />
</div>
{/* ending glary div */}
    </div>
  )
}
