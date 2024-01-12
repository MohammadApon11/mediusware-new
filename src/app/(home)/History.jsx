"use client";
import React from "react";
import CountUp from "react-countup";
import ex from "../../assets/all/37.png";
import countries from "../../assets/all/38.png";
import prof from "../../assets/all/39.png";
import projects from "../../assets/all/40.png";
import Image from "next/image";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import ContentGap from "@/components/shared/gap's/ContentGap";

const History = () => {
  return (
    <div className="bg-white py-[40px] ">
      <ContentGap />
      <div className="w-[1300px] mx-auto flex items-center justify-between">
        <div className="flex flex-col items-center gap-[12px]">
          <Image className="mx-auto" src={ex} width={70} height={70} />
          <p className="text-[#0060AF] text-[50px]">
            <CountUp delay={0} end={7} duration={5} />+
          </p>
          <span className="text-[20px] text-primary">Years Of Experience</span>
        </div>
        <div className="flex flex-col items-center gap-[12px]">
          <Image className="mx-auto" src={countries} width={70} height={70} />
          <p className="text-[#0060AF] text-[50px]">
            <CountUp delay={0} end={200} duration={5} />+
          </p>
          <span className="text-[20px] text-primary">Countries Served</span>
        </div>
        <div className="flex flex-col items-center gap-[12px]">
          <Image className="mx-auto" src={prof} width={70} height={70} />
          <p className="text-[#0060AF] text-[50px]">
            <CountUp delay={0} end={100} duration={5} />+
          </p>
          <span className="text-[20px] text-primary">IT Professionals</span>
        </div>
        <div className="flex flex-col items-center gap-[12px]">
          <Image className="mx-auto" src={projects} width={70} height={70} />
          <p className="text-[#0060AF] text-[50px]">
            <CountUp delay={0} end={700} duration={5} />+
          </p>
          <span className="text-[20px] text-primary">Projects Completed</span>
        </div>
      </div>
      <ContentGap />
    </div>
  );
};

export default History;
