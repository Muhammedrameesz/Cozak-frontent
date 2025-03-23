"use client";
export default function AboutPage() {

  return (
    <div className="h-screen w-full">
   <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          Welcome to our platform! We are dedicated to providing the best 
          solutions for your needs. Our team works hard to ensure innovation 
          and quality in everything we do.
        </p>
        <p className="text-gray-500 mt-4">
          Feel free to reach out to us for any queries or collaborations.
        </p>
      </div>
    </div>
    </div>
  );
}
