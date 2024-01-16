import SectionsWrapper from "@/components/shared/wrapper's/SectionsWrapper";
import React from "react";
import LottieAnimation from "./LottieAnimation";
import { FaRegCheckCircle } from "react-icons/fa";

const Features = ({ data }) => {
  const {
    anime,
    features
  } = data;
  return (
    <div className="w-[1300px] mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[40px] text-primary font-semibold">
            Key <span className="text-secondary">Features</span>
          </h1>
          <ul className="flex flex-col gap-[16px] text-primary text-[18px] mt-[24px]">
            {features?.map((feature, index) => (
              <li className="flex items-center gap-[10px]" key={index}>
                <FaRegCheckCircle className="text-[20px] text-secondary" />{" "}
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/6">
          <LottieAnimation anime={anime} />
        </div>
      </div>
    </div>
  );
};

export default Features;
