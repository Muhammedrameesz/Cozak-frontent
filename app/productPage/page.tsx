"use client";

import { useState } from "react";
import FooterComponent from "../component/FooterComponent/FooterComponent";
import { Menu, X } from "lucide-react";
import SoftwareProducts from "../component/SoftwareProducts/SoftwareProducts";
import InnerHeaderBanner from "../component/BannerComponents/InnerPageBanner";
import Partners from "../component/PartnerComponent/Partner";
import Link from "next/link";

export default function ProductScreen() {
  // Rename function

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen w-full">
      <header className="fixed  top-0 flex justify-between items-center w-full bg-white z-50 shadow-md p-3">
        <div className="flex items-center justify-between w-full">
          <div className="h-[35px] w-[140px] bg-[url('/logo.png')] bg-no-repeat bg-contain ml-4"></div>

          <button className="lg:hidden mr-4" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav
            className={`${
            "block"
            } lg:flex flex-col lg:flex-row lg:items-center absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}
          >
            <ul className="lg:flex flex-col lg:flex-row items-center w-full lg:w-auto space-y-4 lg:space-y-0 lg:space-x-5 ">
              <li className="text-[#013E57] text-lg">
                <Link href="/home" className="block px-4 py-2">
                  HOME
                </Link>
              </li>
              <li className="text-[#013E57] text-lg">
                <Link href="#" className="block px-4 py-2">
                  ABOUT US
                </Link>
              </li>
              <li className="text-[#013E57] text-lg">
                <Link href="#" className="block px-4 py-2">
                  SERVICES
                </Link>
              </li>
              <li className="text-[#013E57] text-lg">
                <Link href="#" className="block px-4 py-2">
                  CLIENTS
                </Link>
              </li>
              <li className="text-[#013E57] text-lg">
                <Link href="#" className="block px-4 py-2">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-[#013E57] pt-16">
        <InnerHeaderBanner bannerKey={'productbanner'}/>
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
