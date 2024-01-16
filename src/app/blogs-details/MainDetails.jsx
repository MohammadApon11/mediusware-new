"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import product from "../../assets/blogs-details/product.png";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import rigthArrow from "../../assets/blogs-details/right-arrow.png";
import copy from "../../assets/blogs-details/copy.png";
import fb from "../../assets/blogs-details/facebook.png";
import instagram from "../../assets/blogs-details/instagram.png";
import twitter from "../../assets/blogs-details/twitter.png";
import linkedin from "../../assets/blogs-details/linkedin.png";
import link from "../../assets/blogs-details/link.png";
import { FaArrowRight } from "react-icons/fa6";
import unknown from "../../assets/blogs-details/unknown-author.png";
import account from "../../assets/blogs-details/account-profile.png";

const MainDetails = () => {
  const [commentShow, setCommentShow] = useState(true);
  const featureData = [
    "Usability testing. Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live.",
    "Involving stakeholders. Need to check if your GDPR consent boxes are displaying properly? Pass your prototype to your data protection team and they can test it for real.",
    "Impressing a client.  Need to check if your GDPR consent boxes are displaying properly? Pass your prototype to your data protection team and they can test it for real.",
  ];
  const icons = [fb, instagram, twitter, linkedin, link];
  return (
    <div className="text-[#475467] text-[20px]">
      <div className="flex flex-col gap-[20px]">
        <p>
          First of all you need to understand how Flowbite works. This library
          is not another framework. Rather, it is a set of components based on
          Tailwind CSS that you can just copy-paste from the documentation.
        </p>
        <p>
          It also includes a JavaScript file that enables interactive
          components, such as modals, dropdowns, and datepickers which you can
          optionally include into your project via CDN or NPM.
        </p>
        <p>
          You can check out the{" "}
          <Link
            href={"https://flowbite.com/docs/getting-started/quickstart/"}
            className="text-[#0060AF]"
          >
            quickstart guide
          </Link>{" "}
          to explore the elements by including the CDN files into your project.
          But if you want to build a project with Flowbite I recommend you to
          follow the
          <Link
            href={"https://flowbite.com/docs/getting-started/introduction/"}
            className="text-[#0060AF]"
          >
            build tools
          </Link>{" "}
          steps so that you can purge and minify.
        </p>
      </div>
      <div className="mt-[40px]">
        <h1 className="text-[#002B4F] text-[40px] font-bold">
          When does design come in handy?
        </h1>
        <p className="mt-[24px]">
          First of all you need to understand how Flowbite works. This library
          is not another framework.{" "}
        </p>
        <ol className="ml-[24px] mt-[20px]">
          {featureData?.map((feature, index) => (
            <li key={index} className="my-[16px]">
              <span className="font-semibold">
                {index + 1}. {feature.split(".")[0]}.
              </span>
              {feature.split(".")[1]}
            </li>
          ))}
        </ol>
        <Image className="mt-[40px]" src={product} width={800} height={293} />
        <p className="bg-[#E6EFF7] rounded-[12px] mt-[40px] p-[16px]">
          The biggest of these was WordPress’ 20th anniversary in May. There was
          also the first flagship WordCamp Asia, the push into stage 3 of the
          Gutenberg project and the release of WordPress Playground.
        </p>
        <div className="flex flex-col gap-[20px] mt-[24px]">
          <p>
            First of all you need to understand how Flowbite works. This library
            is not another framework. Rather, it is a set of components based on
            Tailwind CSS that you can just copy-paste from the documentation.
          </p>
          <p>
            It also includes a JavaScript file that enables interactive
            components, such as modals, dropdowns, and datepickers which you can
            optionally include into your project via CDN or NPM.
          </p>
          <p>
            You can check out the{" "}
            <Link
              href={"https://flowbite.com/docs/getting-started/quickstart/"}
              className="text-[#0060AF]"
            >
              quickstart guide
            </Link>{" "}
            to explore the elements by including the CDN files into your
            project. But if you want to build a project with Flowbite I
            recommend you to follow the{" "}
            <Link
              href={"https://flowbite.com/docs/getting-started/introduction/"}
              className="text-[#0060AF]"
            >
              build tools
            </Link>{" "}
            steps so that you can purge and minify.
          </p>
        </div>
        <h1 className="text-[#002B4F] text-[40px] mt-[40px] font-bold">
          When does design come in handy?
        </h1>
        <p className="mt-[24px]">
          First of all you need to understand how Flowbite works. This library
          is not another framework. Rather, it is a set of components based on
          Tailwind CSS that you can just copy-paste from the documentation.
        </p>
        <h1 className="text-[#002B4F] text-[40px] mt-[40px] font-bold">
          When does design come in handy?
        </h1>
        <div className="flex flex-col gap-[20px] mt-[24px]">
          <p>
            First of all you need to understand how Flowbite works. This library
            is not another framework. Rather, it is a set of components based on
            Tailwind CSS that you can just copy-paste from the documentation.
          </p>
          <p>
            You can check out the{" "}
            <Link
              href={"https://flowbite.com/docs/getting-started/quickstart/"}
              className="text-[#0060AF]"
            >
              quickstart guide
            </Link>{" "}
            to explore the elements by including the CDN files into your
            project. But if you want to build a project with Flowbite I
            recommend you to follow the{" "}
            <Link
              href={"https://flowbite.com/docs/getting-started/introduction/"}
              className="text-[#0060AF]"
            >
              build tools
            </Link>{" "}
            steps so that you can purge and minify.
          </p>
        </div>
        <SectionsGap />
        {/* form sectin start from herer */}
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[12px]">
              <Image src={rigthArrow} width={24} height={24} />
              <span className="text-[#475467] text-[18px]">
                Share this post
              </span>
            </div>
            <div className="flex items-center gap-[12px]">
              <div className="flex items-center gap-[4px] bg-white rounded-[8px] px-[14px] py-[10px] cursor-pointer">
                <Image src={copy} width={20} height={20} />
                <span className="text-[14px] text-[#344054]">Copy link</span>
              </div>
              <div className="flex items-center gap-[12px]">
                {icons?.map((icon, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-[4px] bg-white rounded-[8px] p-[10px]"
                  >
                    <Image src={icon} width={20} height={20} key={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[32px]">
            <h4 className="text-[#111928] text-[24px] font-semibold mt-[40px]">
              Comments (23)
            </h4>
            <form className="flex flex-col gap-[24px] bg-white p-[32px] rounded-[16px] text-center">
              <div>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0072BC] to-[#009FA9] text-[30px] font-bold">
                  Have something to say?
                </h3>
                <p className="text-[#667085] text-[16px]">
                  Your email address will not be published.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-start gap-[8px]">
                    <label className="text-[#111928] text-[16px]">Name *</label>
                    <input
                      className="border border-[#D1D5DB] text-[[#D1D5DB]  rounded-[8px] px-[20px] py-[14px] text-[16px] outline-none w-[352px] bg-[#F9FAFB]"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[8px]">
                    <label className="text-[#111928] text-[16px]">
                      Email *
                    </label>
                    <input
                      className="border border-[#D1D5DB] rounded-[8px] px-[20px] py-[14px] text-[16px] text-[[#D1D5DB] outline-none w-[352px] bg-[#F9FAFB]"
                      type="text"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[8px] mt-[24px]">
                  <label className="text-[#111928] text-[16px]">
                    Comment *
                  </label>
                  <textarea
                    className="border bg-[#F9FAFB] border-[#D1D5DB] rounded-[8px] px-[20px] py-[14px] text-[16px] text-[[#D1D5DB] outline-none w-[100%] h-[112px]"
                    name=""
                    id="comment"
                    placeholder="Type here..."
                  ></textarea>
                </div>
              </div>
              <button className="bg-[#0060AF] px-[32px] py-[14px] text-[16px] font-semibold text-white flex items-center justify-center gap-[12px] rounded-[12px] w-[30%] hover:bg-[#1e81d3]">
                Post Comment <FaArrowRight />
              </button>
            </form>
            <div className="bg-white border border-[#D0D5DD] rounded-[16px] p-[24px]">
              <div className="border border-[#D0D5DD] rounded-[16px] p-[24px]">
                <div className="flex items-center gap-[12px]">
                  <Image
                    className="rounded-full"
                    src={unknown}
                    width={32}
                    height={32}
                  />
                  <div className="text-[14px]">
                    <p className="text-[#111928] font-semibold">
                      Michaeal Gough
                    </p>
                    <p className="text-[#4B5563]">Nov 18 22</p>
                  </div>
                </div>
                <p className="text-[#6B7280] text-[16px] mt-[12px]">
                  Very straight-to-point article. Really worth time reading.
                  Thank you! ‍But tools are just the instruments for the UX
                  designers. The knowledge of the design tools are as important
                  as the creation of the design strategy.
                </p>
                <p className="text-[#0060AF] text-[14px] mt-[12px] font-semibold cursor-pointer">
                  Replay
                </p>
              </div>
              <div className="border border-[#D0D5DD] rounded-[16px] p-[24px] mt-[12px] ml-[56px]">
                <div className="flex items-center gap-[12px]">
                  <Image
                    className="rounded-full"
                    src={account}
                    width={32}
                    height={32}
                  />
                  <div className="text-[14px]">
                    <p className="text-[#111928] font-semibold flex items-center gap-[8px]">
                      Jese Leos
                      <span className="bg-[#C2EAE4] text-[#002B4F] text-[14px] rounded-full px-[12px] py-[2px] font-normal">
                        Author
                      </span>
                    </p>
                    <p className="text-[#4B5563]">Nov 18 22</p>
                  </div>
                </div>
                <p className="text-[#6B7280] text-[16px] mt-[12px] flex items-center gap-[8px]">
                  Thank you, Glad you liked it :D
                </p>
                <p className="text-[#0060AF] text-[14px] mt-[12px] font-semibold cursor-pointer">
                  Replay
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#D0D5DD] rounded-[16px] p-[24px]">
              <div className="border border-[#D0D5DD] rounded-[16px] p-[24px]">
                <div className="flex items-center gap-[12px]">
                  <Image
                    className="rounded-full"
                    src={unknown}
                    width={32}
                    height={32}
                  />
                  <div className="text-[14px]">
                    <p className="text-[#111928] font-semibold">Bonnie Green</p>
                    <p className="text-[#4B5563]">Nov 15 &apos;22 </p>
                  </div>
                </div>
                <p className="text-[#6B7280] text-[16px] mt-[12px]">
                  The article covers the essentials, challenges, myths and
                  stages the UX designer should consider while creating the
                  design strategy.
                </p>
                <p className="text-[#0060AF] text-[14px] mt-[12px] font-semibold cursor-pointer">
                  Replay
                </p>
              </div>
              <div className="border border-[#D0D5DD] rounded-[16px] p-[24px] mt-[12px] ml-[56px]">
                <div className="flex items-center gap-[12px]">
                  <Image
                    className="rounded-full"
                    src={account}
                    width={32}
                    height={32}
                  />
                  <div className="text-[14px]">
                    <p className="text-[#111928] font-semibold flex items-center gap-[8px]">
                      Jese Leos
                      <span className="bg-[#C2EAE4] text-[#002B4F] text-[14px] rounded-full px-[12px] py-[2px] font-normal">
                        Author
                      </span>
                    </p>
                    <p className="text-[#4B5563]">Nov 18 22</p>
                  </div>
                </div>
                <p
                  onClick={() => setCommentShow(!commentShow)}
                  className="text-[#0060AF] text-[14px] mt-[12px] font-semibold cursor-pointer"
                >
                  Replay
                </p>
                <div className={`${commentShow ? "block" : "hidden"}`}>
                  <textarea
                    className={
                      "h-[190px] w-[100%] bg-[rgb(249,250,251)] rounded-[8px] mt-[12px] border border-[#D1D5DB] outline-none px-[16px] py-[12px] text-[16px]"
                    }
                    name="userComment"
                    id="userComment"
                    placeholder="Type your comment..."
                  ></textarea>
                  <button className="bg-[#0060AF] mt-[24px] flex items-center gap-[8px] text-[16px] text-white font-semibold  px-[32px] py-[14px] rounded-[12px]">
                    Post Comment <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
