import React from "react";
import client from "../../../assets/all/client.png";
import Image from "next/image";
import quote from "../../../assets/all/quotes.png";
import { IoMdStar } from "react-icons/io";
import {
  TransitionWrapper1,
} from "@/components/shared/wrapper's/motion/TransitionWrapper";

const ClientsFeedback = () => {
  const clientFeedback =
    "I've had the pleasure of collaborating with Design Monks for a while now on my new project. They're lightning-quick in addressing any questions or feedback I have, and they consistently go the extra mile to make sure I'm thrilled with the final outcome. I wholeheartedly endorse them";
  const clientName = "Pavel";
  const clientDesignation = "CEO, VidaDynamics";
  return (
    <div className="w-[996px] mx-auto relative">
      <TransitionWrapper1 index={1}>
        <div className="bg-rgb font-semibold text-white text-[32px] w-[220px] py-[24px] px-[24px] rounded-[16px] absolute -left-[16%] top-[8%]">
          <p>Clients</p>
          <p>feedback</p>
        </div>
      </TransitionWrapper1>
      <TransitionWrapper1 index={2}>
        <Image
          className="w-[356px] h-[573px] rounded-[16px]"
          src={client}
          width={356}
          height={573}
        />
      </TransitionWrapper1>
      <TransitionWrapper1 index={2}>
        <Image
          className="absolute right-[17%] top-[10%]"
          src={quote}
          width={162}
          height={118}
        />
      </TransitionWrapper1>
      <TransitionWrapper1 index={2}>
        <div className="p-[32px] text-primary w-[440px] bg-white rounded-[16px] absolute top-[20%] left-[30%]">
          <p className="text-[18px] ">{clientFeedback}</p>
          <h3 className="mt-[40px] text-[32px] font-bold">{clientName}</h3>
          <p className="mt-[12px] text-third text-[24px]">
            {clientDesignation}
          </p>
        </div>
      </TransitionWrapper1>
      <TransitionWrapper1 index={4}>
        <div className="flex items-center gap-[8px] rounded-[16px] bg-white absolute right-[21%] bottom-[0] text-[#FDE029] text-[30px] px-[26px] py-[12px]">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </div>
      </TransitionWrapper1>
    </div>
  );
};

export default ClientsFeedback;
