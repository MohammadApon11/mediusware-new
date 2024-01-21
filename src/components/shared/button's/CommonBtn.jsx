import React from "react";
import { TbPhoneCall } from "react-icons/tb";

const CommonBtn = ({title}) => {
  return (
    <button className={`btn-bg 2xl:py-[12px] 2xl:px-[24px] xl:py-[9px] xl:px-[20px] lg:py-[8px] lg:px-[18px] 2xl:rounded-[12px] xl:rounded-lg lg:rounded-md flex items-center gap-[8px] text-white font-semibold text-[12px] z-[2000]`}>
      <TbPhoneCall className="xl:text-[21px] lg:text-[17px]" /> {title}
    </button>
  );
};

export default CommonBtn;
