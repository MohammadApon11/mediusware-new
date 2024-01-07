"use client";
import Link from "next/link";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { SubNavData } from "@/data/NavData";

const NavLink = ({ path, index }) => {
  const activeRoute = usePathname();
  console.log(activeRoute);
  return (
    <div key={index} className={`transition-all duration-300 relative inline-block  ${path === "SERVICES" && "group"}`}>
      <Link
        href={path === "HOME" ? "/" : path === "WHY MEDIUSWARE" ? "why-mediusware" : path === "OUR TEAM" ? "our-team" : path.toLowerCase()}
        className={`hover:text-[#00A88E] bigMon:px-[16px] bigMon:py-[35px] 2xl:px-[12px] 2xl:py-[30px] xl:px-[8px] xl:py-[30px] lg:px-[5px] lg:py-[26px] ${
          path === "SERVICES" && "flex items-center xl:gap-1 lg:-gap-[3px] "
        }  ${activeRoute === `/${path.toLowerCase()}` && "text-secondary"}`}
      >
        <span className="bigMon:text-[20px] 2xl:text-[17px] lg:text-[14px] relative after:content-[''] after:bg-[#00A88E] after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute hover:after:w-[100%] after:duration-300">{path}</span>
        <span className="group-hover:rotate-180 transition-all duration-200 lg:text-[14px]">
          {path === "SERVICES" && <FaAngleDown />}
        </span>
      </Link>
      {path === "SERVICES" && (
        <div className="absolute top-[96px] left-[-20%] w-[300px] rounded-[7px]  transition-all duration-200 invisible group-hover:visible transform scale-0 group-hover:scale-100 
         ease-in-out origin-top ">
          <span className="flex flex-col border-[1px] border-[#00A88E]  bg-white rounded-[5px] py-3 pl-[20px]">
            {SubNavData.map((path, index) => (
              <Link
                className={`hover:text-[#00A88E] px-[8px] py-[12px] text-primary`}
                href={path}
                key={index}
              >
                {path}
              </Link>
            ))}
          </span>
        </div>
      )}
    </div>
  );
};

export default NavLink;