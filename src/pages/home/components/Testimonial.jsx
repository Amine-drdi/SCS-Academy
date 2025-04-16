import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { testimonials } from "../../../assets/data/testimonial";

const Testimonial = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Ils nous font confiance : leurs témoignages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de ceux qui ont vécu l'expérience avec nous.
          </p>
        </div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">
          {testimonials.slice(0, 4).map((t, index) => (
          <div
          key={index}
          className="bg-white py-4 px-6 rounded-xl shadow-xl w-full max-w-lg text-center flex flex-col justify-between min-h-[340px]"
        >
        
              {/* Avatar */}
              <div className="mx-auto w-24 h-24 rounded-full border-4 border-indigo-500 shadow-lg mb-3 overflow-hidden">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <FaQuoteLeft className="text-gray-400" />
                <p className="text-sm italic text-gray-600">{t.description}</p>
                <FaQuoteRight className="text-gray-400" />
              </div>

              {/* Infos */}
              <div className="mt-2">
                <p className="text-lg font-semibold text-gray-800">{t.name}</p>
                <p className="text-sm text-gray-600">{t.position}</p>
                <div className="flex justify-center mt-1 space-x-1">
                  {[...Array(t.note)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                  {[...Array(5 - t.note)].map((_, i) => (
                    <FaStar key={i} className="text-gray-300" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
