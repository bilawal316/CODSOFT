"use client";
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center mx-auto z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-500 scrollbar-thumb-[#f7AB0A]/80 scrollbar-thin">
        {projects.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={index}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileInView={{ y: 0, opacity: 1 }}
              src="portfolio.png"
              alt=""
              style={{ width: "300px", height: "300px" }}
            />
            <div>
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Simple {index + 1} of {projects.length}:
                </span>
                &nbsp;Portfolio Designs
              </h4>
              <p className="text-lg text-center md:text-left ">
                We aimed to create a visually engaging and user-friendly online portfolio to showcase our skills, work,
                and accomplishments. The design prioritized a clean and modern aesthetic, ensuring that content is
                presented clearly and effectively. We focused on responsive web design to provide an optimal viewing
                experience across various devices. The resulting portfolio design not only effectively represents our
                professional identity but also serves as a testament to our web development and design capabilities.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12 " />
    </div>
  );
};

export default Projects;
