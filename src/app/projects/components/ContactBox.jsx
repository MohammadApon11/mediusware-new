import SectionWrapper from "@/components/shared/wrapper's/SectionWrapper";
import Link from "next/link";
import React from "react";
import { IoCall } from "react-icons/io5";

const ContactBox = () => {
  return (
    <SectionWrapper>
      <div className="bg-gradient-to-b from-blue-500 via-blue-700 to-blue-900 p-[30px] flex items-center justify-between text-white rounded-[8px]">
        <div>
          <h4 className="text-[25px] font-semibold">
            Have Any Project? Contact Us Today!
          </h4>
          <span className="flex items-center gap-[10px] mt-[5px]">
            {" "}
            <IoCall /> (978) 431-0122 / +8801601712931
          </span>
        </div>
        <Link
        href={"/contact-us"}
          className={`border border-white px-[24px] py-[12px] text-[16px] rounded-[8px] text-white hover:text-white transition-all duration-200 text-center `}
        >
         Contact Us
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default ContactBox;
