import React from 'react'
import Boxes from '../components/Boxes'
import Boxa from '../components/Boxa'
import BackToTopButton from '../components/BackToTopButton'

const whattodo = () => {
  return (
  

<div>
  
<div className='bg-gray-300 text-center py-4'>
        <h1
        className="font-bold tracking-tight"
        style={{
          fontSize: "clamp(32px, 7vw, 90px)",
          WebkitTextStroke: "3px black",
          WebkitTextFillColor: "transparent",
          lineHeight: "0.9",
        }}
      >
        What To Do
      </h1>
</div>

<Boxa
  boxes={[
    {
      text: "Designs",
      imageSrc: "/asset/picture/img100.jpg",
      link: "../what-to-do/designs",

    },
    {
      text: "Building Signs",
      imageSrc: "/asset/picture/Building-Signs-Landing-page-images.png",
      link: "../what-to-do/building-signs",

    },
    {
      text: "Digital Signs",
      imageSrc: "/asset/picture/Digital-Signs-Landing-page-images.png",
      link: "../what-to-do/digital-signs",
    },
    {
      text: "Display Signs",
      imageSrc: "/asset/picture/Display-Signs-Landing-page-images.png",
      link: "../what-to-do/display-signs",
    },
    {
      text: "Llluminated signage",
      imageSrc: "/asset/picture/Illuminated-Signs-Landing-page-images.png",
      link: "../what-to-do/illuminatedsignage",
    },
    {
      text: "Installation",
      imageSrc: "/asset/picture/img104.jpg",
      link: "../what-to-do/installation",
    },
    {
      text: "Office Signage",
      imageSrc: "/asset/picture/Office-Signs-Landing-page-images.png",
      link: "../what-to-do/office-signage",
    },
    {
      text: "Outdoor Signs",
      imageSrc: "/asset/picture/Outdoor-Signs-Landing-page-images.png",
      link: "../what-to-do/outdoor-signs",
    },
    {
      text: "Retail Signs",
      imageSrc: "/asset/picture/Retail-Signs-Landing-page-images.png",
      link: "../what-to-do/retail-signs",
    },
    {
      text: "3D Febrication",
      imageSrc: "/asset/picture/3D-Fabricated-Signs-Landing-Page.png",
      link: "../what-to-do/three-D-fabrication",
    },
    {
      text: "Vehicle Fleet Signs",
      imageSrc: "/asset/picture/Vehicle-Fleet-Signs-Landing-page-images.png",
      link: "../what-to-do/vehicle-fleet-signs",
    }
  ]}
/>
<BackToTopButton />

</div>



  )
}

export default whattodo
