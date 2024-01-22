import Link from "next/link";
import React from "react";
import "../../../styles/btnStyles.css";

const PrimaryBtn = ({
  bgGray = false,
  bg = false,
  path = "",
  width = false,
  scroll = null,
  children,
}) => {
  const handleClick = () => {
    // Scroll down 200 pixels
    window.scrollBy(0, scroll);
  };
  return (
    <>
      {scroll === null ? (
        <Link
          href={path}
          className={`${
            bg
              ? "tj-transparent-btn2 btn2"
              : bgGray
              ? "tj-transparent-btn3 btn3"
              : "tj-transparent-btn btn"
          } ${width && "w-[200px]"}`}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className={`${
            bg
              ? "tj-transparent-btn2 btn2"
              : bgGray
              ? "tj-transparent-btn3 btn3"
              : "tj-transparent-btn btn"
          } ${width && "w-[180px]"}`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default PrimaryBtn;
