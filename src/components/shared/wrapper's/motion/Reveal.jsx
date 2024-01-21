"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({
  children,
  width = "fit-content" || "100%",
  bg = "bg-[#0060AF]",
  title = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        mainControls.start("visible");
        slideControls.start("visible");
      }, 400);
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ width }} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      {title && (
        <motion.div
          variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className={`absolute top-[10px] bottom-[0px] left-0 right-0 z-[10] ${
            bg && bg
          }`}
        />
      )}
    </div>
  );
};

export default Reveal;
