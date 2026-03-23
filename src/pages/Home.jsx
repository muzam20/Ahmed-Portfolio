import React from "react";
import Hero from "../features/hero/Hero.jsx";
import Skills from "../features/skills/Skills.jsx";
import About from "../features/about/About.jsx"; // <-- new import
import Projects from "../features/projects/Projects.jsx";
import Contact from "../features/contact/Contact.jsx";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About /> {/* <-- render About section */}
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;