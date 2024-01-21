"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const routes = {
  "/": "• Home",
  "/services": "• Services",
  "/services/web-development": "• Web Development",
  "/services/mobile-development": "• Mobile App Development",
  "/services/e-commerce": "• E-Commerce Solution",
  "/services/software-development": "• Software Development",
  "/services/ui-ux": "• UI/UX Design & Development",
  "/services/sqa-solution": "• SQA Solution",
  "/services/enterprise-solution": "• Web Development",
  "/services/api-integration": "• API Integration",
  "/services/digital-marketing": "• Digital Marketing",
  "/projects": "• Projects",
  "/projects/24-hours-views": "• 24 Hours Views",
  "/projects/galileo": "• Galileo",
  "/projects/info-stream-web": "• Info Stream Website",
  "/projects/product-advisor": "• Product Advisor",
  "/projects/short-term-rental": "• Short Term Rental",
  "/projects/woo-study": "• Woo Study",
  "/career/business-analyst": "• Business Analyst",
  "/career/lead-generation-expert": "• Lead Generation Expert",
  "/career/software-engineer-intern": "• Software Engineer Intern",
  "/career/senior-wordpress-developer": "• Senior Wordpress Developer",
  "/career/software-engineer": "• Software Engineer",
  "/career/team-lead-python-engineer": "• Team lead Python Engineer",
  "/career/uiux-designer-trainee": "• UI/UX Designer Trainee",
  "/career/front-end-developer": "• Front End Developer",
  "/career/team-lead-mern-developer": "• Team Lead Mern Developer",
  "/blog": "• Blog",
  "/why-mediusware": "• About Us",
  "/career": "• Career",
  "/our-team": "• Our Team",
  "/login": "• Login",
  "/forgot-password": "• Forgot Password",
};

export default function Inner({ children }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const pathName = usePathname();

  useEffect(() => {
    const resize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const text = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      top: -100,
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd:{
        top:"60%"
      }
    },
    exit: {
      opacity: 1,
      top: "40%",
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <div className="curve">
      <motion.p {...anim(text)} className="route">
        {routes[pathName]}
      </motion.p>
      <div
        className="background"
        style={{ opacity: dimensions.width > 0 ? 0 : 1 }}
      ></div>
      {dimensions.width > 0 && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ width, height }) => {
  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300} 
    L0 300
    `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height} 
    L0 300
    `;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const slide = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "-300px",
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.svg className="clip" {...anim(slide)}>
      <motion.path {...anim(curve)}></motion.path>
    </motion.svg>
  );
};
