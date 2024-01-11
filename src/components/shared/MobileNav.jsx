import { FaXmark } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { NavData } from "@/data/NavData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navRef = useRef(null);
  const activeRoute = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navToggle]);
  return (
    <div className="lg:hidden xxxs:max-lg:block md:py-6 sm:py-5 mobile:py-[24px] xxs:py-5">
      {navToggle ? (
        <FaXmark
          onClick={() => setNavToggle(!navToggle)}
          className="sm:text-[27px] xxs:text-[24px] text-[#002B4F]"
        />
      ) : (
        <FaBars
          onClick={() => setNavToggle(!navToggle)}
          className="sm:text-[27px] xxs:text-[24px] text-[#002B4F]"
        />
      )}
      <div
        ref={navRef}
        className={`absolute ${
          navToggle ? "xxs:max-lg:right-0" : "xxs:max-lg:right-[-120%]"
        } md:top-[80px] xxs:max-md:top-[110px] md:w-[350px] sm:w-[300px] mobile:w-[300px] xxs:max-mobile:w-[80vw] sm:top-[120px] bg-white px-[18px] h-[100vh] xxs:max-mobile:h-[100vh] transition-all duration-100`}
      >
        <ul className="flex flex-col">
          {NavData.map((path, index) => (
            <Link
              href={
                path === "HOME"
                  ? "/"
                  : path === "WHY MEDIUSWARE"
                  ? "why-mediusware"
                  : path === "OUR TEAM"
                  ? "our-team"
                  : path.toLowerCase()
              }
              className={`md:py-[15px] sm:py-[12px] mobile:py-[12px] xxs:py-[14px] text-[#002B4F] font-semibold ${
                path === "SERVICES" && "flex items-center justify-between group"
              } ${
                activeRoute === `/${path.toLowerCase()}` && "text-secondary"
              }`}
              key={index}
            >
              {path}
              <span className="group-hover:rotate-180 transition-all duration-200 lg:text-[14px]">
                {path === "SERVICES" && <FaAngleDown />}
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
