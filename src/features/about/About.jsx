// src/features/about/About.jsx
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6"
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="text-gray-400 max-w-xl text-center leading-relaxed text-2xl">
        I am a full-stack web developer with hands-on experience building
        real-world applications. My core tech stack includes HTML, CSS,
        JavaScript, Node.js, and databases. I have developed and deployed
        projects such as a CRM/ERP system for an educational institute to
        improve efficiency and workflows. I focus on clean, maintainable code,
        scalable systems, and performance-driven, user-friendly applications.
      </p>
    </section>
  );
};

export default About;