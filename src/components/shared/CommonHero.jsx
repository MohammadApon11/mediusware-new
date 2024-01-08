import { IoMdHome } from "react-icons/io";

const CommonHero = () => {
  return (
    <section className="">
      <div className="xxs:max-md:hidden 2xl:w-[1395px] xl:w-[1190px] lg:w-[940px] md:w-[690px] xl:text-[18px] lg:text-[16px] md:text-[15px] xl:gap-[16px] lg:gap-[13px] md:gap-[12px] xl:pt-[40px] lg:pt-[25px] md:pt-[25px] mx-auto flex items-center">
        <IoMdHome className="text-[#667085]" />
        <span className="text-[#98A2B3]">Home</span>
        <span className="text-[#98A2B3]">/</span>
        <span className="text-[#344054]">Blog</span>
      </div>
      <div className="mx-auto text-center 2xl:mt-[76px] xl:mt-[50px] lg:mt-[35px] md:mt-[50px] sm:mt-[45px] xs:mt-[40px]">
        <h1 className="text-[#002B4F] 2xl:text-[80px] xl:text-[70px] lg:text-[55px] md:text-[45px] sm:text-[45px] xs:text-[26px] font-bold">READ INSIGHTFUL <span className="text-[#00A88E]"><br className="md:hidden" /> ARTICLES</span></h1>
        <h3 className="2xl:text-[48px] xl:text-[40px] lg:text-[35px] md:text-[27px] sm:text-[24px] xs:text-[16px] xxs:text-[15px] xxs:max-lg:mt-[12px] text-[#002B4F]  font-semibold">Join 1,50,000+ Subscribers</h3>
        <form className="xl:w-[832px] lg:w-[750px] md:w-[600px] sm:w-[350px] mobile:w-[350px] xs:max-mobile:max-w-[280px] xxs:w-[235px] 2xl:h-[64px] xl:h-[57px] lg:h-[55px] md:h-[53px] mobile:h-[48px] xxs:h-[40px] 2xl:mt-[48px] xl:mt-[35px] lg:mt-[30px] md:mt-[30px] xs:mt-[20px] xxs:max-mobile:px-2 mx-auto relative">
          <input className="bg-white outline-none h-full w-full 2xl:rounded-[16px] xl:rounded-[13px] lg:rounded-[10px] xs:rounded-[16px] mobile:pl-[32px] xxs:pl-[23px] xxs:max-mobile:text-[12px]" type="text" placeholder="Email Address" />
          <input className="2xl:text-[24px] xl:text-[20px] mobile:text-[16px] xxs:text-[13px] 2xl:rounded-[16px] xl:rounded-[13px] lg:rounded-[10px] mobile:rounded-[16px] xxs:rounded-[12px] 2xl:px-[32px] xl:px-[25px] lg:px-[20px] md:px-[17px] mobile:px-[16px] xxs:px-[8px] absolute right-0 top-0 h-full  bg-[#0060AF] text-white" type="submit" value="Subscribe Now" />
        </form>
        <p className="text-[#667085] lg:text-[24px] lg:mt-[16px] md:text-[18px] md:mt-[15px] sm:text-[16px] sm:mt-[13px] mobile:text-[14px] mobile:mt-[12px] xxs:text-[12px] xxs:mt-[10px]  mobile:max-sm:px-4 xs:max-mobile:px-3">Get access to exclusive guides, tips, updates, ebooks, and more.</p>
      </div>
    </section>
  );
};

export default CommonHero;