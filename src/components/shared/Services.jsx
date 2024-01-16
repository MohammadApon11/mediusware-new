import SectionsHeader from "@/components/shared/SectionsHeader";
import ContentGap from "@/components/shared/gap's/ContentGap";
import SectionsWrapper from "@/components/shared/wrapper's/SectionsWrapper";
import { ServicesData } from "@/data/HomeData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const Services = ({last}) => {
  return (
    <SectionsWrapper>
      <div className="text-center">
        <SectionsHeader title1={"Our"} title2={"Services"} />
        <span className="text-[18px] text-center text-primary">
          We Are Offering All Kinds of IT Solutions Services
        </span>
        <ContentGap />
        <div className="grid grid-cols-4 gap-[20px]">
          {ServicesData?.map((data, index) => (
            <div
              className={`border border-[#D0D5DD] p-[18px] flex items-center gap-[18px] bg-white rounded-lg ${data.title === last && "hidden"}`}
              key={index}
            >
              <Image src={data.image} width={150} height={150} />
              <div className="text-start">
                <p className="text-[18px] font-semibold">{data.title}</p>
                <p className="text-[15px] mt-[18px]">{data.description}</p>
                <Link
                  href={"/about"}
                  className="text-primary text-[24px] p-[20px]"
                >
                  <GoArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <ContentGap />
      </div>
    </SectionsWrapper>
  );
};

export default Services;
