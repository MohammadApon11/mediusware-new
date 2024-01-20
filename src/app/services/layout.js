import Footer from "@/components/shared/Footer";
import ContentGap from "@/components/shared/gap's/ContentGap";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import React from "react";

export const metadata = {
  title: "Mediusware || Services",
  description: "Medius Family",
};

const ServicesLayout = ({ children }) => {
  return (
    <div className="scroll-smooth">
      {children}
      <ContentGap />
      <SectionsGap />
    </div>
  );
};

export default ServicesLayout;
