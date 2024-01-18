import ServicesSectionWrapper from "@/app/services/components/gap's/ServicesSectionWrapper";
import SectionsHeader from "@/components/shared/SectionsHeader";
import ContentGap from "@/components/shared/gap's/ContentGap";
import { ServicesData } from "@/data/HomeData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const Services = ({ last }) => {
  return (
    <ServicesSectionWrapper>
      <div className="text-center">
        <SectionsHeader title1={"Our"} title2={"Services"} />
        <span className="text-[18px] text-center text-primary">
          We Are Offering All Kinds of IT Solutions Services
        </span>
        <ContentGap />
        <div className="grid grid-cols-4 gap-[20px]">
          {ServicesData?.map((data, index) => (
            <Link
              href={`services/${data.path}`}
              className={`border border-[#D0D5DD] p-[18px] flex items-center flex-col gap-[18px] bg-white rounded-lg hover:shadow-xl transition-all duration-700 hover:scale-[1.02] group ${
                data.title === last && "hidden"
              }`}
              key={index}
            >
              <Image src={data.image} width={150} height={150} />
              <p className="text-[18px] font-semibold">{data.title}</p>
              <p className="text-[15px] mt-[18px]">{data.description}</p>
              <span className="text-primary text-[24px] px-[10px] -rotate-45 group-hover:rotate-0 transition-all duration-300">
                <GoArrowRight />
              </span>
            </Link>
          ))}
        </div>
        <ContentGap />
      </div>
    </ServicesSectionWrapper>
  );
};

export default Services;
