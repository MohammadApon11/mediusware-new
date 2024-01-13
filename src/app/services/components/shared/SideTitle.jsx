import React from "react";

const SideTitle = ({ title1, title2 }) => {
  return (
    <h1 className="text-[40px] text-primary font-semibold">
      {title1} <span className="text-secondary">{title2}</span>
    </h1>
  );
};

export default SideTitle;
