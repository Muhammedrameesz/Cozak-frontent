"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheckIcon,
  FileTextIcon,
  HotelIcon,
  MailIcon,
  MessageCircleIcon,
  ReceiptIcon,
  SchoolIcon,
  ScissorsIcon,
  UtensilsIcon,
} from "lucide-react";
import Image from "next/image";

export default function ContentCard() {
  interface softwareTypes {
    title: string;
    description: string;
    image: string;
    icon: React.ReactElement;
  }
  const softwareSolutions: softwareTypes[] = [
    {
      title: "Accounting and Billing Software",
      description:
        "Accounting software with billing and inventory from cozak is one of the simplest features rich and comprehensive inventory based point of sale billing keeping your accounts available for reference. This software contains the purchase, sales and admin modules, which makes it favorite software for point of sale billing, purchase order preparation and inventory management of all types of business units, shops, malls, stores , warehouse and any other outlet which involves in buying and selling of goods and commodities.",
      image:
        "https://img.freepik.com/premium-psd/3d-illustration-accounting-data_766990-505.jpg?w=826",
      icon: <ReceiptIcon />,
    },
    {
      title: "School Management Software",
      description:
        "Our school management software is designed to simply administrative, academic and financial management in schools. The web application helps school streamline different process by offering a range of modules to make it is easy for school to function and operates without increasing their overhead. Each module is designed keeping different activities in mind and this makes our school management software extremely comprehensive, covering areas such as attendance, admission, evaluation and examination vary accurately.",
      image:
        "https://img.freepik.com/free-psd/3d-render-books-notebooks-sales-blank-banner-background_23-2151386595.jpg?t=st=1745579597~exp=1745583197~hmac=9642481ae0b0220a310a9c0d17ffc871679cb92de63a28dc353961c432c1066e&w=900",
      icon: <SchoolIcon />,
    },
    {
      title: "Quotation / Invoice Software",
      description:
        "Quotations and Invoices software from cozak technologies is easy to use invoices software suitable for Small and Medium Business. Unlimited quotes and invoices. Print, Email, PDF with Company Logo. Multi-company invoicing software allowing you to use it for more than one company or business. Invoicing software allows you to preview all reports on screen before printing. Email all documents as a PDF (Adobe Acrobat) format. No additional filters or software required.",
      image:
        "https://img.freepik.com/premium-psd/laptop-with-calculator-paper-with-words-best-it_852169-73.jpg?w=740",
      icon: <FileTextIcon />,
    },
    {
      title: "E-Menu for Restaurants",
      description:
        "E-menu is the next evolutionary step for restaurants that are looking to increase customer awareness and loyalty, and offer their valued guests a modern and interactive way to order food as well as receive personalized and interactive services.",
      image:
        "https://img.freepik.com/premium-photo/sleek-3d-illustration-menu-board-with-metallic-icons-representing-different-food-options_1057-203976.jpg?w=740",
      icon: <UtensilsIcon />,
    },

    {
      title: "SMS Software",
      description:
        "Personalized messaging & Quick messaging to large groups. Personalized sender IDs. Detailed reporting of all send & received SMS messages. Creation and management of SMS templates for regular use.",
      image:
        "https://img.freepik.com/free-psd/3d-rendering-search-engine-background_23-2150562446.jpg?t=st=1745579663~exp=1745583263~hmac=b495c52563247341e1796ae58dc869e6eaabe3065d2edafdbca9af6ac9b177f3&w=996",
      icon: <MessageCircleIcon />,
    },
    {
      title: "Saloon Software",
      description:
        "Saloon software from Cozak has been very much convenient for use in saloons as well as in beauty parlours for ease of accounting and billing purposes.\n\nDetailed reports: The software enables detailed reporting of all sales / services offered (daily, monthly, yearly, service wise & staff wise). Add/Update customer details. Billing with staff name update option for detailed reporting of all services offered by each staff.",
      image:
        "https://img.freepik.com/premium-psd/purple-chair-with-purple-seat-purple-chair-with-white-button_1217673-228554.jpg?w=740",
      icon: <ScissorsIcon />,
    },
    {
      title: "Employee Task Management Software",
      description:
        "Employee task management software from Cozak has extensive organizational features which enhance efficiency at the personal & group levels. Tasks can be defined for oneself or assigned to a colleague, or delegated after being received. Any project can have a dedicated group where all of the files, discussions, and tasks pertaining to that project are stored and accessed only by those users who are relevant to the project. Time spent on each task within the project can be tracked, and are integrated into the group calendar.",
      image:
        "https://img.freepik.com/free-photo/3d-cartoon-scene-depicting-variety-people-multitasking_23-2151294503.jpg?t=st=1745579761~exp=1745583361~hmac=b46f5dd8e4fae499bb5e70c0c6113efb2d01aa2ca762017aa34a8c04bdda5441&w=996",
      icon: <ClipboardCheckIcon />,
    },
    {
      title: "EMAIL SOFTWARE",
      description:
        "The loci behind it is based on the technology. We can make in to several groups anniversary. Birthday etc. the mail sends on the date it reach. The only condition is worked only under genuine database. Here it is possible to make the reports and have delete option.",
      image:
        "https://img.freepik.com/premium-vector/mail-service-concept-computer-with-open-pages-3d-web-vector-illustrations_143407-1857.jpg?w=826",
      icon: <MailIcon />,
    },
    {
      title: "Hotel Management Software",
      description:
        "Hotel Management software from Cozak has wide commercial acceptance as it is much user friendly and convenient for regular use in hotels for ease of accounting and billing purposes. Ordering through E-menu system (Android application in tablets). Kitchen order & customer bill prints. Detailed reporting of all sales offered (daily, monthly, yearly, menu category wise). Add / Update stock details. Waiter food update. Customer feedback through tablets. Menu display on screens and much more.",
      image:
        "https://img.freepik.com/free-vector/hotel-building-concept-illustration_114360-12180.jpg?t=st=1745579889~exp=1745583489~hmac=5738ee44762ba7942e2263758b14a0c1ef746dc8fdeca1d5745395eaa753de0c&w=740",
      icon: <HotelIcon />,
    },
  ];

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-[#013E57] to-[#00a3c4] bg-clip-text text-transparent tracking-tight"
        >
          OUR PRODUCTS
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwareSolutions.map((item, index) => (
            <motion.div
              key={index}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`bg-white relative  rounded-2xl p-6 flex flex-col  text-start  transition-shadow duration-300
                         ${
                           index == 1 ||
                           index == 4 ||
                           index === 7 ||
                           index == 10
                             ? "shadow-2xl"
                             : ""
                         }
                `}
              style={{ marginTop: `${index + 20}px` }}
            >
              <div className="w-full h-60 relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                />
              </div>

              <div className="text-green-500  mb-3">{item.icon}</div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm ">{item.description}</p>
              <div
                className={`absolute left-1/2 -translate-x-1/2 bottom-0 bg-gray-400 w-[90%] mx-auto h-[1px]
                      ${
                        index == 1 || index == 4 || index === 7 || index == 10
                          ? "hidden"
                          : "visible"
                      }
                `}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
