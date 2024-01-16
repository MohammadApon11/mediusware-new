"use client";
import React from "react";
import ServicesSectionWrapper from "../services/components/gap's/ServicesSectionWrapper";
import img1 from "../../assets/about/group1.jpg";
import img2 from "../../assets/about/group2.jpg";
import chart from "../../assets/about/chart.jpg";
import mission from "../../assets/about/mission.jpg";
import trans from "../../assets/about/trans.jpg";
import Temp from "./Temp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./Title";
import slider1 from "../../assets/about/1.jpg";
import slider2 from "../../assets/about/2.jpg";
import slider3 from "../../assets/about/3.jpg";
import slider4 from "../../assets/about/4.jpg";
import slider5 from "../../assets/about/5.jpg";
import slider6 from "../../assets/about/6.jpg";
import slider7 from "../../assets/about/7.jpg";
import slider8 from "../../assets/about/8.jpg";
import slider9 from "../../assets/about/9.jpg";
import slider10 from "../../assets/about/10.jpg";
import slider11 from "../../assets/about/11.jpg";
import Image from "next/image";

const sliderData = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  slider8,
  slider9,
  slider10,
  slider11
];

const AllAbout = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
      <div className="flex flex-col gap-[70px]">
        <Temp
          title1={"Who"}
          title2={"We Are"}
          description={
            "Incepted in 2015, Mediusware Ltd. has been serving as a leading IT Solution provider in Bangladesh. Our aim is to help businesses all around the world by providing the digital solutions according to their need. Serving a number of renowned companies from the USA, UK, and many other countries, we have already created a wide range of satisfied clients!"
          }
          img={img1}
        />
        <Temp
          title1={"Why"}
          title2={"Mediusware"}
          description={
            "Mediusware mounts its vast expertise, superior technical skills, and highest quality support services to provide scalable IT solutions to its clients. Our Milestone of satisfying 1000+ global clients shows our expertise and dedication to provide our clients with highest class digital services and solutions."
          }
          img={img2}
        />
        <Temp
          title1={"Company"}
          title2={"Growth"}
          description={
            "Mediusware mounts its vast expertise, superior technical skills, and highest quality support services to provide scalable IT solutions to its clients. Our Milestone of satisfying 1000+ global clients shows our expertise and dedication to provide our clients with highest class digital services and solutions. scalable IT solutions to its clients."
          }
          img={chart}
        />
        <Temp
          title1={"Our"}
          title2={"Mission"}
          description={
            "Leave a positive footprint by devoting our human resources, technologies and expertise to deliver top-of-the-line digital products, thereby contributing to the success of modern businesses around the globe."
          }
          img={mission}
        />
        <div>
          <Title title1={"Exclusive"} title2={"Gallery"} />
          <Slider {...settings} className="mt-[35px]">
            {sliderData.map((img, index) => (
              <Image className="h-[300px] rounded-[12px]" src={img} key={index} width={300} height={200} />
            ))}
          </Slider>
        </div>
        <Temp
          title1={"Let Us Help You Accelerate"}
          title2={"Your Digital Transformation"}
          description={
            "Leave a positive footprint by devoting our human resources, technologies and expertise to deliver top-of-the-line digital products, thereby contributing to the success of modern businesses around the globe."
          }
          img={trans}
        />
      </div>
    </ServicesSectionWrapper>
  );
};

export default AllAbout;
