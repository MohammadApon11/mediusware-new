import PaddingTop from "@/components/shared/gap's/PaddingTop";
import React from "react";
import JobHero from "../components/JobHero";
import { JobRequirementsData } from "@/data/CareerData";
import ContentGap from "@/components/shared/gap's/ContentGap";
import RequirementDetails from "../components/RequirementDetails";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import WeOffer from "../components/WeOffer";
import Inner from "@/components/shared/wrapper's/motion/Inner";

export const metadata = {
  title: "Mediusware || Career || Business Analyst",
  description: "Medius Family",
};

const BusinessAnalystPage = () => {
  const data = JobRequirementsData.find((job) => job.id === "business analyst");
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

export default BusinessAnalystPage;
