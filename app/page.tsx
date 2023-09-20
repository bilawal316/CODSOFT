import React from "react";
import Header from "./components/header/header";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/Footer/footer";

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
      <Footer/>
    </div>
  );
};

export default Page;
