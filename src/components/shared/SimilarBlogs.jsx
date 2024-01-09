import Image from "next/image";
import React from "react";

const SimilarBlogs = ({ blog }) => {
  const { image, authors, title, id, keys, readTime } = blog;
  return (
    <div>
      <Image src={image?.src} width={700} height={400} />
    </div>
  );
};

export default SimilarBlogs;
