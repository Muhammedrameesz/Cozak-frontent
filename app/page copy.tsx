"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../public/loading.json"; 

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      router.push("home"); // Navigate to home after 2 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white text-white">
      {loading && (
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Lottie animationData={animationData} className="w-full h-full" />
        </motion.div>
      )  
    
    }
    </div>
  );
}
