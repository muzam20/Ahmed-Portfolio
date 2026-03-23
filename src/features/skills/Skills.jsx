import React from "react";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-xl text-cyan-400 font-bold text-lg">
              {skill.short}
            </div>
            <span className="text-gray-400">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;