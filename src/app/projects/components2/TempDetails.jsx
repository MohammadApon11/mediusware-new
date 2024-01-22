import BigWidthNormalSectionWrapper from "@/components/shared/wrapper's/BigWidthNormalSectionWrapper";
import Image from "next/image";
import React from "react";
import arrowRigth from "../../../assets/all/arrow-right.png";
import proImg from "../../../assets/all/proImg.png";
import proMobile from "../../../assets/all/proMobile.png";
import Features from "@/app/services/components/Features";

const TempDetails = ({
  image,
  imgLeft = false,
  mobile = false,
  bg = false,
  title1 = "",
  title2 = "",
  feature = false,
  featureTitle = "",
}) => {
  const text = [
    "At Vida Projects, our goal goes beyond just offering tools, it's about creating a world where construction project management is intuitive, streamlined, and aligned with the unique challenges of the industry. We're dedicated to empowering teams, enhancing collaboration, and ensuring that every project becomes a success story.",
    "At Vida Projects, our goal goes beyond just offering tools, it's about creating a world where construction project management is intuitive, streamlined, and aligned with the unique challenges of the industry. We're dedicated to empowering teams, enhancing collaboration, and ensuring that every project becomes a success story.",
  ];
  return (
    <div className={`${bg && "bg-white py-[96px]"}`}>
      <BigWidthNormalSectionWrapper>
        {feature && (
          <h1 className="text-[48px] text-primary font-bold">
            {title1} <span className="text-secondary">{title2}</span>
          </h1>
        )}
        <div
          className={`flex items-center justify-between  ${
            imgLeft ? "flex-row-reverse" : "flex-grow"
          } ${feature ? "w-[1500px] mx-auto" : ""}`}
        >
          <div className={`relative w-[49%]`}>
            <Image
              className=""
              src={proImg}
              width={mobile ? 584 : 824}
              height={640}
            />
            {mobile && (
              <Image
                className="absolute left-[47%] top-[20%]"
                src={proMobile}
                width={262}
                height={457}
              />
            )}
          </div>
          <div className="w-[49%]">
            {featureTitle === "" && (
              <h1 className="text-[48px] text-primary font-bold">
                {title1} <span className="text-secondary">{title2}</span>
              </h1>
            )}
            <ul>
              {feature && (
                <h1 className="text-[48px] text-primary font-bold">
                  {featureTitle}
                </h1>
              )}
              {feature ? (
                <p className="text-third mt-[24px] text-[24px]">
                  Project management is the systematic planning, execution, and
                  monitoring of tasks to accomplish specific objectives within
                  constraints. It involves coordinating resources, timelines,
                  and teams for successful project completion.
                </p>
              ) : (
                text.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-third text-[24px] gap-[18px] mt-[32px]"
                  >
                    <Image src={arrowRigth} width={48} height={38} /> {item}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </BigWidthNormalSectionWrapper>
    </div>
  );
};

export default TempDetails;
