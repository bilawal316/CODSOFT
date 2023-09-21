import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Skill2 = () => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div initial={{ x: -200, opacity: 0 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, x: 0 }}>
        <div className="relative">
        <Image
  src="/next.png"
  className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
  alt="Image description"
  width={32}
  height={32} 
/>
          <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 xl:w-32 xl:h-32 rounded-full z-10">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">85%</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill2;
