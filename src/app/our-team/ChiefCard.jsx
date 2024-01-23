"use client";
"use client";
import BigWidthNormalSectionWrapper from "@/components/shared/wrapper's/BigWidthNormalSectionWrapper";
import { TeamData } from "@/data/TeamData";
import Image from "next/image";
import chiefVector from "../../assets/team/chiefVector.png";
import Link from "next/link";
import { InfoContext } from "@/providers/context";
import { useContext } from "react";

const ChiefCard = ({}) => {
  const { setMember } = useContext(InfoContext);
  return (
    <BigWidthNormalSectionWrapper>
      <div className="flex items-center gap-[24px]">
        {TeamData.map(
          (item, index) =>
            index < 3 && (
              <Link
                onClick={() => setMember(item)}
                href={`our-team/${item?.name.split(" ").join("-")}`}
                className={`relative group overflow-hidden  rounded-[16px] ${
                  index === 1 && "mt-[15%]"
                }`}
                key={index}
              >
                <Image
                  className={`w-[544px] h-[680px] rounded-[16px] group-hover:scale-110 transition-all duration-300`}
                  src={item.image}
                  width={544}
                  height={680}
                />
                <Image
                  className="bottom-0 left-0 absolute rounded-bl-[16px]"
                  src={chiefVector}
                  width={380}
                  height={250}
                />
                <div className="absolute left-[32px] bottom-[32px] text-white font-semibold">
                  <h1 className="text-[32px] w-[250px]">{item?.name}</h1>
                  <p className="text-[18px] mt-[12px]">{item?.designation}</p>
                </div>
              </Link>
            )
        )}
      </div>
    </BigWidthNormalSectionWrapper>
  );
};

export default ChiefCard;
