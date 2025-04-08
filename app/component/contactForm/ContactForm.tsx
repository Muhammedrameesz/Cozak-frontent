"use client";

export default function ContactForm() {
  const inputStyle =
    "w-full p-2 border border-gray-800 bg-[#f4f4f4] shadow-gray-400 shadow-md rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-[#428bc1]";
  return (
    <section className="pt-20 pb-10 bg-white  ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 max-w-7xl pl-4 items-center mx-auto">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col md:flex-row gap-2 font-extrabold text-4xl ml-5 text-gray-950">
            <h1>Send us a</h1>
            <h1 className="text-[#428bc1]">message</h1>
          </div>

          <form action="" className="space-y-8 bg-white p-6 rounded ">
            <div className="flex flex-col sm:flex-row gap-6">
              <input
                type="text"
                placeholder="First Name"
                className={`${inputStyle}`}
              />
              <input
                type="text"
                placeholder="Last Name"
                className={`${inputStyle}`}
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className={`${inputStyle}`}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className={`${inputStyle}`}
            />

            <textarea
              rows={8}
              placeholder="Type your message here..."
              className="w-full p-2  border border-gray-800 bg-[#f4f4f4] shadow-gray-400 shadow-md rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-[#428bc1] resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-md bg-[#428bc1] text-white font-semibold py-2 text-xl  hover:bg-blue-600 transition-colors duration-300"
            >
              Send message
            </button>
          </form>
        </div>

        <div className="space-y-4 text-gray-700 text-base">
          <h2 className="text-2xl font-bold text-[#013e57 text-center">
            Company Address
          </h2>

          <div className="font-medium text-xl text-gray-600 bg-[#f4f4f4] p-5 md:p-8  rounded-l-3xl ">
            <h1 className="text-[#013e57  font-semibold">
              Cozak Technologies,
            </h1>
            <h1>Puthupariyaram,</h1>
            <h1>Palakkad 678731</h1>
            <h1>Kerala</h1>
            <h1>
              Telephone: <span className="underline"> +91 8089013101,</span> 
              <br /> <span className="underline"> +91 9037427420</span> 
            </h1>
          </div>
          <div className="font-medium text-xl text-gray-600 bg-[#f4f4f4] p-5 md:p-8  rounded-l-3xl ">
            <h1 className="text-[#013e57  font-semibold">
              Cozak Technologies,
            </h1>
            <h1>Vishakam, Arsha Nagar,</h1>
            <h1>Poothole,</h1>
            <h1>Thrissur 680002</h1>
            <h1>Kerala</h1>
            <h1>Telephone:<span className="underline"> +91 8089013101</span></h1>
          </div>

          <div className="mt-10">
            <a
              href="mailto:mail@cozaktechnologies.in"
              className=" text-[#428bc1] hover:text-blue-500
            transition-colors duration-300 text-xl font-medium
          "
            >
              Email: <span className="underline">mail@cozaktechnologies.in</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
