import React from "react";
import Image from "next/image";
import publisherProfile from "../../assets/blogs-details/publisher-profile.png";
import message from "../../assets/blogs-details/message.png";
import keyboard from "../../assets/blogs-details/keyboard.png";
import fb from "../../assets/blogs-details/facebook.png";
import instagram from "../../assets/blogs-details/instagram.png";
import twitter from "../../assets/blogs-details/twitter.png";
import linkedin from "../../assets/blogs-details/linkedin.png";
import link from "../../assets/blogs-details/link.png";
import { MdOutlineWatchLater } from "react-icons/md";

const DetailsBlogsHero = () => {
  return (
    <div className="flex items-center gap-[32px]">
      <div>
        <h1 className="text-[#0A0A0A] text-[72px] font-semibold">
          Gian Wong’s Illustrations <br /> and Type-Focused <br /> Designs Pack
          Big Punch
        </h1>
        <div className="flex items-center justify-between mt-[56px] w-[976px]">
          <div className="flex items-center gap-[40px]">
            <div className="flex items-center gap-[16px]">
              <Image
                className="rounded-full"
                src={publisherProfile}
                width={56}
                height={56}
              />
              <div>
                <h5 className="font-semibold">Al habib</h5>
                <p className="text-[#475467] text-[15px]">
                  Published 31 Dec 2024
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[8px] border border-[#667085] text-[#667085] rounded-[8px] px-[12px] py-[7px] text-[12px]">
              <MdOutlineWatchLater />
              <span>Max 8 min read</span>
            </div>
            <div className="flex items-center gap-[12px] text-[#0060AF] text-[12px]">
              <Image src={message} width={24} height={25} />
              <span className="text-[14px]">4 Comments</span>
            </div>
          </div>
          <div className="flex items-center gap-[24px]">
            <Image src={fb} width={24} height={24} />
            <Image src={twitter} width={24} height={24} />
            <Image src={instagram} width={24} height={24} />
            <Image src={linkedin} width={24} height={24} />
            <Image src={link} width={24} height={24} />
          </div>
        </div>
      </div>
      <div>
        <Image src={keyboard} width={688} height={418} />
      </div>
    </div>
  );
};

export default DetailsBlogsHero;
