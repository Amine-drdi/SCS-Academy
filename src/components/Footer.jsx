import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/img/logo-footer.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1C2531] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logos & Présentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Bloc SCS Academy */}
          <div className="flex gap-5 items-start">
            <img src={logo} alt="SCS Academy" className="w-32 h-auto object-contain" />
            <p className="text-gray-300 text-sm">
              SCS Academy is a training organization dedicated to enhancing the skills of professionals and businesses.
            </p>
          </div>

          {/* Bloc Qualiopi */}
          <div className="flex gap-5 items-start">
            <img src="/images/logo-qualiopi.jpeg" alt="Qualiopi" className="w-32 h-auto object-contain" />
            <p className="text-gray-300 text-sm">
              Our organization is Qualiopi certified for training actions.
            </p>
          </div>
        </div>

        {/* Liens principaux */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm mb-12">
          <div>
            <h4 className="font-semibold text-white mb-3">Découvrir SCS Academy </h4>
            <ul className="space-y-2 text-gray-300">
              <li>  <NavLink  to="/formations/categorie/btp"  >Formations       </NavLink></li>
              <li > <NavLink  to="/a-propos"  >Qui sommes-nous</NavLink></li>
              <li><NavLink  to="/contact"  >Contactez-nous</NavLink></li> 
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Informations légales</h4>
            <ul className="space-y-2 text-gray-300">
              <li> <NavLink  to="/politiques-de-confidentialite"  > Politique de confidentialité</NavLink></li>
              <li><NavLink  to="/conditions-generales"  >Conditions générales</NavLink></li>
              <li><NavLink  to="/mentions-legales"  >Mentions légales</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📍 229 RUE SAINT-HONORÉ, 75001 PARIS</li>
              <li>📞 07 56 82 86 00</li>
              <li>📧 contact@SCSAcademy.fr</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Localisation</h4>
            <iframe
              title="Google Map"
              className="w-full h-32 rounded-lg"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5915744864317!2d2.331891076573113!3d48.86605170033998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e35bb69eb65%3A0x15e8ab32bb8b1b57!2s229%20Rue%20Saint-Honor%C3%A9%2C%2075001%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1708445158767!5m2!1sen!2sfr"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Ligne de séparation */}
        <hr className="border-gray-600 my-6" />

        {/* Bas de page */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 SCS Academy. Tous droits réservés</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#"><FaFacebookF className="w-5 h-5 hover:text-white" /></a>
            <a href="#"><FaInstagram className="w-5 h-5 hover:text-white" /></a>
            <a href="#"><FaLinkedinIn className="w-5 h-5 hover:text-white" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
