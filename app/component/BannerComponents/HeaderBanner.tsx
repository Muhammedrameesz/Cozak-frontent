import React from "react";

const HeaderBanner = () => {
  return (
    <div
      className="relative w-full text-center bg-cover bg-center bg-no-repeat h-[80vh] sm:h-[75vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh]"
      style={{ backgroundImage: "url('/Images/bannerOld.png')" }}
    >
      <div className="absolute inset-0 bg-[#164591] mix-blend-multiply opacity-40"></div>
      <div className="absolute inset-0 bg-[#013E57] opacity-60"></div>
      <div className="absolute inset-0 bg-[#000] opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight sm:leading-[60px] md:leading-[70px] lg:leading-[80px]">
          WELCOME TO
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 sm:mt-4 font-bold text-white leading-tight sm:leading-[60px] md:leading-[70px] lg:leading-[80px]">
          <span className="text-[#34C5FF]">COZAK</span> TECHNOLOGIES
        </h2>
        <p className="mt-4 sm:mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white tracking-wide leading-tight">
          “Your vision, our innovation”
        </p>
        <button
          onClick={() => {}}
          className="bg-[#34C5FF] w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[45px] sm:h-[55px] md:h-[60px] lg:h-[70px] mt-5 sm:mt-6 md:mt-8 lg:mt-10 text-[#013E57] font-bold text-base sm:text-lg md:text-xl tracking-wide px-4 py-2 rounded-full hover:bg-[#02b4fa] transition duration-300"
        >
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default HeaderBanner;