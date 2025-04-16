import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-gray-100 via-gray-300 to-main_color py-20 px-6 sm:px-12 md:px-24">
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
              to="/contact"
              className="bg-primary px-8 py-3 rounded-full text-white hover:text-primary hover:bg-secondary border border-transparent hover:border-primary transition-all duration-300"
            >
              Demander une information
            </NavLink>
            <NavLink
              to="/formations/categorie/btp"
              className="bg-secondary px-8 py-3 rounded-full text-primary hover:text-secondary hover:bg-primary border border-primary hover:border-secondary transition-all duration-300"
            >
              Découvrez nos formations
            </NavLink>
          </div>
        </div>

        {/* Images avec espacement */}
        <div className="hidden md:flex gap-8">
          <div className="w-64 h-auto rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/img-BTP.jpg"
              alt="image chantier 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-64 h-auto rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/btp.jpg"
              alt="image chantier 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
