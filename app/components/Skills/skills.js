"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill1 from "../../components/skill/skill1";
import Skill2 from "../../components/skill/skill2";
import Skill3 from "../../components/skill/skill3";
import Skill4 from "../../components/skill/skill4";
import Skill5 from "../../components/skill/skill5";
import Skill6 from "../../components/skill/skill6";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl-px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl "> Skills</h3>
      <h3 className=" pt-5 absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        {" "}
        Hover over the skills for currency proficiency{" "}
      </h3>
      <div className="grid grid-cols-4 space-x-4">
        <Skill1 />
        <Skill2 />
        <Skill3 />
        <Skill4 />
        <Skill5 />
        <Skill6 />
      </div>
    </motion.div>
  );
};

export default Skills;