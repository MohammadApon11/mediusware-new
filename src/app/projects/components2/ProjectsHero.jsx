import SectionsGap from "@/components/shared/gap's/SectionsGap";
import Reveal from "@/components/shared/wrapper's/motion/Reveal";
import React from "react";

const ProjectsHero = () => {
  return (
    <div className="text-center text-[72px] text-primary font-bold">
      <SectionsGap />
      <div className="flex flex-col">
        <div className="flex items-center gap-[20px] justify-center">
          <Reveal bg={"bg-[#00A88E]"} title={true}>
            OUR WORK
          </Reveal>{" "}
          <div className="h-[8px] w-[55px] bg-[#002B4F]"></div>
        </div>
        <div className="flex justify-center -mt-[22px]">
          <Reveal bg={"bg-[#00A88E]"} title={true}>
            DRAWN FROM 20+ YEARS OF
          </Reveal>
        </div>
        <div className="text-secondary -mt-[22px] flex justify-center">
          <Reveal bg={"bg-[#00A88E]"} title={true}>
            PROJECTS
          </Reveal>
        </div>
      </div>
      <div className="text-[48px] mt-[24px] font-normal flex justify-center">
        <Reveal>Experience the expertise and passion behind our work</Reveal>
      </div>
    </div>
  );
};

export default ProjectsHero;
