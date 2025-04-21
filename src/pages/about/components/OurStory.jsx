import React from "react";

const OurStory = () => {
  return (
    <div className="relative w-full min-h-[100vh] flex flex-col justify-between">
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: "url('/images/our-story.jpg')" }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col justify-center items-center text-white px-6 py-16 space-y-12">
        {/* Section Titre */}
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Notre histoire</h1>
          <p className="text-lg md:text-xl opacity-90">
            Découvrez comment nous avons commencé et comment nous avons évolué pour devenir un acteur clé dans la formation du secteur du bâtiment.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-14 max-w-6xl w-full">
          {/* Étape 1 */}
          <div className="flex flex-col items-center space-y-4 max-w-sm">
            <div className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-full shadow-xl">
              <span className="text-xl font-bold">1</span>
            </div>
            <p className="text-center text-base md:text-lg">
              Fondée en 2024, nous avons commencé avec la vision de révolutionner la formation dans le secteur du bâtiment, en proposant des formations en ligne de haute qualité.
            </p>
          </div>

          {/* Étape 2 */}
          <div className="flex flex-col items-center space-y-4 max-w-sm">
            <div className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-full shadow-xl">
              <span className="text-xl font-bold">2</span>
            </div>
            <p className="text-center text-base md:text-lg">
              Notre première percée a eu lieu avec le lancement de notre formation en ligne phare dédiée aux techniques avancées du bâtiment. Cela a ouvert la voie à une croissance et à une innovation continues.
            </p>
          </div>

          {/* Étape 3 */}
          <div className="flex flex-col items-center space-y-4 max-w-sm">
            <div className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-full shadow-xl">
              <span className="text-xl font-bold">3</span>
            </div>
            <p className="text-center text-base md:text-lg">
              Depuis, nous avons élargi nos offres et multiplié nos partenariats, consolidant ainsi notre position en tant qu’acteur de référence dans le domaine de la formation en ligne pour les professionnels du bâtiment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
