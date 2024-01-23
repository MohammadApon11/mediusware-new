import PaddingTop from "@/components/shared/gap's/PaddingTop";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import Inner from "@/components/shared/wrapper's/motion/Inner";
import ProjectsHero from "./components2/ProjectsHero";
import Projects from "./components2/Projects";
import Message from "@/components/shared/Message";
import ContentGap from "@/components/shared/gap's/ContentGap";

const ProjectsPage = () => {
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
