import ServicesHero from "@/app/services/components/ServicesHero";
import PaddingTop from "@/components/shared/gap's/PaddingTop";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import { PageServicesData } from "@/data/PageServicesData";
import React from "react";
import Features from "../components/Features";
import TechnologyStack from "../components/TechnologyStack";
import IndustrySlider from "../components/IndustrySlider";
import ServicesSlider from "../components/ServicesSlider";

const WebDevelopmentPage = () => {
  const data = PageServicesData.find((data) => data.id === "web development");
  return (
    <div>
      <PaddingTop />
      <ServicesHero data={data} />
      <SectionsGap />
      <Features data={data} />
      <SectionsGap />
      <TechnologyStack data={data} />
      <IndustrySlider />
      <SectionsGap />
      <ServicesSlider />
    </div>
  );
};

export default WebDevelopmentPage;
