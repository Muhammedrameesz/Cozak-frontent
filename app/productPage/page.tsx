"use client";

import FooterComponent from "../component/FooterComponent/FooterComponent";
import SoftwareProducts from "../component/SoftwareProducts/SoftwareProducts";
import InnerHeaderBanner from "../component/BannerComponents/InnerPageBanner";
import Partners from "../component/PartnerComponent/Partner";
import MainNavBar from "../component/Navbar/mainNavBar";

export default function ProductScreen() {
  return (
    <div className="h-screen w-full">
      <MainNavBar />

      {/* Main Content */}
      <main className="flex-grow bg-[#013E57] pt-16">
        <InnerHeaderBanner bannerKey={"productbanner"} />
      </main>
      <main className="flex-grow  bg-[#FFFFFF] pt-1 pb-0">
        <SoftwareProducts />
      </main>

      <main className="flex-grow  bg-[#FFFFFF] pt-0 pb-10">
        <Partners />
      </main>

      <main className="flex-grow  bg-[#ffffff] pt-10 pb-10">
        <FooterComponent />
        <div className="text-center text-sm mt-4  border-gray-600 ">
          <a
            href="https://cozaktechnologies.in"
            className="flex items-center justify-center gap-2"
          >
            https://cozaktechnologies.in
          </a>
        </div>
      </main>
    </div>
  );
}
