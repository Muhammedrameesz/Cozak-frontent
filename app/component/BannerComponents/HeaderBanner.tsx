import React from "react";

const HeaderBanner = () => {
  return (
    <div
      className="relative w-full text-center bg-cover bg-center bg-no-repeat h-[80vh]"
      style={{ backgroundImage: "url('/Images/bannerOld.png')" }}
    >
         <div className="absolute inset-0 bg-[#164591] mix-blend-multiply opacity-40"></div>
      <div className="absolute inset-0 bg-[#013E57] opacity-60"></div>
      <div className="absolute inset-0 bg-[#000] opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-[7%] h-full px-6  text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white leading-tight sm:leading-[70px] md:leading-[80px]">
          WELCOME TO
          {/* <br/> */}
          {/* <span className="text-[#34C5FF]">COZAK</span> TECHNOLOGIES */}
        </h2>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl mt-5 font-bold text-white leading-tight sm:leading-[70px] md:leading-[80px]">
          {/* WELCOME TO */}
          {/* <br/> */}
          <span className="text-[#34C5FF]">COZAK</span> TECHNOLOGIES
        </h2>

        <p className="mt-5 text-xl sm:text-2xl md:text-3xl text-white tracking-[5px] leading-tight">
          “Your vision, our innovation”
        </p>

        <button
          onClick={() => {}}
          className="bg-[#34C5FF] w-[180px] sm:w-[200px] md:w-[215px] h-[55px] sm:h-[60px] md:h-[70px] mt-6 sm:mt-8 md:mt-10 text-[#013E57] font-bold text-lg sm:text-xl tracking-wide px-4 py-2 rounded-full hover:bg-[#02b4fa] transition duration-300"
        >
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default HeaderBanner;
