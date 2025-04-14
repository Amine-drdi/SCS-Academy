import React from "react";
import Card from "../../../components/CardBtp";

const Recent = ({ btpTrainings }) => {
  return (
    <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {btpTrainings.slice(4, 8).map((training) => (
        <Card
          key={training.id}
          imageUrl={training.image}
          title={training.title}
          instructors={training.instructors}
          duration={training.duration}
          id ={training.id}

        />
      ))}
    </div>
  );
};

export default Recent;
