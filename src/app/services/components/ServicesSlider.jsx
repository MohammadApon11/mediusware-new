"use client";
import { ServicesData } from "@/data/HomeData";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SideTitle from "./shared/SideTitle";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import ServicesSectionWrapper from "./gap's/ServicesSectionWrapper";

const ServicesSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
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
    <ServicesSectionWrapper>
      <SideTitle title1={"Discover the more"} title2={"services"} />
      <Slider {...settings} className="mt-[50px]">
        {ServicesData?.map((data, index) => (
          <div
            className={`border border-[#D0D5DD] p-[18px] flex items-center gap-[18px] bg-white rounded-lg`}
            key={index}
          >
            <Image
              className="mx-auto"
              src={data.image}
              width={120}
              height={120}
            />
            <div className="text-center mt-[16px]">
              <h1 className="text-[18px] font-semibold">{data.title}</h1>
              <p className="text-[15px] mt-[18px]">{data.description}</p>
              <Link
                href={"/about"}
                className="text-primary text-[24px] flex justify-center mt-[10px]"
              >
                <GoArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </ServicesSectionWrapper>
  );
};

export default ServicesSlider;
