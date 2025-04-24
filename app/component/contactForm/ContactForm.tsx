"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(30, "First name must be under 50 characters"),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(30, "Last name must be under 50 characters"),

  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can't exceed 15 digits")
    .regex(/^[0-9+\-\s()]+$/, "Enter a valid phone number"),

  email: z.string().email("Enter a valid email address"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be under 500 characters"),
});

type FormValues = z.infer<typeof formSchema>;
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const [loading, setLoading] = useState<boolean>(false);

  const onSave = async (data: FormValues) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2500));
      const response = await axios.post(
        "http://localhost:3637/api/v1/userForm/submit",
        data
      );

      if (response.status === 200) {
        toast.success("Form submitted successfully");
        reset()
        setLoading(false);
      }
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const message = err?.response?.data?.message || "Something went wrong";
      toast.error(message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

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

          <form
            onSubmit={handleSubmit(onSave)}
            className="space-y-8 bg-white p-6 rounded"
          >
            <section className="flex flex-col sm:flex-row gap-6">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="First Name"
                  className={`${inputStyle} ${
                    errors.firstName ? "border-red-500" : "border-gray-800"
                  }`}
                  {...register("firstName")}
                />
                {errors.firstName?.message && (
                  <p className="text-sm text-red-500">
                    {errors.firstName.message as string}
                  </p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="Last Name"
                  className={`${inputStyle} ${
                    errors.lastName ? "border-red-500" : "border-gray-800"
                  }`}
                  {...register("lastName")}
                />
                {errors.lastName?.message && (
                  <p className="text-sm text-red-500">
                    {errors.lastName.message as string}
                  </p>
                )}
              </div>
            </section>

            <div className="w-full">
              <input
                type="email"
                placeholder="Email Address"
                className={`${inputStyle} ${
                  errors.email ? "border-red-500" : "border-gray-800"
                }`}
                {...register("email")}
              />
              {errors.email?.message && (
                <p className="text-sm text-red-500">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="tel"
                placeholder="Phone Number"
                className={`${inputStyle} ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-800"
                }`}
                {...register("phoneNumber")}
              />
              {errors.phoneNumber?.message && (
                <p className="text-sm text-red-500">
                  {errors.phoneNumber.message as string}
                </p>
              )}
            </div>

            <div className="w-full">
              <textarea
                rows={8}
                placeholder="Type your message here..."
                className={`w-full p-2 border bg-[#f4f4f4] shadow-gray-400 shadow-md rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-[#428bc1] resize-none ${
                  errors.message ? "border-red-500" : "border-gray-800"
                }`}
                {...register("message")}
              ></textarea>
              {errors.message?.message && (
                <p className="text-sm text-red-500">
                  {errors.message.message as string}
                </p>
              )}
            </div>

            {loading ? (
             <div className="flex items-center justify-center bg-white shadow-md rounded-lg w-full px-6 py-3 mx-auto">
             <div className="flex gap-3 items-center ">
               <div className="animate-bounce">
                 <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
               </div>
               <h1 className="text-gray-600 text-lg font-medium animate-pulse">
                 Please wait...
               </h1>
             </div>
           </div>
            ) : (
              <button
                type="submit"
                className="w-full rounded-md bg-[#428bc1] text-white font-semibold py-2 text-xl  hover:bg-blue-600 transition-colors duration-300"
              >
                Send message
              </button>
            )}
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
            <h1>
              Telephone:<span className="underline"> +91 8089013101</span>
            </h1>
          </div>

          <div className="mt-10">
            <a
              href="mailto:mail@cozaktechnologies.in"
              className=" text-[#428bc1] hover:text-blue-500
            transition-colors duration-300 text-xl font-medium
          "
            >
              Email:{" "}
              <span className="underline">mail@cozaktechnologies.in</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
