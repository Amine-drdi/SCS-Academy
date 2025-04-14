import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import img from "../../../assets/img/hero.webp"
const Slider = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1A2B4C] via-[#1f365e] to-[#101c2c] text-white min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Décor effet béton structuré */}
      <div className="absolute inset-0 bg-[url('/assets/textures/concrete.png')] opacity-10 bg-cover" />

      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Texte immersif */}
        <div className="space-y-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transformez <span className="text-orange-500">votre avenir</span><br /> avec la formation BTP en ligne
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Une plateforme pensée pour les bâtisseurs de demain : moderne, accessible, et faite pour vous.
          </motion.p>
          <motion.a
            href="#formations"
             className="inline-block bg-orange-600 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-orange-400/40 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Voir nos formations
          </motion.a>
        </div>

        {/* Carte animée style néo-brutalisme */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-6 shadow-2xl relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <img
            src={img}
            alt="Formations BTP"
            className="rounded-xl shadow-lg"
          />
          <div className="absolute -top-4 -left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
            100% en ligne
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Slider;
