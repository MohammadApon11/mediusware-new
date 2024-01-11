import React from "react";
import subsribeIcon from "../../assets/blog-page/subscribe.png";
import trendingArrow from "../../assets/blog-page/arrow.png";
import meeting from "../../assets/blog-page/meeting.png";
import Image from "next/image";
import CommonArrowBtn from "./button's/CommonArrowBtn";

const SubscribeBox = () => {
  return (
    <div className="bg-white p-[24px] shadow-md rounded-[16px]">
      <Image src={subsribeIcon} width={56} height={56} />
      <h3 className="text-[#002B4F] text-[30px] font-semibold mt-[24px]">
        Get the best of our content straight to your inbox!
      </h3>
      <input className="w-[100%] border border-[#D0D5DD] px-[16px] py-[12px] outline-none rounded-[12px] mt-[48px]" type="text" placeholder="Enter your email address*" />
      <CommonArrowBtn>Subscribe</CommonArrowBtn>
      <p className="text-[#667085] text-center mt-[24px]">Don’t worry, we don’t spam!</p>
    </div>
  );
};

export default SubscribeBox;
