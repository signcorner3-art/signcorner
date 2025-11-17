import BackToTopButton from '@/app/components/BackToTopButton';
import ImageGalleryWithLightbox from '@/app/components/PictureSlider'
import React from 'react'

export default function ThreeDFabrication() {
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
    <h1 className='text-5xl font-bold text-center underline mt-8'>3D Fabrication</h1>
    {/* ending dispaly main pic div */}
<div className='py-10'>
   <ImageGalleryWithLightbox images={images} />
   <BackToTopButton />
</div>
{/* ending glary div */}
    </div>
  )
}
