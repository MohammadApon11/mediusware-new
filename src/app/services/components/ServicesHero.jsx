"use client";
import React from "react";
import "../../../styles/common.css";
import PrimaryBtn from "../../../components/shared/button's/PrimaryBtn";
import { usePathname } from "next/navigation";
import Reveal from "@/components/shared/wrapper's/motion/Reveal";

const ServicesHero = ({ data }) => {
  const { title, heroImage, description1, description2 } = data;

  const pathName = usePathname();

  return (
    <div
      className="relative h-[400px] bg-cover bg-center w-[100%] bg-fixed flex items-center flex-col justify-center"
      style={{
        backgroundImage: `url(${heroImage.src})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-overlay"></div>
      <div className="z-10 text-white text-center">
        <div className="text-[72px] font-semibold flex justify-center">
          <Reveal>{title}</Reveal>
        </div>
        <div className="text-[20px] mt-[24px] mb-[24px] flex justify-center">
          <Reveal>
            {description1} <br /> {description2}
          </Reveal>
        </div>
        <div className="flex justify-center">
          <PrimaryBtn width={true} bg={true} path={"example"} scroll={500}>
            {pathName === "/contact-us" ? "Send Message" : "See More"}
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
