"use client";


import Image from "next/image";

const products = [
  {
    title: "ACCOUNTING AND BILLING SOFTWARE",
    description:
      "Accounting software with billing and inventory from cozaka is one of the simplest feature-rich and comprehensive inventory-based point-of-sale billing keeping your accounts available for reference. This software contains the purchase, sales, and admin modules, making it a favorite software for point-of-sale billing, purchase order preparation, and inventory management of all types of business units.",
    image: "/images/pr2.png",
  },
  {
    title: "SCHOOL MANAGEMENT SOFTWARE",
    description:
      "Our school management software is designed to simplify administrative, academic, and financial management in schools. The web application helps schools streamline different processes by offering a range of modules to make it easy for schools to function and operate without increasing their overhead.",
    image: "/images/pr1.png",
  },
  {
    title: "BUILDER TECH MANAGEMENT SOFTWARE",
    description:
      "Our school management software is designed to simply administrative, academic and financial management in schools. The web application helps school streamline different process by offering a range of modules to make it is easy for school to function and operates without increasing their overhead. Each module is designed keeping different activities in mind and this makes our school management software extremely comprehensive, covering areas such as attendance, admission, evaluation and examination vary accurately. efficiently.",
    image: "/images/pr2.png",
  },
  {
    title: "HRMS MANAGEMENT SOFTWARE",
    description:
      "Hotel Management software from Cozak has wide commercial acceptance as it is much user friendly and convenient for regular use in hotels for ease of accounting and billing purposes. Ordering through E-menu system (Android application in tablets). Kitchen order & customer bill prints. Detailed reporting of all sales offered (daily, monthly, yearly, menu category wise). Add / Update stock details. Waiter food update. Customer feedback through tablets. Menu display on screens and much more.",
    image: "/images/pr1.png",
  },
];




export default function Products() {

  const SectionHeader = () =>{
    return (
      <div className="flex items-center justify-center w-full my-14">
        <div className="flex-grow h-1 bg-gray-200 rounded-full"></div>
        <h2 className="px-4 text-3xl font-bold text-black">
          <span className="text-[#013E57]">OUR</span> PRODUCTS
        </h2>
        <div className="flex-grow h-1 bg-gray-200 rounded-full"></div>
      </div>
    )
  }

  return (
    <section className="py-10 bg-white">
   
   <div className=" h-[44px] top-[294px] mb-20 left-[81px] flex justify-center items-center">
  <h3 className="w-2/3 font-inter font-normal text-[18px] leading-[22px] tracking-[2%] text-center text-[#013E57]">
    The company possesses not only the latest technology gadgets but also the most knowledgeable and experienced hands to offer the most user-friendly customized solutions. We developed a range of solutions and gained ample experience in the services.
  </h3>
</div>


      <div className="container mx-auto px-4">
        <div>
        {SectionHeader()}
       </div>

        <div className="space-y-10">
          {products.map((product, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse " : ""} items-center bg-[#013E57] py-10 md:py-0 shadow-lg rounded-xl overflow-hidden md:h-64 px-10`}>
              <div className={`relative w-full md:w-[22%] h-60  ${index % 2 === 0 ? "md:-ml-6" : "md:-mr-5 md:ml-6"}`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="rounded-md object-contain"
                />
              </div>
              <div className={`w-full md:w-[80%] p-6 bg-white md:h-[90%] rounded-xl mt-4  md:mt-0`}>
              {/* <div className="w-full md:w-[59%] bg-transparent md:h-[42%] md:-mt-14 
              2xl:w-[55%] xl:bg-transparent 2xl:h-[30%] xl:-mt-12 xl:-ml-1 
               xl:border-[1px] border-[#013E57] rounded-sm md:absolute"/> */}
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  {product.title}
                </h3>
                <p className="text-gray-700 mt-2 text-center">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}