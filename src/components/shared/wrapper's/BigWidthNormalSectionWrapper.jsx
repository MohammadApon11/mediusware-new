const BigWidthNormalSectionWrapper = ({ children }) => {
  return (
    <div className="bigMon:w-[1696px] 2xl:w-[1400px] xl:w-[1200px] lg:w-[950px] md:w-[700px] xxs:max-md:w-[100%] mobile:max-md:px-5 xxs:max-md:px-2 mx-auto">
      {children}
    </div>
  );
};

export default BigWidthNormalSectionWrapper;
