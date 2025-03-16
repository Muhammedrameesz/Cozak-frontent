"use client";

import { useState } from "react";
import FooterComponent from "../component/FooterComponent/FooterComponent";
import { Menu, X } from "lucide-react";
import HeaderBanner from "../component/BannerComponents/HeaderBanner";
import SoftwareProducts from "../component/SoftwareProducts/SoftwareProducts";
import InnerHeaderBanner from "../component/BannerComponents/InnerPageBanner";

export default function productPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  const products = [
    {
      id: 1,
      title: "Accounting and Billing Software",
      subtitle: "",
      description: `Accounting software with billing and inventory
                    from cozak is one of the simplest features rich
                    and comprehensive inventory based point of sale
                    billing keeping your accounts available for 
                    reference. This software contains the purchase, 
                    sales and admin modules`,
      image: "/ServicesImage/web.png",
    },
    {
      id: 2,
      title: "E-Menu for Restaurants",
      subtitle: "",
      description: `E-menu is the next evolutionary step for 
                    restaurants that are looking to increase customer 
                    awareness and loyalty, and offer their valued guests
                    a modern and interactive way to order food as well 
                    as receive personalized and interactive services`,
      image: "/ServicesImage/designs.png",
    },
    {
      id: 3,
      title: "Educational Software",
      subtitle: "",
      description: `Our school management software is designed 
                    to simply administrative, academic and financial 
                    management in schools. The web application helps 
                    school streamline different process by offering a 
                    range of modules`,
      image: "/ServicesImage/seo.png",
    },
  ];

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
              isOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row lg:items-center absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}
          >
            <ul className="lg:flex flex-col lg:flex-row items-center w-full lg:w-auto space-y-4 lg:space-y-0 lg:space-x-5 ">
              <li className="text-[#013E57] text-lg">
                <a href="/home" className="block px-4 py-2">
                  HOME
                </a>
              </li>
              <li className="text-[#013E57] text-lg">
                <a href="#" className="block px-4 py-2">
                  ABOUT US
                </a>
              </li>
              <li className="text-[#013E57] text-lg">
                <a href="#" className="block px-4 py-2">
                  SERVICES
                </a>
              </li>
              <li className="text-[#013E57] text-lg">
                <a href="#" className="block px-4 py-2">
                  CLIENTS
                </a>
              </li>
              <li className="text-[#013E57] text-lg">
                <a href="#" className="block px-4 py-2">
                  CONTACT US
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-[#013E57] pt-16">
        <InnerHeaderBanner />
      </main>
      <main className="flex-grow  bg-[#FFFFFF] pt-1 pb-0">
        <SoftwareProducts />
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
