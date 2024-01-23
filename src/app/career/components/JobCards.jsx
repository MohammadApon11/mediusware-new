import { JobRequirementsData } from "@/data/CareerData";
import React from "react";
import { GiQueenCrown } from "react-icons/gi";
import { TbCoinTaka } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { IoArrowForwardSharp } from "react-icons/io5";
import Link from "next/link";
import NormalSectionWrapper from "@/components/shared/wrapper's/NormalSectionWrapper";
import { TransitionWrapper1 } from "@/components/shared/wrapper's/motion/TransitionWrapper";

const JobCards = () => {
  return (
    <NormalSectionWrapper>
      <div className="grid grid-cols-3 gap-[24px]">
        {JobRequirementsData?.map((job, index) => (
          <TransitionWrapper1 key={index} index={index}>
            <div className="bg-white border border-[#667085] rounded-[12px] p-[24px]">
              <h1 className="text-primary text-[24px] font-semibold">
                {job.title}
              </h1>
              <button className="bg-[#C2EAE4] text-[16px] font-semibold p-[12px] w-[100%] flex items-center gap-[8px] rounded-[8px] mt-[20px]">
                <GiQueenCrown /> {job.experience}
              </button>
              <button className="bg-[#C2EAE4] text-[16px] font-semibold p-[12px] w-[100%] flex items-center gap-[8px] mt-[20px] rounded-[8px]">
                <TbCoinTaka /> {job.salaryRange}
              </button>
              <div className="mt-[24px] flex items-center justify-between">
                <span className="flex items-center gap-[5px] ">
                  <SlCalender /> {job.deadline}
                </span>
                <Link
                  href={`/career/${job.path}`}
                  className="hover:text-white text-secondary hover:bg-[#0060AF] px-[24px] py-[12px] rounded-[12px] font-semibold flex items-center gap-[5px]"
                >
                  Details <IoArrowForwardSharp />
                </Link>
              </div>
            </div>
          </TransitionWrapper1>
        ))}
      </div>
    </NormalSectionWrapper>
  );
};

export default JobCards;
