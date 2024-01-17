"use client";
import ServicesSectionWrapper from "@/app/services/components/gap's/ServicesSectionWrapper";
import React, { useContext } from "react";
import RequirementTitle from "./RequirementTitle";
import { SiPolkadot } from "react-icons/si";
import Link from "next/link";
import PrimaryBtn from "@/components/shared/button's/PrimaryBtn";
import { InfoContext } from "@/providers/context";

const RequirementDetails = ({ data }) => {
  const {
    title,
    path,
    salaryRange,
    deadline,
    experience,
    lookingFor,
    responsibilitiesRequirements,
    educationalRequirements,
    experienceRequirements,
    additionalRequirements,
    benifits,
    location,
    publishedDate,
    vacancy,
    jobType,
  } = data;

  const { name, setName } = useContext(InfoContext);
  console.log("from name", name);
  return (
    <ServicesSectionWrapper>
      <div className="grid grid-cols-3 gap-x-[30px]">
        <div className="col-span-2">
          <iframe
            className="w-[100%] h-[350px]"
            src="https://www.youtube.com/embed/KzNWlUFGOaU?si=4c5fNnlmsuqmxBPk&autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <RequirementTitle mt={"mt-[24px]"}>Who We Are?</RequirementTitle>
          <p className="mt-[24px]">
            Mediusware Ltd. is a software company providing world-class software
            solutions backed by state of the art-of-technology. Our success
            comes from designing, building, and maintaining software solutions
            for our users, and our growth comes from expanding and improving our
            products as quickly as we can. We believe that great products can
            only be built by great people. Thus, we are on a quest to find the
            smartest, most creative, and motivated people, and we are developing
            an environment in which they can thrive.
          </p>
          <RequirementTitle mt={"mt-[24px]"}>
            What do We Believe?
          </RequirementTitle>
          <p className="mt-[24px] font-semibold">
            Believe in Quality || Friendly Mindset || Respect & Empathy || Learn
            & Grow || A World of Fun{" "}
          </p>
          <div className="mt-[30px]">
            <RequirementTitle mt={"mt-[24px]"}>
              What do We Believe?
            </RequirementTitle>
            <p className="mt-[20px]">{lookingFor}</p>
            <RequirementTitle mt={"mt-[24px]"}>
              Job responsibilities and requirements:
            </RequirementTitle>
            <ul className="flex flex-col gap-[10px] mt-[26px]">
              {responsibilitiesRequirements?.map((item, index) => (
                <li className="flex items-center gap-[8px]" key={index}>
                  <SiPolkadot className="text-secondary" /> {item}
                </li>
              ))}
            </ul>
            <RequirementTitle mt={"mt-[24px]"}>
              Educational requirements:
            </RequirementTitle>
            <ul className="flex flex-col gap-[10px] mt-[16px]">
              {educationalRequirements?.map((item, index) => (
                <li className="flex items-center gap-[8px]" key={index}>
                  <SiPolkadot className="text-secondary" /> {item}
                </li>
              ))}
            </ul>
            <RequirementTitle mt={"mt-[16px]"}>
              Experience requirements:
            </RequirementTitle>
            <ul className="flex flex-col gap-[10px] mt-[20px]">
              {experienceRequirements?.map((item, index) => (
                <li className="flex items-center gap-[8px]" key={index}>
                  <SiPolkadot className="text-secondary" /> {item}
                </li>
              ))}
            </ul>
            <RequirementTitle mt={"mt-[16px]"}>
              Additional requirements:
            </RequirementTitle>
            <ul className="flex flex-col gap-[10px] mt-[20px]">
              {additionalRequirements?.map((item, index) => (
                <li className="flex items-center gap-[8px]" key={index}>
                  <SiPolkadot className="text-secondary" /> {item}
                </li>
              ))}
            </ul>
            <RequirementTitle mt={"mt-[16px]"}>Benefits:</RequirementTitle>
            <ul className="flex flex-col gap-[10px] mt-[20px]">
              {benifits?.map((item, index) => (
                <li className="flex items-center gap-[8px]" key={index}>
                  <SiPolkadot className="text-secondary" /> {item}
                </li>
              ))}
            </ul>
            <RequirementTitle mt={"mt-[16px]"}>Location :</RequirementTitle>
            <p className="mt-[20px]">{location}</p>
            <p>
              Google map address:{" "}
              <Link className="text-secondary underline" href={"https://maps.app.goo.gl/93aJ9auNFqAyjpPk9"}>
                https://maps.app.goo.gl/93aJ9auNFqAyjpPk9
              </Link>
            </p>
            <p className="mt-[20px]">
              Mediusware Ltd. is committed to providing equal employment
              opportunities to all employees and applicants without regard to
              race, religion, color, sex, national origin, citizenship status,
              uniform service member status, age, disability, sexual and gender
              orientation, genetic information, or any other protected status in
              accordance with all applicable federal, state, and local laws. If
              you think it might be for you and you have the required
              experience, please click Apply for this position on this page.
            </p>
          </div>
          <div className="mt-[50px]">
            <Link
              href={`${path}/apply`}
              onClick={() => setName(title)}
              className={`px-[28px] py-[16px] text-[17px] rounded-[8px] hover:bg-[#0060AF] text-white text-center bg-[#0060AF] `}
            >
              Apply Now
            </Link>
          </div>
        </div>
        <div className="sticky top-[140px] col-span-1 h-[750px] bg-[#E6EFF7] rounded-[12px] text-primary ">
          <h1 className="py-[16px] text-center bg-[#8796a3] rounded-tl-[12px] rounded-tr-[12px] text-[20px] font-bold">
            Key Information
          </h1>
          <div className="flex flex-col gap-[20px] p-[30px] font-semibold">
            <p>Published on: {publishedDate}</p>
            <p>Vacancy: {vacancy}</p>
            <p>Experience: {experience}</p>
            <p>Salary: {salaryRange}</p>
            <p>Job type: {jobType}</p>
            <p>Deadline: {deadline}</p>
            <p>Location: {location}</p>
          </div>
          <div className="text-center mt-[15px]">
            <Link
              onClick={() => setName(title)}
              href={`${path}/apply`}
              className={`border border-[#0060AF] px-[24px] py-[12px] text-[16px] rounded-[8px] text-[#0060AF] hover:bg-[#0060AF] hover:text-white transition-all duration-200 text-center`}
            >
              Apply Now
            </Link>
          </div>
          <iframe
            className="w-[100%] h-[250px] mt-[50px] rounded-[12px]"
            src="https://www.youtube.com/embed/KzNWlUFGOaU?si=4c5fNnlmsuqmxBPk&autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </ServicesSectionWrapper>
  );
};

export default RequirementDetails;
