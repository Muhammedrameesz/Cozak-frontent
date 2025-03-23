"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const reviews = [
  {
    name: "Nizam",
    company: "Alsayegh Media, Dubai, UAE",
    image: "/Images/clientImg1.png",
    review:
      "I highly recommend Cozak as a digital partner. Cozak has an intuitive design sense and takes a holistic view on projects. They consider the best ways and most suitable platforms to optimize digital branding. With Cozak you can be sure to obtain intelligent and imaginative solutions that comply with Brand Values.",
  },
  {
    name: "John Doe",
    company: "Tech Corp, USA",
    image: "/images/john.jpg",
    review:
      "Cozak is an outstanding partner. Their expertise in digital branding and user experience optimization is top-notch. I appreciate their professional approach to problem-solving and innovation.",
  },
];

export default function ClientReviews() {
  return (
    <div
      className="relative w-full text-center bg-cover bg-center bg-no-repeat h-auto md:h-[500px] px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/Images/lines.png')" }}
    >
      <section className="py-10 text-center max-w-[90%] mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-6 mb-6">
          <div className="hidden md:block flex-1 h-[1px] bg-[#013E57]"></div>
          <h2 className="text-xl md:text-3xl font-bold text-[#013E57] text-center">
            WHAT <span className="text-black">OUR</span> CLIENTS ARE SAYING
          </h2>
          <div className="hidden md:block flex-1 h-[1px] bg-[#013E57]"></div>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={true}
          className="max-w-7xl mx-auto "
        >
          {reviews.map((client, index) => (
            <SwiperSlide key={index} className="p-6 rounded-lg">
              <div className="flex flex-col items-center">
                {/* <img
                  src={client.image}
                  alt={client.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                /> */}
                <Image
                  src={client.image}
                  alt={client.name}
                  width={80} // Define width explicitly
                  height={80} // Define height explicitly
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                />
                <h3 className="text-base md:text-lg font-semibold mt-3">
                  {client.name}
                </h3>
                <p className="text-xs md:text-sm text-red-500">
                  {client.company}
                </p>
              </div>
              <p className="mt-4 text-gray-700 italic max-w-[80%] font-bold mx-auto text-sm md:text-base leading-relaxed pb-10">
                {client.review}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
