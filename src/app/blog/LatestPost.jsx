"use client";
import SectionsHeader from "@/components/shared/SectionsHeader";
import ContentGap from "@/components/shared/gap's/ContentGap";
import SectionsWrapper from "@/components/shared/wrapper's/SectionsWrapper";
import React, { useState } from "react";
import {  LatestBlogsData } from "@/data/BlogData";
import SimilarBlogs from "@/components/shared/SimilarBlogs";

const LatestBlogs = () => {
  const [latestBlogs, setLatestBlogs] = useState(LatestBlogsData);
  return (
    <SectionsWrapper>
      <SectionsHeader title1={"Latest"} title2={"Post"} />
      <ContentGap />
      <div className="grid grid-cols-3 gap-x-8 gap-y-12">
        {latestBlogs?.map((blog, index) => {
          return <SimilarBlogs blog={blog} key={index} />;
        })}
      </div>
    </SectionsWrapper>
  );
};

export default LatestBlogs;
