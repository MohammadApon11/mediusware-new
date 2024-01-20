"use client";
import React, { useState } from "react";
import FilterBtn from "@/components/shared/FilterBtn";
import SectionsHeader from "@/components/shared/SectionsHeader";
import SectionsWrapper from "@/components/shared/wrapper's/SectionsWrapper";
import { BlogsData } from "@/data/BlogData";
import SingleBlog from "./SingleBlog";
import { CiSearch } from "react-icons/ci";
import ContentGap from "@/components/shared/gap's/ContentGap";
import LoadMoreBtn from "@/components/shared/button's/LoadMoreBtn";
import NotFound from "@/components/shared/NotFound";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState(BlogsData);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const handleFilteredName = (name) => {
    const filteringBolgs = blogs.filter(
      (blog) => blog.category?.toLowerCase() === name.toLowerCase()
    );
    setFilteredBlogs(filteringBolgs);
  };
  return (
    <SectionsWrapper>
      {/* Filter blog section start from here */}
      <SectionsHeader title1={"All"} title2={"Blogs"} />
      <ContentGap />
      <div className="flex xxs:max-lg:flex-col-reverse sm:max-lg:gap-5 xxs:max-md:gap-5 items-center justify-between 2xl:w-[1400px] xl:w-[1150px] lg:w-[940px] mx-auto">
        <FilterBtn handleFilteredName={handleFilteredName} />
        <div className="border-b border-[#D0D5DD] 2xl:pb-[13px] xl:pb-[10px] lg:pb-[9px] xxs:max-lg:pb-[9px] xxs:max-lg:w-[100%]">
          <div className="flex items-center justify-between text-[#475467] font-semibold">
            <input
              className="bg-transparent  placeholder:text-[#475467] 2xl:w-[300px] lg:max-xl:w-[180px] 2xl:text-[18px] xl:text-[16px] lg:text-[15px] sm:text-[18px] 2xl:placeholder:text-[18px] xl:placeholder:text-[16px] lg:placeholder:text-[15px] outline-none"
              type="text"
              placeholder="Search Here"
            />
            <CiSearch className="text-[24px]" />
          </div>
        </div>
      </div>
      <ContentGap />
      {blogs.length > 0 ? (
        <div className="lg:grid grid-rows-2 grid-flow-col xl:gap-8 lg:gap-6 xxs:flex flex-col mobile:gap-5 xxs:gap-4 sm:max-lg:mt-[25px]">
          {filteredBlogs.length > 0
            ? filteredBlogs?.map((blog, index) => {
                return <SingleBlog blog={blog} key={index} />;
              })
            : blogs.map((blog, index) => {
                return index < 3 && <SingleBlog blog={blog} key={index} />;
              })}
        </div>
      ) : (
        <NotFound />
      )}
      <ContentGap />
      <LoadMoreBtn />
      {/* Filter blog section end here */}
    </SectionsWrapper>
  );
};

export default AllBlogs;
