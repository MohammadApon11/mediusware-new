import React from "react";
import PrimaryBtn from "@/components/shared/button's/PrimaryBtn";
import homeHero from "../../assets/all/homeHero.jpg";
import "../../styles/common.css";

const HomeHero = () => {
  return (
    <div
      className="bg-cover overflow-hidden bg-center w-full h-[70vh] relative flex items-center justify-center"
      style={{ backgroundImage: `url(${homeHero.src})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-overlay z-0"></div>
      <div className="w-[1400px] flex items-center justify-between py-[40px]">
        <div className="flex flex-col justify-between z-10">
          <div className="text-white">
            <h1 className="text-[24px]">We shape the art of technology</h1>
            <div className="mt-[30px] flex items-center gap-[30px]">
              <div className="bg-white w-[10px] h-[320px]"></div>
              <h1 className="text-[80px] font-bold w-[900px]">
                LEADING SOFTWARE DEVELOPMENT COMPANY & AGENCY
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-[24px]">
            <PrimaryBtn bg={true} path={"why-mediusware"}>
              Know More
            </PrimaryBtn>{" "}
            <PrimaryBtn path={"contact-us"}>Contact Us</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
