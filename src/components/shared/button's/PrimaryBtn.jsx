import Link from "next/link";
import React from "react";

const PrimaryBtn = ({ bg, path, children }) => {
  return (
    <Link
      href={path}
      className={`border border-[#0060AF] px-[24px] py-[12px] text-[16px] rounded-[8px] text-[#0060AF] hover:bg-[#0060AF] hover:text-white transition-all duration-200 text-center ${
        bg && "bg-[#0060AF] text-white "
      }`}
    >
      {children}
    </Link>
  );
};

export default PrimaryBtn;
