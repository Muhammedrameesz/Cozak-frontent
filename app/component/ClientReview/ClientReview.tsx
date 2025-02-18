"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
    className="relative w-full text-center bg-cover bg-center bg-no-repeat h-auto md:h-[500px]"
    style={{ backgroundImage: "url('/Images/lines.png')" }}
  >
    <section className="py-10 text-center">

      <div className="titleContainer">
          <div className="line ml-14"></div>
          <h2 className="headerText">
          WHAT <span className="text-[#000]">OUR</span> CLIENTS ARE SAYING
          </h2>
          <div className="line mr-14"></div>
        </div>
      
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        className="max-w-4xl mx-auto"
      >
        {reviews.map((client, index) => (
          <SwiperSlide key={index} className="p-6  rounded-lg">
            <div className="flex flex-col items-center">
              <img
                src={client.image}
                alt={client.name}
                className="w-20 h-20 rounded-full"
              />
              <h3 className="text-lg font-semibold mt-3">{client.name}</h3>
              <p className="text-sm text-red-500 ">{client.company}</p>
            </div>
            <p className="mt-4 text-gray-700 italic max-w-2xl mx-auto mb-10">
              "{client.review}"
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>

    <style jsx>{`
        .titleContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          // margin-bottom: 20px;
        }
        .line {
          flex: 1;
          height: 1px;
          background-color: #013E57;
          margin-top:14px
        }
        .headerText {
          font-size: 1.8rem;
          font-weight: bold;
          color: #013E57;
          text-align: center;
          white-space: nowrap;
          padding-left: 1px;
          padding-right: 1px;
        }
        
      `}</style>
    </div>
  );
}
