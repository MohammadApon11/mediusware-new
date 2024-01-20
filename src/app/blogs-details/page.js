import PaddingTop from "@/components/shared/gap's/PaddingTop";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import BigWidthSectionWrapper from "@/components/shared/wrapper's/BigWidthSectionWrapper";
import React from "react";
import DetailsBlogsHero from "./DetailsBlogsHero";
import TableContents from "./TableContents";
import MainDetails from "./MainDetails";
import SubscribeBox from "@/components/shared/SubscribeBox";
import TrendingBlogs from "@/components/shared/TrendingBlogs";
import Meeting from "@/components/shared/Meeting";
import LikedBlogs from "./LikedBlogs";
import Message from "@/components/shared/Message";

export const metadata = {
  title: "Mediusware || Blogs Details",
  description: "Medius Family",
};

const page = () => {
  return (
    <>
      <BigWidthSectionWrapper>
        <PaddingTop />
        <SectionsGap />
        <DetailsBlogsHero />
        <SectionsGap />
        <div className="grid grid-cols-12 gap-[48px]">
          <div className="col-span-3">
            <TableContents />
          </div>
          <div className="col-span-6">
            <MainDetails />
          </div>
          <div className="col-span-3">
            <SubscribeBox />
            <TrendingBlogs />
            <Meeting />
          </div>
        </div>
        <SectionsGap />
        <LikedBlogs />
        <SectionsGap />
      </BigWidthSectionWrapper>
      <Message />
      <SectionsGap />
    </>
  );
};

export default page;
