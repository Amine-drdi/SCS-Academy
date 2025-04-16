import React from "react";
import TrainingList from "./TrainingList";
 
const AllTrainings = ({ trainings}) => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="">
        <p className="font-medium md:text-xl text-base text-left px-8">
          Toutes les formations
        </p>
        <p className="font-normal md:text-base text-sm text-left text-gray-500 px-8">
          Accédez à des formations certifiantes, 100% en ligne et financées par
          les dispositifs incontournables, dont le DPC. 
        </p>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-4 gap-8 w-full px-8 ">
         <TrainingList trainings={trainings} />
      </div>
    </div>
  );
};

export default AllTrainings;
