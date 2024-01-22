import React from "react";
import "../../../styles/common.css";
import heroImage from "../../../assets/commonHero/marketing.png";
import { FaBoxArchive } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import Reveal from "@/components/shared/wrapper's/motion/Reveal";

const JobHero = ({ data }) => {
  const { title, deadline, jobType } = data;
  return (
    <div
      className="relative h-[400px] bg-cover bg-center w-[100%] bg-fixed flex items-center flex-col justify-center"
      style={{
        backgroundImage: `url(${heroImage.src})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-overlay"></div>
      <div className=" text-white font-semibold z-10 text-center">
        <h1 className="text-[45px] font-bold w-[700px]">
          <Reveal>{title}</Reveal>
        </h1>
        <div className="flex items-center justify-center gap-[14px] text-[16px] mt-[16px]">
          <Reveal>
            <div className="flex items-center gap-[5px]">
              <FaBoxArchive />
              <span>Job Type: {jobType}</span>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-[5px]">
              <MdOutlineWatchLater />
              <div className="flex items-center gap-[3px]">
                <span>Deadline:</span>
                <span>{deadline}</span>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-[10px] flex justify-center">
          <Reveal>
            For Any Queries Email :
            <span className="text-yellow-500">career@mediusware.com</span>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default JobHero;
