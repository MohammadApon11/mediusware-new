import PaddingTop from "@/components/shared/gap's/PaddingTop";
import React from "react";
import HomeHero from "./HomeHero";
import History from "./History";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import ContentGap from "@/components/shared/gap's/ContentGap";
import Services from "../../components/shared/Services";
import OurClients from "./OurClients";
import UseTech from "./UseTech";
import IndustryWeServe from "./IndustryWeServe";
import ReachBusiness from "./ReachBusiness";
import Newtwork from "./Newtwork";
import PrimaryBtn from "@/components/shared/button's/PrimaryBtn";
import ScrollWrapper from "@/components/shared/wrapper's/motion/ScrollWrapper";

const HomePage = () => {
  return (
    <>
      <ScrollWrapper />
      <PaddingTop />
      <HomeHero />
      <History />
      <div className="text-center">
        <Services last={"Digital Marketing"} />
        <div className="flex items-center justify-center">
          <PrimaryBtn bgGray={true} path="services">
            See More
          </PrimaryBtn>
        </div>
      </div>
      <ContentGap />
      <OurClients />
      <SectionsGap />
      <UseTech />
      <SectionsGap />
      <IndustryWeServe />
      <ReachBusiness />
      <SectionsGap />
      <Newtwork />
      <SectionsGap />
    </>
  );
};

export default HomePage;
