import Image from "next/image";
import React from "react";

const ProcessCards = ({ process }) => {
  const { title, image, description } = process;
  return (
    <div className="text-primary">
      <Image src={image} width={120} height={120} />
      <h1 className="text-[20px] font-bold mt-[30px]">{title}</h1>
      <p className="mt-[10px]">{description}</p>
    </div>
  );
};

export default ProcessCards;
