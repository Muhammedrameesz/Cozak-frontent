"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="bg-white text-gray-900 py-16 md:py-24">
      <section className="flex flex-col justify-center items-center max-w-4xl px-6 md:px-12 mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#013E57] to-[#00a3c4] bg-clip-text text-transparent tracking-tight"
        >
          Web Designing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl"
        >
          Our website development professionals recognize the value of solid
          information architecture design and integrative branding that engages
          the customer from the first stop at your site. Engagement with your
          customer is crucial to tying into their emotional connection to your
          site and developing loyalty.
        </motion.p>
      </section>
    </div>
  );
}
