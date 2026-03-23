import React from "react";

const ProjectCard = ({ title, description, image, tech, github, demo }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl glass-morphism aspect-[16/10] flex flex-col justify-end hover:scale-105 transition-transform">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
      <div className="absolute bottom-6 left-6 text-left">
        <p className="text-xs uppercase tracking-widest text-cyan-400 mb-1">
          {tech.join(" • ")}
        </p>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 max-w-xs">{description}</p>
        <div className="flex gap-4 mt-4">
          <a href={github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
            GitHub
          </a>
          <a href={demo} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;