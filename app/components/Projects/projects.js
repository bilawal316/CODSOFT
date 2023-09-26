"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: "/portfolio.png",
      alt: "Portfolio 1",
      text: "Portfolio Designs",
    },
    {
      id: 2,
      src: "/Calculator.png",
      alt: "Portfolio 2",
      text: "Calculator",
    },
    {
      id: 3,
      src: "/CODSOFT-Landing-Page.jpg",
      alt: "Portfolio 3",
      text: "Website Landing Page",
    },
  ];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center mx-auto z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-500 scrollbar-thumb-[#f7AB0A]/80 scrollbar-thin">
        {projects.map((project) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={project.id}
          >
            <motion.div
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileInView={{ y: 0, opacity: 1 }}>
            <Image
              src={project.src}
              alt={project.alt}
              width={800}
              height={1000}
            />
            </motion.div>

            <div>
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50 pr-4">
                  Project {project.id} of {projects.length}:
                </span>
                Web Development Projects
              </h4>
              <p className="text-lg text-center md:text-left ">{project.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12 " />
    </div>
  );
};

export default Projects;
