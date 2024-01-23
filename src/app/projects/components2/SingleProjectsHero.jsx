import SectionsGap from "@/components/shared/gap's/SectionsGap";
import BigWidthNormalSectionWrapper from "@/components/shared/wrapper's/BigWidthNormalSectionWrapper";
import React from "react";
import arrow from "../../../assets/all/top-arrow.png";
import Image from "next/image";
import ContentGap from "@/components/shared/gap's/ContentGap";
import upArrow from "../../../assets/all/up-arrow.png";
import Reveal from "@/components/shared/wrapper's/motion/Reveal";
import Link from "next/link";

const SingleProjectsHero = ({ data }) => {
  const { title, title2, techBase, projectImage, description1, description2 } =
    data;
  return (
    <BigWidthNormalSectionWrapper>
      <SectionsGap />
      <div className="flex items-center justify-between">
        <div className="text-primary">
          <h1 className="text-[72px] font-bold">
            <Reveal bg="bg-[#00A88E]" title={true}>
              {title} <span className="text-secondary">{title2}</span>
            </Reveal>
          </h1>
          <h1 className="text-[72px] font-bold -mt-[15px]">
            <Reveal title={true} bg="bg-[#00A88E]">
              {techBase}
            </Reveal>
          </h1>
          <Reveal>
            <p className="text-[32px] text-[#475467] mt-[40px]">
              {description1}
            </p>
          </Reveal>
          <Reveal>
            <p className="text-[32px] text-[#475467]">{description2}</p>
          </Reveal>
          <Link href={"/contact-us"}>
            <button className="btn-bg flex items-center gap-[16px] mt-[56px]">
              Request a Quote <Image src={arrow} width={15} height={15} />
            </button>
          </Link>
        </div>
        <Image src={projectImage} width={900} height={800} />
      </div>
      <ContentGap />
      <div className="bg-white rounded-[16px] p-[40px] mx-auto flex items-center justify-between">
        <div>
          <p className="text-[#98A2B3] text-[18px]">Platform</p>
          <h4 className="text-[32px] text-primary font-semibold">
            Web | Mobile
          </h4>
        </div>
        <div>
          <p className="text-[#98A2B3] text-[18px]">Industry</p>
          <h4 className="text-[32px] text-primary font-semibold">
            Construction
          </h4>
        </div>
        <div>
          <p className="text-[#98A2B3] text-[18px]">Live View</p>
          <h4 className="text-[32px] text-primary font-semibold flex items-center gap-[18px]">
            E-commerce <Image src={upArrow} width={17} height={10} />
          </h4>
        </div>
        <div>
          <p className="text-[#98A2B3] text-[18px]">Location</p>
          <h4 className="text-[32px] text-primary font-semibold">USA</h4>
        </div>
        <div>
          <p className="text-[#98A2B3] text-[18px]">Service We Provide</p>
          <h4 className="text-[32px] text-primary font-semibold">
            Design & Development
          </h4>
        </div>
      </div>
      <SectionsGap />
    </BigWidthNormalSectionWrapper>
  );
};

export default SingleProjectsHero;
