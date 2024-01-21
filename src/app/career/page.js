import PaddingTop from "@/components/shared/gap's/PaddingTop";
import React from "react";
import CareerHero from "./components/CareerHero";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import ApplicationProcess from "./components/ApplicationProcess";
import CareerOpenings from "./components/CareerOpenings";
import JobCards from "./components/JobCards";
import OurValues from "./components/OurValues";
import Inner from "@/components/shared/wrapper's/motion/Inner";

const CareerPage = () => {
  return (
    <Inner>
      <PaddingTop />
      <CareerHero />
      <SectionsGap />
      <ApplicationProcess />
      <SectionsGap />
      <CareerOpenings />
      <SectionsGap />
      <JobCards />
      <SectionsGap />
      <OurValues />
      <SectionsGap />
      <h1 className="text-primary text-[56px] font-semibold text-center">
        Life At <span className="text-secondary">Mediusware</span>
      </h1>
      <p className="text-center">
        Our employees thrives on solving complex challenges, embracing new
        technologies, and pushing the <br /> boundaries of what's possible in
        the software world.
      </p>
    </Inner>
  );
};

export default CareerPage;
