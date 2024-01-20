import PaddingTop from "@/components/shared/gap's/PaddingTop";
import React from "react";
import ServicesHero from "../services/components/ServicesHero";
import projectsHero from "../../assets/projects/allProjectsHero.png";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import { ProjectsData } from "@/data/ProjectsData";
import AllProjects from "./components/AllProjects";
import SectionsWrapper from "@/components/shared/wrapper's/SectionsWrapper";

const ProjectsPage = () => {
  const data = {
    title: "OUR SOME KEY PROJECTS",
    heroImage: projectsHero,
    description1:
      " Informative platform, diverse content, user-friendly interface, engaging design,",
    description2:
      "updated regularly, fosters interactive community, valuable resources.",
  };
  return (
    <>
      <PaddingTop />
      <ServicesHero data={data} />
      <SectionsGap />
      <SectionsWrapper>
        <div className="grid grid-cols-3 gap-[24px]">
          {ProjectsData?.map((project, index) => (
            <AllProjects project={project} key={index} />
          ))}
        </div>
      </SectionsWrapper>
    </>
  );
};

export default ProjectsPage;
