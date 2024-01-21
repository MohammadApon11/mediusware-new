import PaddingTop from "@/components/shared/gap's/PaddingTop";
import React from "react";
import ServicesHero from "../components/ServicesHero";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import Features from "../components/Features";
import { PageServicesData } from "@/data/PageServicesData";
import TechnologyStack from "../components/TechnologyStack";
import IndustrySlider from "../components/IndustrySlider";
import ServicesSlider from "../components/ServicesSlider";
import Inner from "@/components/shared/wrapper's/motion/Inner";

export const metadata = {
  title: "Mediusware || Services || Software Development",
  description: "Medius Family",
};

const SoftwareDevelopmentPage = () => {
  const data = PageServicesData.find(
    (data) => data.id === "software development"
  );
  return (
    <Inner>
      <PaddingTop />
      <ServicesHero data={data} />
      <SectionsGap />
      <Features data={data} />
      <SectionsGap />
      <TechnologyStack data={data} />
      <IndustrySlider />
      <SectionsGap />
      <ServicesSlider />
    </Inner>
  );
};

export default SoftwareDevelopmentPage;
