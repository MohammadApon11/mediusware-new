import PaddingTop from "@/components/shared/gap's/PaddingTop";
import React from "react";
import JobHero from "../components/JobHero";
import ContentGap from "@/components/shared/gap's/ContentGap";
import RequirementDetails from "../components/RequirementDetails";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import WeOffer from "../components/WeOffer";
import { JobRequirementsData } from "@/data/CareerData";
import Inner from "@/components/shared/wrapper's/motion/Inner";

export const metadata = {
  title: "Mediusware || Career || Lead Generation",
  description: "Medius Family",
};

const LeadGenerationExpertPage = () => {
  const data = JobRequirementsData.find((job) => job.id === "lead generation expert");
  return (
    <Inner>
      <PaddingTop />
      <JobHero data={data} />
<SectionsGap />
      <RequirementDetails data={data} />
      <SectionsGap />
      <WeOffer />
    </Inner>
  );
};

export default LeadGenerationExpertPage;
