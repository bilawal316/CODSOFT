"use client";
import React from "react";
import { BsPhoneFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { BsEnvelopeAtFill } from "react-icons/bs";
import ContactForm from "./contactForm";

const Contact = () => {
  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row md:max-w-7xl justify-evenly mx-auto items-center xl:pt-20 md:pt-20">
      <h3 className="py-10 absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl "> Contact Me </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got what you need. &nbsp;
          <span className="decoration-[#F7AB0A]/50 underline ">Lest Talk.</span>
        </h4>
        <div className="space-y-10 ">
          <div className="flex items-center space-x-5 justify-center">
            <BsPhoneFill className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>+92-323-4181571</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <BsEnvelopeAtFill className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>mbilawalzaman@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 ">
            <FiMapPin className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>House No. 325, Streeet No.4, Laurex Colony Allama Iqba road, Lahore. Pakistan </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
