import ServicesSectionWrapper from "@/app/services/components/gap's/ServicesSectionWrapper";
import SectionsHeader from "@/components/shared/SectionsHeader";
import Link from "next/link";
import React from "react";

const CareerOpenings = () => {
  return (
    <ServicesSectionWrapper>
      <SectionsHeader title1={"Career"} title2={"Openings"} />
      <p className="text-primary text-center">We’re always looking for creative, talented self-starters to join the <Link className="text-secondary font-semibold" href={"/"}>MEDIUSWARE</Link> family. Check out our open <br /> roles below and fill out an application.</p>
    </ServicesSectionWrapper>
  );
};

export default CareerOpenings;
