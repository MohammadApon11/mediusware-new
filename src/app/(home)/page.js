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
import Footer from "@/components/shared/Footer";
import PrimaryBtn from "@/components/shared/button's/PrimaryBtn";

const HomePage = () => {
  return (
    <>
      <PaddingTop />
      <HomeHero />
      <History />
      <SectionsGap />
      <ContentGap />
      <div className="text-center">
        <Services last={"Digital Marketing"} />
        <PrimaryBtn bg={true}>See More</PrimaryBtn>
      </div>
      <SectionsGap />
      <OurClients />
      <SectionsGap />
      <UseTech />
      <SectionsGap />
      <IndustryWeServe />
      <SectionsGap />
      <ReachBusiness />
      <SectionsGap />
      <Newtwork />
      <SectionsGap />
      <Footer />
    </>
  );
};

export default HomePage;
