import Image from "next/image";
import React from "react";
import clutch from "../../assets/blog-page/clutch.png";
import upwork from "../../assets/blog-page/upwork.png";
import { IoStarSharp } from "react-icons/io5";
import { LuSend } from "react-icons/lu";

const Message = () => {
  return (
    <div className="w-[1408px] mx-auto p-[64px] rounded-[24px] flex items-center gap-[95px] bg-gradient-to-r from-[#0072BC] to-[#009FA9]">
      <div className="text-white">
        <h1 className="text-[72px] font-bold">
          Do you want to <br /> start a project?
        </h1>
        <p className="mt-[20px] text-[24px]">
          Drop us a line for your project thought or for sharing the news about
          your company. Yes we check this mailbox frequently!
        </p>
        <div className="h-[1px] w-[100%] bg-[#E5E7EB] mt-[40px]"></div>
        <div className="flex items-center mt-[40px] gap-[32px]">
          <div className="bg-white p-[16px] rounded-[8px] text-[#0694A2] text-[16px]">
            <h3 className="font-bold text-[#2E7DBD] text-[30px]">10+</h3>
            <p>Years in</p>
            <p>business</p>
          </div>
          <div className="bg-white p-[16px] -mb-[24px] rounded-[8px] text-[#0694A2] text-[16px]">
            <h3 className="font-bold text-[#2E7DBD] text-[30px]">100+</h3>
            <p>In-</p>
            <p>house</p>
            <p>employees</p>
          </div>
          <div className="bg-white p-[16px] rounded-[8px] text-[#0694A2] text-[16px]">
            <h3 className="font-bold text-[#2E7DBD] text-[30px]">250+</h3>
            <p>succesful</p>
            <p>delivery project</p>
          </div>
        </div>
        <div className="flex items-center gap-[32px] mt-[60px]">
          <div className="">
            <Image src={clutch} width={87} height={25} />
            <span className="flex items-center gap-[2px] text-[#FDE029] mt-[14px]">
              <IoStarSharp /> <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
              <IoStarSharp />
            </span>
          </div>
          <div>
            <p className="text-[24px]">Top Reated Plus</p>
            <div className="flex items-center gap-3 mt-[7px]">
              <Image src={upwork} width={87} height={26} />
              <span className="flex items-center gap-[2px] text-[#FDE029]">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-[16px] p-[24px] text-[#667085]">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0072BC]  to-[#009FA9] text-[32px] font-bold">
          Get 20% OFF <br /> Your first Project!
        </h2>
        <form className="mt-[24px] flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="text-[14px]">
              Full Name*
            </label>
            <input
              className="w-[432px] placeholder:text-[#667085] px-[12px] py-[16px] border border-[#D0D5DD] rounded-[8px] outline-none mt-[6px]"
              type="text"
              id="name"
              placeholder="Enter you full name"
            />
          </div>
          <div>
            <label className="text-[14px]" htmlFor="email">
              Email*
            </label>
            <input
              className="w-[432px] placeholder:text-[#667085] px-[12px] py-[16px] border border-[#D0D5DD] rounded-[8px] outline-none mt-[6px]"
              type="text"
              id="email"
              placeholder="Enter you email"
            />
          </div>
          <div>
            <label className="text-[14px]" htmlFor="message">
              message
            </label>
            <textarea
              className="w-[432px] h-[134px] placeholder:text-[#667085] px-[12px] py-[16px] border border-[#D0D5DD] rounded-[8px] outline-none mt-[6px]"
              name="message"
              placeholder="Leave us a message..."
              id="message"
            ></textarea>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-[16px]">
              You agree to our friendly{" "}
              <span className="underline">privacry policy.</span>
            </span>
          </div>
          <button className="mt-[32px] bg-[#0060AF] rounded-[8px] flex items-center justify-center gap-2 text-white text-[16px] w-[100%] py-[12px]">
            Send message
            <LuSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
