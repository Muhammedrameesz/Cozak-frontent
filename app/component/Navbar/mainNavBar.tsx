"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "HOME", path: "/home" },
  { label: "ABOUT US", path: "/aboutUs" },
  { label: "SERVICES", path: "#" },
  { label: "CLIENTS", path: "#" },
  { label: "CONTACT US", path: "contactUs" },
];

export default function MainNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 flex justify-between items-center w-full bg-white z-50 shadow-md p-3">
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
          <ul className="lg:flex flex-col lg:flex-row items-center w-full lg:w-auto space-y-4 lg:space-y-0 lg:space-x-5">
            {navLinks.map((link, index) => (
              <li key={index} className="text-[#013E57] text-lg font-medium hover:text-[#153341] transition-colors duration-200">
                <Link href={link.path} className="block px-4 py-2">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
