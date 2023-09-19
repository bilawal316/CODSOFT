import React from "react";
import Header from "./components/header/header";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/contact/contact";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-500 scrollbar-thumb-[#f7AB0A]/80 z-0">
      <title>Bilawal&apos;s Portfolio</title>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center ">
            <Image
              className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="/logo.png"
              alt=""
              width={10}
              height={10}
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Page;
