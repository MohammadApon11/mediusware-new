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
import SectionWrapper from "@/components/shared/wrapper's/SectionWrapper";
import cardShape1 from "../../../assets/all/cardShape1.png";
import cardShape2 from "../../../assets/all/cardShape2.png";

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
    <SectionWrapper>
      <SideTitle title1={"Discover the more"} title2={"services"} />
      <Slider {...settings} className="mt-[50px]">
        {ServicesData?.map((data, index) => (
          <Link
            href={data.path}
            className={`border border-[#D0D5DD] p-[18px] flex items-center gap-[18px] bg-white rounded-lg relative group overflow-hidden`}
            key={index}
          >
            <Image
              className="absolute -right-[10%] -top-[10%] opacity-0 group-hover:right-0 group-hover:top-0 group-hover:opacity-[100%] transition-all duration-300"
              src={cardShape1}
              width={80}
              height={100}
            />
            <Image
              className="absolute -left-[10%] -bottom-[10%] opacity-0 group-hover:left-0 group-hover:bottom-0 group-hover:opacity-[100%] transition-all duration-300"
              src={cardShape2}
              width={80}
              height={100}
            />
            <Image
              className="mx-auto"
              src={data.image}
              width={120}
              height={120}
            />
            <div className="text-center mt-[20px]">
              <h1 className="text-[18px] font-semibold">{data.title}</h1>
              <p className="text-[14px] mt-[20px]">{data.description}</p>
              <span className="text-primary text-[24px] mt-[20px] flex justify-center">
                <GoArrowRight className="-rotate-45 group-hover:rotate-0 transition-all duration-300" />
              </span>
            </div>
          </Link>
        ))}
      </Slider>
    </SectionWrapper>
  );
};

export default ServicesSlider;
