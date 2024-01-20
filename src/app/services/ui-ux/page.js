import PaddingTop from "@/components/shared/gap's/PaddingTop";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import React from "react";
import Features from "../components/Features";
import ServicesHero from "../components/ServicesHero";
import { PageServicesData } from "@/data/PageServicesData";
import TechnologyStack from "../components/TechnologyStack";
import IndustrySlider from "../components/IndustrySlider";
import ServicesSlider from "../components/ServicesSlider";

export const metadata = {
  title: "Mediusware || Services || UI/UX Design & Development",
  description: "Medius Family",
};

const UIUXPage = () => {
  const data = PageServicesData.find((data) => data.id === "ui-ux development");
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

export default UIUXPage;
