import ServicesHero from "@/app/services/components/ServicesHero";
import PaddingTop from "@/components/shared/gap's/PaddingTop";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import { ProjectsData } from "@/data/ProjectsData";
import React from "react";
import ProjectsDetails from "../components/ProjectsDetails";
import ContactBox from "../components/ContactBox";

export const metadata = {
  title: "Mediusware || Projects || 24 hours",
  description: "Medius Family",
};

const HoursViewPage = () => {
  const data = ProjectsData.find((project) => project.id === "24 hours views");
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

export default HoursViewPage;
