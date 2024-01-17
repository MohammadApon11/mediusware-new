import PaddingTop from "@/components/shared/gap's/PaddingTop";
import React from "react";
import ServicesHero from "../services/components/ServicesHero";
import heroImg from "../../assets/team/teamHero2.jpg";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import OurTeamCards from "./OurTeamCards";
import Footer from "@/components/shared/Footer";

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
    <div className="bg-white">
      <PaddingTop />
      <ServicesHero data={data} />
      <SectionsGap />
      <OurTeamCards />
      <SectionsGap />
      <Footer />
    </div>
  );
};

export default OurTeamPage;
