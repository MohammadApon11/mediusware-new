import SectionWrapper from "@/components/shared/wrapper's/SectionWrapper";
import SectionsHeader from "@/components/shared/SectionsHeader";
import ContentGap from "@/components/shared/gap's/ContentGap";
import { ServicesData } from "@/data/HomeData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import cardShape1 from "../../assets/all/cardShape1.png";
import cardShape2 from "../../assets/all/cardShape2.png";
import { TransitionWrapper1 } from "./wrapper's/motion/TransitionWrapper";

const Services = ({ last }) => {
  return (
    <SectionWrapper>
      <div className="text-center">
        <SectionsHeader title1={"Our"} title2={"Services"} />
        <span className="text-[18px] text-center text-primary">
          We Are Offering All Kinds of IT Solutions Services
        </span>
        <ContentGap />
        <div className="grid grid-cols-4 gap-[20px]">
          {ServicesData?.map((data, index) => (
            <TransitionWrapper1 index={index} key={index}>
              <Link
                className={`border border-[#D0D5DD] p-[18px] flex items-center flex-col gap-[18px] bg-white rounded-lg hover:shadow-xl transition-all duration-700 hover:scale-[1.02] group relative overflow-hidden ${
                  data.title === last && "hidden"
                }`}
                href={`services/${data.path}`}
              >
                <Image
                  className="absolute -right-[10%] -top-[10%] opacity-0 group-hover:right-0 group-hover:top-0 group-hover:opacity-[100%] transition-all duration-300"
                  src={cardShape1}
                  width={80}
                  height={100}
                />
                <Image
                  className="absolute -left-[10%] -bottom-[10%] opacity-0 group-hover:left-0 group-hover:bottom-0 group-hover:opacity-[100%] transition-all duration-300"
                  src={cardShape2}
                  width={80}
                  height={100}
                />
                <Image src={data.image} width={150} height={150} />
                <p className="text-[18px] font-semibold">{data.title}</p>
                <p className="text-[14px] mt-[10px] ">{data.description}</p>
                <span className="text-primary text-[24px] mt-[15px] px-[10px] -rotate-45 group-hover:rotate-0 transition-all duration-300">
                  <GoArrowRight />
                </span>
              </Link>
            </TransitionWrapper1>
          ))}
        </div>
        <ContentGap />
      </div>
    </SectionWrapper>
  );
};

export default Services;
