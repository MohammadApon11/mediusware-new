"use client";
import PaddingTop from "@/components/shared/gap's/PaddingTop";
import { InfoContext } from "@/providers/context";
import React, { useContext } from "react";
import heroImg from "../../../assets/team/teamHero1.jpg";
import ServicesHero from "@/app/services/components/ServicesHero";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import Image from "next/image";
import Footer from "@/components/shared/Footer";

const TeamMember = () => {
  const { member } = useContext(InfoContext);
  const data = {
    title: member?.name,
    heroImage: heroImg,
    description1: "Be the change that you wish to see in the world.",
    description2: "",
  };
  return (
    <div>
      <PaddingTop />
      <ServicesHero data={data} />
      <SectionsGap />
      <div className="w-[1000px] mx-auto bg-white shadow-2xl p-[40px] flex items-center gap-[60px] rounded-md">
        <Image src={member?.image} width={300} height={400} />
        <div>
          <span className="text-secondary text-[14px]">
            {member?.designation}
          </span>
          <h3 className="text-[40px] text-primary mt-[15px]">{member?.name}</h3>
        </div>
      </div>
      <SectionsGap />
      <Footer />
    </div>
  );
};

export default TeamMember;
