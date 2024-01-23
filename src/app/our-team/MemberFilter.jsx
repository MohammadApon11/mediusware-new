"use client";
import BigWidthNormalSectionWrapper from "@/components/shared/wrapper's/BigWidthNormalSectionWrapper";
import { MemberFilterText } from "@/data/TeamData";
import React, { useState } from "react";

const MemberFilter = () => {
  const [btnText, setBtnText] = useState("All Team Members");
  return (
    <BigWidthNormalSectionWrapper>
      <div className="flex items-center gap-[24px] justify-center flex-wrap">
        {MemberFilterText.map((item, index) => (
          <button
            onClick={() => setBtnText(item.title)}
            className={`${
              btnText === item?.title
                ? "btn-bg"
                : "px-[24px] py-[12px] text-primary bg-white rounded-[16px] border"
            }`}
            key={index}
          >
            {item?.title}
          </button>
        ))}
      </div>
    </BigWidthNormalSectionWrapper>
  );
};

export default MemberFilter;
