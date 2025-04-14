import React from "react";
import { features } from "../../../assets/data/features";

const WhyChooseUs = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 w-full py-20">
      <div className="xl:px-desktop_padding md:px-laptop_padding sm:px-tablet_padding px-mobile_padding">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold text-black tracking-tight mb-4">
            Nos Engagements pour Votre Réussite
          </h2>
          <p className="text-gray-600 max-w-4xl text-lg">
            Explorez ce qui fait la singularité de notre plateforme et pourquoi
            elle est choisie par des milliers d'apprenants pour atteindre leurs
            objectifs professionnels et personnels. Nous mettons à votre
            disposition une méthode d'apprentissage interactive, avec un accès
            flexible aux cours et des formateurs experts dans leur domaine.
            Notre mission est de vous fournir les outils et les compétences
            nécessaires pour réussir, tout en respectant votre emploi du temps
            et vos ambitions.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 max-w-6xl w-full">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-white hover:shadow-xl transition-all duration-300 border border-gray-200 rounded-2xl p-6 flex items-start gap-6"
              >
                <div className="h-14 w-14 flex items-center justify-center rounded-xl  bg-opacity-10 text-orange-400">
                  <feature.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
