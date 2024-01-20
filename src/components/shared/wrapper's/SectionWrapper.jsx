"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

const SectionWrapper = ({ children }) => {
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
      className="w-[1400px] mx-auto"
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
