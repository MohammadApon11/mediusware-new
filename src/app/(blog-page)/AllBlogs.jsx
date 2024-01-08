"use client";
import React, { useState } from "react";
import FilterBtn from "@/components/shared/FilterBtn";
import SectionsHeader from "@/components/shared/SectionsHeader";
import SectionsWrapper from "@/components/shared/wrapper's/SectionsWrapper";
import { BlogData } from "@/data/BlogData";
import Image from "next/image";
import SingleBlog from "./SingleBlog";
import { CiSearch } from "react-icons/ci";
import TitleAndContentGap from "@/components/shared/gap's/TitleAndContentGap";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState(BlogData);

  return (
    <SectionsWrapper>
      <SectionsHeader />
      <TitleAndContentGap />
      <div className="flex items-center justify-between lg:w-[1200px] mx-auto">
        <FilterBtn />
        <div className="border-b border-[#D0D5DD] pb-[13px]">
          <div className="flex items-center">
            <input
              className="bg-transparent text-[#344054] lg:w-300px  outline-none"
              type="text"
              placeholder="Search Here"
            />
            <CiSearch />
          </div>
        </div>
      </div>
      <TitleAndContentGap />
      <div className="grid grid-rows-2 grid-flow-col lg:gap-8">
        {blogs.map((blog, index) => {
          return <SingleBlog blog={blog} key={index} />;
        })}
      </div>
    </SectionsWrapper>
  );
};

export default AllBlogs;
