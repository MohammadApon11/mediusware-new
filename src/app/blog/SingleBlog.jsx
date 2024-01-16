import Image from "next/image";
import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import cardVector from "../../assets/blog-page/card-vector.png";
import mobileVector from "../../assets/blog-page/mobile-vector.png";
import Link from "next/link";

const SingleBlog = ({ blog }) => {
  const { image, authors, title, id, keys, readTime } = blog;
  return (
    <Link
      href={"blogs-details"}
      className={` ${
        id === 1 ? "grid-cols-6 row-span-2" : "grid-cols-2 row-span-1"
      } relative rounded-[16px] group overflow-hidden`}
    >
      <div className="hidden group-hover:block">
        <div className="absolute -top-[1px] right-0 flex items-center xl:gap-2 lg:gap-[6px]  xl:text-[16px] lg:text-[14px] xl:px-[24px] lg:px-[18px] xl:py-[8px] lg:py-[6px] rounded-bl-[16px] rounded-tr-[16px] font-semibold  text-[#0060AF] bg-[#E6EFF7]">
          <MdOutlineWatchLater /> <span>{readTime}</span> min read time
        </div>
      </div>
      <Image
        className={`rounded-[16px] md:h-[480px] sm:h-[430px] mobile:h-[360px] xs:h-[260px] transition-all hover:duration-300 hover:transform hover:scale-125 ${
          id === 1 ? "w-[100%] lg:h-[100%]" : "w-[100%] lg:h-[100%] "
        } bg-cover`}
        src={image?.src}
        width={832}
        height={id === 1 ? 748 : 358}
      />
      <div
        className={`bg-cover absolute -bottom-[4px] right-0 ${
          id === 1 ? "xl:h-[200px]" : "xl:h-[136px]"
        } lg:overflow-hidden`}
      >
        {/* larger vector */}
        <Image
          className={`xl:h-full md:h-full sm:h-[130px] mobile:h-[130px] xxs:max-mobile:hidden ${
            id === 1 ? "lg:h-[150px]" : "lg:h-[110px]"
          }`}
          src={cardVector}
          width={832}
          height={200}
        />
        {/* small vector */}
        <Image
          className="mobile:hidden xxs:max-mobile:block xxs:h-[130px]"
          src={mobileVector}
          width={500}
          height={200}
        />
        <div className="absolute xl:top-6 mobile:top-3 xxs:top-2 sm:left-6 xxs:left-3 w-full flex items-center justify-between">
          <div className="flex items-center sm:gap-3 xxs:gap-2">
            <Image
              className="xxs:max-sm:w-[25px]"
              src={authors?.photo?.src}
              width={40}
              height={40}
            />
            <div className="sm:text-[14px] mobile:text-[11px] xxs:text-[14px]">
              <p className="text-[#002B4F] font-semibold">{authors?.name}</p>
              <p className="text-[#667085]">{authors?.publishDate}</p>
            </div>
          </div>
          <div
            className={`flex items-center sm:gap-2 xxs:gap-[3px] sm:mr-[44px] xxs:mr-6 sm:-mt-8 xxs:-mt-3 ${
              id === 1 ? "lg:-mt-8" : "lg:-mt-12"
            }`}
          >
            {keys?.map((key, index) => (
              <button
                key={index}
                className={`bg-[#C2EAE4] hover:bg-[#accec9] text-[#002B4F] sm:px-[12px] xxs:px-[8px] sm:py-[4px] xxs:max-sm:text-[9px] sm:rounded-[8px] xxs:rounded-[5px] ${
                  id === 1 ? "sm:text-[14px]" : "sm:text-[12px]"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
        <p
          className={`absolute font-bold text-[#002B4F] md:text-[30px] sm:text-[25px] mobile:text-[19px] xxs:text-[20px] xxs:left-3 md:bottom-1 mobile:bottom-4 xxs:bottom-2 ${
            id === 1
              ? "2xl:text-[40px] xl:text-[36px] lg:text-[27px] xl:bottom-[3px] lg:bottom-[1px] sm:left-6"
              : "2xl:text-[24px] xl:text-[22px] lg:text-[19px] xl:bottom-[18px] lg:bottom-[12px] sm:left-6"
          }`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};
export default SingleBlog;
