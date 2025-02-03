import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaServer, FaJava, FaPython } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="text-6xl text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-6xl text-yellow-400" /> },
    { name: 'Express.js', icon: <FaServer className="text-6xl text-green-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-6xl text-green-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-6xl text-green-400" /> },
    { name: 'Java', icon: <FaJava className="text-6xl text-red-500" /> },
    { name: 'Python', icon: <FaPython className="text-6xl text-yellow-300" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-6xl text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-6xl text-blue-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-6xl text-cyan-400" /> },
    ,
  ];

  return (
    <div className="p-4">
      <h2 className="text-4xl text-center font-bold mt-16 text-orange-600">Skills</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-16 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-slate-900 text-white flex flex-col items-center p-8 rounded-xl shadow-xl transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl hover:bg-rose-400 hover:text-black"
          >
            {skill.icon}
            <h2 className="text-3xl mt-4">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
