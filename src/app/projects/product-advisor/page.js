import ServicesHero from "@/app/services/components/ServicesHero";
import PaddingTop from "@/components/shared/gap's/PaddingTop";
import React from "react";
import ProjectsDetails from "../components/ProjectsDetails";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import ContactBox from "../components/ContactBox";
import { ProjectsData } from "@/data/ProjectsData";
import Inner from "@/components/shared/wrapper's/motion/Inner";

export const metadata = {
  title: "Mediusware || Projects || Product Advisor",
  description: "Medius Family",
};

const ProductAdvisorPage = () => {
  const data = ProjectsData.find((project) => project.id === "product advisor");
  return (
    <Inner>
      <PaddingTop />
      <ServicesHero data={data} />
      <SectionsGap />
      <ProjectsDetails data={data} />
      <SectionsGap />
      <ContactBox />
    </Inner>
  );
};

export default ProductAdvisorPage;
