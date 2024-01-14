import ServicesHero from "@/app/services/components/ServicesHero";
import PaddingTop from "@/components/shared/gap's/PaddingTop";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import React from "react";
import ProjectsDetails from "../components/ProjectsDetails";
import ContactBox from "../components/ContactBox";
import { ProjectsData } from "@/data/ProjectsData";

const InfoStreamWebPage = () => {
  const data = ProjectsData.find((project) => project.id === "info stream web");
  return (
    <div>
      <PaddingTop />
      <ServicesHero data={data} />
      <SectionsGap />
      <ProjectsDetails data={data} />
      <SectionsGap />
      <ContactBox />
    </div>
  );
};

export default InfoStreamWebPage;
