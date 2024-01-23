import PaddingTop from "@/components/shared/gap's/PaddingTop";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import React from "react";
import { ProjectsData } from "@/data/ProjectsData";
import Inner from "@/components/shared/wrapper's/motion/Inner";
import SingleProjectsHero from "../components2/SingleProjectsHero";
import DetailsProject from "../components2/DetailsProject";
import Message from "@/components/shared/Message";

export const metadata = {
  title: "Mediusware || Projects || Woo Study",
  description: "Medius Family",
};

const WooStudyPage = () => {
    const data = ProjectsData.find((project) => project.id === "woo study");
  return (
    <Inner>
      <PaddingTop />
      <SingleProjectsHero data={data} />
      <SectionsGap />
      <DetailsProject data={data} />
      <SectionsGap />
      <div className="bg-white py-[96px]">
        <Message />
      </div>
    </Inner>
  );
};

export default WooStudyPage;