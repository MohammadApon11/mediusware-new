import PaddingTop from "@/components/shared/gap's/PaddingTop";
import React from "react";
import ServicesHero from "../components/ServicesHero";
import { PageServicesData } from "@/data/PageServicesData";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import Features from "../components/Features";
import TechnologyStack from "../components/TechnologyStack";
import IndustrySlider from "../components/IndustrySlider";
import ServicesSlider from "../components/ServicesSlider";

export const metadata = {
  title: "Mediusware || Services || E-Commerce  Solutions",
  description: "Medius Family",
};

const ECommercePage = () => {
  const data = PageServicesData.find(
    (data) => data.id === "e-commerce development"
  );
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

export default ECommercePage;
