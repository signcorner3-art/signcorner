import React from "react";
import Hero from "./components/Hero";
import Image from "next/image";

import Boxes from "./components/Boxes";
import AnimatedHeader from "./components/Box";
import ContactForm from "./components/contact";
import Header from "./components/Header";




const HomePage: React.FC = () => {
   console.log("CLIENT reCAPTCHA site key ko:", process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

  return (
    <div>
      <p>CLIENT reCAPTCHA site key: {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}</p>

      <Header/>  
      <Hero/>
      <Boxes/>
      <ContactForm/>
 
    </div>
  );

};

export default HomePage;

