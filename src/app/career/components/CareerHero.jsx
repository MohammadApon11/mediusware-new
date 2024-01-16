import React from "react";
import heroAnimation from "../../../assets/animation/enterprise.json";
import ServicesSectionWrapper from "@/app/services/components/gap's/ServicesSectionWrapper";
import { FaToolbox } from "react-icons/fa";
import ArrowBtn from "./ArrowBtn";
import LottieAnimation from "@/app/services/components/LottieAnimation";
import Image from "next/image";
import position1 from "../../../assets/career/overlay-1.png";
import position2 from "../../../assets/career/overlay-2.png";

const CareerHero = () => {
  return (
    <div className="relative py-[70px] bg-slate-200">
      <Image className="absolute bottom-0 left-0 opacity-10" src={position1} width={1200} height={500} />
      <Image className="absolute top-0 right-0" src={position2} width={600} height={600}/>
      <ServicesSectionWrapper>
        <div className="flex items-center justify-between">
          <div className="text-primary z-10">
            <button className="text-[#0060AF] flex items-center gap-1 bg-white px-[15px] py-[6px] font-semibold rounded-[20px] text-[14px]">
              <FaToolbox /> Jobs
            </button>
            <h1 className="text-[72px] font-bold">
              Empower <span className="text-secondary">Your Career</span>
            </h1>
            <h1 className="text-[72px] -mt-[15px] font-bold">
              Journey with Us
            </h1>
            <p className="text-[20px] mt-[16px]">For Any Queries Email:</p>
            <p className="text-[30px] mb-[30px] font-semibold">
              career@mediusware.com
            </p>
            <ArrowBtn path={""}>Open Positions</ArrowBtn>
          </div>
          <div>
            <LottieAnimation anime={heroAnimation}></LottieAnimation>
          </div>
        </div>
      </ServicesSectionWrapper>
    </div>
  );
};

export default CareerHero;
