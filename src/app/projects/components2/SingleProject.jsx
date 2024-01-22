import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProject = ({ project }) => {
  const { title, technology, projectImage, industry, path } = project;
  return (
    <Link
      href={`projects/${path}`}
      className="relative overflow-hidden rounded-[16px] text-primary font-semibold group"
    >
      <Image
        className="w-[544px] h-[588px] bg-cover bg-center group-hover:scale-110 transition-all duration-300"
        src={project.projectImage}
        width={544}
        height={588}
      />
      <div className="hidden group-hover:block bg-white py-[12px] px-[24px] rounded-tr-[16px] rounded-bl-[16px] absolute right-0 top-0">
        <div className="flex items-center gap-[8px] text-primary">
          <span>Industry</span>
          <div className="h-[20px] w-[2px] bg-[#002B4F]"></div>
          <span className="text-rgb">{industry}</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <div className="flex items-center gap-[8px] rounded-tr-[16px] px-[24px] pt-[12px] w-[350px] bg-white">
          <p>Technology</p>
          <div className="bg-[#002B4F] w-[2px] h-[20px]"></div>
          {technology.map((item, index) => (
            <div
              key={index}
              className="p-[8px] border border-[#E6EFF7] rounded-3xl"
            >
              <Image
                className="w-[27px] h-[25px]"
                src={item.src}
                width={50}
                height={50}
              />
            </div>
          ))}
        </div>
        <h1
          className="text-[32px] bg-white p-[24px] 
        rounded-bl-[16px] rounded-br-[16px] w-[100vw]"
        >
          {title}
        </h1>
      </div>
    </Link>
  );
};

export default SingleProject;
