import React from "react";
import MostSeenTrainings from "./components/MostSeenTrainings";
import MostSeenTrainingsBtp from "./components/MostSeenTrainingsBtp";
import MostSeenTrainingsJuri from "./components/MostSeenTrainingsJuri";
import Testimonial from "./components/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";
import Timeline from "./components/Timeline";
import { trainings, btpTrainings,juridiqueTrainings } from "../../assets/data/trainings";


AOS.init({ duration: 1000 });
AOS.refresh();

const Home = () => {
  return (
    <section className="flex flex-col">
      
      
      <MostSeenTrainings
        title="Nos formations incontournables pour les professionnels de santé !"
        description="Découvrez une sélection de formations essentielles pour perfectionner vos compétences et atteindre vos objectifs professionnels."
        trainings={trainings}
      />
    
      <MostSeenTrainingsBtp
        title="Nos formations essentielles pour les professionnels du bâtiment !"
        description="Explorez notre sélection de formations clés pour développer vos compétences techniques et mener à bien vos projets dans le secteur de la construction."
        trainings={btpTrainings}
      />
    
       <MostSeenTrainingsJuri
        title=" Nos formations essentielles pour les professionnels du juridique et de l’administration !"
        description="Découvrez notre sélection de formations clés pour renforcer vos compétences en gestion, droit et administration, et assurer le bon fonctionnement des organisations et des institutions."
        trainings={juridiqueTrainings}
      />
    
      <Timeline />
      <Testimonial />
    </section>
  );
};

export default Home;
