import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 typing-effect inline-block"
      >
        Turning Ideas Into Scalable Digital Solutions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-2xl text-gray-400 mb-8"
      >
         Passionate web developer creating responsive, user-friendly, and visually appealing web applications.
      </motion.p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-bold hover:scale-105 transition-transform"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-700 transition"
        >
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default Hero;