import Image from "next/image";
import React from "react";

const SingleBlog = ({ blog }) => {
  const { image, authors, title, id, keys } = blog;
  return (
    <div
      className={`${
        id === 1 ? "grid-cols-6 row-span-2" : "grid-cols-2 row-span-1"
      } relative rounded-[16px]`}
    >
      <Image
        className={`rounded-[16px] ${
          id === 1 ? "lg:w-[832px] lg:h-[748px]" : "lg:w-[832px] lg:h-[358px]"
        } bg-cover`}
        src={image?.src}
        width={832}
        height={id === 1 ? 748 : 358}
      />
      <div>
        <div
          className={`absolute w-full lg:left-0 z-30 ${
            id === 1 ? "lg:bottom-[114px]" : "lg:bottom-[60px]"
          }`}
        >
          <div className="flex justify-between">
            <div
              className={`flex items-center lg:gap-3 lg:pl-[24px] lg:w-[300px] bg-white lg:rounded-[16px] after:content-[''] after:bg-white  ${
                id === 1 ? "lg:h-[90px]" : " lg:h-[85px] lg:pt-[15px]"
              }`}
            >
              <Image src={authors?.photo.src} width={40} height={40} />
              <div className="text-[14px]">
                <p className="text-[#002B4F]">{authors?.name}</p>
                <p className="text-[#667085]">{authors?.publishDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 lg:pr-[24px] -mt-10">
              {keys.map((item, index) => (
                <button
                  key={index}
                  className="bg-[#C2EAE4] hover:bg-[#aad4cd] text-[#002B4F] lg:text-[16px] lg:px-[12px] lg:py-[4px] lg:rounded-[8px]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        <p
          className={`lg:p-[24px] text-[#002B4F] font-bold lg:mt-[16px] bg-white absolute -bottom-[2px] w-[100%] rounded-[16px] ${
            id === 1 ? " lg:h-[150px] lg:p-[24px]" : "lg:h-[96px] lg:pt-[38px]"
          } ${id === 1 ? "lg:text-[40px]" : "lg:text-[24px]"}`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};
export default SingleBlog;
