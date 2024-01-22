import SectionsHeader from "@/components/shared/SectionsHeader";
import ContentGap from "@/components/shared/gap's/ContentGap";
import { ApplicationProcessData } from "@/data/CareerData";
import React from "react";
import ProcessCards from "./ProcessCards";
import SectionWrapper from "@/components/shared/wrapper's/SectionWrapper";
import { TransitionWrapper1 } from "@/components/shared/wrapper's/motion/TransitionWrapper";

const ApplicationProcess = () => {
  return (
    <SectionWrapper>
      <SectionsHeader title1={"Application"} title2={"Process"} />
      <p className="text-center text-primary">
        Our application process is designed to find talent for our dynamic IT
        environment. Begin with an online <br /> application to showcase your
        qualifications
      </p>
      <ContentGap />
      <>
        <div className="grid grid-cols-5 gap-x-[20px]">
          {ApplicationProcessData?.map((process, index) => (
            <TransitionWrapper1 key={index} index={index}>
              <ProcessCards process={process} />
            </TransitionWrapper1>
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};

export default ApplicationProcess;
