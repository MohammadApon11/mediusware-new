import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const CommonArrowBtn = ({ children }) => {
  return (
    <button className="btn rounded-[12px] border border-[#0060AF] w-[100%] py-[14px] transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-[#0060AF] hover:bg-[#0060AF] hover:text-white group font-semibold text-[#0060AF] mt-[24px]  z-[2000]">
      <span className="group-hover:-translate-y-[120%] hover:text-white group-hover:opacity-0 transition-all duration-500">
        {children}
      </span>
      <FaArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
    </button>
  );
};

export default CommonArrowBtn;
