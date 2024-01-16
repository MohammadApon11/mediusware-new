import React from "react";

const RequirementTitle = ({ mt, children }) => {
  return <h1 className={`text-[24px] font-semibold ${mt}`}>{children}</h1>;
};

export default RequirementTitle;
