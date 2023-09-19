import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/contact/contact";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-500 scrollbar-thumb-[#f7AB0A]/80 z-0">
      <title>Bilawals Portfolio</title>
      <Header />
      <Skills />
      <Projects />
      <Contact />
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
