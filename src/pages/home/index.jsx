import React from "react";
 import MostSeenTrainingsBtp from "./components/MostSeenTrainingsBtp";
 import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";
import Advisors from "./components/Advisors";
import AOS from "aos";
import "aos/dist/aos.css";
import Timeline from "./components/Timeline";
import { btpAdvisors } from "../../assets/data/advisors";
import {  btpTrainings } from "../../assets/data/trainings";
import Slider from "./components/Slider";


AOS.init({ duration: 1000 });
AOS.refresh();

const Home = () => {
  return (
    <section className="flex flex-col">
      <Slider />
      <MostSeenTrainingsBtp
        title="Nos formations"
        description="Parcourez notre catalogue de formations pour développer vos compétences et évoluer dans le secteur de BTP."
        trainings={btpTrainings}
      />
      <WhyChooseUs />
      <Advisors
        label="Profitez de l’expertise de professionnels aguerris"
        description="Acteurs incontournables du secteur, ils partagent leur vision et leur expérience pour inspirer celles et ceux qui construisent le monde de demain. Découvrez les témoignages de trois figures emblématiques de la construction et de l’architecture."
        advisorsList={btpAdvisors}
      />
  
      <Timeline />
      <Testimonial />
      
    </section>
  );
};

export default Home;
