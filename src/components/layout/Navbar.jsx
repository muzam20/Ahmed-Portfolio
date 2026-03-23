import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 h-20 px-10 flex justify-between items-center bg-white/5 backdrop-blur-md border-b border-white/10">
      
      {/* Logo */}
      <div className="flex items-center gap-3 cursor-pointer">
        <img
          src={logo}
          alt="Ahmed Logo"
          className="h-14 w-auto object-contain"
        />
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          CodewithAhmed
        </h1>
      </div>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-12 text-sm font-medium uppercase tracking-widest text-gray-300 cursor-pointer">
        <li className="hover:text-cyan-400 transition-colors"><Link to="home" smooth>Home</Link></li>
        <li className="hover:text-cyan-400 transition-colors"><Link to="about" smooth>About</Link></li>
        <li className="hover:text-cyan-400 transition-colors"><Link to="skills" smooth>Skills</Link></li>
        <li className="hover:text-cyan-400 transition-colors"><Link to="projects" smooth>Projects</Link></li>
        <li className="hover:text-cyan-400 transition-colors"><Link to="contact" smooth>Contact</Link></li>
      </ul>

      {/* Mobile menu toggle */}
      <button className="md:hidden text-gray-300 text-2xl" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Mobile menu */}
      {open && (
        <ul className="absolute top-20 right-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 flex flex-col gap-4 md:hidden">
          <li><Link to="home" smooth onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="about" smooth onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="skills" smooth onClick={() => setOpen(false)}>Skills</Link></li>
          <li><Link to="projects" smooth onClick={() => setOpen(false)}>Projects</Link></li>
          <li><Link to="contact" smooth onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;