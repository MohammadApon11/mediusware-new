import SectionsGap from "@/components/shared/gap's/SectionsGap";
import React from "react";

const ProjectsHero = () => {
  return (
    <div className="text-center text-[72px] text-primary font-bold">
      <SectionsGap />
      <div className="flex flex-col">
        <div className="flex items-center gap-[20px] justify-center">
          OUR WORK <div className="h-[8px] w-[55px] bg-[#002B4F]"></div>
        </div>
        <span className="-mt-[22px]">DRAWN FROM 20+ YEARS OF</span>
        <span className="text-secondary -mt-[22px]">PROJECTS</span>
      </div>
      <p className="text-[48px] mt-[24px] font-normal">
        Experience the expertise and passion behind our work
      </p>
    </div>
  );
};

export default ProjectsHero;
