import React from "react";

const OurStory = () => {
  return (
    <div className="relative w-full h-[calc(100vh-64px)]">
      {/* Background image with a blur effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-sm" style={{ backgroundImage: "url('/images/our-story.jpg')" }} />
      {/* Overlay with darker opacity for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center py-16 px-6 sm:px-12">
        <div className="text-center sm:text-left text-white space-y-6 md:w-1/2">
          <h1 className="text-5xl font-extrabold leading-tight">
            Notre histoire
          </h1>
          <p className="text-lg sm:text-xl opacity-90">
            Découvrez comment nous avons commencé et comment nous avons évolué pour devenir un acteur clé dans la formation du secteur du bâtiment.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 sm:w-1/2 mt-12 md:mt-0">
          {/* Step 1 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 flex items-center justify-center bg-white text-black rounded-full shadow-2xl">
              <span className="text-2xl font-semibold">1</span>
            </div>
            <p className="text-center text-white text-base sm:text-lg">
              Fondée en 2024, nous avons commencé avec la vision de révolutionner la formation dans le secteur du bâtiment, en proposant des formations en ligne de haute qualité.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 flex items-center justify-center bg-white text-black rounded-full shadow-2xl">
              <span className="text-2xl font-semibold">2</span>
            </div>
            <p className="text-center text-white text-base sm:text-lg">
              Notre première percée a eu lieu avec le lancement de notre formation en ligne phare dédiée aux techniques avancées du bâtiment. Cela a ouvert la voie à une croissance et à une innovation continues.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 flex items-center justify-center bg-white text-black rounded-full shadow-2xl">
              <span className="text-2xl font-semibold">3</span>
            </div>
            <p className="text-center text-white text-base sm:text-lg">
              Depuis, nous avons élargi nos offres et multiplié nos partenariats, consolidant ainsi notre position en tant qu’acteur de référence dans le domaine de la formation en ligne pour les professionnels du bâtiment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
