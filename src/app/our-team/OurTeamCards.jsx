import React from "react";
import { TeamData } from "@/data/TeamData";
import { TransitionWrapper1 } from "@/components/shared/wrapper's/motion/TransitionWrapper";
import BigWidthNormalSectionWrapper from "@/components/shared/wrapper's/BigWidthNormalSectionWrapper";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import ChiefCard from "./ChiefCard";
import SingleCard from "./SingleCard";
import ContentGap from "@/components/shared/gap's/ContentGap";

const OurTeamCards = () => {
  return (
    <BigWidthNormalSectionWrapper>
      <ChiefCard />
      <SectionsGap />
      <div className="w-full border-b"></div>
      <SectionsGap />
      <h1 className="text-[48px] font-bold text-primary text-center">
        Team Brilliance: Where Ideas Turn{" "}
        <span className="text-secondary">into Achievements</span>
      </h1>
      <p className="mt-[24px] text-[18px] text-third text-center">
        Dedicated Experts, Transforming Ideas into Reality.
      </p>

      <ContentGap />
      <div className="grid grid-cols-4 gap-[30px]">
        {TeamData.map((member, index) => (
          <TransitionWrapper1 key={index} index={1}>
            <SingleCard member={member} />
          </TransitionWrapper1>
        ))}
      </div>
      <SectionsGap />
    </BigWidthNormalSectionWrapper>
  );
};

export default OurTeamCards;
