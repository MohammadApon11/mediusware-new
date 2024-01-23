import BigWidthNormalSectionWrapper from "@/components/shared/wrapper's/BigWidthNormalSectionWrapper";
import { ProjectsData } from "@/data/ProjectsData";
import React from "react";
import SingleProject from "./SingleProject";
import Title from "@/app/why-mediusware/Title";
import ContentGap from "@/components/shared/gap's/ContentGap";
import LoadMoreBtn from "@/components/shared/button's/LoadMoreBtn";
const MoreStudies = () => {
  return (
    <BigWidthNormalSectionWrapper>
      <Title title1={"Expore More"} title2={"Case Studies"} />
      <p className="mt-[24px] text-third text-[24px]">
        Explore Our Case Studies & See How Mediusware Grows Brands To The Next
        Level
      </p>
      <ContentGap />
      <div className="grid grid-cols-3 gap-[32px]">
        {ProjectsData.map(
          (project, index) =>
            index < 3 && <SingleProject project={project} key={index} />
        )}
      </div>
      <ContentGap />
      <LoadMoreBtn text="View More" />
    </BigWidthNormalSectionWrapper>
  );
};

export default MoreStudies;
