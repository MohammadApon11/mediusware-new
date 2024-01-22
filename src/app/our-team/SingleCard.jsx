"use client";
import React, { useContext } from "react";
import profileBg from "../../assets/team/profileBg.png";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { InfoContext } from "@/providers/context";

const SingleCard = ({ member }) => {
  
  const { setMember } = useContext(InfoContext);

  return (
    <div className="text-center flex items-center flex-col">
      <Link
        onClick={() => setMember(member)}
        href={`our-team/${member?.name.split(" ").join("-")}`}
        className="bg-cover bg-center w-[264px] h-[274px] flex items-center justify-center group"
        style={{
          backgroundImage: `url(${profileBg.src})`,
        }}
      >
        <Image
          className="w-[210px] h-[210px] rounded-full group-hover:scale-110 transition-all duration-300"
          src={member?.image}
          width={300}
          height={300}
        />
      </Link>
      <div className="mt-[60px] text-primary text-center">
        <Link
          onClick={() => setMember(member)}
          href={`our-team/${member?.name}`}
          className="text-[22px] font-semibold hover:text-[#00A88E]"
        >
          {member?.name}
        </Link>
        <p className="text-[14px]">{member?.designation}</p>
        {member?.name === "Md Shahinur Rahman" && (
          <Link href={"https://www.linkedin.com/in/shahinur-mw/"}>
            <FaLinkedin className="hover:text-[#00A88E] hover:scale-125 transition-all duration-300 mx-auto mt-[20px]" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default SingleCard;
