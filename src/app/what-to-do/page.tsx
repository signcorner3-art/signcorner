import React from 'react'
import Boxes from '../components/Boxes'
import Boxa from '../components/Boxa'
import BackToTopButton from '../components/BackToTopButton'

const whattodo = () => {
  return (
  

<div>
<Boxa
  boxes={[
    {
      text: "Designs",
      imageSrc: "/asset/picture/img100.jpg",
      link: "../what-to-do/designs",

    },
    {
      text: "Building Signs",
      imageSrc: "/asset/picture/img101.jpg",
      link: "../what-to-do/building-signs",

    },
    {
      text: "Digital Signs",
      imageSrc: "/asset/picture/img102.jpg",
      link: "../what-to-do/digital-signs",
    },
    {
      text: "Display Signs",
      imageSrc: "/asset/picture/img104.jpg",
      link: "../what-to-do/display-signs",
    },
    {
      text: "Llluminated signage",
      imageSrc: "/asset/picture/img104.jpg",
      link: "../what-to-do/illuminatedsignage",
    },
    {
      text: "Installation",
      imageSrc: "/asset/picture/img104.jpg",
      link: "../what-to-do/installation",
    },
    {
      text: "Office Signage",
      imageSrc: "/asset/picture/img104.jpg",
      link: "../what-to-do/office-signage",
    },
    {
      text: "Outdoor Signs",
      imageSrc: "/asset/picture/img104.jpg",
      link: "../what-to-do/outdoor-signs",
    },
    {
      text: "Retail Signs",
      imageSrc: "/asset/picture/img104.jpg",
      link: "../what-to-do/retail-signs",
    },
    {
      text: "3D Febrication",
      imageSrc: "/asset/picture/img104.jpg",
      link: "../what-to-do/three-D-fabrication",
    },
    {
      text: "Vehicle Fleet Signs",
      imageSrc: "/asset/picture/img104.jpg",
      link: "../what-to-do/vehicle-fleet-signs",
    }
  ]}
/>
<BackToTopButton />

</div>



  )
}

export default whattodo
