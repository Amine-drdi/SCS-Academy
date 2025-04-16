import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaUsers, FaCheckCircle } from "react-icons/fa";

const OurImpact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  return (
    <div className="relative bg-gradient-to-r from-indigo-50 to-indigo-100 py-20">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 sm:px-16 flex flex-col items-center gap-12"
      >
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-indigo-800">
            Notre Impact
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            Depuis notre création, nous avons eu un impact significatif dans le domaine de la formation médicale en ligne.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-12">
          {[
            { end: 16, label1: "formations spécialisées", label2: "dans le domaine du BTP", icon: <FaGraduationCap className="text-indigo-600 text-4xl" /> },
            { end: 4853, label1: "Professionnels", label2: "ont suivi nos formations", icon: <FaUsers className="text-green-600 text-4xl" /> },
            { end: 16, label1: "Experts", label2: "offrant un contenu précis", icon: <FaCheckCircle className="text-purple-600 text-4xl" /> }
          ].map(({ end, label1, label2, icon }, index) => (
            <div
              key={index}
              className="p-8 bg-white shadow-lg rounded-lg w-72 text-center transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-4">{icon}</div>
              <p className="text-5xl font-extrabold text-indigo-800">
                {inView ? <CountUp end={end} duration={2} separator="," /> : 0}
              </p>
              <p className="text-lg font-semibold text-indigo-600 mt-2">{label1}</p>
              <p className="text-sm text-gray-500 mt-1">{label2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
