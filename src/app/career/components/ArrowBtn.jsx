import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ArrowBtn = ({path, children }) => {
  return (
    <Link href={path} className="text-white btn-bg px-[24px] py-[12px] inline-flex gap-[8px] items-center rounded-[10px]">
      {children}
      <FaArrowRight />
    </Link>
  );
};

export default ArrowBtn;
