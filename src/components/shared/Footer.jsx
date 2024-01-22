"use client";
import React from "react";
import footerbg from "../../assets/blog-page/footer-bg.png";
import footerVector1 from "../../assets/blog-page/footer-vector-1.png";
import footerVector2 from "../../assets/blog-page/footer-vector-2.png";
import footerVector3 from "../../assets/blog-page/footer-vector-3.png";
import footerVector4 from "../../assets/blog-page/footer-vector-4.png";
import footerVector5 from "../../assets/blog-page/footer-vector-5.png";
import footerLogo from "../../assets/blog-page/footer-logo.png";
import facebook from "../../assets/blog-page/facebook.png";
import linkedin from "../../assets/blog-page/linkedin.png";
import twitter from "../../assets/blog-page/twitter.png";
import youtube from "../../assets/blog-page/youtube.png";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailSharp } from "react-icons/io5";
import { MdWatchLater } from "react-icons/md";
import Image from "next/image";
import "../../styles/footer.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Magnatic from "./wrapper's/motion/Magnatic";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const pathName = usePathname();

  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${footerbg.src})`,
      }}
    >
      <Image
        className="absolute bottom-0 left-0"
        src={footerVector1}
        width={880}
        height={450}
      />
      <Image
        className="absolute -top-[16px] -rotate-1 right-[90px]"
        src={footerVector2}
        width={733}
        height={61}
      />
      <div className="absolute top-[100px] right-[100px]">
        <Image className="" src={footerVector3} width={70} height={70} />
        <Image
          className="-mt-[39px]"
          src={footerVector4}
          width={50}
          height={281}
        />
        <Image
          className="-mt-[36px] ml-[3px]"
          src={footerVector5}
          width={70}
          height={70}
        />
      </div>
      <div className="w-[1320px] pt-[136px] pb-[80px]  mx-auto text-white">
        <div className="grid grid-cols-5 gap-[48px] border-b border-[#475467] pb-[24px]">
          <div>
            <Image src={footerLogo} width={173} height={100} />
            <p className="mt-[24px]">We shape the art of technology</p>
            <div className="flex items-center gap-[12px] mt-[24px]">
              <Magnatic>
                <Link
                  className="z-10"
                  href={"https://www.facebook.com/mediusware"}
                >
                  <Image src={facebook} width={32} height={32} />
                </Link>
              </Magnatic>
              <Magnatic>
                {" "}
                <Link
                  className="z-10"
                  href={"https://www.linkedin.com/company/mediusware-ltd/"}
                >
                  <Image src={linkedin} width={32} height={32} />
                </Link>
              </Magnatic>
              <Magnatic>
                <Link className="z-10" href={"https://twitter.com/mediusware"}>
                  <Image src={twitter} width={32} height={32} />
                </Link>
              </Magnatic>
              <Magnatic>
                <Link
                  className="z-10"
                  href={"https://www.youtube.com/@mediuswareltd.4437"}
                >
                  <Image src={youtube} width={32} height={32} />
                </Link>
              </Magnatic>
            </div>
          </div>
          <div className="flex flex-col gap-3 z-10">
            <h4 className="font-semibold">Company</h4>
            <Link
              href={
                pathName.startsWith("/services") ? "/services" : "/services"
              }
              className="hover:underline"
            >
              Services
            </Link>
            <Link href={"why-mediusware"} className="hover:underline">
              About Us
            </Link>
            <Link href={"why-mediusware"} className="hover:underline">
              FAQs
            </Link>
            <Link href="contact-us" className="hover:underline">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-3 z-10">
            <h4 className="font-semibold">Services</h4>
            <Link
              href={
                pathName.startsWith("/services")
                  ? "software-development"
                  : "services/software-development"
              }
              className="hover:underline"
            >
              Software Development
            </Link>
            <Link
              href={
                pathName.startsWith("/services") ? "ui-ux" : "services/ui-ux"
              }
              className="hover:underline"
            >
              UI/UX Design & Dev
            </Link>
            <Link
              href={
                pathName.startsWith("/services")
                  ? "web-development"
                  : "services/web-development"
              }
              className="hover:underline"
            >
              Web Development
            </Link>
            <Link
              href={
                pathName.startsWith("/services")
                  ? "api-integration"
                  : "services/api-integration"
              }
              className="hover:underline"
            >
              API Integration
            </Link>
            <Link
              href={
                pathName.startsWith("/services")
                  ? "mobile-development"
                  : "services/mobile-development"
              }
              className="hover:underline"
            >
              Mobile App Design
            </Link>
            <Link
              href={
                pathName.startsWith("/services")
                  ? "e-commerce"
                  : "services/e-commerce"
              }
              className="hover:underline"
            >
              E commerce Solutions
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold">Bangladesh Address</h4>
            <p className="flex items-center gap-[10px] hover:underline">
              <FaLocationDot className="text-[26px]" /> 18/5 Ring Road,
              Mohammadpur, Dhaka
            </p>
            <p className="flex items-center gap-[10px] hover:underline">
              <FiPhoneCall className="text-[20px]" /> +8801750020408
            </p>
            <p className="flex items-center gap-[10px] hover:underline">
              <IoMailSharp className="text-[26px]" /> career@mediusware.com
            </p>
            <p className="flex items-center gap-[10px] hover:underline">
              <MdWatchLater className="text-[26px]" /> Monday to Friday: 12 PM -
              9 PM
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold">USA Address</h4>
            <p className="flex items-center gap-[10px] hover:underline">
              <FaLocationDot className="text-[26px]" /> 1903 commonwealth st,
              Houston tx 77006
            </p>
            <p className="flex items-center gap-[10px] hover:underline">
              <FiPhoneCall className="text-[20px]" /> +1 (978) 431-0122
            </p>
            <p className="flex items-center gap-[10px] hover:underline">
              <IoMailSharp className="text-[26px]" /> career@mediusware.com
            </p>
            <p className="flex items-center gap-[10px] hover:underline">
              <MdWatchLater className="text-[26px]" /> Monday to Friday: 12 PM -
              9 PM
            </p>
          </div>
        </div>
      </div>
      <p className="text-center pb-[35px] text-white">
        © {currentYear} Mediusware. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
