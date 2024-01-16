import Footer from "@/components/shared/Footer";
import ContentGap from "@/components/shared/gap's/ContentGap";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import { TitleProvider } from "@/providers/context";
import React from "react";

const CareerLayout = ({ children }) => {
  return (
    <>
      {children}
      <ContentGap />
      <SectionsGap />
      <Footer />
    </>
  );
};

export default CareerLayout;
