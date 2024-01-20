import { FilterBtnData } from "@/data/FilterBtnData";
import React, { useState } from "react";

const FilterBtn = ({ handleFilteredName }) => {
  const [activeBtn, setActiveBtn] = useState("All Blogs");
  const handleClick = (name) => {
    setActiveBtn(name);
    handleFilteredName(name);
  };
  return (
    <div
      className={`xxs:max-lg:w-full flex items-center xxs:flex-wrap 2xl:gap-[24px] xl:gap-[20px] lg:gap-[18px] xxs:max-sm:gap-[15px] 2xl:text-[18px] sm:max-lg:justify-between xl:text-[16px] lg:text-[15px] mobile:text-[16px] 2xl:pb-4 xl:pb-[10px] lg:pb-[9px] xxs:pb-[8px] border-b border-[#EAECF0]`}
    >
      {FilterBtnData?.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(item?.name)}
          className={`relative hover:text-[#00A88E] hover:after:content-[''] hover:after:bg-[#00A88E] hover:after:h-[2px] after:w-[0%] hover:after:left-0 hover:after:-bottom-[5px] hover:after:rounded-xl hover:after:absolute hover:after:w-[100%] hover:after:duration-300 ${
            activeBtn === item?.name && "text-[#00A88E]"
          } ${activeBtn !== item?.name && "text-[#475467]"}`}
        >
          <span className="font-semibold">{item?.name}</span>{" "}
          <span className="xl:text-[14px] lg:text-[12px] sm:max-lg:text-[11px] 2xl:ml-3 xl:ml-[10px] lg:ml-[8px]">
            {item.length}
          </span>
        </button>
      ))}
    </div>
  );
};

export default FilterBtn;
