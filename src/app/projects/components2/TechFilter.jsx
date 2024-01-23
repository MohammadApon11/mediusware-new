"use client";
import ContentGap from "@/components/shared/gap's/ContentGap";
import BigWidthNormalSectionWrapper from "@/components/shared/wrapper's/BigWidthNormalSectionWrapper";
import Link from "next/link";
import React, { useState } from "react";
import img1 from "../../../assets/tech/js.png";
import img2 from "../../../assets/tech/html.png";
import Image from "next/image";
import arrow from "../../../assets/all/top-arrow.png";
import {
  TransitionWrapper1
} from "@/components/shared/wrapper's/motion/TransitionWrapper";

const TechFilter = () => {
  const [activeText, setAcitveText] = useState("All");

  const filterText = [
    "All",
    "Front-end",
    "Back-end",
    "Framework",
    "Server Side",
    "API",
    "Management",
  ];
  const technologies = [
    {
      id: "All",
      tech: [
        { image: img1, title: "HTML5" },
        { image: img2, title: "JavaScript" },
      ],
    },
    {
      id: "Front-end",
      tech: [{ image: img1, title: "HTML5" }],
    },
  ];
  const allTech = technologies.find((tech) => tech.id === "All");

  const [filteredTech, setFilteredTech] = useState([]);

  const handleFilter = (text) => {
    const filterTech = technologies.find((tech) => tech.id === text);
    setFilteredTech(filterTech);
    setAcitveText(text);
  };

  return (
    <BigWidthNormalSectionWrapper>
      <h1 className="text-[48px] text-primary font-bold">
        Used <span className="text-secondary">Tools & Technologies</span>
      </h1>
      <p className="text-[24px] text-third mt-[24px]">
        The eSimplify mission is to provide small to medium size Physician
        Practices access to meaningful{" "}
        <Link href={"/"} className="text-secondary">
          insights and analytics
        </Link>{" "}
        to help administrators identify Marketers generate awareness around a
        product.{" "}
      </p>
      <ContentGap />
      <div className="flex items-center gap-[24px]">
        {filterText.map((item, index) => (
          <TransitionWrapper1 key={index} index={index}>
            <button
              onClick={() => handleFilter(item)}
              className={`${
                activeText === item
                  ? "btn-bg"
                  : "px-[24px] py-[12px] rounded-[12px] bg-white border"
              }`}
            >
              {item}
            </button>
          </TransitionWrapper1>
        ))}
      </div>
      <ContentGap />
      <div className="flex items-center gap-[24px]">
        {activeText === "All"
          ? allTech?.tech?.map((item, index) => (
              <TransitionWrapper1 key={index} index={index}>
                <div className="w-[264px] h-[188px] rounded-[8px] bg-white flex items-center px-[32px]">
                  <div>
                    <Image
                      className="h-[40px] w-[40px] "
                      src={item?.image}
                      width={40}
                      height={40}
                    />
                    <h1 className="text-primary text-[32px] font-semibold mt-[12px]">
                      {item?.title}
                    </h1>
                  </div>
                </div>
              </TransitionWrapper1>
            ))
          : filteredTech?.tech?.map((item, index) => (
              <TransitionWrapper1 key={index} index={index}>
                <div className="w-[264px] h-[188px] rounded-[8px] bg-white flex items-center px-[32px]">
                  <div>
                    <Image
                      className="h-[40px] w-[40px] "
                      src={item?.image}
                      width={40}
                      height={40}
                    />
                    <h1 className="text-primary text-[32px] font-semibold mt-[12px]">
                      {item?.title}
                    </h1>
                  </div>
                </div>
              </TransitionWrapper1>
            ))}
      </div>
      <ContentGap />
      <Link href={"/contact-us"}>
        <button
          href={"/contact-us"}
          className="btn-bg flex items-center gap-[18px]"
        >
          START YOUR OWN SOLUTION <Image src={arrow} width={17} height={15} />
        </button>
      </Link>
    </BigWidthNormalSectionWrapper>
  );
};

export default TechFilter;
