import React from "react";
import img1 from "../../../../public/images/btp-img.jpg";
import { FaGraduationCap, FaGlobe, FaUserCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <section className="flex items-center justify-center px-6 md:px-16 max-w-7xl mx-auto py-32  from-blue-50 to-white">
      <div className="flex flex-col md:flex-row items-center gap-12">
      <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={img1}
            alt="Notre mission"
            className="rounded-xl shadow-2xl object-cover w-full max-w-xl"
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-8 md:w-1/2 text-center md:text-left pl-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800">Notre engagement</h2>
          
          <div className="space-y-5 mt-6">
            <div className="flex items-center justify-start gap-4">
              <FaGraduationCap className="text-4xl text-blue-500" />
              <span className="text-lg font-medium text-gray-800">Offrir des parcours pédagogiques de qualité</span>
            </div>
            <div className="flex items-center justify-start gap-4">
              <FaGlobe className="text-4xl text-green-500" />
              <span className="text-lg font-medium text-gray-800">Accessibles partout et à tout moment</span>
            </div>
            <div className="flex items-center justify-start gap-4">
              <FaUserCheck className="text-4xl text-purple-500" />
              <span className="text-lg font-medium text-gray-800">Accompagnement pour chaque professionnel dans son évolution et sa réussite</span>
            </div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default OurMission;
