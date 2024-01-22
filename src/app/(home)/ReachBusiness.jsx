import SectionsHeader from "@/components/shared/SectionsHeader";
import ContentGap from "@/components/shared/gap's/ContentGap";
import SectionWrapper from "@/components/shared/wrapper's/SectionWrapper";
import { TransitionWrapper1 } from "@/components/shared/wrapper's/motion/TransitionWrapper";
import { ReachBusinessData } from "@/data/HomeData";
import Image from "next/image";
import React from "react";

const ReachBusiness = () => {
  return (
    <SectionWrapper>
      <ContentGap />
      <SectionsHeader title1={"Reach"} title2={"Business"} />
      <ContentGap />
      <div className="grid grid-cols-4 gap-[30px]">
        {ReachBusinessData?.map((data, index) => (
          <TransitionWrapper1 index={index} key={index}>
            <div
              className={`hover:shadow-lg p-[24px] transition-shadow duration-300 flex flex-col justify-center items-center text-center group ${
                data.id % 2 === 0
                  ? "hover:shadow-[#00A88E]"
                  : "hover:shadow-[#0060AF]"
              }`}
              key={index}
            >
              <div
                className={`w-[205px] h-[205px] mx-auto flex-initial items-center justify-center relative  before:content-[''] before:absolute before:w-[100%] before:h-[100%] before:left-0 before:bottom-0 before:border-[20px] before:border-solid before:border-[#EEF6FD] before:rounded-[50%] before:transition-all before:duration-700 before:transform z-[1] ${
                  data.color === "green"
                    ? "before:border-t-[#0060af] before:border-l-[#0060af] before:rotate-45 group-hover:before:-rotate-[135deg]"
                    : "before:border-t-[#00A88E] before:border-l-[#00A88E] before:-rotate-[135deg] group-hover:before:rotate-45"
                }`}
              >
                <div
                  className={`w-[100%] h-[100%] absolute left-0 top-0 rounded-[50%] z-[1] transition-all duration-500 group-hover:transform   before:content-['']  before:right-0 before:absolute  before:w-[20px] before:h-[11px] after:left-0 after:content-[''] after:absolute after:bottom-[45%] after:w-[20px] after:h-[11px] ${
                    data.color === "green"
                      ? "before:bg-[#0060AF] after:bg-[#0060AF] group-hover:-rotate-[180deg] before:bottom-[45%] before:rounded-tl-none before:rounded-tr-none before:rounded-br-[20px] before:rounded-bl-[20px] after:rounded-tl-none after:rounded-tr-none after:rounded-br-[20px] after:rounded-bl-[20px]"
                      : "before:bg-[#00A88E] after:bg-[#00A88E] group-hover:rotate-[180deg] before:bottom-[50%] after:bottom-[50%] before:rounded-tl-[20px] before:rounded-tr-[20px] before:rounded-br-none before:rounded-bl-none after:rounded-tl-[20px] after:rounded-tr-[20px] after:rounded-br-none after:rounded-bl-none"
                  }`}
                ></div>
                <Image
                  className="mx-auto pt-[65px]"
                  src={data.image}
                  width={60}
                  height={60}
                />
              </div>
              <div className="w-[200px]">
                <h4 className="mt-[40px] text-[24px]">{data.title}</h4>
                <p className="text-[15px] mt-[10px]">{data.description}</p>
              </div>
            </div>
          </TransitionWrapper1>
        ))}
      </div>
      <ContentGap />
      <div className="border border-b w-full" />
    </SectionWrapper>
  );
};

export default ReachBusiness;
