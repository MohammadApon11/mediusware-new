import PaddingTop from "@/components/shared/gap's/PaddingTop";
import React from "react";
import ServicesHero from "../services/components/ServicesHero";
import hero1 from "../../assets/about/hero.jpg";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import AllAbout from "./AllAbout";
import Inner from "@/components/shared/wrapper's/motion/Inner";

export const metadata = {
  title: "Mediusware || About",
  description: "Medius Family",
};

const WhyMediuswarePage = () => {
  const data = {
    title: "Mediusware Company Information",
    heroImage: hero1,
    description1:
      "With a global network of customers, partners, employees, and thought leaders,",
    description2:
      "Mediusware helps the world run better and improves people’s lives.",
  };
  return (
    <Inner>
      <PaddingTop />
      <ServicesHero data={data} />
      <SectionsGap />
      <AllAbout />
      <SectionsGap />
    </Inner>
  );
};

export default WhyMediuswarePage;
