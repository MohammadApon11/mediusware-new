import PaddingTop from "@/components/shared/gap's/PaddingTop";
import ServicesHero from "../services/components/ServicesHero";
import projectsHero from "../../assets/projects/allProjectsHero.png";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import { ProjectsData } from "@/data/ProjectsData";
import AllProjects from "./components/AllProjects";
import BigWidthSectionWrapper from "@/components/shared/wrapper's/BigWidthSectionWrapper";
import Inner from "@/components/shared/wrapper's/motion/Inner";
import ProjectsHero from "./components2/ProjectsHero";
import SectionWrapper from "@/components/shared/wrapper's/SectionWrapper";
import Projects from "./components2/Projects";
import Message from "@/components/shared/Message";
import ContentGap from "@/components/shared/gap's/ContentGap";

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
    <Inner>
      <PaddingTop />
      <ProjectsHero />
      <SectionsGap />
      <Projects />
      <SectionsGap />
      <div className="bg-white">
        <ContentGap />
        <ContentGap />
        <Message />
        <ContentGap />
        <ContentGap />
      </div>
    </Inner>
  );
};

export default ProjectsPage;
