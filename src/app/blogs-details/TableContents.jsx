import Image from "next/image";
import React from "react";
import table from "../../assets/blogs-details/table.png";
import "../../styles/scrollbar.css";

const TableContents = () => {
  const tableInfoData = [
    "Introduction",
    "Why Web Development",
    "Product design user interface design in 2023 in the world",
    "Product design user interface design in 2023 in the world",
    "Product design user interface design in 2023 in the world",
    "Product design user interface design in 2023 in the world",
    "Product design user interface design in 2023 in the world",
    "Product design user interface design in 2023 in the world",
  ];
  return (
    <div className="bg-white rounded-[12px] p-[24px]">
      <div className="flex items-center gap-[8px]">
        <Image src={table} width={24} height={24} />
        <h4 className="text-[#002B4F] text-[24px]">Table of contents</h4>
      </div>
      <ol className="flex flex-col gap-[16px] mt-[24px] h-[392px] overflow-y-auto custom-scrollbar">
        {tableInfoData.map((data, index) => (
          <li
            key={index}
            className="text-[#475467] text-[20px] hover:text-[#0060AF] hover:underline"
          >
            <span className="font-semibold">{index + 1}.</span> {data}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TableContents;
