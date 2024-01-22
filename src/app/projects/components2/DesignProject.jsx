import React from "react";
import img from "../../../assets/all/proDesign.png";
import BigWidthNormalSectionWrapper from "@/components/shared/wrapper's/BigWidthNormalSectionWrapper";
import Image from "next/image";
import ContentGap from "@/components/shared/gap's/ContentGap";

const DesignProject = () => {
  return (
    <div className="bg-white py-[96px]">
      <BigWidthNormalSectionWrapper>
        <h1 className="text-[48px] text-primary font-bold">
          Project <span className="text-secondary">Design</span>
        </h1>
        <ContentGap />
        <div className="flex items-center gap-[24px]">
          <Image src={img} width={525} height={396} />
          <Image src={img} width={525} height={396} />
          <Image src={img} width={525} height={396} />
        </div>
      </BigWidthNormalSectionWrapper>
    </div>
  );
};

export default DesignProject;
