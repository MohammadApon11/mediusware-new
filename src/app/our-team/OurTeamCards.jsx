import React from "react";
import ServicesSectionWrapper from "../services/components/gap's/ServicesSectionWrapper";
import { TeamData } from "@/data/TeamData";
import SingleCard from "./SingleCard";

const OurTeamCards = () => {
  
  return (
    <ServicesSectionWrapper>
      <div className="grid grid-cols-4 gap-[30px]">
        {TeamData.map((member, index) => (
          <SingleCard member={member} key={index} />
        ))}
      </div>
    </ServicesSectionWrapper>
  );
};

export default OurTeamCards;
