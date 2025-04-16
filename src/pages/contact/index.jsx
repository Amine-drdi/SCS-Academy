import React from "react";
import ContactUsForm from "./components/ContactUsForm";
import Hero from "./components/Hero";
import Faq from "./components/Faq";

import contactImage from '../../assets/images/contact-cover.png';

const Contact = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="w-full relative">
        <img
          src={contactImage}
          alt="Contact Hero"
          className="object-cover w-full h-[60vh] opacity-80"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full px-6 py-12 bg-gray-100 items-center">
  <div className="w-full md:w-1/2 flex justify-center">
    <Hero />
  </div>
  <div className="w-full md:w-1/2">
    <ContactUsForm />
  </div>
</div>

      <div className="w-full bg-gray-100 py-16">
        <Faq />
      </div>
    </div>
  );
};

export default Contact;
