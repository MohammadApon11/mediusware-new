import SectionsHeader from "@/components/shared/SectionsHeader";
import ContentGap from "@/components/shared/gap's/ContentGap";
import SectionsWrapper from "@/components/shared/wrapper's/SectionsWrapper";
import { ApplicationProcessData } from "@/data/CareerData";
import React from "react";
import ProcessCards from "./ProcessCards";
import ServicesSectionWrapper from "@/app/services/components/gap's/ServicesSectionWrapper";

const ApplicationProcess = () => {
  return (
    <ServicesSectionWrapper>
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
            <ProcessCards key={index} process={process} />
          ))}
        </div>
      </>
    </ServicesSectionWrapper>
  );
};

export default ApplicationProcess;
