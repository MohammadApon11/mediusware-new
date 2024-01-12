import React from "react";

const PrimaryBtn = ({ bg, children }) => {
  return (
    <button
      className={`border border-[#0060AF] px-[24px] py-[12px] text-[16px] rounded-[8px] text-[#0060AF] hover:bg-[#0060AF] hover:text-white transition-all duration-200 ${bg && "bg-[#0060AF] text-white "}`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
