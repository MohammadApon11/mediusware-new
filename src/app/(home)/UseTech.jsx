import SectionsHeader from "@/components/shared/SectionsHeader";
import ContentGap from "@/components/shared/gap's/ContentGap";
import React from "react";
import tech1 from "../../assets/all/tech1.png";
import tech2 from "../../assets/all/tech2.png";
import tech3 from "../../assets/all/tech3.png";
import tech4 from "../../assets/all/tech4.png";
import Image from "next/image";
import SectionWrapper from "@/components/shared/wrapper's/SectionWrapper";

const UseTech = () => {
  return (
    <SectionWrapper>
      <SectionsHeader title1={"We"} title2={"Use"} />
      <ContentGap />
      <div className="grid grid-cols-4 gap-[24px]">
        <Image src={tech1} width={290} height={255} />
        <Image src={tech4} width={290} height={255} />
        <Image src={tech3} width={290} height={255} />
        <Image src={tech4} width={290} height={255} />
      </div>
    </SectionWrapper>
  );
};

export default UseTech;
