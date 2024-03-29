import SectionsHeader from "@/components/shared/SectionsHeader";
import ContentGap from "@/components/shared/gap's/ContentGap";
import SectionWrapper from "@/components/shared/wrapper's/SectionWrapper";
import { TransitionWrapper2 } from "@/components/shared/wrapper's/motion/TransitionWrapper";
import { IndustryData } from "@/data/HomeData";
import Image from "next/image";
import React from "react";

const IndustryWeServe = () => {
  return (
    <div className="bg-white py-[30px]">
      <SectionWrapper>
        <SectionsHeader title1={"Industry"} title2={"Serve"} />
        <ContentGap />
        <div className="grid grid-cols-6 gap-y-[24px] gap-x-[16px]">
          {IndustryData?.map((data, index) => (
            <TransitionWrapper2 index={index} key={index}>
              <div
                className="border border-[#D0D5DD] rounded-[8px] p-[30px] group  text-center hover:shadow-2xl transition-all duration-300"
                key={index}
              >
                <Image
                  className="group-hover:scale-125 transition-all duration-200 mx-auto"
                  src={data.image}
                  width={59}
                  height={60}
                />
                <h4 className="mt-[24px] text-[18px] ">{data.title}</h4>
              </div>
            </TransitionWrapper2>
          ))}
        </div>
      </SectionWrapper>
      <ContentGap />
    </div>
  );
};

export default IndustryWeServe;
