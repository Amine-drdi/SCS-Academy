import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center w-full min-h-[550px] px-8 py-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-orange-600 mb-4">Contactez-nous</h1>
      <p className="text-lg text-gray-600 mb-6">
        Nous sommes là pour vous aider. N'hésitez pas à nous contacter si vous
        avez des questions, des retours, ou besoin de plus d'informations.
      </p>
      <div className="space-y-6">
        <div className="flex items-center">
          <HiPhone className="w-6 h-6 mr-4 text-orange-500" />
          <span className="text-lg">07 56 82 86 00</span>
        </div>
        <div className="flex items-center">
          <HiMail className="w-6 h-6 mr-4 text-orange-500" />
          <span className="text-lg">contact@SCS Academy.fr</span>
        </div>
        <div className="flex items-center">
          <HiLocationMarker className="w-6 h-6 mr-4 text-orange-500" />
          <span className="text-lg">229 RUE SAINT-HONORE, 75001 PARIS</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
