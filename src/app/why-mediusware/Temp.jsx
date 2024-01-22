import React from "react";
import Title from "./Title";
import Image from "next/image";
import Reveal from "@/components/shared/wrapper's/motion/Reveal";

const Temp = ({ title1, title2, description, img }) => {
  return (
    <div
      className={`flex items-center gap-[50px] text-primary ${
        title1 === "Why"
          ? "flex-row-reverse"
          : title1 === "Our"
          ? "flex-row-reverse"
          : ""
      }`}
    >
      <div>
        <Reveal title={true} noTimer={true}>
          {" "}
          <Title title1={title1} title2={title2} />
        </Reveal>
        <p className={`mt-[40px] ${title1 === "Our" && "mb-[40px]"}`}>
          {description}
        </p>
        {title1 === "Our" && (
          <>
            <Reveal title={true} noTimer={true}>
              <Title title1={title1} title2={"Vission"} />
            </Reveal>
            <p>
              Deliver one-of-a-kind digital solutions to facilitate global
              businesses, powered by innovation and guided by integrity.
            </p>
          </>
        )}
      </div>
      <Image className="rounded-[12px]" src={img} width={600} height={400} />
    </div>
  );
};

export default Temp;
