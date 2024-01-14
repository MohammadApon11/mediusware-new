import ServicesSectionWrapper from "@/app/services/components/gap's/ServicesSectionWrapper";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import Image from "next/image";
import React from "react";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

const ProjectsDetails = ({ data }) => {
  const {
    path,
    title,
    projectImage,
    shortOverview,
    fullOverview,
    history,
    challenges,
    overcomes,
    overcomeSummary,
    softArchitect,
    projectSummary,
    backend,
    frontend,
    frameworks,
    serverSide,
    api,
    management,
  } = data;
  return (
    <ServicesSectionWrapper>
      <SectionsGap />
      <Image
        className="rounded-[16px] w-[1200px] h-[750px] mx-auto"
        src={projectImage}
        width={12000}
        height={400}
      />
      <SectionsGap />
      <div className="grid grid-cols-3 gap-x-[30px]">
        <div className="flex flex-col gap-[30px] text-primary col-span-2">
          <div>
            <h1 className="text-[40px] font-semibold">OERVIEW</h1>
            <p className="mt-[30px] text-[16px]">{fullOverview}</p>
          </div>
          <div>
            <h1 className="text-[40px] font-semibold">HISTORY</h1>
            <p className="mt-[30px] text-[16px]">{history}</p>
          </div>
          <div>
            <h1 className="text-[40px] font-semibold">CHALLENGES WE FACED</h1>
            <ul className="mt-[30px] flex flex-col gap-[12px]">
              {challenges.map((img, index) => (
                <li className="flex items-center gap-[12px]" key={index}>
                  <GoDotFill className="text-secondary" /> {img}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-[40px] font-semibold">HOW WE OVERCOME THIS CHALLENGES</h1>
            <ul className="mt-[30px] flex flex-col gap-[12px]">
              {overcomes.map((img, index) => (
                <li className="flex items-center gap-[12px]" key={index}>
                  <GoDotFill className="text-secondary" /> {img}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-[40px] font-semibold">SOFTWARE ARCHITECTURE WE FOLLOWED</h1>
            <ul className="mt-[30px] flex flex-col gap-[12px]">
              {softArchitect.map((img, index) => (
                <li className="flex items-center gap-[12px]" key={index}>
                  <GoDotFill className="text-secondary" /> {img}
                </li>
              ))}
            </ul>
            <p className="text-[16px] mt-[20px]">{projectSummary}</p>
          </div>
        </div>
        <div className="rounded-[12px] sticky top-[150px] bg-[#E6EFF7] col-span-1 h-[450px]">
          <div className="bg-[#adc8df] p-[8px] rounded-tl-[12px] rounded-tr-[12px]">
            <h1 className="text-[#0060AF] text-[40px] font-semibold">
              Tech Stack
            </h1>
          </div>
          <div className="flex items-center gap-[40px] p-[20px]">
            <div className="flex flex-col gap-[29px]">
              <span>Backend:</span>
              <span>Frontend:</span>
              <span>Frameworks:</span>
              <span>Server-Side:</span>
              <span>API:</span>
              <span>Managment:</span>
            </div>
            <div className="flex flex-col gap-[19px]">
              <div className="flex items-center gap-[15px]">
                {backend.map((tech, index) => (
                  <Image src={tech} width={30} height={20} key={index} />
                ))}
              </div>
              <div className="flex items-center gap-[15px]">
                {frontend.map((tech, index) => (
                  <Image src={tech} width={30} height={20} key={index} />
                ))}
              </div>
              <div className="flex items-center gap-[15px]">
                {frameworks.map((tech, index) => (
                  <Image src={tech} width={30} height={20} key={index} />
                ))}
              </div>
              <div className="flex items-center gap-[15px]">
                {serverSide.map((tech, index) => (
                  <Image src={tech} width={30} height={20} key={index} />
                ))}
              </div>
              <div className="flex items-center gap-[15px]">
                {api.map((tech, index) => (
                  <Image src={tech} width={30} height={20} key={index} />
                ))}
              </div>
              <div className="flex items-center gap-[15px]">
                {management.map((tech, index) => (
                  <Image src={tech} width={30} height={20} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServicesSectionWrapper>
  );
};

export default ProjectsDetails;
