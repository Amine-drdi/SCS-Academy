import React from "react";

const Hero = ({ setShowInscriptionForm , formation }) => {
  return (
    <div className="relative flex h-full w-full py-12 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding md:bg-[#d6e0f5]/50 bg-[#d6e0f5]">
      <div className="flex flex-col gap-4 max-w-3xl">
        <p className="text-2xl font-bold"  style={{marginRight :"220px"}}>
          {formation.title}</p>
        <p className="text-sm" style={{marginRight :"220px"}}>
        {formation.description}        </p>
        <div className="flex flex-row items-center gap-4">
  
        </div>
      
        <p className="text-gray-700 text-sm">
          <span className="text-black/80 font-bold text-base">15</span> sont
          déjà inscrits
        </p>
      </div>
      <div className="w-1/2 h-full absolute right-0 bottom-0 top-0 -z-10">
        <img
          src={formation.image}
          alt="Hero Formation Plaies et Cicatrisation"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
