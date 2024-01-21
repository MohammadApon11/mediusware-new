import PaddingTop from "@/components/shared/gap's/PaddingTop";
import React from "react";
import ServicesHero from "../services/components/ServicesHero";
import heroImg from "../../assets/team/teamHero2.jpg";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import OurTeamCards from "./OurTeamCards";
import Inner from "@/components/shared/wrapper's/motion/Inner";

export const metadata = {
  title: "Mediusware || Our Team",
  description: "Medius Family",
};

const OurTeamPage = () => {
  const data = {
    title: "MEET OUR TEAM",
    heroImage: heroImg,
    description1:
      "Explore our diverse team of skilled professionals, from visionary founder and CEO to dedicated project managers ",
    description2:
      "and talented software engineers, Developer, Designer, Marketer, SQA, HR and so on.",
  };
  return (
    <Inner>
      <div className="bg-white pb-[5px]">
        <PaddingTop />
        <ServicesHero data={data} />
        <SectionsGap />
        <OurTeamCards />
        <SectionsGap />
      </div>
    </Inner>
  );
};

export default OurTeamPage;
