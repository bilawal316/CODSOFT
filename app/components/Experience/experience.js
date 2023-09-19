"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../../components/experienceCard/experienceCard";

const Experience = () => {
  useEffect(() => {
    // Animation-related code here
    // This code will run only on the client side
  }, []);

  return (
    <div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl "> Experience </h3>
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-500 scrollbar-thumb-[#f7AB0A]/80 scrollbar-thin">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
