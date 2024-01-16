"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { IoCloudUpload } from "react-icons/io5";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { NameContext } from "@/providers/context";
import { useForm } from "react-hook-form";

const ApplyForm = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const { name } = useContext(NameContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-[1000px] mx-auto shadow-lg bg-white p-[50px] rounded-md">
      <h1 className="text-[30px] text-primary font-semibold text-center">
        {name}
      </h1>
      <p className="text-primary mt-[20px] text-center">
        If you already have Mediusware job account then please{" "}
        <Link className="text-secondary" href={"login"}>
          login
        </Link>
      </p>
      <div className="h-[1px] border-b w-[100%] mt-[20px]"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[24px]">
          <label className="font-semibold">Full Name*</label>
          <input
            className={`mt-[10px] focus:outline w-[100%] border rounded-[4px] pl-[10px] pr-[20px] py-[8px] ${
              errors.name ? "outline-red-500" : "outline-indigo-500"
            }`}
            type="text"
            placeholder="Enter Your Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500 text-[13px]">
              The Full Name Field Is Required
            </span>
          )}
        </div>
        <div className="flex items-center gap-[20px] mt-[30px]">
          <div className="w-[50%]">
            <div>
              <label className="font-semibold">Email address*</label>
              <input
                className={`mt-[10px] focus:outline w-[100%] border rounded-[4px] pl-[10px] pr-[20px] py-[8px] ${
                  errors.email ? "outline-red-500 " : "outline-indigo-500 "
                }`}
                type="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-[13px]">
                  The Email Field Is Required
                </span>
              )}
            </div>
            <div className="mt-[30px]">
              <label className="font-semibold">Password*</label>
              <input
                className={`mt-[10px] focus:outline w-[100%] border rounded-[4px] pl-[10px] pr-[20px] py-[8px] ${
                  errors.password1 ? "outline-red-500 " : "outline-indigo-500 "
                }`}
                type="text"
                placeholder="Enter Your Password"
                {...register("password1", { required: true })}
              />
            </div>
          </div>
          <div className="w-[50%]">
            <div>
              <label className="font-semibold">Phone Number*</label>
              <input
                className={`mt-[10px] focus:outline w-[100%] border rounded-[4px] pl-[10px] pr-[20px] py-[8px] ${
                  errors.phone ? "outline-red-500 " : "outline-indigo-500 "
                }`}
                type="number"
                placeholder="XXXXXXXXXX"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="text-red-500 text-[13px]">
                  The Phone Field Must Be Numeric And May Contain Decimal Points
                </span>
              )}
            </div>
            <div className="mt-[30px]">
              <label className="font-semibold">Re-Type Password*</label>
              <input
                className="mt-[10px] focus:outline outline-indigo-500 w-[100%] border rounded-[4px] pl-[10px] pr-[20px] py-[8px]"
                type="text"
                placeholder="Re-Type Your Password"
                {...register("password2", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="mt-[24px] flex items-center gap-[15px]">
          <label>
            <input
              type="radio"
              value="Male"
              checked={selectedOption === "Male"}
              onChange={handleOptionChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              value="Female"
              checked={selectedOption === "Female"}
              onChange={handleOptionChange}
            />{" "}
            Female
          </label>
        </div>
        <div className="m-auto mt-[30px] px-6 sm:px-0 w-[100%]">
          <label className="font-semibold" htmlFor="">
            CV/Resume
          </label>
          <div className="mt-[24px] border-[2px] border-dashed relative group w-full h-64 flex justify-center items-center">
            <div className="absolute inset-0 w-full h-full backdrop-blur-xl"></div>
            <input
              accept=".jpg, .jpeg .png, .svg, .webp"
              className="relative z-10 opacity-0 h-full w-full cursor-pointer"
              type="file"
              name="bgfile"
              id="bgfile"
              {...register("cv", { required: true })}
            />

            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auo flex items-center justify-center">
              <div className="space-y-6 text-center">
                <p className="text-gray-700 text-lg">
                  <IoCloudUpload className="mx-auto text-secondary text-[40px]" />
                  <span className="font-semibold">Drag and drop or </span>
                  <span className="text-secondary">Browse</span>
                  <label
                    htmlFor="dragOver"
                    title="Upload a file"
                    className="relative mt-[12px] z-20 cursor-pointer text-[14px] text-[#475467] block"
                  >
                    Please upload your cv or resume only in word document or pdf
                    file with your photography in it.
                  </label>{" "}
                </p>
              </div>
            </div>
          </div>
          {errors.cv && (
            <span className="text-[13px] text-red-500">
              This CV field is required
            </span>
          )}
        </div>
        <div className="flex justify-end">
          <button
            className="mt-[30px] text-secondary text-[18px] font-semibold flex items-center gap-[8px] group rounded-md border px-[24px] py-[12px] border-[#00A88E]"
            type="submit"
          >
            <span className="group-hover:translate-x-2 transition-all duration-300">
              Continue
            </span>
            <HiOutlineArrowLongRight className="group-hover:translate-x-4 transition-all duration-300" />
          </button>
        </div>
      </form>
      {}
    </div>
  );
};

export default ApplyForm;
