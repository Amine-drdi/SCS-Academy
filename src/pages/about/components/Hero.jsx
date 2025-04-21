import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-gray-100 via-sky-100 to-orange-500 py-20 px-6 sm:px-12 md:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texte */}
         <div className="max-w-2xl text-center md:text-left space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Découvrez SCS Academy
          </h1>
          <p className="text-xl text-gray-700">
            Parcourez les options disponibles et trouvez celle qui correspond
            parfaitement à vos attentes.
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            
            <NavLink
              to="/formations/categorie/btp"
              className="bg-orange-500 px-8 py-3 rounded-full text-white hover:text-orange-400 hover:bg-secondary border hover:border-orange-500 transition-all duration-300"
            >
              Découvrez nos formations
            </NavLink>
          </div>
        </div>
 {/* Images avec espacement */}
 <div className="hidden md:flex gap-0">
          <div className="w-full h-auto rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/img-BTP.jpg"
              alt="image chantier 1"
              className="w-full h-full object-cover"
            />
          </div>
        
        </div>

      </div>
    </div>
  );
};

export default Hero;
