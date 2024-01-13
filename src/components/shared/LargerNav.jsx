"use client";
import Link from "next/link";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { SubNavData } from "@/data/NavData";

const NavLink = ({ item, index }) => {
  const activeRoute = usePathname();
  return (
    <div
      key={index}
      className={`transition-all duration-300 relative inline-block  ${
        item.path === "/services" && "group"
      }`}
    >
      <Link
        href={item.path}
        className={`hover:text-[#00A88E] group bigMon:px-[16px] bigMon:py-[35px] 2xl:px-[12px] 2xl:py-[30px] xl:px-[8px] xl:py-[30px] lg:px-[5px] lg:py-[26px] ${
          item.path === "/services" &&
          "flex items-center xl:gap-1 lg:-gap-[3px] "
        }  ${activeRoute === `${item.path}` && "text-secondary"}`}
      >
        <span className="bigMon:text-[20px] 2xl:text-[17px] lg:text-[14px] relative group-hover:after:content-[''] group-hover:after:bg-[#00A88E] group-hover:after:h-[3px] after:w-[0%] group-hover:after:left-0 group-hover:after:-bottom-[5px] group-hover:after:rounded-xl group-hover:after:absolute group-hover:after:w-[100%] group-hover:after:duration-300">
          {item.title}
        </span>
        <span className="group-hover:rotate-180 transition-all duration-200 lg:text-[14px]">
          {item.title === "SERVICES" && <FaAngleDown />}
        </span>
      </Link>
      {item.title === "SERVICES" && (
        <div
          className="absolute top-[96px] left-[-20%] w-[300px] rounded-[7px]  transition-all duration-200 invisible group-hover:visible transform scale-0 group-hover:scale-100 
         ease-in-out origin-top "
        >
          <div className="flex flex-col border-[1px] border-[#00A88E]  bg-white rounded-[5px] py-3 pl-[20px]">
            {SubNavData.map((item, index) => (
              <Link
                className={`hover:text-[#00A88E] px-[8px] py-[12px] text-primary ${activeRoute === `/services${item.path}` && "text-secondary"}`}
                href={`/services${item.path}`}
                key={index}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavLink;
