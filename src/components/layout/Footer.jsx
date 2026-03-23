import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 text-center text-gray-400 bg-white/5 backdrop-blur-md border-t border-white/10">
      <p>© 2026 CodewithAhmed. Built with React & Tailwind CSS</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://github.com/" className="hover:text-cyan-400 transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/mohammed-muzammil-ahmed20/" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
        {/* <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a> */}
      </div>
    </footer>
  );
};

export default Footer;