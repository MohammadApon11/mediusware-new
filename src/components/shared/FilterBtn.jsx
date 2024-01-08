import { FilterBtnData } from "@/data/FilterBtnData";
import React, { useState } from "react";

const FilterBtn = () => {
  const [activeBtn, setActiveBtn] = useState("All Blogs");
  return (
    <div className={`flex items-center lg:gap-[24px] lg:text-[18px] lg:pb-4 border-b border-[#EAECF0]`}>
      {FilterBtnData.map((item, index) => (
        <button
          onClick={() => setActiveBtn(item?.name)}
          className={`relative font-semibold hover:text-[#00A88E] hover:border-b-[2px] border-[#00A88E] ${
            activeBtn === item?.name &&
            "text-[#00A88E] hover:border-b border-[#00A88E]"
          } ${activeBtn !== item?.name && "text-[#475467]"}`}
        >
          <span className="">{item?.name}</span>{" "}
          <span className="lg:text-[14px]">{item.length}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterBtn;
