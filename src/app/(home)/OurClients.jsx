import SectionsHeader from "@/components/shared/SectionsHeader";
import ContentGap from "@/components/shared/gap's/ContentGap";
import SectionWrapper from "@/components/shared/wrapper's/SectionWrapper";
import { TransitionWrapper2 } from "@/components/shared/wrapper's/motion/TransitionWrapper";
import { ClientsData } from "@/data/HomeData";
import Image from "next/image";
import React from "react";

const OurClients = () => {
  return (
    <div className="bg-white py-[40px]">
      <SectionWrapper>
        <SectionsHeader title1={"Our"} title2={"Clients"} />
        <span className="text-[18px] text-primary text-center">
          We are trusted by industry leaders
        </span>
        <ContentGap />
        <div className="grid grid-cols-5 gap-[24px]">
          {ClientsData?.map((image, index) => (
            <TransitionWrapper2 index={index} key={index}>
              <Image src={image} width={190} height={80} />
            </TransitionWrapper2>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default OurClients;
