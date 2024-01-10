import Image from "next/image";
import React from "react";
import similarBlogsVector from "../../assets/blog-page/similar-blogs-vector.png";
import { MdOutlineWatchLater } from "react-icons/md";

const SimilarBlogs = ({ blog }) => {
  const { image, authors, title, id, keys, readTime } = blog;
  return (
    <div className="relative group overflow-hidden rounded-[16px]">
      <Image
        className="bg-cover rounded-[16px] h-[440px] transition-all hover:duration-300 hover:transform hover:scale-125"
        src={image?.src}
        width={600}
        height={450}
      />
      <div className="hidden group-hover:block absolute -top-[3px] -right-[4px]">
          <div className="flex items-center gap-2 text-[#0060AF] font-semibold text-[16px] px-[24px] py-[8px] bg-[#E6EFF7] rounded-bl-[16px] rounded-tr-[16px]">
            <MdOutlineWatchLater />
            {readTime} min read
          </div>
        </div>
      <div className="relative">
        <Image
          className="bg-cover absolute -bottom-[2px]"
          src={similarBlogsVector}
          width={550}
          height={450}
        />
        <div className="absolute bottom-[80px] left-6 flex items-center gap-6">
          <Image src={authors?.photo.src} width={40} height={40} />
          <div className="text-[16px] font-semibold">
            <p className="text-[#002B4F]">{authors?.name}</p>
            <p className="text-[#667085]">{authors?.publishDate}</p>
          </div>
        </div>
        <div className="flex gap-2 absolute bottom-[115px] right-6">
          {keys.map((key, index) => (
            <button
              key={index}
              className="px-[12px] py-[4px] text-[12px] font-semibold rounded-[8px] bg-[#C2EAE4]"
            >
              {key}
            </button>
          ))}
        </div>
        <p className="absolute bottom-[5px] left-6 text-[#002B4F] text-[24px] font-semibold group-hover:underline">
          {title}
        </p>
      </div>
    </div>
  );
};

export default SimilarBlogs;
