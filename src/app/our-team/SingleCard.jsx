"use client";
import { InfoContext } from "@/providers/context";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import memberVector from "../../assets/team/memberVector.png";
const SingleCard = ({ member }) => {
  const { setMember } = useContext(InfoContext);
  const { image, name, designation } = member;
  return (
    <div className="group w-[400px] h-[420px] overflow-hidden rounded-[12px]">
      <Link
        onClick={() => setMember(member)}
        href={`our-team/${name.split(" ").join("-")}`}
        className="relative"
      >
        <Image
          className="w-[400px] h-[420px] rounded-[8px] group-hover:scale-110 transition-all duration-300"
          src={image}
          width={400}
          height={450}
        />
        <Image
          className="absolute bottom-0 left-0 "
          src={memberVector}
          width={280}
          height={250}
        />
        <div className="text-white font-semibold absolute bottom-[24px] left-[24px]  w-[200px]">
          <h1 className="text-[24px]">{name}</h1>
          <p className="mt-[8px] text-[18px]">{designation}</p>
        </div>
      </Link>
    </div>
  );
};

export default SingleCard;
