import React from "react";

const Recap = ({ formation }) => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 lg:divide-x w-fit py-6 px-4 md:px-12 z-10 mx-auto rounded-xl bg-white shadow-lg">
      <div className="flex flex-col gap-4 px-6 justify-center items-center text-center text-gray-700">
        <p className="text-xl font-semibold text-primary">Prochaine session</p>
        <p className="text-base text-gray-500">{formation.ProchaineSession}</p>
      </div>
      <div className="flex flex-col gap-4 px-6 justify-center items-center text-center text-gray-700">
        <p className="text-xl font-semibold text-primary">Référence action DPC</p>
        <p className="text-base text-gray-500">{formation.DPC}</p>
      </div>
      <div className="flex flex-col gap-4 px-6 justify-center items-center text-center text-gray-700">
        <p className="text-xl font-semibold text-primary">Durée</p>
        <p className="text-base text-gray-500">{formation.Duree}</p>
      </div>
      <div className="flex flex-col gap-4 px-6 justify-center items-center text-center text-gray-700">
        <p className="text-xl font-semibold text-primary">Financements</p>
        <p className="text-base text-gray-500">{formation.Financements}</p>
      </div>
    </div>
  );
};

export default Recap;
