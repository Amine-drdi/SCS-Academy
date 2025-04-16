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
        title="Nos formations essentielles pour les professionnels du bâtiment !"
        description="Explorez notre sélection de formations clés pour développer vos compétences techniques et mener à bien vos projets dans le secteur de la construction."
        trainings={btpTrainings}
      />
      <WhyChooseUs />
      <Advisors
        label="Profitez de l’expertise de professionnels aguerris"
        description="Ils sont au cœur des grandes réalisations du secteur et partagent leur vision pour inspirer et guider ceux qui bâtissent le monde de demain. Découvrez les témoignages de trois figures clés de la construction et de l'architecture."
        advisorsList={btpAdvisors}
      />
  
      <Timeline />
      <Testimonial />
      
    </section>
  );
};

export default Home;
