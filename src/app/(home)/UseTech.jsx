"use client";
import SectionsHeader from "@/components/shared/SectionsHeader";
import ContentGap from "@/components/shared/gap's/ContentGap";
import React from "react";
import tech1 from "../../assets/all/tech1.png";
import tech2 from "../../assets/all/tech2.png";
import tech3 from "../../assets/all/tech3.png";
import tech4 from "../../assets/all/tech4.png";
import Image from "next/image";
import SectionWrapper from "@/components/shared/wrapper's/SectionWrapper";
import RightLeft from "@/components/shared/wrapper's/motion/RightLeft";

const UseTech = () => {
  return (
    <SectionWrapper>
      <SectionsHeader title1={"We"} title2={"Use"} />
      <ContentGap />
      <div className="grid grid-cols-4 gap-[24px]">
        <RightLeft side={"-120%"} duration={0.6}>
          <Image src={tech1} width={290} height={255} />
        </RightLeft>
        <RightLeft side={"-120%"} duration={0.5}>
          <Image src={tech2} width={290} height={255} />
        </RightLeft>
        <RightLeft side={"120%"} duration={0.5}>
          <Image src={tech3} width={290} height={255} />
        </RightLeft>
        <RightLeft side={"120%"} duration={0.6}>
          <Image src={tech4} width={290} height={255} />
        </RightLeft>
      </div>
    </SectionWrapper>
  );
};

export default UseTech;
