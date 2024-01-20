import ContentGap from "@/components/shared/gap's/ContentGap";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import React from "react";

export const metadata = {
  title: "Mediusware || Career",
  description: "Medius Family",
};

const CareerLayout = ({ children }) => {
  return (
    <>
      {children}
      <ContentGap />
      <SectionsGap />
    </>
  );
};

export default CareerLayout;
