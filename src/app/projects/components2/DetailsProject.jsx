import React from "react";
import Results from "./Results";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import TempDetails from "./TempDetails";
import DesignProject from "./DesignProject";
import TechFilter from "./TechFilter";
import ContentGap from "@/components/shared/gap's/ContentGap";
import MoreStudies from "./MoreStudies";
import ClientsFeedback from "./ClientsFeedback";

const DetailsProject = ({ data }) => {
  const {
    path,
    title,
    projectImage,
    shortOverview,
    fullOverview,
    history,
    challenges,
    overcomes,
    overcomeSummary,
    softArchitect,
    projectSummary,
    backend,
    frontend,
    frameworks,
    serverSide,
    api,
    management,
  } = data;

  return (
    <div>
      <Results />
      <SectionsGap />
      <TempDetails
        title1={"Project"}
        title2={"Overview"}
        mobile={true}
        imgLeft={false}
      />
      <SectionsGap />
      <TempDetails
        imgLeft={true}
        mobile={false}
        bg={true}
        title1={"Problem"}
        title2={" Statement"}
      />
      <SectionsGap />
      <TempDetails
        imgLeft={false}
        mobile={false}
        bg={false}
        title1={"Challanges"}
      />
      <SectionsGap />
      <TempDetails
        imgLeft={true}
        mobile={false}
        bg={true}
        title1={"Solution"}
      />
      <SectionsGap />
      <TempDetails
        imgLeft={true}
        mobile={true}
        bg={false}
        title1={"Key"}
        title2={"Features"}
        featureTitle={"Company Management"}
        feature={true}
      />
      <SectionsGap />
      <DesignProject />
      <SectionsGap />
      <TechFilter />
      <SectionsGap />
      <div className="bg-white py-[96px]">
        <MoreStudies />
      </div>
      <SectionsGap />
      <ClientsFeedback />
    </div>
  );
};

export default DetailsProject;
