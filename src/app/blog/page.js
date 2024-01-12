import CommonHero from "@/components/shared/CommonHero";
import PaddingTop from "@/components/shared/gap's/PaddingTop";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import React from "react";
import AllBlogs from "./AllBlogs";
import LatestBlogs from "./LatestPost";
import MostPopularBlogs from "./MostPopularBlogs";
import Message from "@/components/shared/Message";
import Footer from "@/components/shared/Footer";

const BlogPage = () => {
  return (
    <>
      <PaddingTop />
      <CommonHero />
      <SectionsGap />
      <AllBlogs />
      <SectionsGap />
      <LatestBlogs />
      <SectionsGap />
      <MostPopularBlogs />
      <SectionsGap />
      <div className="bg-white">
        <Message />
        <SectionsGap />
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
