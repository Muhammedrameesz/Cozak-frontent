import Image from "next/image";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const texts = ["SECURE", "RELIABLE", "WE COZAK", "QUALITY", "INNOVATIVE"];
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full text-center bg-cover bg-center bg-no-repeat h-auto md:h-[400px]"
      style={{ backgroundImage: "url('/Images/bannerTwoBg.jpg')" }}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-10 bg-white w-[100%] md:w-[75%] mx-auto py-6 md:py-0">
        
        {/* Image Section */}
       

        {/* Content Section */}
        <div className="text-left w-full md:w-[70%] md:ml-[2%]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
            WHO <span className="text-[#013E57]"> WE ARE </span>
          </h2>
          <p className="mt-4 sm:text-lg text-lg md:text-lg  sm:pb-6 lg:text-xl text-gray-700 tracking-[1px] leading-[28px] md:leading-[30px] text-center md:text-left">
            We believe true value from technology requires an in-depth
            understanding of business strategy. We build lasting technology
            solutions for a global client base. We listen to our customers and
            observe the digital universe unfold for guidance to consistently
            pioneer design and delivery of innovative solutions for various
            industry verticals.
          </p>
        </div>

        <div className="relative w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <div className="relative">
            <Image
              src="/Images/bannerInnerImg.jpeg"
              alt="Sample Image"
              width={390}
              height={290}
              className="rounded-[20px] w-full md:w-[390px] h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[20px]">
              <p className="text-white text-2xl md:text-4xl font-semibold">
                {texts[currentText]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
