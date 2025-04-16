import React from "react";
import { NavLink } from "react-router-dom";
import { FaEuroSign } from "react-icons/fa";
import { MdTimer, MdOutlineSupportAgent } from "react-icons/md";

const Card = ({ imageUrl, title, duration, id }) => {
  return (
    <section className="relative group rounded-xl overflow-hidden shadow-lg transition-all duration-300 bg-white">
      <NavLink to={`/formations/btp/${id}`} className="relative block h-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black to-transparent">
          <p className="text-white text-lg font-semibold">{title}</p>
          <div className="flex items-center gap-2 text-white text-sm mt-2">
            <MdTimer className="w-5 h-5" />
            <span>{`Durée: ${duration}`}</span>
          </div>
          <div className="flex items-center gap-2 text-white text-sm mt-1">
            <FaEuroSign className="w-5 h-5" />
            <span>Contactez-nous pour le prix</span>
          </div>
        </div>
      </NavLink>
      <div className="p-4 bg-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MdOutlineSupportAgent className="w-5 h-5 text-gray-500" />
          <span>En ligne</span>
        </div>
      </div>
    </section>
  );
};

export default Card;
