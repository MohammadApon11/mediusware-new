"use client";
import SectionsHeader from "@/components/shared/SectionsHeader";
import SimilarBlogs from "@/components/shared/SimilarBlogs";
import LoadMoreBtn from "@/components/shared/button's/LoadMoreBtn";
import ContentGap from "@/components/shared/gap's/ContentGap";
import BigWidthSectionWrapper from "@/components/shared/wrapper's/BigWidthSectionWrapper";
import { PopularBlogsData } from "@/data/BlogData";
import React, { useState } from "react";

const MostPopularBlogs = () => {
  const [popularBlogs, setPopularBlogs] = useState(PopularBlogsData);
  return (
    <BigWidthSectionWrapper>
      <SectionsHeader title1={"Most"} title2={"Popular"} />
      <ContentGap />
      <div className="grid grid-cols-3 gap-x-8 gap-y-12">
        {popularBlogs?.map((blog, index) => {
          return <SimilarBlogs blog={blog} key={index} />;
        })}
      </div>
      <ContentGap />
      <LoadMoreBtn />
    </BigWidthSectionWrapper>
  );
};

export default MostPopularBlogs;
