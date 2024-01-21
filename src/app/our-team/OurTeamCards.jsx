import React from "react";
import { TeamData } from "@/data/TeamData";
import SingleCard from "./SingleCard";
import NormalSectionWrapper from "@/components/shared/wrapper's/NormalSectionWrapper";

const OurTeamCards = () => {
  
  return (
    <NormalSectionWrapper>
      <div className="grid grid-cols-4 gap-[30px]">
        {TeamData.map((member, index) => (
          <SingleCard member={member} key={index} />
        ))}
      </div>
    </NormalSectionWrapper>
  );
};

export default OurTeamCards;
