import React from "react";
import notFound from "../../assets/blog-page/not-found.png";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="w-[453px] mx-auto text-center">
      <Image className="mx-auto" src={notFound} width={258} height={232} />
      <h1 className="text-[#002B4F] text-[48px] mt-[32px] font-bold">
        No Data <span className="text-[#00A88E]">Found</span>
      </h1>
      <p className="text-[18px] text-[#002B4F] mt-[24px]">"We couldn&apos;t find any results for your search😕 Explore our latest articles below. Happy reading! 📚"</p>
    </div>
  );
};

export default NotFound;
