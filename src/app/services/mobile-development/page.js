import PaddingTop from "@/components/shared/gap's/PaddingTop";
import React from "react";
import ServicesHero from "../components/ServicesHero";
import { PageServicesData } from "@/data/PageServicesData";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import Features from "../components/Features";
import TechnologyStack from "../components/TechnologyStack";
import IndustrySlider from "../components/IndustrySlider";
import ServicesSlider from "../components/ServicesSlider";
import Inner from "@/components/shared/wrapper's/motion/Inner";

export const metadata = {
  title: "Mediusware || Services || Mobile App Development",
  description: "Medius Family",
};

const MobileDevelopmentPage = () => {
  const data = PageServicesData.find(
    (data) => data.id === "mobile development"
  );
  return (
    <Inner>
      <PaddingTop />
      <ServicesHero data={data} />
      <SectionsGap />
      <Features data={data} />
      <SectionsGap />
      <TechnologyStack data={data} />
      <IndustrySlider/>
      <SectionsGap />
      <ServicesSlider />
    </Inner>
  );
};

export default MobileDevelopmentPage;
