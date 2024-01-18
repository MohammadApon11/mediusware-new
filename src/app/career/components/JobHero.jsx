import React from "react";
import "../../../styles/common.css";
import heroImage from "../../../assets/commonHero/marketing.png";
import { FaBoxArchive } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";

const JobHero = ({ data }) => {
  const {
    title,
    deadline,
    jobType,
  } = data;
  return (
    <div
      className="relative h-[600px] bg-cover bg-center w-[100%] bg-fixed flex items-center flex-col justify-center"
      style={{
        backgroundImage: `url(${heroImage.src})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-overlay"></div>
      <div className=" text-white font-semibold z-10 text-center">
        <h1 className="text-[45px] font-bold w-[700px]">{title}</h1>
        <div className="flex items-center justify-center gap-[14px] text-[16px] mt-[16px]">
          <div className="flex items-center gap-[5px]">
            <FaBoxArchive />
            <span>Job Type: {jobType}</span>
          </div>
          <div className="flex items-center gap-[5px]">
            <MdOutlineWatchLater />
            <div className="flex items-center gap-[3px]">
              <span>Deadline:</span>
              <span>{deadline}</span>
            </div>
          </div>
        </div>
        <p className="mt-[10px]">
          For Any Queries Email :{" "}
          <span className="text-yellow-500">career@mediusware.com</span>
        </p>
      </div>
    </div>
  );
};

export default JobHero;
