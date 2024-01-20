import CommonHero from "@/components/shared/CommonHero";
import Services from "@/components/shared/Services";
import PaddingTop from "@/components/shared/gap's/PaddingTop";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <PaddingTop />
      <CommonHero
        text1={"Services"}
        title1={"WE PROVIDE THIS"}
        title2={"IT SOLUTIONS"}
      />
      <SectionsGap />
      <Services />
    </>
  );
};

export default ServicesPage;
