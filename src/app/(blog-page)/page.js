import CommonHero from "@/components/shared/CommonHero";
import NavBar from "@/components/shared/NavBar";
import PaddingTop from "@/components/shared/gap's/PaddingTop";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import React from "react";
import AllBlogs from "./AllBlogs";

const BlogPage = () => {
  return (
    <div>
      <PaddingTop />
      <CommonHero />
      <SectionsGap />
      <AllBlogs />
    </div>
  );
};

export default BlogPage;
