import React from "react";
import Footer from "@/components/shared/Footer";
import ContentGap from "@/components/shared/gap's/ContentGap";
import SectionsGap from "@/components/shared/gap's/SectionsGap";

const ProjectLayout = ({ children }) => {
  return (
    <div>
      {children}
      <ContentGap />
      <SectionsGap />
      <Footer />
    </div>
  );
};

export default ProjectLayout;
