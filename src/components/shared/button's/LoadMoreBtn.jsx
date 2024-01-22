import React from "react";
import { BsArrowRight } from "react-icons/bs";

const LoadMoreBtn = ({ text = "Load More" }) => {
  return (
    <div className="flex items-center xl:text-[24px] md:text-[20px] sm:text-[18px] justify-center font-semibold gap-4  z-[2000]">
      <button className="xl:w-[96px] md:w-[80px] sm:w-[70px] xxs:w-[100%] xl:h-[64px] md:h-[50px] xxs:h-[40px] rounded-[8px] xl:text-[30px] md:text-[24px] text-white bg-[#0060AF] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 sm:block xxs:hidden">
          <BsArrowRight />
        </span>
        <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute sm:block xxs:hidden" />
        <span className="sm:hidden xxs:block">{text}</span>
      </button>
      <span className="text-[#0060AF] sm:block xxs:hidden">{text}</span>
    </div>
  );
};

export default LoadMoreBtn;
