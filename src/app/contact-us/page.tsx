import React from 'react'
import Link from 'next/link'

import { Phone } from "lucide-react";
import ContactForm from '../components/contact';
import BackToTopButton from '../components/BackToTopButton';


const contactus = () => {
  return (
    <div>


    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left side — Heading */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">
            CONTACT US
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            We’re here to help you with any signage, printing, or branding queries.
          </p>
        </div>

        {/* Right side — Content */}
        <div className="space-y-4 text-gray-700 text-lg">
          <h3 className="font-semibold text-xl">Our Offices:</h3>

          <p>
            <span className="font-semibold text-gray-900">Melbourne:</span><br />
            2/29 Scoresby Rd, Bayswater VIC 3153
          </p>

          <p>
            <span className="font-semibold text-gray-900">Perth:</span><br />
            1101 Hay Street, Perth WA 6005
          </p>

          {/* Phone Button */}
          <Link
            href="tel:+923212363464"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 
                       text-white px-6 py-3 rounded-full shadow-md mt-4 transition-all"
          >
            <Phone className="w-5 h-5" />
            Call Us: +92 321 2363464
          </Link>
        </div>

      </div>
    </section>
<div>
 <ContactForm />
</div>
{/* contact farm div */}
<div>
<BackToTopButton />
</div>
{/* back button end */}

    </div>
  )
}

export default contactus
