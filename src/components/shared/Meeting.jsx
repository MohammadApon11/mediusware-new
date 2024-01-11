import Image from "next/image";
import React from "react";
import meeting from "../../assets/blog-page/meeting.png";
import CommonArrowBtn from "./button's/CommonArrowBtn";

const Meeting = () => {
  return (
    <div className="bg-[#E6EFF7] p-[24px] mt-[60px]">
      <Image src={meeting} width={385} height={192} />
      <h3 className="mt-[24px] text-transparent bg-clip-text bg-gradient-to-r from-[#0072BC]  to-[#009FA9] text-[30px] font-bold">
        Your trusted software development partner
      </h3>
      <p className="text-[#667085] text-[18px] mt-[15px]">
        Empower your vision with us – your reliable software development
        partner. We turn ideas into excellence, delivering precision and
        innovation. Let's shape success together.
      </p>
      <CommonArrowBtn>Get Free Consultaion</CommonArrowBtn>
    </div>
  );
};

export default Meeting;
