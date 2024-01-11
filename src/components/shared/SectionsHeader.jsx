import React from "react";

const SectionsHeader = ({ title1, title2 }) => {
  return (
    <div>
      <div className="flex items-center 2xl:gap-[32px] xl:gap-[26px] lg:gap-[23px] md:gap-[18px] xxs:gap-[12px]">
        <div
          className={`h-[2px] bg-gradient-to-l from-[#009FA9] ${
            title1 === "You May Also"
              ? "2xl:w-[570px] xl:w-[500px] lg:w-[400px] xxs:w-[100%]"
              : "2xl:w-[706px] xl:w-[500px] lg:w-[400px] xxs:w-[100%]"
          }`}
        ></div>
        <h1 className="2xl:text-[56px] xl:text-[50px] lg:text-[45px] md:text-[45px] sm:text-[45px] xxs:text-[32px] text-[#002B4F] font-bold flex md:gap-3 sm:gap-2 xxs:gap-1">
          {title1} <span className="text-[#00A88E]">{title2}</span>
        </h1>
        <div
          className={`h-[2px] bg-gradient-to-r from-[#009FA9] ${
            title1 === "You May Also"
              ? "2xl:w-[570px] xl:w-[500px] lg:w-[400px] xxs:w-[100%]"
              : "2xl:w-[706px] xl:w-[500px] lg:w-[400px] xxs:w-[100%]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default SectionsHeader;
