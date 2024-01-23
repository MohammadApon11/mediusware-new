import PaddingTop from "@/components/shared/gap's/PaddingTop";
import React from "react";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import OurTeamCards from "./OurTeamCards";
import Inner from "@/components/shared/wrapper's/motion/Inner";
import CommonHero from "@/components/shared/CommonHero";
import MemberFilter from "./MemberFilter";
import ChiefCard from "./ChiefCard";
import Message from "@/components/shared/Message";
import AskedQuestions from "./AskedQuestions";

export const metadata = {
  title: "Mediusware || Our Team",
  description: "Medius Family",
};

const OurTeamPage = () => {
  return (
    <Inner>
      <PaddingTop />
      <CommonHero
        title1={"THE ROOT OF"}
        title2={"OUR INTELLECT."}
        subTitle={"We are 100+ People"}
      />
      <SectionsGap />
      <MemberFilter />
      <SectionsGap />
      <div className="border-b w-full"></div>
      <OurTeamCards />
      <div className="bg-white py-[96px]">
        <Message />
      </div>
      <SectionsGap />
      <AskedQuestions />
      <SectionsGap />
    </Inner>
  );
};

export default OurTeamPage;
