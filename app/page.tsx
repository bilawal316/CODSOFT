import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/contact/contact";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import Header from "./components/header/header";
import Footer from "./components/Footer/footer";

const Page = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-500 scrollbar-thumb-[#f7AB0A]/80 z-0">
      {/* <title>Bilawals Portfolio</title> */}
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Page;
