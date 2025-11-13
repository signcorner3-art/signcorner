import React from "react";
import Hero from "./components/Hero";
import Image from "next/image";

import Boxes from "./components/Boxes";
import AnimatedHeader from "./components/Box";
import ContactForm from "./components/contact";
import Header from "./components/Header";
import Footer from "./components/Footerx";

// hello word


const HomePage: React.FC = () => {
    
  return (
    <div>
     

      <Header/>  
      <Hero/>
      <Boxes/>
      <ContactForm/>
      <Footer/>
      

 
    </div>
  );

};

export default HomePage;

