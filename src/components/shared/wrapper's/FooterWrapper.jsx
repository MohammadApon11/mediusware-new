"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "../Footer";

const FooterWrapper = () => {
  const pathName = usePathname();
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
