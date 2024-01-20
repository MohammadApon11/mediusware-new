import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllProjects = ({ project }) => {
  const { path, title, shortOverview, projectImage } = project;
  return (
    <div className="border rounded-[8px]">
      <div className="bg-[#dff7f3] p-[12px] rounded-tl-[12px] rounded-tr-[12px]">
        <Image
          className="mx-auto rounded-[12px]"
          src={projectImage}
          width={520}
          height={300}
        />
      </div>
      <div className="mt-[20px] mb-[20px] p-[16px] text-primary flex flex-col gap-[16px]">
        <h4 className="text-[26px] font-semibold">{title}</h4>
        <p className="text-[16px]">{shortOverview}</p>
        <Link className="w-full flex items-center justify-center text-white py-[12px] hover:bg-[#176baf] bg-[#0060AF] transition-all duration-300 font-semibold rounded-md" href={`/projects/${path}`}>See Details</Link>
      </div>
    </div>
  );
};

export default AllProjects;
