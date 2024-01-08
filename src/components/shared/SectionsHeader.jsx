import React from "react";

const SectionsHeader = () => {
  return (
    <div>
      <div className="flex items-center gap-[32px]">
        <div className="h-[2px] lg:w-[706px] bg-gradient-to-l from-[#009FA9]"></div>
        <h1 className="lg:text-[56px] text-[#002B4F] font-bold flex gap-3">
          All <span className="text-[#00A88E]">Blogs</span>
        </h1>
        <div className="h-[2px] lg:w-[706px] bg-gradient-to-r from-[#009FA9]"></div>
      </div>
    </div>
  );
};

export default SectionsHeader;
