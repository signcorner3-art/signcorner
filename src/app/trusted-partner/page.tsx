import React from 'react'
import TrustedPartner from '../components/TrustedPartner'

export default function Trusted() {

      const partnerList = [
    { image: "/asset/picture/Gosnells-Kebabs=logo.svg"},
    { image: "/asset/picture/Gosnells-Motors.png"},
    { image: "/asset/picture/Orafol-logo.png" },
    { image: "/asset/picture/tyrepower-logo.png"},
    { image: "/asset/picture/Belmont-Kebab-logo.png" },        // name optional
    { image: "/asset/picture/Gosnells Kebabs-logo.png" },
    { image: "/asset/picture/Gosnells-Motors-gibbson-kia.svg" },
    { image: "/asset/picture/aes-logo9.svg" },
    { image: "/asset/picture/Avery-Dennison-logo.png" },
    { image: "/asset/picture/KADAK CHAI.png" },
    { image: "/asset/picture/khabbay-logo.png" },
    { image: "/asset/picture/usta-grill-logo.png" },
    { image: "/asset/picture/jamaica-jamaica-blue-logo.png" },
    { image: "/asset/picture/gami-logo.png" },
    { image: "/asset/picture/Dede Kebabs-logo.png" },
    { image: "/asset/picture/pizza-hut-logo.png" },
           
  ];
  return (
    <div>
            <TrustedPartner partners={partnerList} />
    </div>
  )
}


