import Image from "next/image";
import React from "react";
import upArrow from "../../assets/blog-page/uparrow.png";
import trendingBlogs from "../../assets/blog-page/trending-blogs.png";
import blogsArrow from "../../assets/blog-page/arrow.png";
import { MdOutlineWatchLater } from "react-icons/md";

const TrendingBlogs = () => {
  return (
    <div className="text-[#002B4F] mt-[60px] cursor-pointer">
      <div className="flex items-center gap-[8px]">
        <Image src={upArrow} width={24} height={24} />
        <h4 className="text-[24px] font-semibold">Trending blogs</h4>
      </div>
      <div className="mt-[20px] flex flex-col gap-[32px]">
        <div className="flex items-center bg-white shadow-md rounded-[16px] group relative">
          <Image src={trendingBlogs} width={138} height={136} />
          <Image
            className="absolute left-11 hidden group-hover:block"
            src={blogsArrow}
            width={48}
            height={48}
          />
          <div className="p-[15px]">
            <h4 className="text-[#002B4F] text-[18px] font-semibold group-hover:underline">
              WordPress updates WordPress updates...
            </h4>
            <div className="flex items-center gap-[8px] mt-[24px] border max-w-[140px] border-[#667085] px-[12px] py-[4px] rounded-[8px]">
              <MdOutlineWatchLater />
              <p className="text-[#667085] text-[12px]">Max 8 min read</p>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-white shadow-md rounded-[16px] mt-[20px] group relative">
          <Image src={trendingBlogs} width={138} height={136} />
          <Image
            className="absolute left-11 hidden group-hover:block"
            src={blogsArrow}
            width={48}
            height={48}
          />
          <div className="p-[15px]">
            <h4 className="text-[#002B4F] text-[18px] font-semibold group-hover:underline">
              WordPress updates WordPress updates...
            </h4>
            <div className="flex items-center gap-[8px] mt-[24px] border max-w-[140px] border-[#667085] px-[12px] py-[4px] rounded-[8px]">
              <MdOutlineWatchLater />
              <p className="text-[#667085] text-[12px]">Max 8 min read</p>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-white shadow-md rounded-[16px] mt-[20px] group relative">
          <Image src={trendingBlogs} width={138} height={136} />
          <Image
            className="absolute left-11 hidden group-hover:block"
            src={blogsArrow}
            width={48}
            height={48}
          />
          <div className="p-[15px]">
            <h4 className="text-[#002B4F] text-[18px] font-semibold group-hover:underline">
              WordPress updates WordPress updates...
            </h4>
            <div className="flex items-center gap-[8px] mt-[24px] border max-w-[140px] border-[#667085] px-[12px] py-[4px] rounded-[8px]">
              <MdOutlineWatchLater />
              <p className="text-[#667085] text-[12px]">Max 8 min read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingBlogs;
