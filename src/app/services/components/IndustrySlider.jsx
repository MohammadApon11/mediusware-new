"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SideTitle from "./shared/SideTitle";
import { IndustryData } from "@/data/IndustryData";
import Image from "next/image";
import SectionWrapper from "@/components/shared/wrapper's/SectionWrapper";

const IndustrySlider = () => {
  var settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white py-[40px]">
      <SectionWrapper>
        <SideTitle title1={"We are Trusted by"} title2={"Industry Leaders"} />
        <div className="mt-[50px]">
          <Slider {...settings}>
            {IndustryData?.map((industry, index) => (
              <div key={index}>
                <Image
                  className="w-[100px]"
                  src={industry}
                  width={80}
                  height={42}
                />
              </div>
            ))}
          </Slider>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default IndustrySlider;
