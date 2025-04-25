"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";




const navLinks = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "ABOUT US",
    path: "/aboutUs",
  },
  {
    label: "SERVICES",
    path: "#",
    subPoints: [
      { label: "SOFTWARE DEVELOPMENT", path: "/Services/Software-Development" },
      { label: "WEB DESIGNING", path: "/Services/WebDesigning" },
      { label: "SEARCH ENGINE OPTIMIZATION", path: "#" },
      { label: "MOBILE APPLICATION", path: "#" },
      { label: "EMBEDDED SYSTEM", path: "#" },
      { label: "CREATIVE AD WORKS", path: "#" },
    ],
  },
  {
    label: "CLIENTS",
    path: "/clients",
  },
  {
    label: "CONTACT US",
    path: "/contactUs",
  },
];

export default function MainNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <div className="h-[40px] w-[160px] bg-[url('/logo.png')] bg-no-repeat bg-contain"></div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-900 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 relative">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.path;
            const hasSub = !!link.subPoints;

            return (
              <div
                key={index}
                onMouseEnter={() => setHovered(link.label)}
                onMouseLeave={() => setHovered(null)}
                className="relative group"
              >
                <Link
                  href={link.path}
                  className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-[#013E57] border-b-2 border-[#013E57]"
                      : "text-gray-700 hover:text-[#013E57]"
                  }`}
                >
                  {link.label}
                  {hasSub && <ChevronDown size={18} className="mt-[2px]" />}
                </Link>

                {/* Submenu */}
                {hasSub && (
                  <AnimatePresence>
                    {hovered === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 bg-white shadow-lg rounded-md py-5 px-3 w-64 z-50"
                      >
                        <ul className="space-y-2">
                          {link.subPoints.map((sublink, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={sublink.path}
                                className="block px-3 py-1.5 border-b text-sm text-gray-700 hover:text-[#013E57] hover:bg-gray-50 rounded transition-all duration-200"
                              >
                                {sublink.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden bg-white px-6 py-4 shadow-md"
          >
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link, index) => {
                const hasSubPoints = !!link.subPoints;
                const isExpanded = expandedIndex === index;

                return (
                  <li key={index}>
                    <button
                      onClick={() => {
                        if (hasSubPoints) {
                          setExpandedIndex(
                            expandedIndex === index ? null : index
                          );
                        } else {
                          setIsOpen(false);
                        }
                      }}
                      className={`flex items-center justify-between w-full text-left text-base font-medium transition-colors duration-200 ${
                        pathname === link.path
                          ? "text-[#013E57]"
                          : "text-gray-700 hover:text-[#013E57]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {hasSubPoints && (
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* Toggle Subpoints */}
                    {hasSubPoints && isExpanded && (
                      <ul className="pl-4 mt-2 space-y-1">
                        {link.subPoints.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.path}
                              onClick={() => setIsOpen(false)}
                              className="text-sm text-gray-600 hover:text-[#013E57] block"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
