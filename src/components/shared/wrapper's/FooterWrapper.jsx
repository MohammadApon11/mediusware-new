"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "../Footer";
import SectionsGap from "../gap's/SectionsGap";

const FooterWrapper = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      {pathName.startsWith("/projects") ? (
        <div className="bg-white">
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default FooterWrapper;
