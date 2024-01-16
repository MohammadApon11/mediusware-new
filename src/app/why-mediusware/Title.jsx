import React from "react";

const Title = ({ title1, title2 }) => {
  return (
    <h1 className="text-primary text-[40px] font-semibold">
      {title1} <span className="text-secondary">{title2}</span>
    </h1>
  );
};

export default Title;
