"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const BigWidthSectionWrapper = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="bigMon:w-[1696px] 2xl:w-[1400px] xl:w-[1200px] lg:w-[950px] md:w-[700px] xxs:max-md:w-[100%] mobile:max-md:px-5 xxs:max-md:px-2 mx-auto"
    >
      {children}
    </motion.div>
  );
};

export default BigWidthSectionWrapper;
