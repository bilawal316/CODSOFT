"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 p-5 flex justify-between items-start w-full mx-auto bg-black z-50">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            url="https://pk.linkedin.com/in/muhammad-bilawal-zaman-61404958"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon url="https://twitter.com/rider_lucky" fgColor="gray" bgColor="transparent" />
          <SocialIcon url="https://www.facebook.com/riderlucky/" fgColor="gray" bgColor="transparent" />
          <SocialIcon url="https://www.youtube.com" fgColor="gray" bgColor="transparent" />
        </motion.div>

        <Link href="#contact">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center text-gray-300 cursor-pointer"
          >
            <AiOutlineMail />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400 pl-4">Get in Touch</p>
          </motion.div>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
