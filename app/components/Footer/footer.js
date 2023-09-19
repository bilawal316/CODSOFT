"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sticky bottom-5 w-full cursor-pointer">
      <Link href="#hero">
        <div className="flex items-center justify-center">
          <Image
            className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src="/logo.png"
            alt=""
            width={10}
            height={10}
          />
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
