import React from "react";
import image1 from "../../../assets/career/1.png";
import image2 from "../../../assets/career/2.png";
import image3 from "../../../assets/career/3.png";
import image4 from "../../../assets/career/4.png";
import image5 from "../../../assets/career/5.png";
import image6 from "../../../assets/career/6.png";
import image7 from "../../../assets/career/7.png";
import image8 from "../../../assets/career/8.png";
import SectionWrapper from "@/components/shared/wrapper's/SectionWrapper";
import Image from "next/image";
import ContentGap from "@/components/shared/gap's/ContentGap";
import SectionsHeader from "@/components/shared/SectionsHeader";

const WeOFferData = [
  { id: 1, image: image1, title: "Boost Yourself With Unlimited Coffee" },
  { id: 2, image: image2, title: "Enjoy Your Lunch With Everyone." },
  { id: 3, image: image3, title: "Try Some Evening Snack With Everyone!" },
  { id: 4, image: image4, title: "Refresh Your Mind By Playing Game!" },
  { id: 5, image: image5, title: "Spend Weekend With Your Family." },
  { id: 6, image: image6, title: "You Will Never Get Bored In Here." },
  { id: 7, image: image7, title: "Keep Yourself Fit By Exercising Daily." },
  { id: 8, image: image8, title: "Enjoy Your Annual Retreat With Us!" },
];

const WeOffer = () => {
  return (
    <SectionWrapper>
      <SectionsHeader title1={"We"} title2={"Offer"} />
      <ContentGap />
      <div className="grid grid-cols-4 gap-[24px]">
        {WeOFferData?.map((data, index) => (
          <div className="hover:shadow-2xl px-[40px] py-[50px] transition-all duration-300" key={index}>
            <Image className="mx-auto" src={data.image} width={60} height={60} />
            <p className="text-[#0060af] text-center font-semibold mt-[24px]">{data.title}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WeOffer;
