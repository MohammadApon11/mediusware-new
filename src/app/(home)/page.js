import PaddingTop from "@/components/shared/gap's/PaddingTop";
import React from "react";
import HomeHero from "./HomeHero";
import SectionsWrapper from "@/components/shared/wrapper's/SectionsWrapper";
import History from "./History";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import ContentGap from "@/components/shared/gap's/ContentGap";
import Services from "./Services";
import OurClients from "./OurClients";
import UseTech from "./UseTech";
import IndustryWeServe from "./IndustryWeServe";
import ReachBusiness from "./ReachBusiness";
import Newtwork from "./Newtwork";
import Footer from "@/components/shared/Footer";

const HomePage = () => {
  return (
    <div>
      <PaddingTop />
      <HomeHero />
      <History />
      <SectionsGap />
      <ContentGap />
      <Services />
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
    </div>
  );
};

export default HomePage;
