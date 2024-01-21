import Image from "next/image";
import React from "react";
import img from "../../assets/all/52.png";
import SectionWrapper from "@/components/shared/wrapper's/SectionWrapper";

const Network = () => {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <div className="text-[#002B4F]">
          <h1 className="text-[40px]">Join Our Partner Network</h1>
          <p className="mt-[24px]">
            Our ultimate goal is to expand our expertise and resources all
            around the world. If you think <br /> you have the capability to
            complement our brand ethics and reputation, then we are looking{" "}
            <br /> for you!
          </p>
        </div>
        <Image src={img} width={545} height={254} />
      </div>
    </SectionWrapper>
  );
};

export default Network;
