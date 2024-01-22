import BigWidthNormalSectionWrapper from "@/components/shared/wrapper's/BigWidthNormalSectionWrapper";
import Image from "next/image";
import React from "react";
import ContentGap from "@/components/shared/gap's/ContentGap";
import spark from "../../../assets/all/sparkles.png";
import Counter from "@/components/shared/Counter";

const Results = ({ result }) => {
  return (
    <div className="bg-white py-[96px]">
      <BigWidthNormalSectionWrapper>
        <div className="text-center">
          <h1 className="flex items-center justify-center gap-[16px] text-center text-[32px] text-primary font-bold">
            Results <Image src={spark} width={20} height={15} />
          </h1>
          <p className="text-[24px] text-third mt-[24px]">
            We delivered end-to-end results for VidaProjects within 6 months.
          </p>
          <ContentGap />
          <div className="flex items-center justify-center gap-[24px]">
            <div className="text-center px-[70px] border-r">
              <h1 className="text-rgb font-extrabold text-[72px]">
                <Counter end={40} />%
              </h1>
              <p className="text-[24px] text-[#004C40]">
                We increased sales by
              </p>
            </div>
            <div className="text-center px-[70px] border-r">
              <h1 className="text-rgb font-extrabold text-[72px]">
                <Counter end={9.6} /> x
              </h1>
              <p className="text-[24px] text-[#004C40]">Return on investment</p>
            </div>
            <div className="text-center px-[70px]">
              <h1 className="text-rgb font-extrabold text-[72px]">
                <Counter end={45} />%
              </h1>
              <p className="text-[24px] text-[#004C40]">
                Increase in placed order rate
              </p>
            </div>
          </div>
        </div>
      </BigWidthNormalSectionWrapper>
    </div>
  );
};

export default Results;
