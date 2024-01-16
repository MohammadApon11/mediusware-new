import SectionsHeader from "@/components/shared/SectionsHeader";
import ContentGap from "@/components/shared/gap's/ContentGap";
import SectionsWrapper from "@/components/shared/wrapper's/SectionsWrapper";
import { ClientsData } from "@/data/HomeData";
import Image from "next/image";
import React from "react";

const OurClients = () => {
  return (
    <div className="bg-white py-[40px]">
      <div className="text-center w-[1300px] mx-auto">
        <SectionsHeader title1={"Our"} title2={"Clients"} />
        <span className="text-[18px] text-primary">
          We are trusted by industry leaders
        </span>
        <ContentGap />
        <div className="grid grid-cols-5 gap-[24px]">
          {ClientsData?.map((image, index) => (
            <Image src={image} key={index} width={190} height={80} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
