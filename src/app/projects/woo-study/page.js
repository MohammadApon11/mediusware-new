import ServicesHero from "@/app/services/components/ServicesHero";
import PaddingTop from "@/components/shared/gap's/PaddingTop";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import React from "react";
import ProjectsDetails from "../components/ProjectsDetails";
import ContactBox from "../components/ContactBox";
import { ProjectsData } from "@/data/ProjectsData";

export const metadata = {
  title: "Mediusware || Projects || Woo Study",
  description: "Medius Family",
};

const WooStudyPage = () => {
    const data = ProjectsData.find((project) => project.id === "woo study");
  return (
    <>
      <PaddingTop />
      <ServicesHero data={data} />
      <SectionsGap />
      <ProjectsDetails data={data} />
      <SectionsGap />
      <ContactBox />
    </>
  );
};

export default WooStudyPage;