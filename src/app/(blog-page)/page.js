import CommonHero from "@/components/shared/CommonHero";
import NavBar from "@/components/shared/NavBar";
import PaddingTop from "@/components/shared/gap's/PaddingTop";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import React from "react";
import AllBlogs from "./AllBlogs";
import LatestBlogs from "./LatestBlogs";

const BlogPage = () => {
  return (
    <>
      <PaddingTop />
      <CommonHero />
      <SectionsGap />
      <AllBlogs />
      <SectionsGap />
      <LatestBlogs />
    </>
  );
};

export default BlogPage;
