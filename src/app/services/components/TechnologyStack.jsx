"use client";
import ContentGap from "@/components/shared/gap's/ContentGap";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const TechnologyStack = ({ data }) => {
  const { images } = data;
  const fadeInRightLeft = {
    initial: (index) => ({
      opacity: 0,
      translateX: index % 2 === 0 ? -50 : 50,
      translateY: -50,
    }),
    animate: (index) => ({
      opacity: 1,
      translateX: 0,
      translateY: 0,
      transition: { duration: 0.1, delay: index * 0.01 },
    }),
  };
  return (
    <div className=" bg-white pb-[40px]">
      <ContentGap />
      <div className="w-[1400px] mx-auto flex items-center gap-[40px]">
        <div className="text-primary ">
          <h1 className="text-[40px] font-semibold">
            Technology <span className="text-secondary">Stack</span>
          </h1>
          <p className="text-[18px] mt-[24px]">
            If you are looking for the most proven technologies, we have got you
            covered. We use more than 100+ latest technologies that are timely
            and useful for your business.
          </p>
        </div>
        <div className="grid grid-cols-7 gap-x-[20px] gap-y-[30px]">
          {images?.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeInRightLeft}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              className="flex items-center justify-center px-[20px] py-[12px] rounded-[8px] border border-[#0060AF] hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <Image src={image} width={130} height={60} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
