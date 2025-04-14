import React from "react";

const OurStory = () => {
  return (
    <div className="relative w-full h-[calc(100vh-64px)]">
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/5" /> {/* Overlay avec opacité encore réduite */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="/images/our-story.jpg"
          alt="our story"
          className="w-full h-[calc(100vh-64px)] object-cover filter brightness-800" 
        />
      </div>
      <div className="relative z-20 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding flex max-sm:flex-col max-sm:justify-around max-sm:gap-6 max-sm:h-[calc(100vh-64px)]">
        <p className="sm:absolute text-white sm:text-3xl text-xl font-bold sm:top-24 z-30 max-sm:py-4">
          Notre histoire
        </p>
        <div className="flex sm:flex-row flex-col max-sm:py-4 sm:items-center items-start sm:h-[calc(100vh-64px)] sm:space-x-8 max-sm:space-y-8 relative before:absolute before:inset-0 sm:before:my-auto max-sm:before:ml-5 sm:before:h-0.5 before:h-full sm:before:w-full before:w-0.5 sm:before:bg-gradient-to-r before:bg-gradient-to-b before:from-transparent before:via-white before:to-transparent">
          
          <div className="relative flex sm:flex-col flex-row items-center sm:gap-14 gap-4 group is-active sm:translate-y-[calc(50%-20px)]">
            <div className="relative before:absolute sm:before:h-10 before:h-0.5 sm:before:w-0.5 before:w-5 sm:before:mx-auto max-sm:before:my-auto max-sm:before:translate-x-full flex items-center justify-center w-10 h-10 rounded-md border border-white group-[.is-active]:bg-white text-black shadow shrink-0">
              <p className="w-10 h-10 flex items-center justify-center text-2xl font-medium">
                1
              </p>
            </div>
            <div className="">
              <div className="text-white font-medium text-center lg:text-base text-sm">
                Fondée en 2024, nous avons commencé <br/> 
                avec la vision de révolutionner la formation dans le secteur du bâtiment, en proposant 
                des formations en ligne de haute qualité, adaptées aux besoins des professionnels du BTP.
              </div>
            </div>
          </div>

          <div className="relative flex sm:flex-col-reverse flex-row sm:gap-14 gap-4 items-center group is-active sm:-translate-y-[calc(50%-20px)]">
            <div className=" relative before:absolute sm:before:h-10 before:h-0.5 sm:before:w-0.5 before:w-5 sm:before:mx-auto max-sm:before:my-auto sm:before:-translate-y-full max-sm:before:translate-x-full before:bg-white flex items-center justify-center w-10 h-10 rounded-md border border-white group-[.is-active]:bg-white text-black shadow shrink-0">
              <p className="w-10 h-10 flex items-center justify-center text-2xl font-medium">
                2
              </p>
            </div>
            <div className="">
              <div className="text-white font-medium text-center lg:text-base text-sm">
              Notre première percée a eu lieu avec le lancement de notre formation en ligne phare dédiée aux techniques avancées du bâtiment. 
              Cela a ouvert la voie à une croissance et à une innovation continues.
              </div>
            </div>
          </div>
          
          <div className="relative flex sm:flex-col flex-row items-center sm:gap-14 gap-4 group is-active sm:translate-y-[calc(50%-20px)]">
            <div className="relative before:absolute sm:before:h-10 before:h-0.5 sm:before:w-0.5 before:w-5 sm:before:mx-auto max-sm:before:my-auto before:bg-white sm:before:translate-y-full max-sm:before:translate-x-full flex items-center justify-center w-10 h-10 rounded-md border border-white group-[.is-active]:bg-white text-black shadow shrink-0">
              <p className="w-10 h-10 flex items-center justify-center text-2xl font-medium">
                3
              </p>
            </div>
            <div className="">
              <div className="text-white font-medium text-center lg:text-base text-sm">
              Depuis, nous avons élargi nos offres et multiplié nos partenariats, consolidant ainsi notre
               position en tant qu’acteur de référence dans le domaine de la formation en ligne pour
                les professionnels du bâtiment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
