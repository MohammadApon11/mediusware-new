import React from "react";
import { TeamData } from "@/data/TeamData";
import SingleCard from "./SingleCard";
import NormalSectionWrapper from "@/components/shared/wrapper's/NormalSectionWrapper";
import { TransitionWrapper1 } from "@/components/shared/wrapper's/motion/TransitionWrapper";

const OurTeamCards = () => {
  return (
    <NormalSectionWrapper>
      <div className="grid grid-cols-4 gap-[30px]">
        {TeamData.map((member, index) => (
          <TransitionWrapper1 key={index} index={1}>
            <SingleCard member={member} />
          </TransitionWrapper1>
        ))}
      </div>
    </NormalSectionWrapper>
  );
};

export default OurTeamCards;
