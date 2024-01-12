import React from "react";
// import video from "../../assets/video/video.mp4";
import SectionsWrapper from "@/components/shared/wrapper's/SectionsWrapper";
import PrimaryBtn from "@/components/shared/button's/PrimaryBtn";

const HomeHero = () => {
  return (
    <SectionsWrapper>
      <div className="flex items-center justify-between py-[40px]">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-[60px] font-semibold">
              Build workflows you can{" "}
              <span className="text-[#00A88E ]">trust.</span>{" "}
            </h1>
            <h1 className="text-[30px]">We shape the art of technology</h1>
          </div>
          <div className="flex items-center gap-5 mt-[24px]">
            <PrimaryBtn bg={true}>Know More</PrimaryBtn>{" "}
            <PrimaryBtn>Contact Us</PrimaryBtn>
          </div>
        </div>
        <video
          src={require("../../assets/video/video.mp4")}
          autoPlay
          muted
          loop
          className="h-[500px] rounded-[16px]"
        />
      </div>
    </SectionsWrapper>
  );
};

export default HomeHero;
