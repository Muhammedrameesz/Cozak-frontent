"use client";

import { useState } from "react";
import Image from "next/image";
import ProductGrid from "../component/ProductGrid/ProductGrid";
import styles from "../styles/Home.module.css";
import Services from "../component/ProductGrid/Services";
import HeaderBanner from "../component/BannerComponents/HeaderBanner";
import Banner from "../component/BannerComponents/Banner";
import FooterComponent from "../component/FooterComponent/FooterComponent";
import Partners from "../component/PartnerComponent/Partner";
import ClientReviews from "../component/ClientReview/ClientReview";

export default function Home() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  const services = [
    {
      id: 1,
      title: "WEB DEVELOPMENT",
      subtitle: "Amazing Quality",
      description: "This is a great product that offers excellent value.",
      image: "/ServicesImage/web.png",
    },
    {
      id: 2,
      title: "WEB DESIGNS",
      subtitle: "Top-notch Performance",
      description: "Experience the best performance with this product.",
      image: "/ServicesImage/designs.png",
    },
    {
      id: 3,
      title: "SEO",
      subtitle: "Affordable Luxury",
      description: "Luxury meets affordability in this fantastic item.",
      image: "/ServicesImage/seo.png",
    },
    {
      id: 4,
      title: "MOBILE APP",
      subtitle: "Eco-friendly Design",
      description: "Sustainability and style come together in this product.",
      image: "/ServicesImage/mobile.png",
    },
  ];

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
      {/* <header className="sticky top-0 flex justify-between items-center w-full bg-transparent"> */}
      <header className="sticky top-0 flex justify-between items-center w-full bg-white z-50 shadow-md">
        <div className="flex justify-between w-full  flex-wrap pt-2 pb-2">
          <nav>
            <div className="h-[45px] ml-[47px] w-[161px] bg-[url('/logo.png')] bg-no-repeat bg-contain absolute mt-3 " />
          </nav>
          <nav>
            <ul className="lg:flex flex-wrap m-5 ">
              <li className="pr-5 pl-5 md:pb-1 text-[#013E57]">
                <a href="/home">HOME</a>
              </li>
              <li className="pr-5 pl-5 md:pb-1 text-[#013E57]">
                <a href="#">ABOUT US</a>
              </li>
              <li className="pr-5 pl-5 md:pb-1 text-[#013E57]">
                <a href="#">SERVICES</a>
              </li>
              <li className="pr-5 pl-5 md:pb-1 text-[#013E57]">
                <a href="#">CLIENTS</a>
              </li>
              <li className="pr-5 pl-5 md:pb-1 text-[#013E57]">
                <a href="#">CONTACT US</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-[#013E57] pt-0">
        <HeaderBanner />
      </main>
      <main className="flex-grow  pt-0">
        <Banner />
      </main>

      <main className="flex-grow  bg-[#013E57] pt-10 pb-10">
        <Services products={services} />
      </main>
      <main className="flex-grow  bg-[#013E57] pt-10 pb-0">
        <ProductGrid products={products} />
      </main>

      <main className="flex-grow  bg-[#FFFFFF] pt-1 pb-0">
        <ClientReviews/>
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
