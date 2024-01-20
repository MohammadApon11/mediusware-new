import React from "react";
import { TeamData } from "@/data/TeamData";
import SingleCard from "./SingleCard";
import SectionWrapper from "@/components/shared/wrapper's/SectionWrapper";

const OurTeamCards = () => {
  
  return (
    <SectionWrapper>
      <div className="grid grid-cols-4 gap-[30px]">
        {TeamData.map((member, index) => (
          <SingleCard member={member} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default OurTeamCards;
