import Footer from "@/components/shared/Footer";
import PaddingTop from "@/components/shared/gap's/PaddingTop";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../../assets/all/login.svg";

const ForgotPassword = () => {
  return (
    <>
      <PaddingTop />
      <SectionsGap />
      <div className="bg-white w-[800px] shadow-xl mx-auto p-[40px] text-primary ">
        <Image className="mx-auto" src={img} width={300} height={300} />
        <h4 className="text-secondary text-center text-[35px] font-bold mt-[32px]">
          Hey, Good to see you again!
        </h4>
        <p className="text-center font-semibold ">
          Log in to get going with our recruitment process!
        </p>
        <div className="border-b w-[100%] mt-[25px]"></div>
        <form className="mt-[30px]">
          <div>
            <span className="">Email Address*</span>
            <input
              className="mt-[15px] w-[100%] border font-normal rounded-[6px] outline-none px-[12px] py-[12px]"
              type="text"
              placeholder="email@gmail.com"
            />
          </div>
          <button className="px-[24px] py-[12px] text-[16px] rounded-[8px] bg-[#0060AF] text-white text-center mt-[40px] w-[100%]">
            Forgot password
          </button>
          <Link href={"login"} className="font-semibold underline text-secondary">
            <p className="text-center mt-[20px]">Login</p>
          </Link>
        </form>
      </div>
      <SectionsGap />
      <Footer />
    </>
  );
};

export default ForgotPassword;
