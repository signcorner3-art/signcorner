import React from "react";
import Hero from "./components/Hero";
import Boxes from "./components/Boxes";
import ContactForm from "./components/contact";
import BackToTopButton from "./components/BackToTopButton";

const HomePage: React.FC = () => {
    
  return (
    <div>
     


      <Hero/>
      <Boxes/>
      <ContactForm/>

      

 <BackToTopButton />
    </div>
  );

};

export default HomePage;

