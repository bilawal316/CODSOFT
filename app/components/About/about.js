"use client";
import React from "react";
import { motion } from "framer-motion";
import CV from "../../components/cv/cv";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[30px] text-gray-500 text-[30px]"> About </h3>
        <motion.div 
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex container w-1/2">
          <Image
            src="/bilawal.jpeg"
            width={1200}
            height={1000}
            className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
            alt="Your image description"
          />
        </motion.div>
        <div className="container w-1/2 text-sm flex justify-center items-center mx-auto">
          <div className="space-y-10 x-0 md:px-10">
            <h4 className="text-4xl font-semibold flex justify-center">
              Here is a <span className="underline decoration-[#F7AB0A] px-2"> little </span> background
            </h4>
            <span className="flex justify-center"> I am Muhamad Bilawal Zaman.</span>
            <p className="flex justify-center items-center px-0">
              I am a passionate FRONT-END WEB DEVELOPER <br />
              I have one year of experience of HTML, CSS, and JavaScript <br />
              GitHub, Tailwind CSS, Next.js enabling me to create <br />
              dynamic and responsive web applications with proficiency.
            </p>
            <CV />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
