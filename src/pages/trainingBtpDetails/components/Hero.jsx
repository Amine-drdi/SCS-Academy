import React from "react";

const Hero = ({ setShowInscriptionForm, formation }) => {
  return (
    <div className="relative flex flex-col md:flex-row h-[60vh] w-full px-6 md:px-12 py-8 bg-gradient-to-r from-[#b0c3e5] to-[#d6e0f5]">
      {/* Content Section */}
      <div className="flex flex-col justify-center items-start gap-4 max-w-xl z-10 text-white">
        <h1 className="text-3xl font-semibold leading-tight">{formation.title}</h1>
        <p className="text-base md:text-lg text-opacity-90">{formation.description}</p>
        
        {/* Registration Button */}
        <div className="mt-4">
          <button
            className="bg-primary text-white text-base px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => setShowInscriptionForm(true)}
          >
            S'inscrire maintenant
          </button>
        </div>

        {/* Participants Count */}
        <p className="mt-4 text-white text-sm">
          <span className="font-semibold">{15}</span> personnes sont déjà inscrites
        </p>
      </div>

      {/* Hero Image Section */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full overflow-hidden rounded-xl shadow-lg">
        <img
          src={formation.image}
          alt={`Hero Formation ${formation.title}`}
          className="object-cover w-full h-full transition-all duration-500 transform hover:scale-105"
          style={{ objectPosition: "center center" }} // Ensures the image is always centered and not blurry
        />
      </div>
    </div>
  );
};

export default Hero;
