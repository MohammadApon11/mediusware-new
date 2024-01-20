import React from "react";
import ContentGap from "@/components/shared/gap's/ContentGap";
import SectionsGap from "@/components/shared/gap's/SectionsGap";

export const metadata = {
  title: "Mediusware || Projects",
  description: "Medius Family",
};

const ProjectLayout = ({ children }) => {
  return (
    <div>
      {children}
      <ContentGap />
      <SectionsGap />
    </div>
  );
};

export default ProjectLayout;
