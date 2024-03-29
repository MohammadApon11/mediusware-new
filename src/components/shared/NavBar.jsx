"use client";
import Image from "next/image";
import { FaPhoneAlt, FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/blog-page/logo.png";
import { NavData } from "@/data/NavData";
import CommonBtn from "./button's/CommonBtn";
import Link from "next/link";
import NavLink from "./LargerNav";
import MobileNav from "./MobileNav";
import Magnatic from "./wrapper's/motion/Magnatic";

const NavBar = () => {
  return (
    <div className={`fixed w-[100%] top-0 z-50`}>
      <div className="nav-bg 2xl:h-[44px] xl:h-[38px] lg:h-[35px] md:h-[55px] sm:h-[45px] mobile:h-[40px] xxs:h-[45px]">
        <div className="mx-auto flex  items-center justify-between bigMon:w-[1696px] 2xl:w-[1400px] xl:w-[1200px] lg:w-[950px] md:w-[700px] xxs:max-md:w-[100%] mobile:max-md:px-5 xxs:max-md:px-2 2xl:pt-[12px] lg:pt-[8px] md:pt-4 mobile:max-md:pt-[13px] xxs:pt-[9px]  xxs:max-mobile:flex-col xxs:max-sm:gap-[4px]">
          <div className="flex items-center xl:gap-[12px] lg:gap-[8px] md:gap-2 mobile:max-sm:gap-2 xxs:gap-3 text-white 2xl:text-[14px] lg:text-[13px] md:text-[14px] sm:text-[13px] mobile:text-[10px] xxs:text-[9px]">
            <span className="flex items-center gap-[3px]">
              <FaPhoneAlt /> +8801750 020408
            </span>
            <span>|</span>
            <span className="flex items-center gap-[3px]">
              <MdEmail /> contact@mediusware.com
            </span>
          </div>
          <div className="flex items-center lg:gap-[8px] xxs:max-lg:gap-[10px]  xxs:max-mobile:text-[13px] text-white">
            <Magnatic>
              <Link href={"https://www.facebook.com/mediusware"}>
                <FaFacebook />
              </Link>
            </Magnatic>
            <Magnatic>
              <Link href={"https://twitter.com/mediusware"}>
                <AiFillTwitterCircle />
              </Link>
            </Magnatic>
            <Magnatic>
              <Link href={"https://www.linkedin.com/company/mediusware-ltd/"}>
                <FaLinkedin />
              </Link>
            </Magnatic>
          </div>
        </div>
      </div>
      <div className="bg-white md:max-lg:relative">
        <div className="bigMon:w-[1696px] 2xl:w-[1400px] xl:w-[1200px] lg:w-[950px] md:w-[700px] xxs:max-md:w-[100%] mobile:max-md:px-5 xxs:max-md:px-4 bigMon:h-[96px] 2xl:h-[85px] xl:h-[84px] lg:h-[75px] md:h-[80px] sm:max-md:h-[80px] xxs:h-[70px] mx-auto">
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <Image
                className="2xl:w-[167px] xl:w-[150px] lg:w-[130px] md:w-[150px] sm:w-[140px] mobile:w-[135px] xxs:w-[120px]"
                priority
                alt="Logo"
                src={logo}
                width={167.5}
                height={60}
              />
            </Link>
            {/* larger device nav start from here */}
            <div className="flex items-center bigMon:gap-[51px] 2xl:gap-[35px] xl:gap-[25px] lg:gap-[20px] xxs:max-lg:hidden">
              <ul className="flex items-center text-primary font-semibold">
                {NavData?.map((item, index) => (
                  <NavLink key={index} item={item} index={index} />
                ))}
              </ul>
              <CommonBtn title={"Book A Call"} />
            </div>
            {/* larger device nav end here */}
            {/* medium device nav start from here */}
            <MobileNav />
            {/* medium device nav end here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
