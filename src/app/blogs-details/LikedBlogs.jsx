import SectionsHeader from "@/components/shared/SectionsHeader";
import SimilarBlogs from "@/components/shared/SimilarBlogs";
import LoadMoreBtn from "@/components/shared/button's/LoadMoreBtn";
import ContentGap from "@/components/shared/gap's/ContentGap";
import { LikedBlogsData } from "@/data/BlogData";
import React from "react";

const LikedBlogs = () => {
  return (
    <>
      <SectionsHeader title1={"You May Also"} title2={"Like"} />
      <ContentGap />
      <div className="grid grid-cols-3 gap-x-8 gap-y-12">
        {LikedBlogsData.map((blog, index) => {
          return <SimilarBlogs blog={blog} key={index} />;
        })}
      </div>
      <ContentGap />
      <LoadMoreBtn />
    </>
  );
};

export default LikedBlogs;
