import PaddingTop from "@/components/shared/gap's/PaddingTop";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import { ProjectsData } from "@/data/ProjectsData";
import Inner from "@/components/shared/wrapper's/motion/Inner";
import SingleProjectsHero from "../components2/SingleProjectsHero";
import DetailsProject from "../components2/DetailsProject";

export const metadata = {
  title: "Mediusware || Projects || 24 hours",
  description: "Medius Family",
};

const HoursViewPage = () => {
  const data = ProjectsData.find((project) => project.id === "24 hours views");
  return (
    <Inner>
      <PaddingTop />
      <SingleProjectsHero data={data} />
      <SectionsGap />
      <DetailsProject data={data} />
      <SectionsGap />
    </Inner>
  );
};

export default HoursViewPage;
