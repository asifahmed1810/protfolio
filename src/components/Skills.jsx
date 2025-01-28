import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaServer } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="p-4">
      <h2 className="text-4xl text-center font-bold mt-16 text-orange-600">Skills</h2>

      {/* Skill Cards Container */}
      <div className="flex justify-center items-center mt-16">
        <div className="card bg-slate-900 text-white w-full max-w-4xl shadow-xl p-6">
          <div className="card-body">
            {/* Skill Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-14">
              {/* React Skill */}
              <div className="flex flex-col items-center">
                <FaReact className="text-4xl text-blue-500" />
                <h2 className="card-title text-2xl mt-2">React</h2>
                <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
                  <div className="bg-blue-500 h-4 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-right mt-2">80%</p>
              </div>

              {/* JavaScript Skill */}
              <div className="flex flex-col items-center">
                <FaJs className="text-4xl text-yellow-400" />
                <h2 className="card-title text-2xl mt-2">JavaScript</h2>
                <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
                  <div className="bg-yellow-400 h-4 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <p className="text-right mt-2">65%</p>
              </div>

              {/* Express.js Skill */}
              <div className="flex flex-col items-center">
                <FaServer className="text-4xl text-green-500" />
                <h2 className="card-title text-2xl mt-2">Express.js</h2>
                <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
                  <div className="bg-green-500 h-4 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <p className="text-right mt-2">40%</p>
              </div>

              {/* Node.js Skill */}
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-4xl text-green-500" />
                <h2 className="card-title text-2xl mt-2">Node.js</h2>
                <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
                  <div className="bg-green-500 h-4 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <p className="text-right mt-2">40%</p>
              </div>

              {/* MongoDB Skill */}
              <div className="flex flex-col items-center">
                <SiMongodb className="text-4xl text-green-400" />
                <h2 className="card-title text-2xl mt-2">MongoDB</h2>
                <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
                  <div className="bg-green-400 h-4 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <p className="text-right mt-2">65%</p>
              </div>

              {/* HTML Skill */}
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-4xl text-orange-500" />
                <h2 className="card-title text-2xl mt-2">HTML</h2>
                <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
                  <div className="bg-orange-500 h-4 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-right mt-2">90%</p>
              </div>

              {/* CSS Skill */}
              <div className="flex flex-col items-center">
                <FaCss3Alt className="text-4xl text-blue-400" />
                <h2 className="card-title text-2xl mt-2">CSS</h2>
                <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
                  <div className="bg-blue-400 h-4 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-right mt-2">85%</p>
              </div>

              {/* Tailwind CSS Skill */}
              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-4xl text-cyan-400" />
                <h2 className="card-title text-2xl mt-2">Tailwind CSS</h2>
                <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
                  <div className="bg-cyan-400 h-4 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-right mt-2">75%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
