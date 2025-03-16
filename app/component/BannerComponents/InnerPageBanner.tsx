import React from "react";

const InnerHeaderBanner = () => {
  return (
    <div
      className="relative w-full text-center bg-cover bg-center bg-no-repeat h-[40vh] sm:h-[35vh] md:h-[30vh] lg:h-[35vh] xl:h-[40vh] -mt-5"
      style={{ backgroundImage: "url('/Images/productbanner.png')" }}
    >
      {/* <div className="absolute inset-0 bg-[#164591] mix-blend-multiply opacity-40"></div> */}
      {/* <div className="absolute inset-0 bg-[#013E57] opacity-60"></div> */}
      <div className="absolute inset-0 bg-[#000] opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center">
        <h2 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#34C5FF] leading-tight sm:leading-[60px] md:leading-[70px] lg:leading-[80px]">
        SOFTWARE DEVELOPMENT
        </h2>
      </div>
    </div>
  );
};

export default InnerHeaderBanner;