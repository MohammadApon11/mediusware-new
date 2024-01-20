"use client";
import { useScroll, motion, useSpring } from "framer-motion";
import React from "react";
import "../../../../styles/common.css";

const ScrollWrapper = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div className="z-50 progress-bar" style={{ scaleX }}></motion.div>
  );
};

export default ScrollWrapper;
