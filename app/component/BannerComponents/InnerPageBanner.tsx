import React from "react";
interface InnerHeaderBannerProps {
  title?: string;
  bannerKey?: string;
}

const InnerHeaderBanner: React.FC<InnerHeaderBannerProps> = ({
  title = "SOFTWARE DEVELOPMENT",
  bannerKey = "",
}) => {
  const bgImages: Record<string, string> = {
    mobile_development: "url('/ServicesImage/mobBg.png')",
    seo: "url('/ServicesImage/seoBg.png')",
    web_development: "url('/ServicesImage/webBG.png')",
    web_design: "url('/ServicesImage/webBG.png')",
    productbanner: "url('/ServicesImage/productbanner.png')",
    contactUs:"url('/ServicesImage/productbanner.png')",
    softwareDevolopment:"url('/ServicesImage/productbanner.png')"
  };
  const backgroundImage = bgImages[bannerKey];
  return (
    <section
      className="relative w-full text-center bg-cover bg-center bg-no-repeat h-[40vh] sm:h-[35vh] md:h-[30vh] lg:h-[35vh] xl:h-[40vh] -mt-5"
      style={{ backgroundImage }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center">
        <h2 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#34C5FF] leading-tight sm:leading-[60px] md:leading-[70px] lg:leading-[80px]">
          {title}
        </h2>
      </div>
    </section>
  );
};

export default InnerHeaderBanner;
