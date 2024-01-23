"use client";
import ContentGap from "@/components/shared/gap's/ContentGap";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const questions = [
  {
    q: "Is there a free trial available?",
    ans: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    q: "When was Mediusware founded?",
    ans: "In 1972, five former IBM employees founded the company they call Mediusware Systemanalyse und Programmentwicklung (System Analysis and Program Development).Taking the initial form of a private partnership under the German Civil Code, the company establishes its headquarters in Weinheim, Germany, and opens an office in nearby Mannheim. However, Mediusware's five founders spend most of their time in the data centers of their first customers, which include the German branch of Imperial Chemical Industries in Östringen.",
  },
  {
    q: "What does the acronym Mediusware stand for?",
    ans: "Mediusware stands for Software developmen, Website Development, SQA, , Mobile App, Applications, and Products in Data Processing.",
  },
  {
    q: "What is Mediusware’s vision and mission?",
    ans: "In the digital era, data is the “new currency” in an enterprise. Businesses that are able to harness their data faster and more effectively will be the ones that succeed through disruption.",
  },
  {
    q: " What is the business outlook for the current fiscal year and your mid-term ambition?",
    ans: "The outlook and mid-term ambition can be found in the Quarterly Statement on our ",
  },
  {
    q: "Are you planning to grow organically or through acquisitions?",
    ans: "Organic growth remains the primary driver of our strategy. We will continue to invest in our own product development and technology innovation, improving the speed, number of projects, and innovations brought to market. We will also continue to acquire targeted, strategic, and “fill-in” technology and software to add to our broad solution offerings and improve coverage in key strategic markets. By doing so, we will strive to best support our customers’ needs for simplified operations. Additional information can be obtained ",
  },
  {
    q: "Where can I find information about the Mediusware Executive Board?",
    ans: "Find more information about the Mediusware Executive Board ",
  },
];

const AskedQuestions = () => {
  const [open, setOpen] = useState(null);
  const handleOpen = (index) => {
    setOpen(index);
    if (open === index) {
      setOpen(null);
    }
  };
  return (
    <>
      <h1 className="text-[48px] font-bold text-primary text-center">
        Frequently Asked <span className="text-secondary">Questions</span>
      </h1>
      <p className="mt-[24px] text-[18px] text-third text-center">
        Top questions about Mediusware
      </p>
      <ContentGap />
      <div className="w-[872px] mx-auto">
        {questions.map((item, index) => (
          <button
            key={index}
            onClick={() => handleOpen(index)}
            className={`w-full p-[24px] rounded-[12px]  mt-[16px] transition-all duration-300 ${
              index === open ? "bg-[#E6EFF7]" : "bg-white"
            }`}
          >
            <span className="flex items-center justify-between text-primary text-[18px] font-semibold">
              {" "}
              {item?.q} <IoIosArrowDown className={`${index === open && "rotate-[180deg] transition-all duration-300"}`} />
            </span>
            <span
              className={`text-start mt-[10px] text-third  ${
                index === open ? "block" : "hidden"
              }`}
            >
              {item?.ans}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default AskedQuestions;
