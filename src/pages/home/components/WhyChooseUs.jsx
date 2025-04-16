import React from "react";
import { features } from "../../../assets/data/features";

const WhyChooseUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-28">
      <div className="container mx-auto px-4 md:px-12">
        {/* Title and Description */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight mb-6">
            Nos Engagements pour Votre Réussite
          </h2>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Explorez ce qui fait la singularité de notre plateforme et pourquoi elle
            est choisie par des milliers d'apprenants pour atteindre leurs objectifs
            professionnels et personnels. Nous mettons à votre disposition une
            méthode d'apprentissage interactive, avec un accès flexible aux cours et
            des formateurs experts dans leur domaine. Notre mission est de vous
            fournir les outils et les compétences nécessaires pour réussir, tout en
            respectant votre emploi du temps et vos ambitions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-3xl p-8 flex flex-col items-center text-center gap-6 ${index === features.length - 1 ? 'lg:col-span-3' : ''}`}
            >
              {/* Icon Container */}
              <div className="bg-gradient-to-r from-orange-400 to-red-500 p-6 rounded-full">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-4 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
