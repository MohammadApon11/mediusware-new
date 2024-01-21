import ServicesHero from "@/app/services/components/ServicesHero";
import PaddingTop from "@/components/shared/gap's/PaddingTop";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import React from "react";
import ProjectsDetails from "../components/ProjectsDetails";
import { ProjectsData } from "@/data/ProjectsData";
import ContactBox from "../components/ContactBox";
import Inner from "@/components/shared/wrapper's/motion/Inner";

export const metadata = {
  title: "Mediusware || Projects || Galileo",
  description: "Medius Family",
};

const GalileoPage = () => {
    const data = ProjectsData.find((project) => project.id === "galileo");
  return (
    <Inner>
      <PaddingTop />
      <ServicesHero data={data} />
      <SectionsGap />
      <ProjectsDetails data={data} />
      <SectionsGap />
      <ContactBox/>
    </Inner>
  );
};

export default GalileoPage;
