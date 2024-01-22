"use client";
import Title from "@/app/why-mediusware/Title";
import ContentGap from "@/components/shared/gap's/ContentGap";
import BigWidthNormalSectionWrapper from "@/components/shared/wrapper's/BigWidthNormalSectionWrapper";
import { ProjectsData, projectsFilterBtn } from "@/data/ProjectsData";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectCard from "./SingleProject";
import LoadMoreBtn from "@/components/shared/button's/LoadMoreBtn";

const Projects = () => {
  const [btnTitle, setBtnTitle] = useState("All");
  return (
    <BigWidthNormalSectionWrapper>
      <div className="flex items-center justify-between">
        <div>
          <Title title1={"Our"} title2={"Projetcs"} />
          <p className="text-[#475467] text-[24px] mt-[24px]">
            We Offer Expertise in All Kinds of IT Solutions Services
          </p>
        </div>
        <div className="w-[544px] h-[56px] relative">
          <input
            className="w-full h-full rounded-[12px] border outline-none px-[48px] py-[12]"
            type="text"
            placeholder="Search"
          />
          <FiSearch className="absolute left-[24px] bottom-[20px] text-[#4F4F4F]" />
          <button className="btn-bg absolute right-0 top-0 h-full">
            Search
          </button>
        </div>
      </div>
      <ContentGap />
      <div className="flex items-center gap-[16px] flex-wrap justify-center">
        {projectsFilterBtn.map((item, index) => (
          <button
            onClick={() => setBtnTitle(item.title)}
            className={`border rounded-[8px] ${
              item.title === btnTitle
                ? "btn-bg"
                : "py-[12px] px-[24px] border rounded-[12px] bg-white"
            }`}
            key={index}
          >
            {item.title}
          </button>
        ))}
      </div>
      <ContentGap />
      <div className="grid grid-cols-3 gap-x-[32px] gap-y-[48px]">
        {ProjectsData.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
      <ContentGap />
      <LoadMoreBtn />
    </BigWidthNormalSectionWrapper>
  );
};

export default Projects;
