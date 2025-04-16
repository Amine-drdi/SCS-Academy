import React from "react";
import { MdOutlineCheck } from "react-icons/md";

const Skills = ({formation}) => {

let skills = formation.skills
console.log(formation)
  return (
    <div id="skills" className="flex flex-col gap-6 max-w-5xl scroll-mt-52">
      <div>
        <p className="text-2xl font-medium text-gray-600 max-w-2xl">
          Compétences développées
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-2 bg-sky-100 rounded-md w-fit flex flex-row gap-2 md:items-center"
          >
            <MdOutlineCheck className="w-4 h-4 min-w-4" />
            <p className="text-sm font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
