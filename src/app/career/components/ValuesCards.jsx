import React from "react";

const ValuesCards = ({ values }) => {
  const { id, title, description, borderColor } = values;
  return <div className={`text-primary bg-[#E6EFF7] px-[30px] py-[40px] border-l-[6px] rounded-[12px] ${borderColor} ${id % 2 === 0 ? 'mt-[20px] -mb-[20px]' : ''}`}>
    <h4 className="text-[18px] font-semibold">{title}</h4>
    <p className="mt-[16px]">{description}</p>
  </div>;
};

export default ValuesCards;
