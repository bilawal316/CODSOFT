"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaWordpress, FaReact } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { SiNextdotjs } from "react-icons/si";
import Image from "next/image";

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  md-w-[600px] xl-w-[900px] snap-center bg-[#292929] hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden w-screen">
      <motion.div 
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex justify-center pt-5">
        <Image
          className="w-32 h-32 rounded-full xl:w-[200px] xl-h-[200px] object-cover object-center"
          src="/bilawal.jpeg"
          alt="Experince Card"
          width={1200}
          height={1000}
        />
      </motion.div>
      <div className="pt-10 justify-center px-0 md:px-10">
        <h4 className="text-4xl font-light ">Web Developer</h4>
        <p className="text-bold text-2xl mt-1  ">Freelance worker</p>
        <div className="flex space-x-4 my-2 pt-5">
          <FaWordpress size={25} />
          <ImHtmlFive2 size={25} />
          <FaReact size={25} />
          <SiNextdotjs size={25} />
        </div>

        <p className="uppercase py-5 text-gray-300 "> Mar 2013 - Jan 2014</p>
        <div>
          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li> Business & Ecommerce </li>
            <li> Elementor Page builder </li>
            <li> Customization - Themes and Templates</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
