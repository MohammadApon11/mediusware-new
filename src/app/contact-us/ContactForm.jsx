import React from "react";
import SectionWrapper from "@/components/shared/wrapper's/SectionWrapper";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between text-primary">
        <div>
          <div className="flex flex-col gap-[22px]">
            <h3 className="text-[26px] font-semibold">Bangladesh Office</h3>
            <span className="flex items-center gap-[7px]">
              <IoLocationSharp className="text-secondary text-[20px]" /> 24/1,
              Taj Mahal Road, Shiya Masjid mor, Floor - 7th & 8th, Ring Road,
              1207
            </span>
            <span className="flex items-center gap-[7px]">
              <MdEmail className="text-secondary text-[20px]" />{" "}
              contact@mediusware.com
            </span>
            <span className="flex items-center gap-[7px]">
              <MdEmail className="text-secondary text-[20px]" />{" "}
              sales@mediusware.com
            </span>
            <span className="flex items-center gap-[7px]">
              <IoCall className="text-secondary text-[20px]" /> +880 1601 712931
            </span>
          </div>
          <div className="flex flex-col gap-[22px] mt-[50px]">
            <h3 className="text-[26px] font-semibold">USA Office</h3>
            <span className="flex items-center gap-[7px]">
              <IoLocationSharp className="text-secondary text-[20px]" /> Mt.
              Pleasant, SC 29466
            </span>
            <span className="flex items-center gap-[7px]">
              <MdEmail className="text-secondary text-[20px]" />{" "}
              cdan@mediusware.io
            </span>
            <span className="flex items-center gap-[7px]">
              <MdEmail className="text-secondary text-[20px]" />{" "}
              kristina@mediusware.io
            </span>
            <span className="flex items-center gap-[7px]">
              <IoCall className="text-secondary text-[20px]" /> (843)212-6898
            </span>
          </div>
        </div>
        <form className="bg-white rounded-md shadow-xl w-[660px] px-[20px] py-[30px]">
          <h5 className="text-secondary font-semibold">Send Us a Message</h5>
          <div className="mt-[20px]">
            <span>Name*</span>
            <input
              className="mt-[10px] border rounded-md px-[12px] py-[8px] outline-none w-[100%]"
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mt-[20px]">
            <span>Email*</span>
            <input
              className="mt-[10px] border rounded-md px-[12px] py-[8px] outline-none w-[100%]"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mt-[20px] mb-[40px]">
            <span>Name*</span>
            <textarea
              className="mt-[10px] border rounded-md px-[12px] py-[8px] outline-none w-[100%] h-[150px]"
              name=""
              id=""
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="px-[24px] py-[12px] text-[16px] rounded-[8px] bg-[#0060AF] text-white transition-all duration-200 text-center w-[100%]">
            SUBMIT
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default ContactForm;
