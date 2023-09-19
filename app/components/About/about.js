"use client"
import React from "react";
import { motion } from "framer-motion";
import CV from "../../components/cv/cv";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[30px] text-gray-500 text-[30px]"> About </h3>
        <div className="flex container w-1/2">
          
            <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
<<<<<<< HEAD
            viewport={{ once: true }}
            src="./bilawal.jpeg"
            className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md-h-96 xl:w-[500px] xl:h-[600px]"
          />
=======
            // viewport={{ once: true }}
            className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px]"

              src="/bilawal.jpeg"
              alt="Your image description"
              width={300}
              height={400}
            />
>>>>>>> 0750b0c6e8c2061fe88b56e5cc33acb3fab27a1b
        </div>
        <div className="container w-1/2 text-sm flex justify-center items-center mx-auto">
          <div className="space-y-10 x-0 md:px-10">
            <h4 className="text-4xl font-semibold flex justify-center">
              Here is a &nbsp; <span className="underline decoration-[#F7AB0A]/50"> little </span> &nbsp;background
            </h4>
            <span className="flex justify-center"> I am Muhamad Bilawal Zaman.</span>
            <p className="flex justify-center items-center px-0">
              I am a passionate FRONT-END WEB DEVELOPER <br />
              I have one year of experience of HTML, CSS and javaScript <br />
              GitHub, Tailwinds CSS, Next.js enabling me to create <br />
              dynamic and responsive web application with proficiency.
            </p>
            <CV />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
